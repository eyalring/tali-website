"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [imageSrcById, setImageSrcById] = useState<Record<number, string>>({});

  const togglePost = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id);
  };

  return (
    <section className="section-container bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="section-title">בלוג</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="card overflow-hidden flex flex-col"
          >
            <div className="p-0 flex flex-col flex-grow">
              <div className="relative w-full h-40 flex-shrink-0">
                <Image
                  src={imageSrcById[post.id] ?? `${post.imageBasePath}.jpg`}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={() => {
                    setImageSrcById((prev) => {
                      const current = prev[post.id];
                      const fallback = `${post.imageBasePath}.png`;
                      if (current === fallback) return prev; // avoid loops
                      return { ...prev, [post.id]: fallback };
                    });
                  }}
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2
                  className="text-sm md:text-base font-heading font-bold text-primary-800 mb-3"
                >
                  {post.title}
                </h2>

                <div className="flex-grow">
                  <p
                    className="text-black text-sm md:text-base mb-3 leading-relaxed min-h-[60px]"
                  >
                    {post.teaser}
                  </p>

                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-3"
                    >
                      <p className="text-black text-sm md:text-base leading-relaxed">
                        {post.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="text-accent-500 hover:text-accent-600 font-semibold transition-colors mt-auto text-sm"
                >
                  קרא עוד
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


