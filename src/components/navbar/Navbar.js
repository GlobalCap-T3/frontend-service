import { Link } from "react-router-dom";
import StyledNavLink from "./StyledNavLink";
import UserStatusBar from "./UserStatusBar";
import logo from "../../images/logo_full.png";
import styled from "styled-components"

const LogoImg = styled.img.attrs({
  src: `${logo}`
})`
width: 100px;
height: 50px;
`;

export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between bg-white shadow dark:bg-gray-800 py-4">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="flex items-center list-style-none">
          <li>
            <Link to="/">
              <LogoImg alt="logo" />
            </Link>
          </li>
          <li><StyledNavLink to="/about" html="About" /></li>
        </ul>

        <ul className="flex items-center list-style-none">
          <UserStatusBar />
        </ul>
      </div>
    </nav>
  );
}