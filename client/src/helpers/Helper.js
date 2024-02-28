/**
 * Get Page Title From Pathname
 */

export const tittleGenerator = (path) => {
  const title = path.replace(/-/g, " ").replace(/\//g, "");
  return title;
};
