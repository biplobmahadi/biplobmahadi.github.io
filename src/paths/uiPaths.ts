const UIPaths = {
  Home: "/",
  About: "/about",
  Blogs: (slug: string) => {
    return `/blogs/${slug}`;
  },
  Docs: (subPath: string, slug?: string) => {
    return `/docs/${subPath}/${slug}`;
  },
};

export default UIPaths;
