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
    let route = `/docs/${subPath}`;
    if (slug) {
      route += `/${slug}`;
    }
    return route;
  },
};

export default UIPaths;
