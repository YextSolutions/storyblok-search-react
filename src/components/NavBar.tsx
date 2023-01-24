import { Link } from "react-router-dom";
import { routeConfig } from "../PageRouter";
import classNames from "classnames";
import { useSearchState } from "@yext/search-headless-react";

const NavBar = (): JSX.Element => {
  const currentVertical = useSearchState((state) => state.vertical.verticalKey);

  const isActiveLink = (path: string) =>
    path.replace("/", "") === currentVertical ||
    (path === "/" && currentVertical === undefined);

  const renderLink = (label: string, path: string): JSX.Element => {
    return (
      <Link key={`${path}_link`} to={path}>
        <div
          className={classNames(
            "text-md mt-1 whitespace-nowrap border-b-2 border-transparent py-3 font-medium hover:border-gray-300",
            {
              "border-blue-600  text-blue-600": isActiveLink(path),
            }
          )}
        >
          <div className="py-3 px-2">{label}</div>
        </div>
      </Link>
    );
  };

  return (
    <nav className="mb-6 flex space-x-6 border-b border-gray-200 font-medium text-gray-600">
      {routeConfig.map((route) => renderLink(route.label, route.path))}
    </nav>
  );
};

export default NavBar;
