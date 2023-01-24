// src/pages/StandardLayout.tsx

import { SearchBar } from "@yext/search-ui-react";
import NavBar from "./NavBar";

export interface StandardLayoutProps {
  page: JSX.Element;
}

export const StandardLayout = ({ page }: StandardLayoutProps): JSX.Element => {
  return (
    <div className="bg-gray-300">
      <SearchBar />
      <NavBar />
      {page}
    </div>
  );
};
