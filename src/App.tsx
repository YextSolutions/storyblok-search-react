import "./App.css";
import { useStoryblok } from "@storyblok/react";
import { PageRouter } from "./PageRouter";
import NavBar from "./components/NavBar";

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

  if (!story?.content) {
    return <div>Loading...</div>;
  }

  const pathname = window.location.pathname;

  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
          <PageRouter />
      </div>
    </div>
  );
}

export default App;
