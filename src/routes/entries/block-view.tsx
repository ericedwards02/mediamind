import { createFileRoute } from "@tanstack/react-router";
import BlockView from "../../components/entry-view-content";

export const Route = createFileRoute("/entries/block-view")({
  component: BlockView,
});
