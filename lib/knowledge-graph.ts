import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { CONTENT_DIR } from "@/data";

export interface KnowledgeGraphNode {
	id: string;
	label: string;
	group: "entity" | "concept" | "source" | "synthesis" | "other";
	href: string;
}

export interface KnowledgeGraphEdge {
	source: string;
	target: string;
}

export interface KnowledgeGraphData {
	nodes: KnowledgeGraphNode[];
	edges: KnowledgeGraphEdge[];
}

function normalize(value: string) {
	return value
		.trim()
		.replace(/\.mdx?$/i, "")
		.replace(/\s+/g, "")
		.toLocaleLowerCase();
}

function walkMarkdown(dir: string): string[] {
	if (!fs.existsSync(dir)) return [];
	return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		if (entry.name.startsWith(".")) return [];
		const fullPath = path.join(dir, entry.name);
		return entry.isDirectory()
			? walkMarkdown(fullPath)
			: /\.mdx?$/i.test(entry.name)
				? [fullPath]
				: [];
	});
}

export function getKnowledgeGraphData(): KnowledgeGraphData {
	const wikiDir = path.join(CONTENT_DIR, "wiki");
	const files = walkMarkdown(wikiDir);
	const nodes: KnowledgeGraphNode[] = [];
	const lookup = new Map<string, string>();
	const fileContents = new Map<string, string>();

	for (const file of files) {
		const raw = fs.readFileSync(file, "utf8");
		const parsed = matter(raw);
		const relative = path.relative(wikiDir, file).replace(/\\/g, "/");
		const slug = relative.replace(/\.mdx?$/i, "").split("/");
		const id = slug.join("/");
		const fileName = path.basename(file).replace(/\.mdx?$/i, "");
		const group = ["entity", "concept", "source", "synthesis"].includes(
			String(parsed.data.type),
		)
			? (parsed.data.type as KnowledgeGraphNode["group"])
			: "other";
		const label = String(parsed.data.title || fileName);
		const node: KnowledgeGraphNode = {
			id,
			label,
			group,
			href: `/wiki/${slug.map(encodeURIComponent).join("/")}`,
		};
		nodes.push(node);
		fileContents.set(id, parsed.content);
		for (const key of [id, fileName, label]) {
			if (!lookup.has(normalize(key))) lookup.set(normalize(key), id);
		}
	}

	const edges: KnowledgeGraphEdge[] = [];
	const edgeKeys = new Set<string>();
	for (const node of nodes) {
		const content = fileContents.get(node.id) || "";
		const links = content.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g);
		for (const match of links) {
			const target = lookup.get(normalize(match[1]));
			if (!target || target === node.id) continue;
			const edgeKey = `${node.id}->${target}`;
			if (!edgeKeys.has(edgeKey)) {
				edgeKeys.add(edgeKey);
				edges.push({ source: node.id, target });
			}
		}
	}

	return { nodes, edges };
}
