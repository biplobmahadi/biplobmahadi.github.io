const UIPaths = {
  Home: "/",
  About: "/about",
  Blogs: {
    Root: "/blogs",
    GetSingleBlog: (slug: string) => {
      return `/blogs/${slug}`;
    },
  },
  Docs: (subPath: string, slug?: string) => {
    return `/docs/${subPath}/${slug}`;
  },
};

export default UIPaths;
