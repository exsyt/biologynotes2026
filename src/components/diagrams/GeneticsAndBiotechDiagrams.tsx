import React, { useState } from 'react';

export const ReproductionDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flower' | 'menstrual'>('flower');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-pink-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>
            Floral Anatomy & The 28-Day Menstrual Cycle
          </h4>
          <p className="text-xs text-slate-400">Insect-pollinated flower reproductive organs and hormonal cyclic regulation</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('flower')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'flower' ? 'bg-pink-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Flower Structure
          </button>
          <button
            onClick={() => setActiveTab('menstrual')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'menstrual' ? 'bg-pink-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Menstrual Hormones
          </button>
        </div>
      </div>

      {activeTab === 'flower' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 420 280" className="w-full max-w-sm h-auto select-none">
              {/* Petals */}
              <path d="M 210,210 C 130,230 70,120 120,60 C 170,10 200,90 210,210 Z" fill="#ec4899" fillOpacity="0.4" stroke="#f472b6" strokeWidth="2" />
              <path d="M 210,210 C 290,230 350,120 300,60 C 250,10 220,90 210,210 Z" fill="#ec4899" fillOpacity="0.4" stroke="#f472b6" strokeWidth="2" />
              <text x="70" y="55" fill="#f472b6" fontSize="10" fontWeight="bold">Petals (Attract pollinators)</text>

              {/* Sepals & Receptacle */}
              <path d="M 180,240 Q 210,250 240,240 L 210,270 Z" fill="#15803d" stroke="#4ade80" strokeWidth="2" />
              <path d="M 170,235 C 140,230 130,250 140,265" stroke="#4ade80" strokeWidth="2.5" fill="none" />
              <path d="M 250,235 C 280,230 290,250 280,265" stroke="#4ade80" strokeWidth="2.5" fill="none" />
              <text x="140" y="275" fill="#86efac" fontSize="9">Sepals (Protect bud)</text>

              {/* Female Carpel / Pistil (Center) */}
              {/* Ovary */}
              <ellipse cx="210" cy="210" rx="30" ry="30" fill="#047857" stroke="#34d399" strokeWidth="2" />
              {/* Ovules inside */}
              <circle cx="202" cy="205" r="5" fill="#fde047" stroke="#ca8a04" />
              <circle cx="218" cy="205" r="5" fill="#fde047" stroke="#ca8a04" />
              <circle cx="210" cy="218" r="5" fill="#fde047" stroke="#ca8a04" />
              <text x="210" y="238" textAnchor="middle" fill="#d1fae5" fontSize="8">Ovules (seeds)</text>
              {/* Style */}
              <line x1="210" y1="180" x2="210" y2="90" stroke="#34d399" strokeWidth="6" strokeLinecap="round" />
              <text x="220" y="140" fill="#a7f3d0" fontSize="9">Style</text>
              {/* Stigma */}
              <ellipse cx="210" cy="85" rx="16" ry="8" fill="#10b981" stroke="#a7f3d0" strokeWidth="2" />
              <text x="210" y="70" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold">Stigma (Sticky)</text>

              {/* Male Stamens (Anther + Filament) */}
              {/* Left Stamen */}
              <path d="M 195,210 C 150,180 140,120 150,90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <ellipse cx="150" cy="85" rx="10" ry="6" fill="#d97706" stroke="#fde68a" strokeWidth="1.5" />
              {/* Right Stamen */}
              <path d="M 225,210 C 270,180 280,120 270,90" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
              <ellipse cx="270" cy="85" rx="10" ry="6" fill="#d97706" stroke="#fde68a" strokeWidth="1.5" />

              <text x="320" y="85" fill="#fde047" fontSize="10" fontWeight="bold">Anther (Pollen)</text>
              <text x="320" y="98" fill="#fed7aa" fontSize="9">+ Filament = Stamen</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
            <h5 className="font-bold text-sm text-pink-300">Flower Parts & Pollination:</h5>
            <p className="text-slate-300">
              • <strong className="text-amber-300">Male Stamen:</strong> Anther produces pollen grains (male gametes); Filament supports the anther.
            </p>
            <p className="text-slate-300">
              • <strong className="text-emerald-300">Female Carpel:</strong> Stigma receives pollen; Style allows pollen tube growth; Ovary encloses ovules (female gametes) which develop into seeds after fertilisation.
            </p>
            <p className="text-slate-300">
              • <strong className="text-pink-300">Insect vs Wind:</strong> Insect flowers have large colourful petals, sweet nectar, scent, and sticky pollen; wind flowers have dangling anthers, feathery external stigmas, and tiny lightweight pollen.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'menstrual' && (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 flex justify-center">
            <svg viewBox="0 0 420 240" className="w-full max-w-sm h-auto select-none">
              {/* Timeline days 1 to 28 */}
              <line x1="40" y1="200" x2="390" y2="200" stroke="#64748b" strokeWidth="2" />
              <text x="40" y="215" textAnchor="middle" fill="#64748b" fontSize="9">Day 1</text>
              <text x="100" y="215" textAnchor="middle" fill="#64748b" fontSize="9">Day 5</text>
              <text x="215" y="215" textAnchor="middle" fill="#f43f5e" fontSize="10" fontWeight="bold">Day 14 (Ovulation)</text>
              <text x="380" y="215" textAnchor="middle" fill="#64748b" fontSize="9">Day 28</text>

              {/* Endometrium Uterine Lining Profile */}
              <path
                d="M 40,195 L 80,195 Q 150,185 215,140 Q 300,120 350,125 L 390,195"
                fill="#f43f5e"
                fillOpacity="0.2"
                stroke="#f43f5e"
                strokeWidth="2.5"
              />
              <text x="310" y="145" fill="#fda4af" fontSize="9" fontWeight="bold">Endometrium (Uterus Lining)</text>

              {/* FSH (blue) */}
              <path d="M 40,160 Q 80,120 120,165 L 215,165 L 390,180" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
              <text x="85" y="115" fill="#38bdf8" fontSize="8" fontWeight="bold">FSH (Follicle)</text>

              {/* Oestrogen (green) */}
              <path d="M 80,185 Q 160,180 190,60 Q 215,160 300,130 L 390,185" fill="none" stroke="#22c55e" strokeWidth="2.5" />
              <text x="180" y="50" fill="#4ade80" fontSize="9" fontWeight="bold">Oestrogen</text>

              {/* LH surge (yellow/amber) */}
              <path d="M 40,180 L 190,180 Q 215,20 230,180 L 390,185" fill="none" stroke="#f59e0b" strokeWidth="3" />
              <text x="215" y="18" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="bold">LH Surge (Triggers Ovulation)</text>

              {/* Progesterone (purple) */}
              <path d="M 40,190 L 215,190 Q 290,40 350,120 L 390,190" fill="none" stroke="#a855f7" strokeWidth="3" />
              <text x="310" y="65" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="bold">Progesterone</text>
            </svg>
          </div>

          <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-1.5">
            <h5 className="font-bold text-sm text-pink-300">4 Menstrual Hormones in Order:</h5>
            <p className="text-slate-300">
              1. <strong className="text-sky-300">FSH (Pituitary):</strong> Stimulates egg follicle maturation in ovary; stimulates follicle to secrete oestrogen.
            </p>
            <p className="text-slate-300">
              2. <strong className="text-emerald-400">Oestrogen (Ovary):</strong> Repairs & thickens endometrium lining; inhibits FSH; triggers the sudden LH surge.
            </p>
            <p className="text-slate-300">
              3. <strong className="text-amber-400">LH (Pituitary):</strong> Sudden spike at day 14 causes ovulation (egg released into oviduct).
            </p>
            <p className="text-slate-300">
              4. <strong className="text-purple-300">Progesterone (Corpus Luteum):</strong> Maintains thick spongy uterus lining ready for embryo implantation. If no pregnancy, levels fall, triggering menstruation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export const GeneticsDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-purple-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400"></span>
          DNA Architecture & Monohybrid Punnett Cross
        </h4>
        <p className="text-xs text-slate-400">Double helix complementary base pairs and Mendelian inheritance ratios</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* DNA Helix */}
        <div className="bg-slate-800/60 p-4 rounded-xl border border-purple-500/30 text-center">
          <h5 className="text-sm font-bold text-purple-300 mb-2">DNA Double Helix (A-T, C-G)</h5>
          <svg viewBox="0 0 300 160" className="w-full max-w-xs mx-auto my-1 select-none">
            {/* Strands */}
            <path d="M 20,40 Q 90,120 150,40 T 280,40" fill="none" stroke="#38bdf8" strokeWidth="4" />
            <path d="M 20,120 Q 90,40 150,120 T 280,120" fill="none" stroke="#a855f7" strokeWidth="4" />

            {/* Base pair rungs */}
            <line x1="50" y1="62" x2="50" y2="98" stroke="#10b981" strokeWidth="3" />
            <text x="35" y="85" fill="#a7f3d0" fontSize="8" fontWeight="bold">A - T</text>

            <line x1="100" y1="85" x2="100" y2="75" stroke="#ef4444" strokeWidth="3" />
            <text x="110" y="85" fill="#fca5a5" fontSize="8" fontWeight="bold">C - G</text>

            <line x1="150" y1="40" x2="150" y2="120" stroke="#10b981" strokeWidth="3" />
            <line x1="200" y1="75" x2="200" y2="85" stroke="#ef4444" strokeWidth="3" />
            <line x1="250" y1="62" x2="250" y2="98" stroke="#10b981" strokeWidth="3" />
          </svg>
          <p className="text-xs text-slate-300 mt-2 text-left">
            • Nucleotides contain deoxyribose sugar, phosphate group, and nitrogenous base.<br/>
            • <strong className="text-emerald-400">Adenine (A)</strong> pairs with <strong className="text-emerald-400">Thymine (T)</strong>.<br/>
            • <strong className="text-rose-400">Cytosine (C)</strong> pairs with <strong className="text-rose-400">Guanine (G)</strong>.<br/>
            • Triplet code of bases determines amino acid sequence in proteins.
          </p>
        </div>

        {/* Punnett Square */}
        <div className="bg-slate-800/60 p-4 rounded-xl border border-indigo-500/30 text-center">
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-sm font-bold text-indigo-300">Monohybrid Cross: Bb × Bb</h5>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 font-mono">Ratio 3:1</span>
          </div>

          <div className="grid grid-cols-3 gap-1 max-w-[240px] mx-auto text-xs font-mono my-3">
            <div className="p-2 bg-slate-900/60 rounded text-slate-400 font-bold">♀ \ ♂</div>
            <div className="p-2 bg-indigo-950/80 rounded text-indigo-300 font-bold">B</div>
            <div className="p-2 bg-indigo-950/80 rounded text-indigo-300 font-bold">b</div>

            <div className="p-2 bg-indigo-950/80 rounded text-indigo-300 font-bold">B</div>
            <div className="p-2 bg-slate-900 border border-emerald-500/40 rounded text-emerald-400 font-bold">
              BB
              <span className="block text-[9px] font-sans font-normal text-emerald-300">Dominant</span>
            </div>
            <div className="p-2 bg-slate-900 border border-blue-500/40 rounded text-blue-400 font-bold">
              Bb
              <span className="block text-[9px] font-sans font-normal text-blue-300">Dominant</span>
            </div>

            <div className="p-2 bg-indigo-950/80 rounded text-indigo-300 font-bold">b</div>
            <div className="p-2 bg-slate-900 border border-blue-500/40 rounded text-blue-400 font-bold">
              Bb
              <span className="block text-[9px] font-sans font-normal text-blue-300">Dominant</span>
            </div>
            <div className="p-2 bg-slate-900 border border-rose-500/40 rounded text-rose-400 font-bold">
              bb
              <span className="block text-[9px] font-sans font-normal text-rose-300">Recessive</span>
            </div>
          </div>

          <div className="text-xs text-slate-300 text-left space-y-1">
            <p>• <strong className="text-indigo-300">Genotypic ratio:</strong> 1 BB : 2 Bb : 1 bb (25% homozygous dominant, 50% heterozygous, 25% homozygous recessive).</p>
            <p>• <strong className="text-indigo-300">Phenotypic ratio:</strong> 3 Dominant : 1 Recessive.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BiotechnologyDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-teal-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          Industrial Fermenter & Recombinant Insulin Pipeline
        </h4>
        <p className="text-xs text-slate-400">Controlled bioreactor conditions and genetic modification using restriction enzymes & DNA ligase</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Fermenter diagram */}
        <div className="md:col-span-6 flex justify-center">
          <svg viewBox="0 0 340 300" className="w-full max-w-xs h-auto select-none">
            {/* Outer Cooling Jacket */}
            <rect x="50" y="40" width="240" height="220" rx="40" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2.5" />
            <text x="170" y="25" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Cooling Water Jacket (Temp Control)</text>

            {/* Inner vessel */}
            <rect x="70" y="55" width="200" height="190" rx="30" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />

            {/* Central Stirrer Motor & Impeller */}
            <line x1="170" y1="35" x2="170" y2="215" stroke="#94a3b8" strokeWidth="4" />
            <rect x="130" y="110" width="80" height="10" rx="2" fill="#64748b" />
            <rect x="130" y="165" width="80" height="10" rx="2" fill="#64748b" />
            <rect x="155" y="20" width="30" height="15" fill="#f59e0b" />
            <text x="210" y="30" fill="#fde68a" fontSize="9">Stirrer Motor</text>

            {/* Air Sparger (bottom) */}
            <line x1="120" y1="225" x2="220" y2="225" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />
            <text x="170" y="240" textAnchor="middle" fill="#bae6fd" fontSize="9">Sterile Air / Oxygen Sparger</text>

            {/* Probes */}
            <line x1="85" y1="90" x2="125" y2="90" stroke="#ec4899" strokeWidth="3" />
            <text x="135" y="94" fill="#f472b6" fontSize="9">pH & Temp Probes</text>

            {/* Harvest pipe */}
            <line x1="170" y1="245" x2="170" y2="280" stroke="#10b981" strokeWidth="6" />
            <text x="170" y="295" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="bold">Product Drain Valve</text>
          </svg>
        </div>

        <div className="md:col-span-6 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2">
          <h5 className="font-bold text-sm text-teal-300">Recombinant DNA (Human Insulin) Chain:</h5>
          <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
            <li>Human insulin gene located and cut out of human DNA using a <strong className="text-amber-400">restriction enzyme</strong>, creating sticky ends.</li>
            <li>Bacterial plasmid DNA extracted and cut with the <strong className="text-amber-400">same restriction enzyme</strong> so it has complementary sticky ends.</li>
            <li><strong className="text-teal-300">DNA ligase</strong> enzyme joins the human gene into the plasmid, forming a <strong className="text-emerald-400">recombinant plasmid</strong>.</li>
            <li>Recombinant plasmid inserted into <em>E. coli</em> bacteria.</li>
            <li>Transgenic bacteria cultured in an industrial fermenter; they rapidly divide and synthesize identical human insulin.</li>
            <li>Insulin collected, purified, and bottled for diabetic therapy.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export const EcologyDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'carbon' | 'nitrogen' | 'eutrophication'>('carbon');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-emerald-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Biogeochemical Cycles & Eutrophication
          </h4>
          <p className="text-xs text-slate-400">Carbon and nitrogen flows, and the sequential domino effect of aquatic eutrophication</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveTab('carbon')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'carbon' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Carbon Cycle
          </button>
          <button
            onClick={() => setActiveTab('nitrogen')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'nitrogen' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Nitrogen Cycle
          </button>
          <button
            onClick={() => setActiveTab('eutrophication')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeTab === 'eutrophication' ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
          >
            Eutrophication Chain
          </button>
        </div>
      </div>

      {activeTab === 'carbon' && (
        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs space-y-3">
          <div className="flex justify-center">
            <svg viewBox="0 0 460 220" className="w-full max-w-md h-auto select-none">
              {/* Atmospheric CO2 */}
              <rect x="150" y="10" width="160" height="35" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <text x="230" y="32" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Atmospheric CO₂</text>

              {/* Plants */}
              <rect x="30" y="110" width="110" height="35" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
              <text x="85" y="132" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold">Plants (Producers)</text>

              {/* Animals */}
              <rect x="175" y="110" width="110" height="35" rx="8" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
              <text x="230" y="132" textAnchor="middle" fill="#fde68a" fontSize="10" fontWeight="bold">Animals (Consumers)</text>

              {/* Decomposers */}
              <rect x="320" y="110" width="110" height="35" rx="8" fill="#4c1d95" stroke="#a855f7" strokeWidth="2" />
              <text x="375" y="132" textAnchor="middle" fill="#e9d5ff" fontSize="10" fontWeight="bold">Decomposers</text>

              {/* Fossil Fuels */}
              <rect x="100" y="180" width="130" height="30" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
              <text x="165" y="200" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold">Fossil Fuels (Coal/Oil)</text>

              {/* Arrows */}
              {/* Photosynthesis (Only one removing CO2) */}
              <path d="M 180,45 L 85,110" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x="95" y="70" fill="#4ade80" fontSize="9" fontWeight="bold">Photosynthesis (-)</text>

              {/* Feeding */}
              <path d="M 140,127 L 175,127" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

              {/* Respiration returning CO2 */}
              <path d="M 85,110 L 165,45" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
              <path d="M 230,110 L 230,45" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
              <path d="M 375,110 L 290,45" stroke="#f43f5e" strokeWidth="2" strokeDasharray="3 2" />
              <text x="240" y="80" fill="#fca5a5" fontSize="9">Respiration (+)</text>

              {/* Combustion */}
              <path d="M 165,180 C 120,180 50,150 170,45" stroke="#ea580c" strokeWidth="2" />
              <text x="15" y="180" fill="#fb923c" fontSize="9" fontWeight="bold">Combustion (+)</text>
            </svg>
          </div>
          <p className="text-slate-300">
            <strong className="text-emerald-400">Key Balance:</strong> Photosynthesis is the ONLY biological process that removes CO₂ from the atmosphere. Respiration, decomposition, and combustion of fossil fuels all release CO₂ back.
          </p>
        </div>
      )}

      {activeTab === 'nitrogen' && (
        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs space-y-2">
          <h5 className="font-bold text-sm text-teal-300 mb-2">4 Essential Nitrogen Cycle Bacteria:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
            <div className="p-2.5 bg-slate-900/60 rounded-lg border border-teal-500/30">
              <strong className="text-teal-300 block mb-1">1. Nitrogen-Fixing Bacteria:</strong>
              Found in soil and root nodules of legumes (peas, beans). Convert inert atmospheric N₂ gas directly into ammonium ions / nitrates for plant protein synthesis.
            </div>
            <div className="p-2.5 bg-slate-900/60 rounded-lg border border-emerald-500/30">
              <strong className="text-emerald-300 block mb-1">2. Nitrifying Bacteria:</strong>
              Chemosynthetic bacteria in soil. Convert toxic ammonium compounds into nitrites, then into nitrates which plant roots absorb by active transport.
            </div>
            <div className="p-2.5 bg-slate-900/60 rounded-lg border border-purple-500/30">
              <strong className="text-purple-300 block mb-1">3. Decomposers (Fungi/Bacteria):</strong>
              Break down proteins and urea from dead organisms and wastes into ammonium compounds via saprotrophic nutrition.
            </div>
            <div className="p-2.5 bg-slate-900/60 rounded-lg border border-rose-500/30">
              <strong className="text-rose-400 block mb-1">4. Denitrifying Bacteria:</strong>
              Thrive in waterlogged, anaerobic soils. Convert soil nitrates back into atmospheric N₂ gas, reducing soil fertility.
            </div>
          </div>
        </div>
      )}

      {activeTab === 'eutrophication' && (
        <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/60 text-xs">
          <h5 className="font-bold text-sm text-rose-400 mb-3">6-Step Eutrophication Domino Chain:</h5>
          <div className="space-y-2 font-medium">
            {[
              { step: 1, text: "Agricultural fertiliser (nitrates & phosphates) or raw sewage leaches into river or lake via surface runoff.", tag: "Fertiliser Runoff" },
              { step: 2, text: "High nitrate concentration triggers rapid exponential growth of surface algae (Algal Bloom).", tag: "Algal Bloom" },
              { step: 3, text: "Thick algal layer blocks sunlight from penetrating deep into the water; submerged aquatic plants die.", tag: "Submerged Plants Die" },
              { step: 4, text: "Aerobic bacteria / decomposers rapidly multiply to feed on the abundant dead plant matter.", tag: "Decomposers Multiply" },
              { step: 5, text: "Decomposers carry out intense aerobic respiration, consuming almost all dissolved oxygen in the water.", tag: "Severe Hypoxia (O₂ drops)" },
              { step: 6, text: "Water becomes anoxic; fish and other aquatic organisms suffocate and die.", tag: "Aquatic Organisms Die" },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-3 p-2 bg-slate-900/60 rounded-lg border border-slate-700/60">
                <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs shrink-0">
                  {s.step}
                </span>
                <span className="text-slate-300 flex-1">{s.text}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-rose-300 border border-slate-700 shrink-0">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
