// import SimilarVideos from "@/app/SharedCompoment/SimilarVideos";
import Image from "next/image";
import allVideos from "../../../../public/videos.json";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const video = allVideos.find((v) => v.videoTitle === decodedTitle);

  return {
    title: video?.videoTitle
      ? `${video.videoTitle} - Faketube`
      : "Video Details - Faketube",
    description:
      video?.description?.trim() ||
      video?.categories?.join(", ") ||
      "Watch this video on Faketube",
  };
}

const Detailspage = async ({ params }) => {
  const { title } = await params;
  const decodedTitle = decodeURIComponent(title);
  const video = allVideos.find((v) => v.videoTitle === decodedTitle);

  if (!video) {
    return (
      <div className="p-10 text-center text-gray-300">Video not found</div>
    );
  }

  const embedUrl = video.videoURL.replace("watch?v=", "embed/");

  const similerVideos = allVideos.filter(
    (v) =>
      v.categories &&
      video.categories &&
      v.categories.some((cat) => video.categories.includes(cat)),
  );

  return (
    <div>
      <main className="px-4 py-6 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <section className="lg:col-span-8">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
                <iframe
                  id="videoPlayer"
                  className="w-full h-full"
                  title={video?.videoTitle}
                  src={embedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-4">
                <h1
                  id="videoTitle"
                  className="text-lg sm:text-xl font-medium leading-snug"
                >
                  {video?.videoTitle}
                </h1>

                <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div id="videoMeta" className="text-sm text-gray-400">
                    <span id="viewCount">{video?.views}</span>
                    <span className="mx-1">•</span>
                    <span id="publishTime">{video?.publishedDate}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border border-[#303030] overflow-hidden bg-[#1f1f1f]">
                      <button
                        className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                        type="button"
                        aria-label="Like"
                      >
                        <svg
                          className="w-5 h-5 text-gray-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9A2 2 0 0 0 19.68 9H14z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                          ></path>
                        </svg>
                        <span
                          id="likeCount"
                          className="text-sm font-medium text-[#e5e5e5]"
                        >
                          {video?.likes}
                        </span>
                      </button>
                      <div className="w-px h-8 bg-[#303030]"></div>
                      <button
                        className="px-4 py-2 flex items-center gap-2 hover:bg-[#262626] transition-colors"
                        type="button"
                        aria-label="Dislike"
                      >
                        <svg
                          className="w-5 h-5 text-gray-200"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7L2.34 12a2 2 0 0 0 1.98 3H10z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"
                          ></path>
                        </svg>
                        <span
                          id="dislikeCount"
                          className="text-sm font-medium text-[#e5e5e5]"
                        >
                          {video?.dislikes}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <image
                      id="channelAvatar"
                      src={video?.channelAvatar}
                      alt={video?.channelName}
                      className="w-10 h-10 rounded-full object-cover bg-[#262626] ring-1 ring-white/10 shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p
                        id="channelTitle"
                        className="font-medium leading-tight truncate"
                      >
                        {video?.channelName}
                      </p>
                      <p className="text-xs text-gray-400">Publisher</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="bg-[#1f1f1f] border border-[#262626] rounded-xl p-4">
                    <p className="text-sm text-gray-200 whitespace-pre-line line-clamp-3">
                      Categories: {video?.categories.join(" • ")}
                    </p>
                    <p
                      id="videoDescription"
                      className="text-sm text-gray-200 whitespace-pre-line line-clamp-3"
                    >
                      {video?.description}
                    </p>
                    <button
                      id="toggleDescription"
                      className="mt-3 text-sm font-medium text-gray-300 hover:text-white"
                      type="button"
                    >
                      Show more
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <aside className="lg:col-span-4">
              <h2 className="text-base font-medium mb-4">Similar videos</h2>
              <div id="similarVideos" className="space-y-3" aria-live="polite">
                {similerVideos.length > 0 ? (
                  similerVideos.map((simVideo, index) => (
                    <Link
                      key={`${simVideo.videoTitle}-${index}`}
                      href={`/video/${encodeURIComponent(simVideo.videoTitle)}`}
                      className="group flex gap-3 rounded-xl hover:bg-white/5 transition-colors p-2 -m-2"
                    >
                      <div className="relative w-40 sm:w-44 aspect-video shrink-0 rounded-xl overflow-hidden bg-[#262626] ring-1 ring-white/5">
                        <Image
                          src={simVideo.thumbnailURL}
                          alt={simVideo.videoTitle}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0"></div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                          {simVideo.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm leading-tight line-clamp-2 group-hover:text-[#e50914] transition-colors">
                          {simVideo.videoTitle}
                        </p>
                        <p className="text-xs text-gray-400 mt-1 truncate">
                          {simVideo.channelName}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                          <span>{simVideo.views} views</span>
                          <span>•</span>
                          <span>{simVideo.publishedDate}</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">
                    No similar videos found.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Detailspage;
