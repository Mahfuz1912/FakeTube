import Link from "next/link";
import posts from "../../public/videos.json";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <main className="px-4 py-6 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {posts.map((post, index) => (
            <Link
              key={`${post.videoTitle}-${index}`}
              href={`/video/${encodeURIComponent(post.videoTitle)}`}
              className="group block transition-transform hover:scale-[1.01]"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-[#262626] mb-3 ring-1 ring-white/5">
                <Image
                  src={post.thumbnailURL}
                  alt={post.videoTitle}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0"></div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                  {post.duration}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="shrink-0">
                  <Image
                    src={post.channelAvatar}
                    alt={post.channelName}
                    loading="lazy"
                    className="w-9 h-9 rounded-full object-cover bg-[#262626] ring-1 ring-white/10"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-[#e50914] transition-colors">
                    {post.videoTitle}
                  </h3>
                  <p className="text-xs text-gray-400 mb-0.5">
                    {post.channelName}
                  </p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{post.views} views</span>
                    <span>•</span>
                    <span>{post.publishedDate}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
