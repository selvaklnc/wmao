import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");

  return rss({
    title: "Wikimint Blog",
    description: "Personal finance & business strategies in India",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ? new Date(post.data.date) : new Date(), // ✅ map `date` → `pubDate`
      description: post.data.description ?? "",
      link: `/${post.slug}`, // ✅ works if your posts live at /slug
    })),
  });
}
