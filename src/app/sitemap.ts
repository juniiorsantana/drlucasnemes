import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const postsDirectory = path.join(process.cwd(), 'content/posts')

function getPostEntries(): MetadataRoute.Sitemap {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      const { data } = matter(fs.readFileSync(path.join(postsDirectory, file), 'utf8'))
      return {
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: new Date(data.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }
    })
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...getPostEntries(),
    {
      url: `${SITE_URL}/politica-de-privacidade`,
      lastModified: new Date('2026-09-18'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
