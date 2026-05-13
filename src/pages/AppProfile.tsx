import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeHelp,
  FileText,
  Shield,
  X,
} from "lucide-react";
import { APPS_DATA, BRAND } from "../data";

function hasStoreLink(appStoreUrl: string) {
  return appStoreUrl.trim().length > 0;
}

export default function AppProfile() {
  const { appId } = useParams();
  const app = APPS_DATA.find((entry) => entry.id === appId);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!app || activeScreenshotIndex === null) {
      return undefined;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveScreenshotIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveScreenshotIndex((current) =>
          current === null ? current : (current + 1) % app.screenshots.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveScreenshotIndex((current) =>
          current === null
            ? current
            : (current - 1 + app.screenshots.length) % app.screenshots.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeScreenshotIndex, app]);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  const activeScreenshot =
    activeScreenshotIndex === null ? null : app.screenshots[activeScreenshotIndex];

  function openScreenshot(index: number) {
    setActiveScreenshotIndex(index);
  }

  function closeLightbox() {
    setActiveScreenshotIndex(null);
  }

  function showNextScreenshot() {
    setActiveScreenshotIndex((current) =>
      current === null ? 0 : (current + 1) % app.screenshots.length,
    );
  }

  function showPreviousScreenshot() {
    setActiveScreenshotIndex((current) =>
      current === null
        ? app.screenshots.length - 1
        : (current - 1 + app.screenshots.length) % app.screenshots.length,
    );
  }

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
        >
          <ArrowLeft size={16} />
          Back to all apps
        </Link>

        <section className="mt-8 grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className={`h-64 bg-gradient-to-br ${app.accent}`} />
              <img
                src={app.heroImage}
                alt={app.name}
                className="absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={app.logoUrl}
                    alt={`${app.name} logo`}
                    className="h-20 w-20 rounded-[1.5rem] border border-white/30 object-cover shadow-xl"
                  />
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                      {app.category}
                    </div>
                    <h1 className="mt-2 font-display text-4xl font-semibold text-white sm:text-5xl">
                      {app.name}
                    </h1>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-white/85">
                      {app.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[var(--color-border)] bg-white/70 p-8">
              <div className="section-kicker">Overview</div>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                Built and published by {BRAND.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {app.description}
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                {app.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.id}
                      className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
                    >
                      <div className="inline-flex rounded-2xl bg-[var(--color-brand-soft)] p-3 text-[var(--color-brand)]">
                        <Icon size={18} />
                      </div>
                      <h3 className="mt-4 font-display text-xl font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <div className="section-kicker">Screens</div>
              <h2 className="mt-3 font-display text-3xl font-semibold">
                A quick look at the product
              </h2>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                Tap any screen to view the full image.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {app.screenshots.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => openScreenshot(index)}
                    className="group overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] text-left transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2"
                    aria-label={`Open ${app.name} screenshot ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${app.name} screenshot ${index + 1}`}
                      className="h-[28rem] w-full bg-[var(--color-surface)] object-contain transition group-hover:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                App details
              </div>
              <div className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
                <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
                  <span>Publisher</span>
                  <span className="font-semibold text-[var(--color-text)]">
                    {BRAND.name}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
                  <span>Category</span>
                  <span className="font-semibold text-[var(--color-text)]">
                    {app.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
                  <span>Platforms</span>
                  <span className="font-semibold text-[var(--color-text)]">
                    {app.platforms.join(", ")}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Support</span>
                  <a
                    href={`mailto:${app.supportEmail}`}
                    className="font-semibold text-[var(--color-brand)]"
                  >
                    Email us
                  </a>
                </div>
              </div>

              {hasStoreLink(app.appStoreUrl) ? (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
                >
                  {app.storeLabel} <ArrowUpRight size={16} />
                </a>
              ) : (
                <div className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-600">
                  {app.storeLabel}
                </div>
              )}
            </div>

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-white/70 p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Important links
              </div>
              <div className="mt-5 space-y-3">
                <Link to={`/apps/${app.id}/support`} className="utility-link">
                  <BadgeHelp size={16} />
                  Support page
                </Link>
                <Link to={`/apps/${app.id}/privacy`} className="utility-link">
                  <Shield size={16} />
                  Privacy policy
                </Link>
                <Link to={`/apps/${app.id}/terms`} className="utility-link">
                  <FileText size={16} />
                  Terms of use
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Support contact
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                {app.supportIntro}
              </p>
              <a
                href={`mailto:${app.supportEmail}`}
                className="mt-5 block font-display text-2xl font-semibold text-[var(--color-text)]"
              >
                {app.supportEmail}
              </a>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {app.supportResponseTime}
              </p>
            </div>
          </aside>
        </section>
      </div>

      {activeScreenshot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${app.name} screenshot viewer`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:right-6 sm:top-6"
            aria-label="Close screenshot viewer"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousScreenshot();
            }}
            className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:left-6"
            aria-label="Previous screenshot"
          >
            <ArrowLeft size={20} />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeScreenshot}
              alt={`${app.name} screenshot ${activeScreenshotIndex! + 1}`}
              className="mx-auto max-h-[85vh] w-auto max-w-full rounded-[2rem] border border-white/10 bg-slate-900 object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-sm font-medium text-white/80">
              Screenshot {activeScreenshotIndex! + 1} of {app.screenshots.length}
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextScreenshot();
            }}
            className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 sm:right-6"
            aria-label="Next screenshot"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}
