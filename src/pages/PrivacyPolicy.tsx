import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { APPS_DATA, BRAND } from "../data";

export default function PrivacyPolicy() {
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
        <div className="section-kicker">Privacy</div>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {app.name} privacy policy
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--color-muted)]">
          This page describes how {BRAND.name} handles privacy expectations for{" "}
          {app.name}.
        </p>

        <div className="legal-shell mt-10">
          <ReactMarkdown>{app.privacyPolicy}</ReactMarkdown>
        </div>
      </section>
    </div>
  );
}
