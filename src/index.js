import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import BlogPost from "./components/BlogPost";
import Feature from "./components/Feature";
import FeaturedPosts from "./components/FeaturedPosts";
import Grid from "./components/Grid";
import PostsList from "./components/PostsList";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Text from "./components/Text";
import { SearchResultsPage } from "./components/SearchResults";
import { SearchBar } from "@yext/search-ui-react";


import {
  SearchHeadlessProvider,
  provideHeadless,
  } from "@yext/search-headless-react";

const searcher = provideHeadless({
  apiKey: "a0b812b8a977df7d23aaf887961ba6b2",
  experienceKey: "storyblok-travel-search",
  locale: "en",
  experienceVersion: 'PRODUCTION',
});

const components = {
  feature: Feature,
  "featured-posts": FeaturedPosts,
  grid: Grid,
  page: Page,
  post: BlogPost,
  "selected-posts": PostsList,
  teaser: Teaser,
  text: Text,
  searchbar : SearchBar,
  searchresults : SearchResultsPage
};

storyblokInit({
  accessToken: "mJ30Mx7FmGvqhsADvhICsQtt",
  use: [apiPlugin],
  components,
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
      </SearchHeadlessProvider>
  </React.StrictMode>
);
