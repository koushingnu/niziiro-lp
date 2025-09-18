import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}
