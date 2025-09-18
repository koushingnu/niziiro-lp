import siteData from "../data/site.json";

export function MVEmbed() {
  return (
    <div className="aspect-video">
      <iframe
        src={siteData.mv.embedUrl}
        title={siteData.mv.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
