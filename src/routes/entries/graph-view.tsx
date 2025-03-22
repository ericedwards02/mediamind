import { createFileRoute } from "@tanstack/react-router";
import GraphView from "../../components/graph-view";

export const Route = createFileRoute("/entries/graph-view")({
  component: GraphView,
});
