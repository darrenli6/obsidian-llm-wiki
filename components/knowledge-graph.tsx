"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { KnowledgeGraphData } from "@/lib/knowledge-graph";

const COLORS = {
	entity: 0x60a5fa,
	concept: 0xc084fc,
	source: 0x34d399,
	synthesis: 0xfbbf24,
	other: 0x94a3b8,
};

function seedPosition(index: number, total: number) {
	const phi = Math.acos(1 - (2 * (index + 0.5)) / Math.max(total, 1));
	const theta = Math.PI * (3 - Math.sqrt(5)) * index;
	const radius = 190 + (index % 6) * 18;
	return new THREE.Vector3(
		Math.cos(theta) * Math.sin(phi) * radius,
		Math.sin(theta) * Math.sin(phi) * radius,
		Math.cos(phi) * radius,
	);
}

export default function KnowledgeGraph({ data }: { data: KnowledgeGraphData }) {
	const mountRef = useRef<HTMLDivElement>(null);
	const graphPanelRef = useRef<HTMLDivElement>(null);
	const [loading, setLoading] = useState(true);
	const [hovered, setHovered] = useState<string | null>(null);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullscreen = async () => {
		if (!graphPanelRef.current) return;
		if (document.fullscreenElement) {
			await document.exitFullscreen();
		} else {
			await graphPanelRef.current.requestFullscreen();
		}
	};

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;
		let disposed = false;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(55, 1, 1, 2000);
		camera.position.set(0, 0, 720);
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);
		mount.appendChild(renderer.domElement);
		const labelRenderer = new CSS2DRenderer();
		labelRenderer.domElement.style.position = "absolute";
		labelRenderer.domElement.style.inset = "0";
		labelRenderer.domElement.style.pointerEvents = "none";
		mount.appendChild(labelRenderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.08;
		controls.minDistance = 300;
		controls.maxDistance = 1100;
		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.35;

		const graph = new THREE.Group();
		scene.add(graph);
		const nodeGeometry = new THREE.SphereGeometry(6, 16, 12);
		const nodeMeshes: THREE.Mesh[] = [];
		const positions = data.nodes.map((_, index) => seedPosition(index, data.nodes.length));
		const lookup = new Map(data.nodes.map((node, index) => [node.id, index]));

		for (const [index, node] of data.nodes.entries()) {
			const material = new THREE.MeshBasicMaterial({ color: COLORS[node.group] });
			const mesh = new THREE.Mesh(nodeGeometry, material);
			mesh.position.copy(positions[index]);
			mesh.userData = { ...node, index };
			graph.add(mesh);
			nodeMeshes.push(mesh);
			const label = document.createElement("div");
			label.textContent = node.label;
			label.style.color = `#${COLORS[node.group].toString(16).padStart(6, "0")}`;
			label.style.fontSize = "11px";
			label.style.fontFamily = "ui-sans-serif, system-ui, sans-serif";
			label.style.fontWeight = "500";
			label.style.whiteSpace = "nowrap";
			label.style.textShadow = "0 1px 3px rgba(0,0,0,.9)";
			label.style.transform = "translate(9px, -50%)";
			mesh.add(new CSS2DObject(label));
		}

		const edgePairs = data.edges.flatMap((edge) => {
			const source = lookup.get(edge.source); const target = lookup.get(edge.target);
			return source === undefined || target === undefined ? [] : [{ source, target }];
		});
		const edgePositions = new Float32Array(edgePairs.length * 6);
		const edgeGeometry = new THREE.BufferGeometry();
		edgeGeometry.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
		const edgeLines = new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.22 }));
		graph.add(edgeLines);

		const raycaster = new THREE.Raycaster();
		const pointer = new THREE.Vector2();
		const onPointerMove = (event: PointerEvent) => {
			const rect = renderer.domElement.getBoundingClientRect();
			pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
			pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
			raycaster.setFromCamera(pointer, camera);
			const hit = raycaster.intersectObjects(nodeMeshes)[0]?.object;
			setHovered(hit ? String(hit.userData.label) : null);
			renderer.domElement.style.cursor = hit ? "pointer" : "grab";
		};
		const onClick = () => {
			raycaster.setFromCamera(pointer, camera);
			const hit = raycaster.intersectObjects(nodeMeshes)[0]?.object;
			if (hit?.userData.href) window.location.assign(hit.userData.href);
		};
		renderer.domElement.addEventListener("pointermove", onPointerMove);
		renderer.domElement.addEventListener("click", onClick);

		const resize = () => {
			const { width, height } = mount.getBoundingClientRect();
			if (!width || !height) return;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height, false);
			labelRenderer.setSize(width, height);
		};
		const observer = new ResizeObserver(resize);
		observer.observe(mount);
		resize();

		const clock = new THREE.Clock();
		const animate = () => {
			if (disposed) return;
			const elapsed = clock.getElapsedTime();
			for (const [index, mesh] of nodeMeshes.entries()) {
				const base = positions[index];
				mesh.position.set(base.x + Math.sin(elapsed * 0.7 + index) * 2, base.y + Math.cos(elapsed * 0.55 + index) * 2, base.z + Math.sin(elapsed * 0.45 + index * 0.5) * 2);
			}
			for (const [index, edge] of edgePairs.entries()) {
				const source = nodeMeshes[edge.source].position; const target = nodeMeshes[edge.target].position;
				edgePositions.set([source.x, source.y, source.z, target.x, target.y, target.z], index * 6);
			}
			edgeGeometry.attributes.position.needsUpdate = true;
			controls.update();
			renderer.render(scene, camera);
			labelRenderer.render(scene, camera);
			setLoading(false);
			requestAnimationFrame(animate);
		};
		const frame = requestAnimationFrame(animate);

		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			observer.disconnect();
			controls.dispose();
			renderer.domElement.removeEventListener("pointermove", onPointerMove);
			renderer.domElement.removeEventListener("click", onClick);
			nodeGeometry.dispose();
			edgeGeometry.dispose();
			renderer.dispose();
			labelRenderer.domElement.remove();
			mount.removeChild(renderer.domElement);
		};
	}, [data]);

	useEffect(() => {
		const handleFullscreenChange = () => setIsFullscreen(document.fullscreenElement === graphPanelRef.current);
		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
	}, []);

	return (
		<div className="min-h-screen flex-1 bg-background p-6 md:p-10">
			<div className="mx-auto max-w-7xl">
				<div className="mb-6 flex flex-wrap items-end justify-between gap-4">
					<div><p className="text-sm text-muted-foreground">Wiki / Knowledge Graph</p><h1 className="text-3xl font-semibold tracking-tight">Knowledge Graph</h1><p className="mt-2 text-sm text-muted-foreground">{data.nodes.length} nodes · {data.edges.length} relationships</p></div>
					<div className="flex flex-wrap gap-3 text-xs text-muted-foreground">{Object.entries(COLORS).map(([group, color]) => <span key={group} className="flex items-center gap-1.5"><i className="size-2 rounded-full" style={{ backgroundColor: `#${color.toString(16).padStart(6, "0")}` }} />{group}</span>)}</div>
				</div>
				<div ref={graphPanelRef} className={isFullscreen ? "fixed inset-0 z-50 h-screen w-screen overflow-hidden bg-card" : "relative h-[calc(100vh-190px)] min-h-[640px] w-full overflow-hidden rounded-2xl border bg-card shadow-sm"}>
					<div ref={mountRef} className="h-full w-full" aria-label="Interactive 3D Wiki Knowledge Graph" />
					<div className="absolute right-4 top-4 z-10">
						<Button variant="secondary" size="icon" onClick={toggleFullscreen} title={isFullscreen ? "Exit fullscreen" : "Fullscreen"} aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}>
							{isFullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
						</Button>
					</div>
					{loading && <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/90 backdrop-blur-sm"><div className="size-8 animate-spin rounded-full border-2 border-muted border-t-primary" /><p className="text-sm text-muted-foreground">Building knowledge graph…</p></div>}
					<div className="pointer-events-none absolute bottom-4 left-4 rounded-lg border bg-background/75 px-3 py-2 text-xs text-muted-foreground backdrop-blur">Drag to rotate · Scroll to zoom · Auto-rotate{hovered && <span className="ml-3 text-foreground">{hovered}</span>}</div>
				</div>
			</div>
		</div>
	);
}
