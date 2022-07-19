import { FC } from "react";
import Giscus from "@giscus/react";
import { IGiscusDiscussion } from "../interfaces/libs/giscus.interface";

const GiscusDiscussion: FC<IGiscusDiscussion> = ({ theme }) => {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const githubRepoName = process.env.NEXT_PUBLIC_GITHUB_REPO_NAME;
  const githubRepoId = process.env.NEXT_PUBLIC_GITHUB_REPO_ID;
  const githubCategoryId = process.env.NEXT_PUBLIC_GITHUB_CATEGORY_ID;

  return (
    <Giscus
      id="comments"
      repo={`${githubUsername}/${githubRepoName}`}
      repoId={githubRepoId!}
      category="Comments"
      categoryId={githubCategoryId}
      mapping="url"
      term="Welcome!"
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
