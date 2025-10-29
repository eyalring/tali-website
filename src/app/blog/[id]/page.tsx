"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "../posts";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number(params.id);
  const post = useMemo(() => posts.find((p) => p.id === postId), [postId]);
  const [imageSrc, setImageSrc] = useState<string | null>(
    post ? `${post.imageBasePath}.jpg` : null
  );

  if (!post) {
    return (
      <section className="section-container bg-white">
        <div className="text-center py-20">
          <p className="text-lg">הפוסט לא נמצא.</p>
          <Link
            href="/blog"
            className="inline-block mt-6 text-accent-500 hover:text-accent-600 font-semibold"
          >
            חזרה לבלוג
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
          {imageSrc && (
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full cursor-zoom-in"
              aria-label="פתח תמונה בגודל מלא בכרטיסייה חדשה"
            >
              <Image
                src={imageSrc}
                alt={post.title}
                fill
                className="object-cover object-center"
                sizes="100vw"
                onError={() => {
                  // Fallback once from .jpg -> .png
                  const png = `${post.imageBasePath}.png`;
                  if (imageSrc !== png) setImageSrc(png);
                }}
              />
            </a>
          )}
        </div>

        <h1
          className="mt-8 text-2xl md:text-3xl font-heading font-bold text-primary-800"
        >
          {post.title}
        </h1>

        <p
          className="mt-4 text-black md:text-lg leading-relaxed"
        >
          {post.teaser}
        </p>

        <div className="mt-6">
          <p
            className="text-black leading-relaxed whitespace-pre-line"
            style={post.id === 1 ? { fontFamily: "Calibri, Arial, sans-serif" } : undefined}
          >
            {post.description}
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-accent-500 hover:text-accent-600 font-semibold"
          >
            חזרה לבלוג
          </Link>
        </div>
      </div>
    </section>
  );
}


