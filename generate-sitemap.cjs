const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const sitemap = new SitemapStream({ hostname: "https://studioreform.bg" });

const writeStream = createWriteStream("./public/sitemap.xml");

sitemap.pipe(writeStream);

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/reformer", changefreq: "weekly", priority: 0.9 });
sitemap.write({ url: "/prices", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/contact-us", changefreq: "monthly", priority: 0.6 });
sitemap.write({ url: "/careers", changefreq: "monthly", priority: 0.5 });
sitemap.write({ url: "/privacy-policy", changefreq: "yearly", priority: 0.3 });
sitemap.write({ url: "/terms-of-use", changefreq: "yearly", priority: 0.3 });

sitemap.write({ url: "/studios", changefreq: "monthly", priority: 0.7 });
sitemap.write({
  url: "/studios/sofia-center",
  changefreq: "monthly",
  priority: 0.7,
});
sitemap.write({
  url: "/studios/varna-center",
  changefreq: "monthly",
  priority: 0.7,
});
sitemap.write({
  url: "/studios/varna-levski",
  changefreq: "monthly",
  priority: 0.7,
});

sitemap.end();

streamToPromise(sitemap).then(() =>
  console.log("✅ sitemap.xml created in public folder")
);
