import data from "./posts.json";

export function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...data.posts]);
    }, 3000);
  });
}
