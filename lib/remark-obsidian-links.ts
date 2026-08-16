import type { Root, Text } from "mdast";

type WikiLinkMap = Map<string, string>;

function normalizeTarget(target: string): string {
	return target
		.trim()
		.replace(/\.mdx?$/i, "")
		.replace(/\\/g, "/")
		.replace(/\s+/g, "")
		.toLocaleLowerCase();
}

function splitWikiLink(value: string, links: WikiLinkMap) {
	const match = value.match(/^\[\[([^\]|]+)(?:\|([^\]]+))?\]\]$/);
	if (!match) return null;

	const target = match[1].trim();
	const href = links.get(normalizeTarget(target));
	if (!href) return null;

	return {
		type: "link" as const,
		url: href,
		children: [
			{
				type: "text" as const,
				value: (match[2] ?? target).trim(),
			},
		],
	};
}

/** Convert Obsidian [[note]] and [[note|label]] links to site links. */
export function remarkObsidianLinks(links: WikiLinkMap) {
	return (tree: Root) => {
		function visit(parent: { children?: any[] }) {
			if (!parent.children) return;

			const nextChildren: any[] = [];
			for (const child of parent.children) {
				if (child.type === "text") {
					const text = child as Text;
					const parts = text.value.split(/(!?\[\[[^\]]+\]\])/g);
					for (const part of parts) {
						if (!part) continue;
						if (part.startsWith("![[")) {
							nextChildren.push({ type: "text", value: part });
							continue;
						}
						const link = splitWikiLink(part, links);
						nextChildren.push(link ?? { type: "text", value: part });
					}
				} else {
					nextChildren.push(child);
					if ("children" in child) visit(child);
				}
			}
			parent.children = nextChildren;
		}

		visit(tree);
	};
}
