import React, { useState } from 'react';

export const PlantNutritionDiagram: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const layers: Record<string, string> = {
    cuticle: 'Waxy Cuticle: Waterproof lipid layer that prevents excessive water evaporation from the leaf surface.',
    epidermis: 'Upper Epidermis: Transparent single layer lacking chloroplasts; lets sunlight pass freely into photosynthetic cells.',
    palisade: 'Palisade Mesophyll: Packed tightly with vertical columnar cells crammed with chloroplasts; principal site of photosynthesis.',
    spongy: 'Spongy Mesophyll: Loosely packed cells with vast intercellular air spaces; provides large surface area and rapid gas exchange diffusion paths.',
    vein: 'Vascular Bundle: Contains Xylem (transports water/minerals upwards) and Phloem (translocates sucrose and amino acids to sinks).',
    stoma: 'Stomata & Guard Cells: Microscopic pores mainly on lower epidermis. Guard cells swell to open stoma for CO₂ uptake, close to prevent wilting.'
  };

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Anatomical Cross-Section of a Dicot Leaf
        </h4>
        <p className="text-xs text-slate-400">Hover over layers to inspect structural adaptations for photosynthesis and gas exchange</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 flex justify-center">
          <svg viewBox="0 0 500 320" className="w-full max-w-lg h-auto select-none">
            {/* Waxy Cuticle Upper */}
            <rect
              x="30" y="20" width="440" height="12" rx="3"
              fill="#065f46" stroke="#34d399" strokeWidth="1.5"
              className="cursor-pointer" onMouseEnter={() => setActiveLayer('cuticle')}
            />
            <text x="250" y="29" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontWeight="bold">Waxy Cuticle (Waterproof)</text>

            {/* Upper Epidermis */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveLayer('epidermis')}>
              {[...Array(8)].map((_, i) => (
                <rect key={i} x={35 + i * 54} y="35" width="50" height="22" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              ))}
              <text x="250" y="50" textAnchor="middle" fill="#94a3b8" fontSize="10">Upper Epidermis (Transparent, No Chloroplasts)</text>
            </g>

            {/* Palisade Mesophyll */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveLayer('palisade')}>
              {[...Array(11)].map((_, i) => (
                <g key={i}>
                  <rect x={35 + i * 39} y="62" width="34" height="95" rx="5" fill="#14532d" stroke="#22c55e" strokeWidth="1.5" />
                  {/* Chloroplast dots */}
                  <circle cx={42 + i * 39} cy="75" r="2.5" fill="#86efac" />
                  <circle cx={58 + i * 39} cy="82" r="2.5" fill="#86efac" />
                  <circle cx={45 + i * 39} cy="100" r="2.5" fill="#86efac" />
                  <circle cx={58 + i * 39} cy="115" r="2.5" fill="#86efac" />
                  <circle cx={45 + i * 39} cy="135" r="2.5" fill="#86efac" />
                  <circle cx={56 + i * 39} cy="145" r="2.5" fill="#86efac" />
                </g>
              ))}
              <text x="140" y="112" fill="#dcfce7" fontSize="11" fontWeight="bold" className="drop-shadow">
                Palisade Mesophyll (Dense Chloroplasts)
              </text>
            </g>

            {/* Spongy Mesophyll & Vein */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveLayer('spongy')}>
              {/* Scattered cells */}
              <ellipse cx="65" cy="185" rx="22" ry="16" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />
              <ellipse cx="120" cy="195" rx="20" ry="15" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />
              <ellipse cx="75" cy="235" rx="24" ry="17" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />
              <ellipse cx="140" cy="238" rx="22" ry="16" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />

              <ellipse cx="380" cy="185" rx="22" ry="16" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />
              <ellipse cx="435" cy="195" rx="20" ry="15" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />
              <ellipse cx="395" cy="235" rx="24" ry="17" fill="#166534" stroke="#4ade80" strokeWidth="1.2" />

              <text x="90" y="215" fill="#86efac" fontSize="10" fontWeight="bold">Air Spaces (Gas Diffusion)</text>

              {/* Vascular Bundle in center */}
              <g onMouseEnter={(e) => { e.stopPropagation(); setActiveLayer('vein'); }} className="cursor-pointer">
                <circle cx="250" cy="205" r="42" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2.5" />
                {/* Xylem (upper) */}
                <circle cx="238" cy="188" r="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="262" cy="188" r="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                <circle cx="250" cy="175" r="9" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
                <text x="250" y="191" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Xylem</text>
                {/* Phloem (lower) */}
                <circle cx="240" cy="225" r="7" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
                <circle cx="255" cy="225" r="7" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
                <circle cx="265" cy="216" r="6" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
                <text x="250" y="240" textAnchor="middle" fill="#fef3c7" fontSize="9" fontWeight="bold">Phloem</text>
              </g>
            </g>

            {/* Lower Epidermis & Stomata */}
            <g className="cursor-pointer" onMouseEnter={() => setActiveLayer('stoma')}>
              <rect x="35" y="265" width="80" height="20" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              {/* Stoma 1 */}
              <ellipse cx="130" cy="275" rx="8" ry="11" fill="#047857" stroke="#10b981" strokeWidth="1.5" />
              <ellipse cx="146" cy="275" rx="8" ry="11" fill="#047857" stroke="#10b981" strokeWidth="1.5" />
              <rect x="160" y="265" width="130" height="20" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
              {/* Stoma 2 */}
              <ellipse cx="305" cy="275" rx="8" ry="11" fill="#047857" stroke="#10b981" strokeWidth="1.5" />
              <ellipse cx="321" cy="275" rx="8" ry="11" fill="#047857" stroke="#10b981" strokeWidth="1.5" />
              <rect x="335" y="265" width="140" height="20" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />

              <text x="225" y="279" textAnchor="middle" fill="#94a3b8" fontSize="9">Lower Epidermis</text>
              <text x="138" y="302" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">Stoma & Guard Cells</text>
            </g>

            {/* Gas flow arrows */}
            <path d="M 138,315 L 138,285 L 110,240" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
            <text x="105" y="312" fill="#38bdf8" fontSize="9">CO₂ in / O₂ out</text>
          </svg>
        </div>

        <div className="md:col-span-4 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs">
          <h5 className="font-bold text-sm text-emerald-400 mb-2">Leaf Layer Functions:</h5>
          <div className="space-y-2">
            {Object.keys(layers).map((key) => (
              <div
                key={key}
                onMouseEnter={() => setActiveLayer(key)}
                className={`p-2 rounded-lg cursor-pointer transition-colors ${activeLayer === key ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-200' : 'bg-slate-900/50 hover:bg-slate-700/50 text-slate-300'}`}
              >
                {layers[key]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PlantTransportDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-emerald-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          The Transpiration Stream & Xylem Pull
        </h4>
        <p className="text-xs text-slate-400">Continuous cohesive water column pulled upwards from soil to leaf stomata</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 420 260" className="w-full max-w-sm h-auto select-none">
            {/* 1. Root uptake */}
            <rect x="20" y="180" width="100" height="70" rx="8" fill="#1c1917" stroke="#78716c" strokeWidth="1.5" />
            <path d="M 50,180 Q 20,210 20,230" stroke="#34d399" strokeWidth="4" fill="none" />
            <text x="70" y="200" fill="#34d399" fontSize="10" fontWeight="bold">Root Hair</text>
            <text x="70" y="215" fill="#94a3b8" fontSize="9">Osmosis absorbs water</text>
            <text x="70" y="230" fill="#94a3b8" fontSize="9">Active transport absorbs ions</text>

            {/* Stem Xylem vessel */}
            <rect x="180" y="70" width="60" height="180" rx="4" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2.5" />
            {/* Lignin rings */}
            <line x1="180" y1="90" x2="240" y2="105" stroke="#38bdf8" strokeWidth="2" />
            <line x1="180" y1="130" x2="240" y2="145" stroke="#38bdf8" strokeWidth="2" />
            <line x1="180" y1="170" x2="240" y2="185" stroke="#38bdf8" strokeWidth="2" />
            <line x1="180" y1="210" x2="240" y2="225" stroke="#38bdf8" strokeWidth="2" />

            <text x="210" y="160" textAnchor="middle" fill="#e0f2fe" fontSize="11" fontWeight="bold" transform="rotate(-90 210 160)">
              Xylem (Lignified, Dead)
            </text>

            {/* Upward stream arrow */}
            <path d="M 210,240 L 210,80" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#arrow)" strokeDasharray="6 3" />

            {/* 3. Leaf Transpiration */}
            <rect x="290" y="20" width="115" height="85" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
            <text x="345" y="40" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">Leaf Mesophyll</text>
            <text x="345" y="55" textAnchor="middle" fill="#bae6fd" fontSize="9">Evaporation into air spaces</text>
            {/* Stoma vapour release */}
            <path d="M 370,80 Q 385,110 405,115" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" fill="none" />
            <text x="355" y="105" fill="#38bdf8" fontSize="9" fontWeight="bold">Transpiration (Water vapour loss)</text>

            {/* Connecting arrows */}
            <path d="M 120,215 L 180,215" stroke="#34d399" strokeWidth="2.5" />
            <path d="M 240,75 L 290,45" stroke="#38bdf8" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2.5">
          <h5 className="font-bold text-sm text-emerald-400">Exam Mark-Scheme Transpiration Chain:</h5>
          <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
            <li>Water evaporates from moist surfaces of mesophyll cells into leaf air spaces.</li>
            <li>Water vapour diffuses through open stomata into drier outside air down a concentration gradient.</li>
            <li>Evaporation lowers water potential in mesophyll cells, drawing water from leaf xylem vessels by osmosis.</li>
            <li><strong className="text-sky-300">Cohesion</strong> (hydrogen bonding) between water molecules pulls a continuous unbroken column up xylem (<strong className="text-emerald-300">Transpiration Pull</strong>).</li>
            <li><strong className="text-amber-300">Lignified walls</strong> prevent the hollow xylem vessels from collapsing under negative pressure/suction.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export const PlantTropismDiagram: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="mb-4 pb-3 border-b border-slate-800">
        <h4 className="text-base font-semibold text-lime-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-400"></span>
          Auxin Mechanism in Shoot Phototropism
        </h4>
        <p className="text-xs text-slate-400">How unilateral light drives auxin redistribution and cell elongation to bend shoots toward sunlight</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 flex justify-center">
          <svg viewBox="0 0 420 220" className="w-full max-w-sm h-auto select-none">
            {/* Unilateral Sunlight */}
            <circle cx="370" cy="40" r="18" fill="#facc15" />
            <line x1="345" y1="45" x2="280" y2="65" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="3 3" />
            <line x1="350" y1="60" x2="275" y2="90" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="3 3" />
            <text x="370" y="75" textAnchor="middle" fill="#fde047" fontSize="10" fontWeight="bold">Unilateral Light</text>

            {/* Shoot Base */}
            <path
              d="M 120,200 L 120,130 C 120,80 180,70 240,65 L 245,85 C 190,90 150,110 150,200 Z"
              fill="#14532d"
              stroke="#22c55e"
              strokeWidth="2.5"
            />
            {/* Tip where auxin made */}
            <path d="M 240,65 C 260,60 260,80 245,85 Z" fill="#84cc16" stroke="#bef264" strokeWidth="1.5" />
            <text x="255" y="50" fill="#bef264" fontSize="9" fontWeight="bold">Auxin Tip</text>

            {/* Auxin Dots on shaded side (bottom / outer side) */}
            <circle cx="125" cy="140" r="3.5" fill="#f59e0b" />
            <circle cx="128" cy="120" r="3.5" fill="#f59e0b" />
            <circle cx="138" cy="100" r="3.5" fill="#f59e0b" />
            <circle cx="155" cy="85" r="3.5" fill="#f59e0b" />
            <circle cx="180" cy="75" r="3.5" fill="#f59e0b" />

            <text x="75" y="115" fill="#fde68a" fontSize="10" fontWeight="bold">Auxin accumulates</text>
            <text x="75" y="128" fill="#fde68a" fontSize="9">on SHADED side</text>
            <path d="M 110,120 L 122,120" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Cell elongation annotation */}
            <text x="90" y="175" fill="#a3e635" fontSize="10" fontWeight="bold">Cells Elongate More</text>
            <text x="90" y="188" fill="#94a3b8" fontSize="9">Forces shoot to bend right</text>
          </svg>
        </div>

        <div className="md:col-span-5 bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 text-xs space-y-2.5">
          <h5 className="font-bold text-sm text-lime-300">Exam Chain (Phototropism):</h5>
          <p className="text-slate-300">
            1. Auxin is synthesized primarily in the <strong className="text-lime-300">shoot tip (apical meristem)</strong>.
          </p>
          <p className="text-slate-300">
            2. When light shines from one side, auxin diffuses away from light and <strong className="text-amber-400">accumulates on the shaded side</strong>.
          </p>
          <p className="text-slate-300">
            3. Higher auxin concentration stimulates <strong className="text-lime-300">greater cell elongation</strong> on the shaded side compared to the lit side.
          </p>
          <p className="text-emerald-300 font-semibold">
            4. Unequal cell growth forces the shoot to curve and grow directly toward the light source (Positive Phototropism).
          </p>
        </div>
      </div>
    </div>
  );
};
