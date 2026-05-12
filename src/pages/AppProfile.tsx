import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BadgeHelp, Shield, FileText } from "lucide-react";
import { APPS_DATA, BRAND } from "../data";

function hasStoreLink(appStoreUrl: string) {
  return appStoreUrl.trim().length > 0;
}

export default function AppProfile() {
  const { appId } = useParams();
  const app = APPS_DATA.find((entry) => entry.id === appId);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  return (
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
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {app.screenshots.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${app.name} screenshot ${index + 1}`}
                  className="h-[28rem] w-full rounded-[1.75rem] border border-[var(--color-border)] object-cover"
                />
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
  );
}
