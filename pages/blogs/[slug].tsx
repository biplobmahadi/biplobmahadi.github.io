import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Blog: {slug}</p>;
};

export default Blog;
