import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, AppWindow } from "lucide-react";
import { useEffect, useState } from "react";
import { APPS_DATA, BRAND } from "../data";

const navigation = [
  { label: "Apps", href: "/#apps", type: "anchor" as const },
  { label: "Support", href: "/#support", type: "anchor" as const },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(248,246,239,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-brand)] text-white shadow-[0_12px_30px_rgba(9,53,64,0.18)]">
              <AppWindow size={18} />
            </div>
            <div>
              <div className="font-display text-lg font-semibold tracking-tight">
                {BRAND.name}
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                App Publisher
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) =>
              item.type === "anchor" && isHome ? (
                <a
                  key={item.label}
                  href={item.href.slice(1)}
                  className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              ),
            )}

            <a
              href={`mailto:${BRAND.supportEmail}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-strong)]"
            >
              Contact Support <ArrowUpRight size={16} />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex rounded-full border border-[var(--color-border)] bg-white p-2 text-[var(--color-text)] md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
              {navigation.map((item) =>
                item.type === "anchor" && isHome ? (
                  <a
                    key={item.label}
                    href={item.href.slice(1)}
                    className="text-sm font-medium text-[var(--color-text)]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-sm font-medium text-[var(--color-text)]"
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand)] px-4 py-3 text-sm font-semibold text-white"
              >
                Contact Support <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr,1fr,1fr] lg:px-8">
          <div className="max-w-md">
            <div className="mb-4 font-display text-2xl font-semibold tracking-tight">
              {BRAND.name}
            </div>
            <p className="text-sm leading-7 text-[var(--color-muted)]">
              {BRAND.description}
            </p>
            <div className="mt-5 text-sm text-[var(--color-muted)]">
              <a
                href={`mailto:${BRAND.email}`}
                className="transition hover:text-[var(--color-text)]"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Apps
            </div>
            <div className="flex flex-col gap-3">
              {APPS_DATA.map((app) => (
                <NavLink
                  key={app.id}
                  to={`/apps/${app.id}`}
                  className="text-sm text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
                >
                  {app.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Support
            </div>
            <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)]">
              <a
                href={`mailto:${BRAND.supportEmail}`}
                className="transition hover:text-[var(--color-text)]"
              >
                {BRAND.supportEmail}
              </a>
              <span>{BRAND.domain}</span>
              <span>App marketing, support, privacy, and terms in one place.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
