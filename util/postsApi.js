import { fetchPublicJson } from "./api";
import { getApiBaseUrl, resolveMediaUrl } from "./media";

const DEFAULT_BLOG_IMAGE = "/assets/img/ogalsan/contact.png";
const DEFAULT_AUTHOR = "OgaalSan Team";
const DEFAULT_AUTHOR_IMG = "/assets/img/ogalsan/image (8).png";

export function formatPostDate(dateString) {
  if (!dateString) {
    return "";
  }

  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function parsePostContent(content) {
  if (!content) {
    return [];
  }

  if (Array.isArray(content)) {
    return content;
  }

  return content
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function resolvePostImage(post, apiBaseUrl = getApiBaseUrl()) {
  return (
    resolveMediaUrl(post.featured_image_url || post.featured_image, apiBaseUrl) ||
    DEFAULT_BLOG_IMAGE
  );
}

export function mapApiPost(post, apiBaseUrl) {
  const category = post.tags?.[0] || "News";
  const paragraphs = parsePostContent(post.content);

  return {
    id: post.id,
    slug: post.slug || null,
    title: post.title,
    img: resolvePostImage(post, apiBaseUrl),
    image: resolvePostImage(post, apiBaseUrl),
    category,
    author: post.author?.name || DEFAULT_AUTHOR,
    authorImg: DEFAULT_AUTHOR_IMG,
    date: formatPostDate(post.created_at),
    excerpt:
      post.excerpt ||
      (paragraphs[0]?.length > 160
        ? `${paragraphs[0].slice(0, 160)}...`
        : paragraphs[0] || ""),
    content: paragraphs,
    tags: post.tags || [],
    status: post.status || null,
    raw: post,
  };
}

export async function fetchPublishedPosts() {
  const { payload, apiBaseUrl } = await fetchPublicJson("/api/v1/public/posts");
  const posts = payload.data || [];

  return posts.map((post) => mapApiPost(post, apiBaseUrl));
}

export async function fetchPublishedPost(identifier) {
  try {
    const { payload, apiBaseUrl } = await fetchPublicJson(
      `/api/v1/public/posts/${identifier}`
    );
    return mapApiPost(payload.data, apiBaseUrl);
  } catch {
    return null;
  }
}
