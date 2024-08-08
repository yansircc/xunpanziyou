import Image from "next/image";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import logoAnimaginary from "@/images/logos/animaginary.svg";
import logoCosmos from "@/images/logos/cosmos.svg";
import logoHelioStream from "@/images/logos/helio-stream.svg";
import logoOpenShuttle from "@/images/logos/open-shuttle.svg";
import logoPlanetaria from "@/images/logos/planetaria.svg";

const projects = [
  {
    name: "Planetaria",
    description: "我用过速度最快的空间，裸站速度0.6s！太猛了",
    link: { href: "http://planetaria.tech", label: "planetaria.tech" },
    logo: logoPlanetaria,
  },
  {
    name: "Animaginary",
    description: "好评率和性价比双高的WP主机，颜sir也在用！",
    link: { href: "#", label: "github.com" },
    logo: logoAnimaginary,
  },
  {
    name: "HelioStream",
    description: "最奢华的WP主机，所有配置都为WP量身定制",
    link: { href: "#", label: "github.com" },
    logo: logoHelioStream,
  },
  {
    name: "cosmOS",
    description: "我半小时随手做的着陆页，一晚上来了10个询盘",
    link: { href: "#", label: "github.com" },
    logo: logoCosmos,
  },
  {
    name: "OpenShuttle",
    description: "人工智能辅助写原创文案，比绝大多数人写得还好",
    link: { href: "#", label: "github.com" },
    logo: logoOpenShuttle,
  },
];

export function AffCard() {
  return (
    <SimpleLayout
      title="严选工具"
      intro="下面都是我用过的工具，每一个都经过十几轮试错，大浪淘沙剩下来的。"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name} className="flex gap-2">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
            </div>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  );
}
