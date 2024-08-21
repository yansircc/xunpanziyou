import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  WechatIcon,
  TiktokIcon,
  XiaohongshuIcon,
  GithubIcon,
} from "@/consts/social";
import portraitImage from "@/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-indigo-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "颜sir",
  description: "询盘自由网",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            我是询盘自由网的站长颜sir。
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              我养了一只边境牧羊犬，她叫石榴，所以我询盘自由网的logo，就是一只边牧。
              我身兼好几职，一方面我运营多个博客，通过博客做英文网赚。另一方面，我也把我的网络营销的经验做成了课程，目前在米课授课。
              毕业前面几年，我一直是上班状态，在深圳做过营销推广，在南京做过客服、销售、项目经理等，我记得我第一次来南京，上班的第一件事就是给陌生客户打cold
              call。 后来因为其他渠道（主要是Affiliate和Info
              Product）赚到的钱，远远超过了本质工作，就辞职宅家，把所有精力都放在网络营销上了。
            </p>
            <p>
              不知道你有没有这种感觉：网络营销（Online
              Marketing）这个行业挺有意思的，越研究越觉得着迷，因为它和钱离得很近。
              学会了网络营销后，赚钱的方式就会变得多种多样，你可以靠广告赚钱，靠affiliate赚钱，靠info
              product赚钱，靠开外贸2B公司赚钱，靠卖leads赚钱，还可以做跨境电商，可以做dropshipping。
            </p>
            <p>
              以上大部分都能带来被动收入，还是挺爽的。
              目前我的状态，就是宅在家里等钱自己来……这么说似乎有点欠揍，但这就是我日常，时不时收到几千美金几万美金的汇款，也算实现了财富自由。
              我受益于网络营销，而且对网络营销越来越痴迷，最近一段时间我在开拓更多样的赚钱渠道，包括但不限于跨境电商，dropshipping。
            </p>
            <p>
              这些我都刚刚起步，还没到能传道受业解惑的level，等我以后靠这些渠道月收入超过1万美金，我再把心得经验写下来。
              运营这个博客嘛，有几个目的，一方面可以把我做网络营销的心得体会写下来，方便我把零散的知识点总结成知识体系，我坚信“费曼理论”，我相信把自己知道的知识分享出去，自己才是最大的受益者。
              另一方面，也希望通过这个博客测试下“中文SEO”究竟有没有搞头，我想把英文领域的成功经验复制到中文领域来。
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list" className="flex flex-col gap-4">
            <SocialLink
              href="#"
              icon={WechatIcon}
              className="grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            >
              微信
            </SocialLink>
            <SocialLink
              href="#"
              icon={TiktokIcon}
              className="grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            >
              Tiktok
            </SocialLink>
            <SocialLink
              href="#"
              icon={XiaohongshuIcon}
              className="grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            >
              小红书
            </SocialLink>
            <SocialLink
              href="#"
              icon={GithubIcon}
              className="grayscale filter transition-colors duration-300 hover:filter-none dark:text-zinc-100"
            >
              Github
            </SocialLink>
            <SocialLink
              href="mailto:markyan@foxmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              markyan@foxmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
