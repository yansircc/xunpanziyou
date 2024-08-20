import Image from "next/image";

import { Card } from "@/components/Card";
import logoHostinger from "@/images/logos/hostinger.svg";
import logoCloudflare from "@/images/logos/cloudflare.svg";
import logoNamesilo from "@/images/logos/namesilo.svg";
import logoJustMySocks from "@/images/logos/justmysocks.svg";
import logoNitropack from "@/images/logos/nitropack.svg";

const AffiliateLinks = [
  {
    title: "Hostinger",
    description: "我用过速度最快的空间，裸站速度0.6s！太猛了",
    logo: logoHostinger,
    link: "/specs101",
  },
  {
    title: "Cloudflare",
    description: "能被称为赛博活佛的没几个，Cloudflare算一个",
    logo: logoCloudflare,
    link: "https://www.cloudflare.com/",
  },
  {
    title: "Namesilo",
    description: "老牌域名申请平台，购买域名不像国内那么麻烦",
    logo: logoNamesilo,
    link: "https://www.namesilo.com/register.php?rid=8c41255pm",
  },
  {
    title: "JustMySocks",
    description: "是我用过速度最快最稳定的F.Q.工具，没有之一",
    logo: logoJustMySocks,
    link: "https://justmysocks3.net/members/aff.php?aff=7988",
  },
  {
    title: "Nitropack",
    description: "本网站用的就是它，谷歌移动端分数直接拉爆",
    logo: logoNitropack,
    link: "https://nitropack.io/#KCEYBP",
  },
];

export function AffCards() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
    >
      {AffiliateLinks.map((project) => (
        <Card as="li" key={project.title} className="flex gap-2">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image src={project.logo} alt="" className="h-8 w-8" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-zinc-8000 text-base font-semibold dark:text-zinc-100">
              <Card.Link href={project.link} target="_blank">
                {project.title}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
          </div>
        </Card>
      ))}
    </ul>
  );
}
