import type { Metadata } from "next";

/** Production site URL (www). Used for canonical URLs and Open Graph. */
export const SITE_URL = "https://www.kmtrucktrailers.com";

const DEFAULT_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
};

/** Merge page metadata with canonical (relative to metadataBase) and default robots. */
export function withPageMeta(path: string, meta: Metadata): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  return {
    ...meta,
    alternates: {
      ...meta.alternates,
      canonical: canonical,
    },
    robots: meta.robots ?? DEFAULT_ROBOTS,
  };
}
