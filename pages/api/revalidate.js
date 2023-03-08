export default async function handler(req, res) {
  const pathToRevalidate = "/projects";
  // const action = req.body.operation;
  // const model = req.body.data.__typename;
  // const slug = req.body.data.slug;

  // const categories = await getCategories();
  // const tags = await getTags();
  // const posts = await getPosts();

  // let pathsToRevalidate = [];
  // let articleSlugs = [];
  // let articlePaths = [];
  // let articleCategorySlugs = [];
  // let articleCategoryPaths = [];
  // let articleTagSlugs = [];
  // let articleTagPaths = [];

  // if (
  //   (action === "update" && model === "Post") ||
  //   (action === "delete" && model === "Post")
  // ) {
  //   req.body.data.categories.forEach((category) => {
  //     categories.forEach((articleCategory) => {
  //       if (category.id === articleCategory.id) {
  //         articleCategorySlugs = [
  //           ...articleCategorySlugs,
  //           `${articleCategory.slug}`,
  //         ];
  //       }
  //     });
  //   });

  //   req.body.data.tags.forEach((tag) => {
  //     tags.forEach((articleTag) => {
  //       if (tag.id === articleTag.id) {
  //         articleTagSlugs = [...articleTagSlugs, `${articleTag.slug}`];
  //       }
  //     });
  //   });

  //   articleCategorySlugs.forEach((slug) => {
  //     articleCategoryPaths = [...articleCategoryPaths, `/category/${slug}`];
  //   });

  //   articleTagSlugs.forEach((slug) => {
  //     articleTagPaths = [...articleTagPaths, `/tag/${slug}`];
  //   });

  //   pathsToRevalidate = [
  //     `/`,
  //     `/post/${slug}`,
  //     ...articleCategoryPaths,
  //     ...articleTagPaths,
  //   ];
  // } else if (action === "update" && model === "Tag") {
  //   req.body.data.posts.forEach((postItem) => {
  //     posts.forEach((post) => {
  //       if (postItem.id === post.node.id) {
  //         articleSlugs = [...articleSlugs, `${post.node.slug}`];
  //       }
  //     });
  //   });

  //   articleSlugs.forEach((slug) => {
  //     articlePaths = [...articlePaths, `/post/${slug}`];
  //   });

  //   pathsToRevalidate = [`/`, ...articlePaths, `/tag/${slug}`];
  // } else {
  //   switch (model) {
  //     case "Post":
  //       pathsToRevalidate = [`/post/${slug}`];
  //       break;

  //     case "Category":
  //       pathsToRevalidate = [`/category/${slug}`];
  //       break;

  //     case "Tag":
  //       pathsToRevalidate = [`/tag/${slug}`];
  //       break;

  //     default:
  //       pathsToRevalidate = [`/`];
  //       break;
  //   }
  // }

  if (req.query.secret !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    await res.revalidate(pathToRevalidate);
    return res.status(200).json({ revalidated: true });
  } catch (error) {
    console.error(`Error revalidating paths: ${error.message}`);
    return res.status(500).json({ message: "Error revalidating paths" });
  }
}
