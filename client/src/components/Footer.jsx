import { Link } from "react-router-dom";
import {
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandGithub,
} from "@tabler/icons";

export default function Navbar() {
  return (
    <footer className="text-center lg:text-left text-white">
      <div className="text-center p-6 bg-gray-800">
        <span>© 2023 </span>
        <a className="font-semibold" href="#">
          Kewr Foundation
        </a>
      </div>
    </footer>
  );
}
