import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { AffCards } from "@/components/AffCard";
import { Container } from "@/components/Container";
import {
  WechatIcon,
  TiktokIcon,
  XiaohongshuIcon,
  GithubIcon,
} from "@/consts/social";
import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";
import SimpleH2Layout from "@/components/SimpleH2Layout";

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>深入阅读</Card.Cta>
    </Card>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Newsconstter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">订阅颜sir日后所有文章</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        你订阅后，我会把我收获同步给你，包括但不限于：
      </p>
      <ul className="dark:text-zinc-4000 mt-2 list-inside list-disc text-sm text-zinc-600">
        <li>询盘自由的策略</li>
        <li>我5年的建站经验</li>
        <li>投广告的私料</li>
        <li>数据追踪的干货</li>
        <li>我的常用工具</li>
        <li>我的私人生活（maybe）</li>
        <li>我的赚钱心得</li>
      </ul>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        不是铁杆粉丝就不要订阅了，每次群发邮件都要花钱的，帮我省省。
      </p>
      <div className="mt-6 flex flex-col space-y-2">
        <input
          type="text"
          placeholder="怎么称呼你？"
          aria-label="First Name"
          required
          className="dark:focus:ring-indigo-40/10 min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400"
        />
        <input
          type="email"
          placeholder="你最常用的邮箱"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10"
        />
        <div className="flex items-center gap-2">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree" className="text-sm text-zinc-600">
            等下你会收到一封确认邮件，在你没确认前，我不会给你推消息。
          </label>
        </div>
        <Button type="submit" className="flex-none">
          有干货通知我
        </Button>
        <p className="dark:text-zinc-4000 mt-2 text-sm text-zinc-600">
          你的信息我会严格保密，而且，订阅后可以随时取消，请放心。
        </p>
      </div>
    </form>
  );
}

function Photos() {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            询盘自由网
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            我是颜sir，一个专注于技术的人。我喜欢阅读技术相关的书籍和文章，也喜欢分享自己的经验和见解。我也喜欢创作和分享自己的作品。
            我也喜欢和朋友交流技术问题和分享自己的经验。
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="#"
              aria-label="Follow on Wechat"
              icon={WechatIcon}
              className="h-6 w-6 grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            />
            <SocialLink
              href="#"
              aria-label="Follow on Tiktok"
              icon={TiktokIcon}
              className="h-6 w-6 grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            />
            <SocialLink
              href="#"
              aria-label="Follow on Xiaohongshu"
              icon={XiaohongshuIcon}
              className="h-6 w-6 grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            />
            <SocialLink
              href="#"
              aria-label="Follow on Github"
              icon={GithubIcon}
              className="h-6 w-6 grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <SimpleH2Layout
        title="严选工具"
        description="下面都是我用过的工具，每一个都经过十几轮试错，大浪淘沙剩下来的。"
      >
        <AffCards />
      </SimpleH2Layout>
      <SimpleH2Layout
        title="最新文章"
        description="下面是我最新文章，每篇都算得上呕心沥血，希望你也能有所收获。"
      >
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="max-w-[450px] space-y-10 lg:pl-16 xl:pl-24">
            <Newsconstter />
          </div>
        </div>
      </SimpleH2Layout>
    </>
  );
}
