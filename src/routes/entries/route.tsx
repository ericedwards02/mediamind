import { createFileRoute, Outlet } from "@tanstack/react-router";
import EntryNavMenu from "../../components/entry-view-nav";

export const Route = createFileRoute("/entries")({
  component: EntriesRoute,
});

function EntriesRoute() {
  return (
    <>
      <EntryNavMenu />
      <Outlet />
    </>
  );
}
