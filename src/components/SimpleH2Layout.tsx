import { Container } from "./Container";

export default function SimpleH2Layout({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
          {title}
        </h2>
        <p className="dark:text-zinc-4000 mt-6 text-base text-zinc-600">
          {description}
        </p>
      </header>
      {children}
    </Container>
  );
}
