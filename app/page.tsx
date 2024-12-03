import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-1 justify-center   p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="max-w-[600px] -mt-14 text-center">
          <h1 className="text-4xl font-medium">
            Build Better UI, Effortlessly
          </h1>
          <p className="text-base mt-4">
            Free and open-source components crafted for modern React apps.
            Powered by Tailwind CSS, Framer Motion, Dex-UI is perfect for
            developers and designers looking to bring life to their interfaces
          </p>
          <p className="mt-10">
            <Link
              href="/docs"
              className="bg-zinc-900 text-white px-4 py-2 rounded-xl transition-colors duration-200"
            >
              Documents
            </Link>
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
