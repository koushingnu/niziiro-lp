import siteData from "../data/site.json";

export function AboutSection() {
  return (
    <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
      <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
        {siteData.about}
      </p>
    </div>
  );
}
