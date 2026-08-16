import KnowledgeGraph from "@/components/knowledge-graph";
import { getKnowledgeGraphData } from "@/lib/knowledge-graph";

export default function GraphPage() {
	return <KnowledgeGraph data={getKnowledgeGraphData()} />;
}
