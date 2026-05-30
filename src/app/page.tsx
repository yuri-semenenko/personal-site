import { getContent } from "@/content";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const { profile, navigation } = getContent("en");

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-mono text-sm text-foreground">
            {navigation.logo}
          </span>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex flex-1 items-center">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-mono text-sm text-muted-foreground">
            {profile.location}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.statuses.map((status) => (
              <span
                key={status.label}
                className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-foreground"
              >
                {status.label}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Foundation in place. Full landing page coming in Phase 1B.
          </p>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </footer>
    </div>
  );
}
