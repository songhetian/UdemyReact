import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

//TODO 创建上下文
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
      onAddPost: handleAddPost,
    };
  }, [searchQuery, setSearchQuery]);
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  return useContext(PostContext);
}

export { PostProvider, usePosts };
