interface RssItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}

interface RssResponse {
  status: string;
  items: RssItem[];
}

export interface MediumPost {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  href: string;
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stanleylam909",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data: RssResponse = await res.json();
    if (data.status !== "ok") return [];

    return data.items.map((item) => ({
      title: item.title,
      excerpt:
        item.description
          .replace(/<[^>]*>/g, "")
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .trim()
          .slice(0, 220) + "…",
      date: new Date(item.pubDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      tags: (item.categories ?? []).slice(0, 4),
      href: item.link,
    }));
  } catch {
    return [];
  }
}
