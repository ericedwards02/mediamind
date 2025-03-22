import { Link } from "@tanstack/react-router";

const NavMenu = () => {
  return (
    <div className="ml-3 flex flex-row gap-3 align-items-center">
      <Link
        className="[&.active]:underline font-bold hover:underline"
        to="/entries"
      >
        entries
      </Link>
      <span className="hover:cursor-default">|</span>
      <Link
        className="[&.active]:underline font-bold hover:underline"
        to="/list-view"
      >
        lists
      </Link>
      <span className="hover:cursor-default">|</span>
      <Link className="[&.active]:underline font-bold hover:underline" to="/">
        create a new entry
      </Link>
    </div>
  );
};

export default NavMenu;
