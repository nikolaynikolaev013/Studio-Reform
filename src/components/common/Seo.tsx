import { HeadProvider } from "react-head";

export function Seo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <HeadProvider>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </HeadProvider>
  );
}
