import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { getPostBySlug, getAllSlugs, type ContentBlock } from "../blog-data";
import type { Metadata } from "next";
import Reveal from "@/app/components/ui/Reveal";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Blog | KM Truck & Trailer" };
  return {
    title: `${post.title} | KM Truck & Trailer Blog`,
    description: post.excerpt,
  };
}

function BlogContent({
  post,
  introLength,
}: {
  post: Awaited<ReturnType<typeof getPostBySlug>>;
  introLength: number;
}) {
  if (!post) return null;
  const introBlocks = post.content.slice(0, introLength);
  const afterIntro = post.content.slice(introLength);
  const imageInsertIndex = introBlocks.length;

  return (
    <>
      {/* Intro paragraphs — lead text */}
      <div className="blog-lead">
        {introBlocks.map((block, i) =>
          block.type === "p" ? (
            <Reveal key={i} type="up" delay={i * 60}>
              <p className="blog-lead-p">{block.text}</p>
            </Reveal>
          ) : null
        )}
      </div>

      {/* Featured image — after intro, with spacing */}
      <Reveal type="up" delay={120}>
        <div className="blog-featured-image">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Reveal>

      {/* Rest of content with mixed headings and paragraphs */}
      <div className="blog-body">
        {afterIntro.map((block, i) => (
          <Reveal key={imageInsertIndex + i} type="up" delay={80 + i * 40}>
            <Block node={block} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

function Block({ node }: { node: ContentBlock }) {
  if (node.type === "h2") {
    return <h2 className="blog-h2">{node.text}</h2>;
  }
  if (node.type === "h3") {
    return <h3 className="blog-h3">{node.text}</h3>;
  }
  return <p className="blog-p">{node.text}</p>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="blog-post">
        <section className="page-hero blog-hero">
          <div className="container blog-hero-inner">
            <Reveal type="left">
              <Link href="/blogs" className="blog-back-link">
                <ArrowLeft size={18} /> Back to Blogs
              </Link>
            </Reveal>
            <Reveal type="up" delay={100}>
              <div className="blog-meta">
                <span>
                  <Calendar size={16} /> {formatDate(post.date)}
                </span>
                <span>
                  <Clock size={16} /> {post.readTime}
                </span>
                <span>{post.author}</span>
              </div>
            </Reveal>
            <Reveal type="up" delay={150}>
              <h1 className="blog-title">{post.title}</h1>
            </Reveal>
            <Reveal type="right" delay={200}>
              <p className="blog-excerpt">{post.excerpt}</p>
            </Reveal>
          </div>
        </section>

        <section className="blog-content-section">
          <div className="container blog-content-inner">
            <BlogContent post={post} introLength={post.introLength} />

            <Reveal type="up" delay={200}>
              <div className="blog-footer-cta">
                <Link href="/blogs" className="blog-cta-button">
                  <ArrowLeft size={18} /> All Blogs
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </article>
    </>
  );
}
