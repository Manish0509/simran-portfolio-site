import { sitemapData } from "./lib/constants";

export default async function sitemap() {
  const staticPagesData = sitemapData.map((data) => {
    return {
      url: `${data?.loc}`,
      lastModified: `${data?.lastmod}`,
    };
  });

  return [
    {
      url: "https://www.simranlalchandani.com/",
      lastModified: new Date(),
    },
    ...staticPagesData,
  ];
}
