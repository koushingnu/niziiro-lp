import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { NewsList } from "../components/NewsList";
import { ProfileGrid } from "../components/ProfileGrid";
import { AboutSection } from "../components/AboutSection";
import { MusicLinks } from "../components/MusicLinks";
import { MVEmbed } from "../components/MVEmbed";
import { ContactBlock } from "../components/ContactBlock";
import { TimeTreeSection } from "../components/TimeTreeSection";
import { getNews } from "../lib/news";

export default async function Home() {
  const news = await getNews();

  return (
    <main>
      <Hero />

      <Section id="news" title="NEWS">
        <NewsList items={news} />
      </Section>

      <Section id="profile" title="PROFILE">
        <ProfileGrid />
      </Section>

      <Section id="about" title="ABOUT">
        <AboutSection />
      </Section>

      <Section id="music" title="MUSIC">
        <MusicLinks />
      </Section>

      <Section id="mv" title="MUSIC VIDEO">
        <MVEmbed />
      </Section>

      <TimeTreeSection />

      <Section id="contact" title="CONTACT">
        <ContactBlock />
      </Section>
    </main>
  );
}
