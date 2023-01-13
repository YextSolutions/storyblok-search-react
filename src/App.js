import "./index.css";
import Layout from "./components/Layout";
import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import { SearchResultsPage } from "./components/SearchResults";

function App() {
  const slug =
    window.location.pathname === "/"
      ? "home"
      : window.location.pathname.replace("/", "");

  const story = useStoryblok(
    slug,
    {
      resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    },
    {
      resolveRelations: ["featured-posts.posts", "selected-posts.posts"],
    }
  );

  const config = {
    apiKey: 'a0b812b8a977df7d23aaf887961ba6b2',
    experienceKey: 'storyblok-travel-search',
    locale: 'en',
    experienceVersion: 'PRODUCTION',
  };

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  const pathname = window.location.pathname

  return (
    <Layout>
      { pathname.includes("search") ? <SearchResultsPage /> : null}
      <StoryblokComponent blok={story.content} />
    </Layout>
  );
}

export default App;