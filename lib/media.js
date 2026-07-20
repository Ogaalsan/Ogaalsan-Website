const DEFAULT_IMAGE = "/assets/img/ogalsan/contact.png";

export function getApiBaseUrl() {
  return (
    process.env.OGAALSAN_API_URL ||
    process.env.NEXT_PUBLIC_OGAALSAN_API_URL ||
    "http://localhost:9000"
  ).replace(/\/$/, "");
}

export function resolveMediaUrl(image, apiBaseUrl = getApiBaseUrl()) {
  if (!image) {
    return DEFAULT_IMAGE;
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  if (image.startsWith("/storage/")) {
    return `${apiBaseUrl.replace(/\/$/, "")}${image}`;
  }

  if (image.startsWith("/assets/")) {
    return image;
  }

  if (image.startsWith("/")) {
    return image;
  }

  return `${apiBaseUrl.replace(/\/$/, "")}/${image}`;
}
