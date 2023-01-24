import { UniversalResults as UR, SearchBar } from "@yext/search-ui-react";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";

export const UniversalResults = () => {
  usePageSetupEffect();
  return (
    <>
      <UR
        verticalConfigMap={{
          help_articles: {
            label: "Blog",
          },
          author: {
            label: "Authors",
          },
          guides: {
            label: "Guides",
          },
        }}
      />
    </>
  );
};
