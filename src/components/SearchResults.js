import { UniversalResults, SearchBar } from "@yext/search-ui-react";
import { usePageSetupEffect } from "../hooks/usePageSetupEffect";
import HelpArticleCard from "../cards/HelpArticleCard";
import AuthorCard from "../cards/AuthorCard";
import GuideCard from "../cards/GuideCard";

// const handleSearch = (searchEventData) => {
//   const { query } = searchEventData;
//   const queryParams = new URLSearchParams(window.location.search);

//   if (query) {
//     queryParams.set("query", query);
//   } else {
//     queryParams.delete("query");
//   }
//   window.location.href = '/search?' + queryParams.toString();

//   searchActions.executeUniversalQuery();
// };

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