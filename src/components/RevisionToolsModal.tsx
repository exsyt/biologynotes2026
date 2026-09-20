import React, { useState } from 'react';
import { X, Calculator, BookOpen, AlertCircle, Sparkles } from 'lucide-react';

interface RevisionToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RevisionToolsModal: React.FC<RevisionToolsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'formulas' | 'food_tests' | 'mistakes'>('formulas');

  // Magnification calculator state
  const [imageSize, setImageSize] = useState<number>(30);
  const [actualSize, setActualSize] = useState<number>(0.05);
  const [magnificationUnit, setMagnificationUnit] = useState<'mm_to_um' | 'same_unit'>('mm_to_um');

  if (!isOpen) return null;

  // Calculate magnification
  // If image in mm and actual in µm: M = (imageSize * 1000) / actualSize
  const calculatedMagnification = magnificationUnit === 'mm_to_um'
    ? Math.round((imageSize * 1000) / actualSize)
    : Math.round(imageSize / actualSize);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">O Level Biology High-Yield Exam Toolkit</h3>
              <p className="text-xs text-slate-400">Essential equations, food test cheat-sheets, and top examiner pitfalls</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 px-6 pt-3 bg-slate-900/50 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex items-center gap-2 pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'formulas'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Magnification & Equations
          </button>
          <button
            onClick={() => setActiveTab('food_tests')}
            className={`flex items-center gap-2 pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'food_tests'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Food Tests Master Matrix
          </button>
          <button
            onClick={() => setActiveTab('mistakes')}
            className={`flex items-center gap-2 pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'mistakes'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            Top 10 Fatal Exam Mistakes
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {activeTab === 'formulas' && (
            <div className="space-y-4">
              {/* Magnification Formula & Interactive Calculator */}
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-sm text-emerald-400">1. Magnification Formula Triangle</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Always Convert to Same Units (1 mm = 1,000 µm)
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 text-center">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700 font-mono">
                    <span className="text-slate-400 block text-[10px]">Magnification (M)</span>
                    <strong className="text-emerald-400 text-sm">M = I / A</strong>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700 font-mono">
                    <span className="text-slate-400 block text-[10px]">Actual Size (A)</span>
                    <strong className="text-emerald-400 text-sm">A = I / M</strong>
                  </div>
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700 font-mono">
                    <span className="text-slate-400 block text-[10px]">Image Size (I)</span>
                    <strong className="text-emerald-400 text-sm">I = M × A</strong>
                  </div>
                </div>

                {/* Calculator Widget */}
                <div className="mt-3 p-3 bg-slate-950/70 rounded-lg border border-slate-800">
                  <h5 className="font-bold text-slate-300 mb-2">Interactive Quick-Check Calculator:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Image Size (I) in mm:</label>
                      <input
                        type="number"
                        value={imageSize}
                        onChange={(e) => setImageSize(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Actual Size (A) in µm:</label>
                      <input
                        type="number"
                        step="0.01"
                        value={actualSize}
                        onChange={(e) => setActualSize(Number(e.target.value))}
                        className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-slate-200"
                      />
                    </div>
                    <div className="p-2 bg-emerald-950/50 border border-emerald-800/60 rounded text-center">
                      <span className="text-[10px] text-emerald-400 font-bold block">Magnification Result:</span>
                      <strong className="text-lg text-emerald-300">×{calculatedMagnification}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chemical Equations */}
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-3">
                <h4 className="font-bold text-sm text-emerald-400">2. Core Balanced Chemical Equations</h4>
                <div className="space-y-2">
                  <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700">
                    <span className="font-bold text-emerald-300 block mb-0.5">Photosynthesis:</span>
                    <p className="font-mono text-slate-200 text-xs">6CO₂ + 6H₂O ──(light & chlorophyll)──&gt; C₆H₁₂O₆ + 6O₂</p>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700">
                    <span className="font-bold text-sky-300 block mb-0.5">Aerobic Respiration:</span>
                    <p className="font-mono text-slate-200 text-xs">C₆H₁₂O₆ + 6O₂ ──&gt; 6CO₂ + 6H₂O + Large ATP release (~2830 kJ)</p>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700">
                    <span className="font-bold text-rose-300 block mb-0.5">Anaerobic Respiration (Human Muscles):</span>
                    <p className="font-mono text-slate-200 text-xs">Glucose (C₆H₁₂O₆) ──&gt; 2 Lactic Acid (C₃H₆O₃) + Small Energy (150 kJ)</p>
                  </div>
                  <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-700">
                    <span className="font-bold text-amber-300 block mb-0.5">Anaerobic Fermentation (Yeast):</span>
                    <p className="font-mono text-slate-200 text-xs">Glucose (C₆H₁₂O₆) ──&gt; 2 Ethanol (C₂H₅OH) + 2 Carbon Dioxide (CO₂) + Small Energy</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'food_tests' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-950/60 text-slate-300">
                    <th className="p-2.5 font-bold">Nutrient</th>
                    <th className="p-2.5 font-bold">Reagent</th>
                    <th className="p-2.5 font-bold">Heating Needed?</th>
                    <th className="p-2.5 font-bold">Negative Result</th>
                    <th className="p-2.5 font-bold">Positive Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-2.5 font-semibold text-indigo-300">Starch</td>
                    <td className="p-2.5">Iodine solution</td>
                    <td className="p-2.5 text-slate-400">No (Room temp)</td>
                    <td className="p-2.5 text-amber-400">Yellow-Brown</td>
                    <td className="p-2.5 font-bold text-indigo-400">Blue-Black</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-2.5 font-semibold text-rose-300">Reducing Sugar (Glucose)</td>
                    <td className="p-2.5">Benedict's solution</td>
                    <td className="p-2.5 font-bold text-rose-400">YES (&gt;80°C water bath 3–5 min)</td>
                    <td className="p-2.5 text-sky-400">Remains Blue</td>
                    <td className="p-2.5 font-bold text-red-400">Green → Yellow → Brick-Red precipitate</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-2.5 font-semibold text-purple-300">Protein</td>
                    <td className="p-2.5">Biuret reagent (KOH + CuSO₄)</td>
                    <td className="p-2.5 text-slate-400">No (Room temp)</td>
                    <td className="p-2.5 text-sky-400">Remains Pale Blue</td>
                    <td className="p-2.5 font-bold text-purple-400">Lilac / Purple / Violet</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-2.5 font-semibold text-slate-200">Lipids (Fats & Oils)</td>
                    <td className="p-2.5">Ethanol + Cold Water</td>
                    <td className="p-2.5 text-slate-400">No (Keep away from flames!)</td>
                    <td className="p-2.5 text-slate-400">Clear / Colorless</td>
                    <td className="p-2.5 font-bold text-slate-100">Milky-white cloudy emulsion</td>
                  </tr>
                  <tr className="hover:bg-slate-800/40">
                    <td className="p-2.5 font-semibold text-cyan-300">Vitamin C (Ascorbic Acid)</td>
                    <td className="p-2.5">DCPIP dye</td>
                    <td className="p-2.5 text-slate-400">No (Room temp)</td>
                    <td className="p-2.5 text-blue-400">Remains Blue</td>
                    <td className="p-2.5 font-bold text-cyan-300">Decolourises (Blue → Colorless)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'mistakes' && (
            <div className="space-y-2.5">
              {[
                { title: "Saying enzymes are 'killed'", fix: "Enzymes are protein molecules, NOT living organisms. Always write 'denatured' (tertiary structure altered, active site shape lost)." },
                { title: "Confusing Breathing with Respiration", fix: "Breathing (ventilation) is mechanical movement of ribs and diaphragm moving air in and out of lungs. Respiration is a chemical cellular enzymatic reaction breaking down glucose to release ATP." },
                { title: "Saying water moves down a concentration gradient", fix: "For water movement, always write 'moves down a WATER POTENTIAL gradient by osmosis across a partially permeable membrane'." },
                { title: "Calling bile an enzyme", fix: "Bile contains NO enzymes! It is an alkaline fluid with bile salts that mechanically emulsifies fat globules into tiny droplets to increase surface area." },
                { title: "Thinking arteries always carry oxygenated blood", fix: "The Pulmonary Artery carries deoxygenated blood to the lungs! Remember: Arteries carry blood AWAY from heart; Veins carry blood towards heart." },
                { title: "Confusing Excretion with Egestion", fix: "Excretion is removal of metabolic waste products from cellular reactions (urea, CO₂). Egestion is removal of undigested dietary fiber (faeces) via the anus." },
                { title: "Thinking dominant alleles are 'stronger' or more common", fix: "Dominant alleles only mask recessive alleles when heterozygous; they are not inherently stronger, healthier, or more frequent in nature." },
                { title: "Saying plant cells burst in pure water", fix: "Plant cells NEVER burst because of their rigid cellulose cell wall. They become turgid with high turgor pressure. Animal cells burst (lysis) because they lack a cell wall." },
                { title: "Forgetting to heat Benedict's reagent", fix: "Benedict's solution will NOT react at room temperature! You MUST specify 'heat in a boiling water bath at &gt;80°C for 3–5 minutes'." },
                { title: "Omitting the restriction enzyme name in biotechnology", fix: "Always specify that both the human gene and plasmid must be cut with the SAME restriction enzyme to produce complementary sticky ends." }
              ].map((m, idx) => (
                <div key={idx} className="p-3 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-1">
                  <div className="flex items-center gap-2 text-rose-400 font-bold">
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center text-[10px]">#{idx + 1}</span>
                    {m.title}
                  </div>
                  <p className="text-slate-300 pl-7"><strong className="text-emerald-400">Correct Cambridge Answer: </strong>{m.fix}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
          >
            Close Toolkit
          </button>
        </div>
      </div>
    </div>
  );
};
