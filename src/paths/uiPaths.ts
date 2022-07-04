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
    Root: "/docs/welcome",
    Axios: {
      AxiosAdvance: "/docs/axios/axios-advance",
    },
    ReactRouter: {
      ReactRouterAdvance: "/docs/react-router/react-router-advance",
    },
  },
};

export default UIPaths;
