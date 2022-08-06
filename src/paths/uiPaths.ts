const UIPaths = {
  Home: "/",
  About: "/about",
  Blogs: {
    Root: "/blogs",
    GetSingleBlog: (slug: string) => {
      return `/blogs/${slug}`;
    },
  },
  Docs: {
    Root: "/docs",
    Axios: {
      GetAxiosDoc: (slug: string) => {
        return `/docs/axios/${slug}`;
      },
    },
    ReactQuery: {
      GetReactQueryDoc: (slug: string) => {
        return `/docs/react-query/${slug}`;
      },
    },
    ReactRouter: {
      GetReactRouterDoc: (slug: string) => {
        return `/docs/react-router/${slug}`;
      },
    },
  },
};

export default UIPaths;
