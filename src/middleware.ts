import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.slice(1); // Remove leading slash

  if (oldPostSlugs.includes(pathname)) {
    return NextResponse.redirect(
      new URL(`/articles/${pathname}`, request.url),
      301,
    );
  }

  if (request.nextUrl.pathname.startsWith("/specs101")) {
    return NextResponse.redirect(
      "https://www.hostg.xyz/aff_c?offer_id=517&aff_id=40495&url_id=3965&source=cloud_website",
      302,
    );
  }

  if (request.nextUrl.pathname.startsWith("/vip")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
