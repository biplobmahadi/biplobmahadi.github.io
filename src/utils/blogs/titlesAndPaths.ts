import { HelloWorld, HelloWorld2 } from "../../components/blogs";
import { IBlogTitleAndPaths } from "../../interfaces/blogs";

export const blogTitlesAndPaths: IBlogTitleAndPaths[] = [
  { title: "Hello World", path: "hello-world", component: HelloWorld },
  { title: "Hello World 2", path: "hello-world-2", component: HelloWorld2 },
];
