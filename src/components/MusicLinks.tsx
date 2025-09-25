import siteData from "../data/site.json";

export function MusicLinks() {
  const releases = [
    {
      title: "HAPPY EVER AFTER",
      releaseDate: "2025.2.14",
      type: "Single",
      embedId: "1805093925?i=1805093926",
    },
    {
      title: "Love At First Sight",
      releaseDate: "2024.12.20",
      type: "Single",
      embedId: "1647296638",
    },
    {
      title: "Palesentte",
      releaseDate: "2023.11.1",
      type: "Single",
      embedId: "1647296638",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 最新リリース */}
      <div className="bg-white/95 rounded-2xl shadow-lg overflow-hidden">
        <div className="relative">
          {/* カラーアクセント */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-pink-500" />

          <div className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-2xl font-bold">{releases[0].title}</h4>
              <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                Latest Release
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              {releases[0].releaseDate} - {releases[0].type}
            </p>
            <div className="rounded-lg overflow-hidden bg-black/5">
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                height="200"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  background: "transparent",
                  border: 0,
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={`https://embed.music.apple.com/jp/album/${releases[0].embedId}?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
