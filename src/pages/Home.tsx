import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, LifeBuoy, Sparkles } from "lucide-react";
import { APPS_DATA, BRAND, STUDIO_VALUES } from "../data";

function hasStoreLink(appStoreUrl: string) {
  return appStoreUrl.trim().length > 0;
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr,0.8fr] lg:px-8 lg:py-28">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
            >
              <Sparkles size={14} />
              Nexa TechWave Publisher Site
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-8 max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl"
            >
              Mobile apps with clear purpose, calm design, and public support pages that are easy to trust.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
            >
              {BRAND.name} is the home for our mobile products, product updates,
              support contacts, privacy policies, and terms of use. Each app has a
              dedicated page so users and App Store reviewers can quickly find the
              right information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#apps"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
              >
                Explore Apps <ArrowRight size={16} />
              </a>
              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[var(--color-text)] transition hover:bg-white"
              >
                Contact Support <LifeBuoy size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-panel relative overflow-hidden rounded-[2rem] p-7"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Publisher Overview
                </div>
                <div className="mt-2 font-display text-2xl font-semibold">
                  {BRAND.name}
                </div>
              </div>
              <div className="rounded-full bg-[var(--color-brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
                {APPS_DATA.length} apps
              </div>
            </div>

            <div className="space-y-4">
              {APPS_DATA.map((app) => (
                <div
                  key={app.id}
                  className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/75 p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={app.logoUrl}
                      alt={`${app.name} logo`}
                      className="h-14 w-14 rounded-2xl object-cover"
                    />
                    <div className="min-w-0">
                      <div className="font-display text-lg font-semibold">
                        {app.name}
                      </div>
                      <div className="text-sm text-[var(--color-muted)]">
                        {app.shortDescription}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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
                      className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-brand)] hover:text-white"
                    >
                      {app.storeLabel}
                    </a>
                  ) : (
                    <span className="rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--color-muted)]">
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

          <div className="rounded-[1.5rem] bg-white/80 p-6">
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
              privacy policy, and terms of use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
