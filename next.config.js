import rehypePrism from "@mapbox/rehype-prism";
import { remarkMdxToc } from "remark-mdx-toc";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.xunpanziyou.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "objectstorageapi.bja.sealos.run",
        port: "",
      },
    ],
  },
  output: "standalone",
  reactStrictMode: true,
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkSlug, [remarkMdxToc, { name: "toc" }]],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
