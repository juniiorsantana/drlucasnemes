import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import remarkGfm from 'remark-gfm';
import ReadingProgress from '@/components/blog/ReadingProgress';
import ShareButtons from '@/components/blog/ShareButtons';
import ArticleSidebar from '@/components/blog/ArticleSidebar';
import Button from '@/components/ui/Button';
import BlogCTA from '@/components/blog/BlogCTA';

function MdxTable({ children }: { children?: React.ReactNode }) {
  return (
    <div className="my-6 w-full overflow-x-auto rounded-xl border border-outline/15 shadow-sm">
      <table className="min-w-full text-sm text-left border-collapse">
        {children}
      </table>
    </div>
  );
}

function MdxThead({ children }: { children?: React.ReactNode }) {
  return (
    <thead className="bg-[#185FA5]/8 text-[#185FA5] text-xs uppercase tracking-wider">
      {children}
    </thead>
  );
}

function MdxTh({ children }: { children?: React.ReactNode }) {
  return (
    <th className="px-4 py-3 font-semibold border-b border-outline/15 whitespace-nowrap">
      {children}
    </th>
  );
}

function MdxTbody({ children }: { children?: React.ReactNode }) {
  return <tbody className="divide-y divide-outline/10">{children}</tbody>;
}

function MdxTr({ children }: { children?: React.ReactNode }) {
  return <tr className="hover:bg-surface-container transition-colors duration-150">{children}</tr>;
}

function MdxTd({ children }: { children?: React.ReactNode }) {
  return (
    <td className="px-4 py-3 text-on-surface align-top">
      {children}
    </td>
  );
}


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

const postsDirectory = path.join(process.cwd(), 'content/posts');

async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}

function extractHeadings(content: string) {
  const regex = /^##\s+(.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ id, text });
  }
  return headings;
}

export async function generateStaticParams() {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({ slug: file.replace(/\.mdx$/, '') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) return { title: 'Post não encontrado' };

  return {
    title: `${post.frontmatter.title} | Dr. Lucas Nemes`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
      images: [
        {
          url: post.frontmatter.coverImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) notFound();

  const { title, description, date, author, category, readingTime, coverImage } =
    post.frontmatter;

  const headings = extractHeadings(post.content);

  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const pageUrl = `https://drlucasnemes.com.br/blog/${slug}`;

  return (
    <>
      <ReadingProgress />

      <article className="min-h-screen bg-surface pt-10 pb-20 px-4 md:pt-14 md:pb-28">
        {/* ── Breadcrumb ───────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-8">
          <nav className="flex items-center gap-2 text-sm text-on-surface-variant">
            <Link href="/" className="hover:text-secondary transition-colors">
              Início
            </Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <Link href="/blog" className="hover:text-secondary transition-colors">
              Blog
            </Link>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="text-on-surface font-medium truncate max-w-[200px] md:max-w-none">
              {title}
            </span>
          </nav>
        </div>

        {/* ── Article Header ───────────────────────────────────── */}
        <header className="max-w-2xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center justify-center mb-5">
            <span className="px-3.5 py-1 bg-[#185FA5]/10 text-[#185FA5] text-xs font-bold rounded-full uppercase tracking-widest">
              {category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5">
            {title}
          </h1>

          <p className="text-lg text-on-surface-variant leading-relaxed mb-7">
            {description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">person</span>
              {author}
            </span>
            <span className="w-px h-4 bg-outline/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">calendar_today</span>
              {formattedDate}
            </span>
            <span className="w-px h-4 bg-outline/20 hidden sm:block" />
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">schedule</span>
              {readingTime} de leitura
            </span>
          </div>
        </header>

        {/* ── Cover Image ──────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-editorial">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* ── Content Grid ─────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 lg:gap-12 items-start">

          {/* Left column */}
          <div className="min-w-0 border-r-0 lg:border-r border-outline/10 lg:pr-10">
            <ShareButtons title={title} url={pageUrl} />

            <div className="prose prose-slate lg:prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-on-surface prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-[#185FA5] prose-blockquote:bg-[#185FA5]/5 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:text-on-surface prose-img:rounded-2xl prose-img:shadow-glass prose-code:text-[#185FA5] prose-code:bg-[#185FA5]/8 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
              <MDXRemote
                source={post.content}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
                components={{
                  Button: (props) => <Button {...props} />,
                  BlogCTA: (props) => <BlogCTA {...props} />,
                  table: MdxTable,
                  thead: MdxThead,
                  th: MdxTh,
                  tbody: MdxTbody,
                  tr: MdxTr,
                  td: MdxTd,
                }}
              />
            </div>

            {/* Back to blog */}
            <div className="mt-12 pt-8 border-t border-outline/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#185FA5] hover:text-secondary transition-colors duration-200"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Voltar ao Blog
              </Link>
            </div>
          </div>

          {/* Right column (sticky sidebar) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <ArticleSidebar headings={headings} relatedPosts={[]} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
