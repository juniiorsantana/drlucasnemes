'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Heading {
  id: string;
  text: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  readingTime: string;
  coverImage: string;
}

interface ArticleSidebarProps {
  headings: Heading[];
  relatedPosts: RelatedPost[];
}

export default function ArticleSidebar({ headings, relatedPosts }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const posts = relatedPosts;

  useEffect(() => {
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <aside className="space-y-8">
      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="bg-surface-container-lowest rounded-2xl border border-outline/10 p-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            Neste artigo
          </h3>
          <nav>
            <ul className="space-y-1">
              {headings.map(({ id, text }) => {
                const isActive = activeId === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollToHeading(id)}
                      className={[
                        'w-full text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 leading-snug',
                        isActive
                          ? 'text-[#185FA5] bg-[#185FA5]/8 font-semibold border-l-2 border-[#185FA5] pl-[10px]'
                          : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container',
                      ].join(' ')}
                    >
                      {text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}

      {/* Related Posts */}
      {posts.length > 0 && (
      <div className="bg-surface-container-lowest rounded-2xl border border-outline/10 p-5">
        <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">
          Artigos relacionados
        </h3>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-start gap-3 group"
              >
                <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-high">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-on-surface leading-snug line-clamp-2 group-hover:text-[#185FA5] transition-colors duration-200">
                    {post.title}
                  </p>
                  <span className="text-xs text-on-surface-variant mt-1 inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">schedule</span>
                    {post.readingTime} de leitura
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      )}
    </aside>
  );
}
