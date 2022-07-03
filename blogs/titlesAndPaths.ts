import { HelloWorld, HelloWorld2 } from "../src/components/blogs";
import { IBlogTitleAndPaths } from "../src/interfaces/blogs";

export const blogTitlesAndPaths: IBlogTitleAndPaths[] = [
  { title: "Hello World", path: "hello-world", component: HelloWorld },
  { title: "Hello World 2", path: "hello-world-2", component: HelloWorld2 },
];
