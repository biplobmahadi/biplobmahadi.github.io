export const demoComponentCode = `import { FC, Fragment } from "react";
import usePublicAxios from "../libs/axios/hooks/usePublicAxios";
import { IPostPayload, IPost } from "../interfaces/posts";

const DemoComponent: FC = () => {
  const { publicGet, publicPost, publicPut, publicDelete } = usePublicAxios();

  const handleGet = async () => {
    const response = await publicGet<ISinglePost[]>(
      "https://jsonplaceholder.typicode.com/posts",
      { activateAbort: false }
    );
  };

  const handlePost = async () => {
    const response = await publicPost<ISinglePost, IPostPayload>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        userId: 12,
        title: "hi there",
        body: "hello, nice to see you",
      }
    );
  };
  const handlePut = async () => {
    const response = await publicPut<ISinglePost, IPostPayload>(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        userId: 12,
        title: "hi there",
        body: "hello, nice to see you again",
      }
    );
  };
  const handleDelete = async () => {
    const response = await publicDelete(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
  };

  return (
    <Fragment>
      <button onClick={handleGet}>Get</button>
      <button onClick={handlePost}>Post</button>
      <button onClick={handlePut}>Put</button>
      <button onClick={handleDelete}>Delete</button>
    </Fragment>
  );
};

export default DemoComponent;`;

export const postsInterfaceCode = `export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  export interface IPostPayload {
    userId: number;
    title: string;
    body: string;
  }`;
