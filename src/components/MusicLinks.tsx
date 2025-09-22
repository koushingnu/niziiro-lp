import siteData from "../data/site.json";

export function MusicLinks() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* アーティストリンク */}
      <div className="group relative bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* カラーアクセント */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-pink-500" />

        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Artist Page</h3>
          <a
            href={siteData.music.artist}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white rounded-full font-medium transition-transform duration-300 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
            Apple Music で聴く
            <span className="sr-only">（新しいタブで開く）</span>
          </a>
        </div>

        {/* デコレーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5 pointer-events-none" />
      </div>

      {/* 楽曲リンク */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold mb-6">Latest Songs</h3>
        {siteData.music.songs.map((song) => (
          <div
            key={song.title}
            className="group relative bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* カラーアクセント */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:w-2 transition-all duration-300" />

            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {song.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">NiziIRO ぱれっと</p>
                </div>
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full transition-transform duration-300 group-hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span className="sr-only">
                    {song.title}を Apple Music で再生（新しいタブで開く）
                  </span>
                </a>
              </div>
            </div>

            {/* デコレーション */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
        ))}

        {/* Apple Music埋め込みプレイヤー */}
        <div className="mt-8 rounded-2xl overflow-hidden shadow-soft bg-white">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={`https://embed.music.apple.com/jp/artist/${siteData.music.artist.split("/").pop()}`}
          />
        </div>
      </div>
    </div>
  );
}
