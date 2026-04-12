import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import Button from '@/components/ui/Button';

interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
}

interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

async function getPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        frontmatter: data as PostFrontmatter,
      };
    })
    .sort((a, b) => (new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()));

  return posts;
}

export const metadata: Metadata = {
  title: 'Blog | Dr. Lucas Nemes',
  description: 'Artigos sobre nutrologia, emagrecimento, performance e saúde preventiva.',
};

export default async function BlogIndexPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 headline leading-tight">
              Saúde, Performance e <span className="text-secondary">Conhecimento</span>
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Explore conteúdos exclusivos sobre nutrologia moderna, estratégias de emagrecimento e otimização biológica para viver sua melhor versão.
            </p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-20 bg-surface-container rounded-3xl border border-outline/10">
              <span className="material-symbols-outlined text-5xl text-outline mb-4">article</span>
              <p className="text-on-surface-variant font-medium">Nenhum artigo publicado ainda.</p>
            </div>
          ) : (
            <div className="space-y-20">
              {/* Featured Post */}
              {featuredPost && (
                <section>
                  <Link href={`/blog/${featuredPost.slug}`} className="group">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest p-4 rounded-[2rem] border border-outline/5 transition-all hover:bg-surface-container-low hover:border-outline/20 shadow-editorial">
                      <div className="lg:col-span-7 aspect-[16/9] relative rounded-2xl overflow-hidden shadow-glass">
                        <Image
                          src={featuredPost.frontmatter.coverImage}
                          alt={featuredPost.frontmatter.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority
                        />
                      </div>
                      <div className="lg:col-span-5 lg:pr-10 lg:pl-4 py-4">
                        <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-[11px] font-bold uppercase tracking-widest rounded-full mb-6">
                          {featuredPost.frontmatter.category}
                        </span>
                        <h2 className="text-3xl font-bold text-primary mb-5 group-hover:text-secondary transition-colors line-clamp-2 headline">
                          {featuredPost.frontmatter.title}
                        </h2>
                        <p className="text-on-surface-variant line-clamp-3 mb-8 text-lg leading-relaxed">
                          {featuredPost.frontmatter.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-outline/5">
                          <div className="flex items-center gap-4 text-sm text-outline font-medium">
                            <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
                              <span className="material-symbols-outlined text-base">person</span>
                              {featuredPost.frontmatter.author}
                            </span>
                            <span className="w-px h-4 bg-outline/20" />
                            <span className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
                              <span className="material-symbols-outlined text-base">calendar_today</span>
                              {new Date(featuredPost.frontmatter.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </span>
                          </div>
                          <Button variant="primary" size="sm" className="pointer-events-none group-hover:scale-105">
                            Ler Artigo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </section>
              )}

              {/* Grid Posts */}
              {remainingPosts.length > 0 && (
                <section>
                  <div className="flex items-center gap-4 mb-10">
                    <h3 className="text-xl font-bold text-primary uppercase tracking-widest text-sm">Mais Artigos</h3>
                    <div className="h-px flex-1 bg-outline/10" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {remainingPosts.map((post) => (
                      <Link 
                        key={post.slug} 
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col bg-surface-container-lowest rounded-3xl border border-outline/5 overflow-hidden transition-all hover:shadow-editorial hover:-translate-y-1"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <Image
                            src={post.frontmatter.coverImage}
                            alt={post.frontmatter.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-8 flex flex-col flex-1">
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-4">
                            {post.frontmatter.category}
                          </span>
                          <h4 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2 headline">
                            {post.frontmatter.title}
                          </h4>
                          <p className="text-sm text-on-surface-variant line-clamp-3 mb-8 flex-1 leading-relaxed">
                            {post.frontmatter.description}
                          </p>
                          <div className="flex items-center justify-between pt-5 border-t border-outline/5">
                            <div className="flex items-center gap-3 text-[11px] text-outline font-bold uppercase tracking-wider">
                              <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                {post.frontmatter.readingTime}
                              </span>
                              <span className="w-px h-3 bg-outline/20" />
                              <span>{new Date(post.frontmatter.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</span>
                            </div>
                            <span className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              Ler mais 
                              <span className="material-symbols-outlined text-base">chevron_right</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
