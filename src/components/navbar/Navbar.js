import StyledNavLink from "./StyledNavLink";
import UserStatusBar from "./UserStatusBar";

export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between bg-white shadow dark:bg-gray-800 py-4">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="flex items-center list-style-none">
          <li><StyledNavLink to="/" html="Home" /></li>
          <li><StyledNavLink to="/about" html="About" /></li>
        </ul>

        <ul className="flex items-center list-style-none">
          <UserStatusBar />
        </ul>
      </div>
    </nav>
  );
}