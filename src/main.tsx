import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";

const searcher = provideHeadless({
  apiKey: "a0b812b8a977df7d23aaf887961ba6b2",
  experienceKey: "storyblok-travel-search",
  locale: "en",
  experienceVersion: "PRODUCTION",
});

const components = {
  // feature: Feature,
  // "featured-posts": FeaturedPosts,
  // grid: Grid,
  // page: Page,
  // post: BlogPost,
  // "selected-posts": PostsList,
  // teaser: Teaser,
  // text: Text,
};

storyblokInit({
  accessToken: "mJ30Mx7FmGvqhsADvhICsQtt",
  use: [apiPlugin],
  components,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>
);
