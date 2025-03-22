import { Link } from "@tanstack/react-router";

const EntryNavMenu = () => {
  return (
    <div className="ml-3 flex flex-row gap-3 align-items-center">
      <Link
        className="[&.active]:underline font-bold hover:underline"
        to="/entries/block-view"
      >
        block view
      </Link>
      <span className="hover:cursor-default">|</span>
      <Link
        className="[&.active]:underline font-bold hover:underline"
        to="/entries/graph-view"
      >
        graph view
      </Link>
    </div>
  );
};

export default EntryNavMenu;
