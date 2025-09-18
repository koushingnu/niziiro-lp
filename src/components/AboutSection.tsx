import siteData from "../data/site.json";

export function AboutSection() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-lg md:text-xl leading-relaxed">{siteData.about}</p>
    </div>
  );
}
