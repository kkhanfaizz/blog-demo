import Link from 'next/link';
import { getPostBySlug, getPostSlugs } from '../../../lib/posts';

export async function generateStaticParams() {
  const slugs = getPostSlugs().map((s) => s.replace(/\.md$/, ''));
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  if (!post) return <p>Post not found</p>;

  return (
    <article>
      <Link href="/" className="text-sm text-blue-600">← Back</Link>
      <h1 className="text-3xl font-bold mt-4">{post.metadata.title}</h1>
      <p className="text-sm text-gray-500">{post.metadata.date}</p>
      <div
        className="mt-6 prose prose-lg"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
