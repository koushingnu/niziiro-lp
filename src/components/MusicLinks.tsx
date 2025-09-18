import siteData from "../data/site.json";

export function MusicLinks() {
  return (
    <div className="space-y-8">
      {/* アーティストリンク */}
      <div className="card text-center">
        <h3 className="text-lg font-medium mb-4">Artist Page</h3>
        <a
          href={siteData.music.artist}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Apple Music で聴く
          <span className="sr-only">（新しいタブで開く）</span>
        </a>
      </div>

      {/* 楽曲リンク */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-center">Songs</h3>
        {siteData.music.songs.map((song) => (
          <div key={song.title} className="card">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-medium">{song.title}</h4>
              <a
                href={song.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                再生
                <span className="sr-only">
                  {song.title}を Apple Music で再生（新しいタブで開く）
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
