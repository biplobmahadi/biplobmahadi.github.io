import { DiscussionEmbed } from "disqus-react";

export default function DisqusEmbed() {
  return (
    <DiscussionEmbed
      shortname="biplob-2-disqus-com"
      config={{ url: "", identifier: "home-page" }}
    />
  );
}
