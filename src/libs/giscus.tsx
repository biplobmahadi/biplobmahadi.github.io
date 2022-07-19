import { FC } from "react";
import Giscus from "@giscus/react";
import { IGiscusDiscussion } from "../interfaces/libs/giscus.interface";

const GiscusDiscussion: FC<IGiscusDiscussion> = ({ theme }) => {
  return (
    <Giscus
      id="comments"
      repo="biplobmahadi/biplobmahadi.github.io"
      repoId="R_kgDOHkgVOA"
      category="Comments"
      categoryId="DIC_kwDOHkgVOM4CQGH7"
      mapping="title"
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
