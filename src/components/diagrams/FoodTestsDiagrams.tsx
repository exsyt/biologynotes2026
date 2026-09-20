import React, { useState } from 'react';

export const FoodTestsDiagram: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<number>(0);

  const tests = [
    {
      name: "Starch Test",
      nutrient: "Starch (Polysaccharide)",
      reagent: "Iodine solution (dissolved in potassium iodide)",
      procedure: "Add 2–3 drops of brown/yellow iodine solution directly to sample at room temperature.",
      positiveColor: "Blue-Black",
      negativeColor: "Yellow-Brown (no change)",
      liquidColorPos: "#1e1b4b",
      tubeStrokePos: "#6366f1",
      liquidColorNeg: "#78350f",
      glow: "shadow-indigo-500/30",
      notes: "Tests for starch stored in amyloplasts or leaf mesophyll cells."
    },
    {
      name: "Reducing Sugar Test",
      nutrient: "Glucose, Maltose, Fructose (Reducing Sugars)",
      reagent: "Benedict's solution (Copper(II) sulfate in alkaline citrate)",
      procedure: "Add equal volume of Benedict's solution to liquid food sample. HEAT in boiling water bath (>80°C) for 3–5 minutes.",
      positiveColor: "Green → Yellow → Orange → Brick-Red precipitate",
      negativeColor: "Remains Bright Blue",
      liquidColorPos: "#b91c1c",
      tubeStrokePos: "#ef4444",
      liquidColorNeg: "#0284c7",
      glow: "shadow-red-500/30",
      notes: "Semi-quantitative: color indicates sugar concentration (green = traces; brick-red = high concentration). Sucrose is non-reducing (negative unless pre-hydrolysed with acid)."
    },
    {
      name: "Protein Test",
      nutrient: "Proteins & Polypeptides (Peptide bonds)",
      reagent: "Biuret Reagent (Potassium hydroxide/sodium hydroxide + dilute copper(II) sulfate)",
      procedure: "Add Biuret reagent (or equal volume of 10% KOH followed by 1% CuSO4) to food solution at room temperature.",
      positiveColor: "Lilac / Purple / Violet",
      negativeColor: "Remains Pale Blue",
      liquidColorPos: "#7e22ce",
      tubeStrokePos: "#a855f7",
      liquidColorNeg: "#38bdf8",
      glow: "shadow-purple-500/30",
      notes: "Cu²⁺ ions coordinate with nitrogen atoms in peptide bonds to form purple complex."
    },
    {
      name: "Lipid Emulsion Test",
      nutrient: "Fats & Oils (Triglycerides)",
      reagent: "Ethanol + Distilled Water",
      procedure: "Chop food into test tube. Add 2 cm³ ethanol and shake vigorously to dissolve lipids. Decant the clear ethanol solution into a tube of cold water.",
      positiveColor: "Milky-white cloudy emulsion",
      negativeColor: "Remains clear / transparent",
      liquidColorPos: "#f1f5f9",
      tubeStrokePos: "#cbd5e1",
      liquidColorNeg: "#334155",
      glow: "shadow-slate-300/30",
      notes: "Lipids dissolve in alcohol but are insoluble in water; adding water causes tiny lipid droplets to precipitate as a milky white suspension."
    }
  ];

  const current = tests[selectedTest];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-amber-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            Diagnostic Food Tests Visual Guide
          </h4>
          <p className="text-xs text-slate-400">Test tube color changes, reagents, heating conditions, and mark-scheme rules</p>
        </div>
        <div className="flex flex-wrap gap-1 bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs">
          {tests.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setSelectedTest(idx)}
              className={`px-2.5 py-1 rounded-md transition-all font-medium ${selectedTest === idx ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'}`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Test Tube Graphic */}
        <div className="md:col-span-5 flex justify-center items-center gap-8 py-2">
          {/* Negative result tube */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-semibold text-slate-400 mb-1">Negative Result</span>
            <svg viewBox="0 0 60 180" className="w-16 h-48 drop-shadow">
              {/* Glass Tube */}
              <path d="M 12,10 L 12,145 C 12,165 48,165 48,145 L 48,10 Z" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
              {/* Liquid */}
              <path d="M 14,75 L 14,145 C 14,163 46,163 46,145 L 46,75 Z" fill={current.liquidColorNeg} fillOpacity="0.85" />
              {/* Meniscus */}
              <ellipse cx="30" cy="75" rx="16" ry="3" fill="#94a3b8" fillOpacity="0.5" />
              {/* Lip rim */}
              <ellipse cx="30" cy="10" rx="20" ry="4" fill="none" stroke="#64748b" strokeWidth="2.5" />
            </svg>
            <span className="text-[10px] text-slate-400 mt-1 max-w-[100px] text-center font-mono">{current.negativeColor}</span>
          </div>

          {/* Positive result tube */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-amber-400 mb-1">Positive Result</span>
            <svg viewBox="0 0 60 180" className="w-16 h-48 drop-shadow">
              {/* Glass Tube */}
              <path d="M 12,10 L 12,145 C 12,165 48,165 48,145 L 48,10 Z" fill="#0f172a" stroke={current.tubeStrokePos} strokeWidth="3" />
              {/* Liquid */}
              <path d="M 14,65 L 14,145 C 14,163 46,163 46,145 L 46,65 Z" fill={current.liquidColorPos} fillOpacity="0.95" />
              {/* Meniscus */}
              <ellipse cx="30" cy="65" rx="16" ry="3" fill="#ffffff" fillOpacity="0.4" />
              {/* Lip rim */}
              <ellipse cx="30" cy="10" rx="20" ry="4" fill="none" stroke={current.tubeStrokePos} strokeWidth="2.5" />
            </svg>
            <span className="text-[10px] text-amber-300 mt-1 max-w-[110px] text-center font-bold font-mono">{current.positiveColor}</span>
          </div>
        </div>

        {/* Detailed Spec Panel */}
        <div className="md:col-span-7 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2.5">
          <div className="flex items-center justify-between">
            <h5 className="font-bold text-sm text-slate-100">{current.name}</h5>
            <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/80 text-amber-300 font-medium text-[11px]">
              {current.nutrient}
            </span>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/60">
            <span className="font-bold text-amber-400 block mb-1">Reagent Used:</span>
            <p className="text-slate-300">{current.reagent}</p>
          </div>

          <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/60">
            <span className="font-bold text-amber-400 block mb-1">Exact Procedure:</span>
            <p className="text-slate-300">{current.procedure}</p>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-200">
            <span className="font-bold">Cambridge Examiner Note: </span>
            {current.notes}
          </div>
        </div>
      </div>
    </div>
  );
};
