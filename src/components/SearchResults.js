import { UniversalResults, SearchBar } from "@yext/search-ui-react";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";
import HelpArticleCard from "../cards/HelpArticleCard";
import AuthorCard from "../cards/AuthorCard";
import GuideCard from "../cards/GuideCard";

export const SearchResultsPage = ({ blok }) => {
  
  return (
    <>
      <SearchBar />
      <UniversalResults verticalConfigMap={{
          help_articles: {
            CardComponent: HelpArticleCard,
            label: "Blog Posts"
          },
          author: {
            CardComponent: AuthorCard,
            label: "Authors"
          },
          guides: {
            CardComponent: GuideCard,
            label: "Guides"
          }
      }}/>
    </>
  );
};
