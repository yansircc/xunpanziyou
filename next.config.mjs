import rehypePrism from "@mapbox/rehype-prism";
import { remarkMdxToc } from "remark-mdx-toc";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";

const oldPostSlugs = [
  "buy-hostinger",
  "content-marketing-backlinko",
  "crawler-urls",
  "deactivated-plugin-speed",
  "domain-ownership",
  "domain-register",
  "eat-ymyl",
  "fastest-wp-hosting",
  "good-domain",
  "how-much-hire-writers",
  "internal-traffic",
  "invalid-click",
  "just-my-socks",
  "lucky-orange",
  "nitropack",
  "remarketing",
  "seo-press",
  "seo-vs-ads",
  "website-essential-parts",
  "why-seo-dead",
  "why-wordpress",
  "wordpress-coding",
  "wordpress-migration",
  "wordpress-themes",
];

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
    ],
  },
  async redirects() {
    return oldPostSlugs
      .filter((slug) => slug.trim() !== "" && slug !== "articles")
      .map((slug) => ({
        source: `/${slug}`,
        destination: `/articles/${slug}`,
        permanent: true,
      }))
      .concat([
        {
          source: "/specs101",
          destination:
            "https://www.hostg.xyz/aff_c?offer_id=517&aff_id=40495&url_id=3965&source=cloud_website",
          permanent: false,
        },
      ]);
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkSlug, [remarkMdxToc, { name: "toc" }]],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
