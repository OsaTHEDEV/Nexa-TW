import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Shield, FileText } from "lucide-react";
import { APPS_DATA, BRAND } from "../data";

function hasStoreLink(appStoreUrl: string) {
  return appStoreUrl.trim().length > 0;
}

export default function Support() {
  const { appId } = useParams();
  const app = APPS_DATA.find((entry) => entry.id === appId);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <Link
        to={`/apps/${app.id}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
      >
        <ArrowLeft size={16} />
        Back to {app.name}
      </Link>

      <section className="mt-8 rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
        <div className="section-kicker">Support</div>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {app.name} support
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
          {app.supportIntro}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="inline-flex rounded-2xl bg-[var(--color-brand-soft)] p-3 text-[var(--color-brand)]">
              <Mail size={18} />
            </div>
            <div className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Contact
            </div>
            <a
              href={`mailto:${app.supportEmail}`}
              className="mt-3 block font-display text-2xl font-semibold text-[var(--color-text)]"
            >
              {app.supportEmail}
            </a>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {app.supportResponseTime}
            </p>
            <p className="mt-6 text-sm leading-7 text-[var(--color-muted)]">
              You can also contact the publisher directly at{" "}
              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="font-semibold text-[var(--color-brand)]"
              >
                {BRAND.supportEmail}
              </a>
              .
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Helpful links
            </div>
            <div className="mt-5 space-y-3">
              <Link to={`/apps/${app.id}/privacy`} className="utility-link">
                <Shield size={16} />
                Privacy policy
              </Link>
              <Link to={`/apps/${app.id}/terms`} className="utility-link">
                <FileText size={16} />
                Terms of service
              </Link>
              {hasStoreLink(app.appStoreUrl) ? (
                <a
                  href={app.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="utility-link"
                >
                  <Mail size={16} />
                  Open App Store page
                </a>
              ) : (
                <div className="utility-link cursor-default opacity-70">
                  <Mail size={16} />
                  {app.storeLabel}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2.25rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-10">
        <div className="section-kicker">FAQ</div>
        <h2 className="mt-3 font-display text-3xl font-semibold">
          Common questions
        </h2>
        <div className="mt-8 space-y-4">
          {app.supportFaq.map((item) => (
            <div
              key={item.id}
            className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="font-display text-xl font-semibold">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
