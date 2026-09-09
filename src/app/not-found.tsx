import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="font-mono text-xs tracking-[0.35em] text-cyan-300 uppercase">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-balance text-white sm:text-4xl">This page is not in the product.</h1>
      <p className="mt-3 max-w-md text-sm text-zinc-400">
        The route does not exist. Head home, or open services and pick a capability.
      </p>
      <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Link href="/" className="btn-primary rounded-full px-6 py-3.5 text-sm sm:py-3">
          Home
        </Link>
        <Link href="/services" className="btn-ghost rounded-full px-6 py-3.5 text-sm text-white sm:py-3">
          Services
        </Link>
      </div>
    </main>
  );
}
