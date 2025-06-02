declare module "*.mdx" {
  import type { JSX } from "solid-js";

  const MDXComponent: JSX.Element;

  export default MDXComponent;
}
