import { FC } from "react";
import Giscus from "@giscus/react";
import { IGiscusDiscussion } from "../interfaces/libs/giscus.interface";

const GiscusDiscussion: FC<IGiscusDiscussion> = ({ theme }) => {
  const repoUsername = process.env.NEXT_PUBLIC_REPO_USERNAME!;
  const repoName = process.env.NEXT_PUBLIC_REPO_NAME!;
  const repoId = process.env.NEXT_PUBLIC_REPO_ID!;
  const categoryId = process.env.NEXT_PUBLIC_CATEGORY_ID!;

  return (
    <Giscus
      id="comments"
      repo={`${repoUsername}/${repoName}`}
      repoId={repoId}
      category="Comments"
      categoryId={categoryId}
      mapping="url"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
};
export default GiscusDiscussion;
