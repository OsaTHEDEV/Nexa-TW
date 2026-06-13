import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import { APPS_DATA, BRAND, STUDIO_VALUES } from "../data";

function hasStoreLink(appStoreUrl: string) {
  return appStoreUrl.trim().length > 0;
}

export default function Home() {
  const telliTales = APPS_DATA.find((app) => app.id === "tellitales");
  const telliTalesHeroImage =
    telliTales?.screenshots[1] ?? telliTales?.heroImage;

  return (
    <div className="overflow-hidden">
      <section className="hero-shell relative">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="hero-spark hero-spark-one" />
        <div className="hero-spark hero-spark-two" />
        <div className="hero-spark hero-spark-three" />
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <div className="hero-reveal inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-soft)]">
              <Sparkles size={14} />
              TelliTales
            </div>

            <h1 className="hero-reveal hero-delay-1 mt-8 max-w-3xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Magical bedtime stories that feel personal, warm, and a little bit
              dreamy.
            </h1>

            <p className="hero-reveal hero-delay-2 mt-6 max-w-2xl text-lg leading-8 text-[var(--color-soft)]">
              Personalized adventures for children ages 3-10, with narrated
              stories, playful learning, and gentle AI that helps parents turn
              story time into a ritual kids ask for again and again.
            </p>

            <div className="hero-reveal hero-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/apps/tellitales"
                className="hero-button inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-bg)] transition"
              >
                Explore TelliTales <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="hero-button hero-button--ghost inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/6 px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] transition"
              >
                Talk to Support <WandSparkles size={16} />
              </a>
            </div>

            <div className="hero-reveal hero-delay-4 mt-10 flex flex-wrap gap-3 text-sm text-[var(--color-soft)]">
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                Narrated story chapters
              </span>
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                Parent-managed experience
              </span>
              <span className="rounded-full border border-white/10 bg-white/6 px-4 py-2">
                Gentle learning moments
              </span>
            </div>
          </div>

          <div className="hero-reveal hero-delay-2 relative z-10 flex justify-center lg:justify-end">
            <div className="hero-preview-shell">
              <div className="hero-preview-glow" />
              <div className="hero-preview">
                <div className="hero-preview__topbar">
                  <span className="hero-preview__pill" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
                    TelliTales app preview
                  </span>
                  <span className="hero-preview__pill hero-preview__pill--soft" />
                </div>

                <div className="hero-preview__frame">
                  {telliTalesHeroImage ? (
                    <img
                      src={telliTalesHeroImage}
                      alt="TelliTales app preview"
                      className="hero-preview__image"
                    />
                  ) : null}
                  <div className="hero-preview__badge">
                    <Sparkles size={14} />
                    Screenshot 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="section-heading">
          <div className="section-kicker">Apps</div>
          <h2 className="section-title">Explore the current Nexa TechWave products</h2>
          <p className="section-copy">
            Each app has a dedicated marketing page plus direct access to support,
            privacy, and terms.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {APPS_DATA.map((app, index) => (
            <motion.article
              key={app.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="app-card group"
            >
              <div className={`app-card__accent bg-gradient-to-br ${app.accent}`} />
              <img
                src={app.heroImage}
                alt={app.name}
                className="app-card__image"
              />
              <div className="app-card__body">
                <div className="mb-5 flex items-center gap-4">
                  <img
                    src={app.logoUrl}
                    alt=""
                    className="h-14 w-14 rounded-2xl object-cover"
                  />
                  <div>
                    <div className="font-display text-2xl font-semibold">
                      {app.name}
                    </div>
                    <div className="text-sm text-[var(--color-muted)]">
                      {app.category}
                    </div>
                  </div>
                </div>

                <p className="text-base leading-7 text-[var(--color-muted)]">
                  {app.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {app.platforms.map((platform) => (
                    <span key={platform} className="chip">
                      {platform}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <Link
                    to={`/apps/${app.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text)] transition group-hover:text-[var(--color-brand)]"
                  >
                    View app page <ArrowRight size={16} />
                  </Link>
                  {hasStoreLink(app.appStoreUrl) ? (
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-brand)] hover:text-[var(--color-bg)]"
                    >
                      {app.storeLabel}
                    </a>
                  ) : (
                    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-muted)]">
                      {app.storeLabel}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {STUDIO_VALUES.map((value) => (
            <div key={value.title} className="feature-panel">
              <div className="mb-4 inline-flex rounded-2xl bg-[var(--color-brand-soft)] p-3 text-[var(--color-brand)]">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-2xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="support" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="support-banner">
          <div>
            <div className="section-kicker">Support</div>
            <h2 className="section-title mt-3">
              Public support and legal pages are available for every app.
            </h2>
            <p className="section-copy mt-4 max-w-2xl">
              If you need help, send us an email and we will point you to the
              correct product page or help directly.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
              General contact
            </div>
            <a
              href={`mailto:${BRAND.supportEmail}`}
              className="mt-3 block font-display text-2xl font-semibold text-[var(--color-text)]"
            >
              {BRAND.supportEmail}
            </a>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              For app-specific help, each app page includes its own support route,
              privacy policy, and terms of service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
