type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
