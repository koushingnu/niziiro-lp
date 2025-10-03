import { memo } from "react";
import { Section } from "./Section";

const TimeTreeSection = memo(function TimeTreeSection() {
  return (
    <Section id="schedule" title="SCHEDULE" className="bg-white/95">
      <div className="w-full max-w-5xl mx-auto">
        <iframe
          title="カレンダー"
          src="https://timetreeapp.com/public_calendars/nizi_pale_info/embed/monthly?calendar_name=true&frame_color=%232ecc87"
          style={{
            width: "100%",
            minHeight: "700px",
            aspectRatio: "680/720",
            border: "none",
          }}
        />
      </div>
    </Section>
  );
});

export { TimeTreeSection };
