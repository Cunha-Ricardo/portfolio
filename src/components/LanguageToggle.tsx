import type { Locale } from "../data/portfolio";

type LanguageToggleProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageToggle({ locale, onChange }: LanguageToggleProps) {
  return (
    <div className="language-toggle" aria-label="Language selector">
      <button
        type="button"
        className={locale === "en" ? "is-active" : ""}
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={locale === "pt" ? "is-active" : ""}
        onClick={() => onChange("pt")}
        aria-pressed={locale === "pt"}
      >
        PT
      </button>
    </div>
  );
}
