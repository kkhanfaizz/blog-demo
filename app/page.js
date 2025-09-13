import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="p-6 border rounded-lg bg-white">
            <h2 className="text-2xl font-semibold">
              <Link href={`/posts/${post.slug}`} className="text-blue-600">
                {post.metadata.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.metadata.date}</p>
            <p className="mt-3 text-gray-700">{post.metadata.excerpt}</p>
            <Link href={`/posts/${post.slug}`} className="mt-3 inline-block text-blue-600">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
