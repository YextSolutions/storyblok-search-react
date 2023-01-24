// src/pages/StandardLayout.tsx

import { SearchBar } from "@yext/search-ui-react";

export interface StandardLayoutProps {
  children: JSX.Element;
}

export const StandardLayout = ({
  children,
}: StandardLayoutProps): JSX.Element => {
  return (
    <>
      <SearchBar />
      {children}
    </>
  );
};
