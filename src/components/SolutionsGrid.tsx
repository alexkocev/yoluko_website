import { Bell, Check } from "lucide-react";

export const SolutionsGrid = () => {
  return (
    <section id="solutions" className="py-24 px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-headline font-black tracking-tight mb-6">
              Omnichannel <span className="text-primary">Intelligence</span>
            </h2>
            <p className="text-on-surface-variant text-lg">
              If it involves repetitive tasks, we can automate it. Custom-built from scratch, not off-the-shelf.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[750px]">
          {/* On-demand AI Business Analyst - Large Card */}
          <div className="md:col-span-2 md:row-span-2 bg-surface-container border border-outline-variant/10 rounded-xl p-8 flex flex-col group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="mb-8 relative">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-label font-black uppercase tracking-widest mb-4 inline-block">
                Strategy
              </span>
              <h3 className="text-3xl font-headline font-bold mb-4">
                On-demand AI Business Analyst
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Ask any strategic question about your business and get instant, data-backed answers.
              </p>
            </div>
            <div className="flex-grow flex items-center justify-center w-full relative group-hover:scale-105 transition-transform duration-700">
              <div className="w-full max-w-md h-auto p-4 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#ffdd7c]" />
                    <div className="h-3 w-32 bg-white/10 rounded-full" />
                  </div>
                  <div className="px-3 py-1 bg-primary/20 rounded text-xs text-primary font-black tracking-tighter border border-primary/30">
                    LIVE FEED
                  </div>
                </div>
                <div className="relative h-64 w-full">
                  <svg
                    className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 400 200"
                  >
                    <defs>
                      <linearGradient
                        id="chart-grad"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#ffdd7c"
                          stopOpacity="0.4"
                        />
                        <stop
                          offset="100%"
                          stopColor="#ffdd7c"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,200 L0,160 C40,155 60,140 100,100 C140,60 150,110 200,120 C250,130 260,50 300,30 C340,10 370,70 400,80 L400,200 Z"
                      fill="url(#chart-grad)"
                    />
                    <path
                      className="animate-flow-line"
                      d="M0,160 C40,155 60,140 100,100 C140,60 150,110 200,120 C250,130 260,50 300,30 C340,10 370,70 400,80"
                      fill="none"
                      stroke="#ffdd7c"
                      strokeLinecap="round"
                      strokeWidth="3"
                      strokeDasharray="10"
                    />
                    <circle
                      className="drop-shadow-[0_0_12px_rgba(255,221,124,0.9)]"
                      cx="100"
                      cy="100"
                      fill="#ffdd7c"
                      r="5"
                    />
                    <circle
                      className="drop-shadow-[0_0_12px_rgba(255,221,124,0.9)]"
                      cx="300"
                      cy="30"
                      fill="#ffdd7c"
                      r="5"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-2 bg-primary/40 rounded-full" />
                  <div className="h-2 bg-white/5 rounded-full" />
                  <div className="h-2 bg-white/5 rounded-full" />
                  <div className="h-2 bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* AI Social Media Manager */}
          <div className="md:col-span-2 bg-surface-container border border-outline-variant/10 rounded-xl p-8 flex flex-col md:flex-row gap-8 group overflow-hidden relative items-center">
            <div className="flex-grow text-left order-2 md:order-1">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded text-[10px] font-label font-black uppercase tracking-widest mb-4 inline-block">
                Marketing
              </span>
              <h3 className="text-2xl font-headline font-bold mb-3">
                AI Social Media Manager
              </h3>
              <p className="text-on-surface-variant">
                Maintain your social presence consistently without the daily grind. Boost engagement while cutting content creation time by 75%.
              </p>
            </div>
            <div className="flex-shrink-0 w-48 h-48 order-1 md:order-2 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
              <div className="relative w-28 h-36 bg-surface-container-highest border border-white/10 rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] p-4 flex flex-col gap-4">
                <div className="w-full h-2 bg-secondary/40 rounded-full animate-record-pulse" />
                <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                <div className="mt-auto flex items-center justify-between">
                  <div className="w-10 h-6 bg-secondary/20 border border-secondary/40 rounded flex items-center justify-center">
                    <Check className="h-3 w-3 text-secondary" />
                  </div>
                  <div className="w-6 h-2 bg-white/5 rounded-full" />
                </div>
                <div className="absolute -right-4 -top-4 w-12 h-12 rounded-full bg-secondary shadow-2xl shadow-secondary/40 flex items-center justify-center border-4 border-surface animate-bounce animate-soft-glow">
                  <Bell className="h-5 w-5 text-on-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* Automated Reconciliation Specialist */}
          <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-8 flex flex-col group relative overflow-hidden items-center text-center">
            <div className="flex-grow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <div className="w-32 h-32 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center relative shadow-inner">
                <div className="w-20 h-20 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_#ffdd7c]" />
                    <div className="flex-grow h-2 bg-primary/20 rounded-full" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-12 bg-white/10 rounded-full" />
                      <div className="h-2 w-6 bg-primary/40 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-8 bg-white/10 rounded-full" />
                      <div className="h-2 w-10 bg-primary/40 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-14 bg-white/10 rounded-full" />
                      <div className="h-2 w-4 bg-primary/40 rounded-full" />
                    </div>
                  </div>
                  <div className="h-[2px] w-full bg-white/10 mt-2" />
                </div>
              </div>
            </div>
            <div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-label font-black uppercase tracking-widest mb-3 inline-block">
                Accounting
              </span>
              <h3 className="text-xl font-headline font-bold mb-2">
                Automated Reconciliation Specialist
              </h3>
              <p className="text-on-surface-variant text-sm">
                Weeks of transactions reconciled in minutes. 99.8% accuracy.
              </p>
            </div>
          </div>

          {/* Live Operations Monitor */}
          <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-8 flex flex-col group relative overflow-hidden items-center text-center">
            <div className="flex-grow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <div className="w-32 h-32 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center relative shadow-inner">
                <div className="relative w-20 h-20">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/10 border-t-primary animate-[spin_8s_linear_infinite]" />
                  <div className="absolute inset-3 rounded-full border-2 border-white/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border-2 border-primary/30 rotate-45">
                      <div className="w-3 h-3 rounded-full bg-primary -rotate-45 shadow-[0_0_15px_rgba(255,221,124,0.9)]" />
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full bg-primary border-4 border-surface shadow-[0_0_12px_rgba(255,221,124,0.6)]" />
                </div>
              </div>
            </div>
            <div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded text-[10px] font-label font-black uppercase tracking-widest mb-3 inline-block">
                Operations
              </span>
              <h3 className="text-xl font-headline font-bold mb-2">
                Live Operations Monitor
              </h3>
              <p className="text-on-surface-variant text-sm">
                Real-time Slack or email alerts before small issues become big problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
