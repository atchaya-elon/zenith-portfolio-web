const audits = [
  { id: 63, product: "Berachain", report: "" },
  { id: 62, product: "Gondi", report: "" },
  { id: 61, product: "Holograph", report: "" },
  { id: 60, product: "Fractality", report: "" },
  { id: 59, product: "Sofa", report: "" },
  { id: 58, product: "Echelon", report: "" },
  { id: 57, product: "Nibiru", report: "" },
  { id: 56, product: "GMX", report: "" },
  { id: 55, product: "Bitmind", report: "" },
  { id: 54, product: "Ebisu", report: "" },
  { id: 53, product: "Gondi", report: "" },
  { id: 52, product: "Virtuals", report: "" },
  { id: 51, product: "The Farm", report: "" },
  { id: 50, product: "MyShell", report: "" },
  { id: 49, product: "Diambra", report: "" },
  { id: 48, product: "Shogun", report: "" },
  { id: 47, product: "Pie.fun", report: "" },
  { id: 46, product: "Solera", report: "" },
  { id: 45, product: "Print World", report: "" },
  { id: 44, product: "Autonomous Finance", report: "" },
  { id: 43, product: "SSI Protocol", report: "" },
  { id: 42, product: "Corn", report: "" },
  { id: 41, product: "Saga", report: "" },
  { id: 40, product: "Moxie - referral awards", report: "" },
  { id: 39, product: "Ethena", report: "" },
  { id: 38, product: "Ramses", report: "" },
  { id: 37, product: "Traitforge", report: "/reports/2024-10-traitforge-zenith.pdf" },
  { id: 36, product: "Kakarot", report: "" },
  { id: 35, product: "Bubblemaps", report: "" },
  { id: 34, product: "Cega", report: "" },
  { id: 33, product: "Legion Solana", report: "/reports/2024-09-legion-solana-zenith.pdf" },
  { id: 32, product: "Ulti", report: "" },
  { id: 31, product: "Gondi", report: "/reports/2024-10-gondi-zenith.pdf" },
  { id: 30, product: "Thrackle", report: "" },
  { id: 29, product: "Sofa", report: "/reports/2024-10-sofa-zenith.pdf" },
  { id: 28, product: "4Real Finance", report: "/reports/2024-10-4real-zenith.pdf" },
  { id: 27, product: "Jupiter", report: "" },
  { id: 26, product: "Jupiter", report: "" },
  { id: 25, product: "Nibiru", report: "" },
  { id: 24, product: "Amplified", report: "/reports/2024-09-amplified-zenith.pdf" },
  { id: 23, product: "Pooltogether", report: "/reports/2024-10-pooltogether-zenith.pdf" },
  { id: 22, product: "NameSpace", report: "/reports/2024-10-namespace-zenith.pdf" },
  { id: 21, product: "Ulti", report: "/reports/2024-09-ulti-zenith.pdf" },
  { id: 20, product: "Ramses Consulting", report: "" },
  { id: 19, product: "Gondi", report: "/reports/2024-09-gondi-zenith.pdf" },
  { id: 18, product: "Legion EVM", report: "/reports/2024-09-legion-evm-zenith.pdf" },
  { id: 17, product: "Thrackle", report: "" },
  { id: 16, product: "LIQ Markets", report: "/reports/2024-09-liq-zenith.pdf" },
  { id: 15, product: "XDEFI", report: "/reports/2024-08-xdefi-zenith.pdf" },
  { id: 14, product: "Fractality", report: "/reports/2024-08-fractality-zenith.pdf" },
  { id: 13, product: "Celo", report: "/reports/2024-07-celo-zenith.pdf" },
  { id: 12, product: "Moxie", report: "/reports/2024-09-moxie-zenith-3.pdf" },
  { id: 11, product: "Gemnify", report: "/reports/2024-07-gemnify-zenith.pdf" },
  { id: 10, product: "Playfi", report: "/reports/2024-06-playfi-zenith.pdf" },
  { id: 9, product: "Moxie", report: "/reports/2024-07-moxie-zenith.pdf" },
  { id: 8, product: "Moxie", report: "/reports/2024-06-moxie-zenith.pdf" },
  { id: 7, product: "Tornado Blast - Rocket Launcher", report: "/reports/2024-06-tornado-launcher-zenith.pdf" },
  { id: 6, product: "Tornado Blast", report: "/reports/2024-06-tornadoblast-zenith.pdf" },
  { id: 5, product: "Strateg", report: "/reports/2024-06-strateg-zenith.pdf" },
  { id: 4, product: "Karak", report: "/reports/2024-06-karak-zenith.pdf" },
  { id: 3, product: "Agent", report: "/reports/2024-05-agent-zenith.pdf" },
  { id: 2, product: "Sofa", report: "/reports/2024-05-agent-zenith.pdf" },
  { id: 1, product: "Album", report: "" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100 px-4 py-10 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Intro */}
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400 mb-3">
            Zenith Audit Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Smart contract security audits by Zenith
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl">
            A curated list of protocols we&apos;ve worked with across DeFi, infra,
            and L2 ecosystems. Reports are published in collaboration with teams
            through public PDFs.
          </p>
        </header>

        {/* Table card */}
        <section className="rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-black/70 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-zinc-800/70">
            <h2 className="text-sm font-medium text-gray-300">Audit Reports</h2>
            <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {audits.length} engagements
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-sm">
              <thead className="bg-zinc-900/90">
                <tr>
                  <th className="px-4 py-3 text-left w-14 text-zinc-400 font-medium">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-zinc-400 font-medium">
                    Product
                  </th>
                  <th className="px-4 py-3 text-left text-zinc-400 font-medium">
                    Report
                  </th>
                </tr>
              </thead>
              <tbody>
                {audits.map((row) => (
                  <tr
                    key={row.id}
                    className="border-t border-zinc-800/80 hover:bg-zinc-900/50 transition-colors"
                  >
                    <td className="px-4 py-2 text-zinc-500">{row.id}</td>
                    <td className="px-4 py-2">{row.product}</td>
                    <td className="px-4 py-2">
                      {row.report ? (
                        <a
                          href={row.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-[11px] font-medium text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-400 transition-colors"
                        >
                          <span>📋 View report</span>
                        </a>
                      ) : (
                        <span className="text-[11px] text-zinc-600">
                          Coming soon
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-[11px] text-zinc-500">
          Last updated from the public Zenith portfolio list.
        </footer>
      </div>
    </main>
  );
}