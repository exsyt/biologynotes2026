import React, { useState } from 'react';

export const ClassificationDiagram: React.FC = () => {
  const [activeView, setActiveView] = useState<'kingdoms' | 'vertebrates' | 'arthropods' | 'monocot_dicot'>('kingdoms');

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 my-4 text-slate-200">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div>
          <h4 className="text-base font-semibold text-sky-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            Classification & Organism Diversity Diagrams
          </h4>
          <p className="text-xs text-slate-400">Interactive phylogenetic breakdowns, anatomical traits, and plant comparisons</p>
        </div>
        <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-700/60 text-xs font-medium">
          <button
            onClick={() => setActiveView('kingdoms')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeView === 'kingdoms' ? 'bg-sky-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            5 Kingdoms
          </button>
          <button
            onClick={() => setActiveView('vertebrates')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeView === 'vertebrates' ? 'bg-sky-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            Vertebrate Classes
          </button>
          <button
            onClick={() => setActiveView('arthropods')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeView === 'arthropods' ? 'bg-sky-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            Arthropods
          </button>
          <button
            onClick={() => setActiveView('monocot_dicot')}
            className={`px-3 py-1.5 rounded-md transition-all ${activeView === 'monocot_dicot' ? 'bg-sky-500 text-slate-950 font-semibold' : 'text-slate-300 hover:text-white'}`}
          >
            Monocots vs Dicots
          </button>
        </div>
      </div>

      {activeView === 'kingdoms' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { name: 'Animals', cell: 'Multicellular eukaryote', wall: 'No cell wall', food: 'Heterotrophic ingestion', icon: '🦁', color: 'border-amber-500/40 bg-amber-950/20' },
            { name: 'Plants', cell: 'Multicellular eukaryote', wall: 'Cellulose cell wall', food: 'Autotrophic photosynthesis', icon: '🌿', color: 'border-emerald-500/40 bg-emerald-950/20' },
            { name: 'Fungi', cell: 'Mycelium hyphae', wall: 'Chitin cell wall', food: 'Saprotrophic absorption', icon: '🍄', color: 'border-purple-500/40 bg-purple-950/20' },
            { name: 'Prokaryotes', cell: 'Unicellular, no nucleus', wall: 'Peptidoglycan wall', food: 'Heterotrophic / autotrophic', icon: '🦠', color: 'border-cyan-500/40 bg-cyan-950/20' },
            { name: 'Protoctists', cell: 'Mostly unicellular', wall: 'Variable / none', food: 'Mixed nutrition', icon: '🔬', color: 'border-rose-500/40 bg-rose-950/20' },
          ].map((k) => (
            <div key={k.name} className={`p-4 rounded-xl border ${k.color} flex flex-col items-center text-center`}>
              <span className="text-3xl mb-2">{k.icon}</span>
              <h5 className="font-bold text-sm text-slate-100 mb-1">{k.name}</h5>
              <p className="text-[11px] text-slate-300 space-y-1">
                <span className="block text-slate-400">Cell: {k.cell}</span>
                <span className="block text-slate-400">Wall: {k.wall}</span>
                <span className="block font-medium text-emerald-300">{k.food}</span>
              </p>
            </div>
          ))}
        </div>
      )}

      {activeView === 'vertebrates' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { group: 'Mammals', skin: 'Hair / Fur', breathe: 'Lungs', repro: 'Give birth to live young; Mammary glands produce milk', tag: 'Endothermic' },
            { group: 'Birds', skin: 'Feathers', breathe: 'Lungs', repro: 'Hard-shelled eggs; Beak and wings', tag: 'Endothermic' },
            { group: 'Reptiles', skin: 'Dry scaly skin', breathe: 'Lungs', repro: 'Eggs with leathery waterproof shells', tag: 'Ectothermic' },
            { group: 'Amphibians', skin: 'Moist skin (gas exchange)', breathe: 'Lungs & moist skin', repro: 'Jelly-covered eggs laid in water; aquatic larvae', tag: 'Metamorphosis' },
            { group: 'Fish', skin: 'Wet scales & lateral line', breathe: 'Gills with operculum', repro: 'Fins for swimming; external fertilisation in water', tag: 'Aquatic' },
          ].map((v) => (
            <div key={v.group} className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/60">
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-bold text-sm text-sky-300">{v.group}</h5>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300">{v.tag}</span>
              </div>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li><strong className="text-slate-400">Body covering:</strong> {v.skin}</li>
                <li><strong className="text-slate-400">Gas exchange:</strong> {v.breathe}</li>
                <li><strong className="text-slate-400">Reproduction:</strong> {v.repro}</li>
              </ul>
            </div>
          ))}
        </div>
      )}

      {activeView === 'arthropods' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { name: 'Insects', body: '3 body segments (head, thorax, abdomen)', legs: '3 pairs of jointed legs (6 legs)', wings: 'Usually 2 pairs of wings', antennae: '1 pair of antennae' },
            { name: 'Arachnids', body: '2 body segments (cephalothorax & abdomen)', legs: '4 pairs of jointed legs (8 legs)', wings: 'No wings', antennae: 'No antennae; chelicerae fangs' },
            { name: 'Crustaceans', body: 'Cephalothorax & abdomen; hard calcified exoskeleton', legs: '5 or more pairs of limbs', wings: 'No wings (mainly aquatic)', antennae: '2 pairs of antennae' },
            { name: 'Myriapods', body: 'Many similar body segments', legs: 'Many legs (1 or 2 pairs per segment)', wings: 'No wings', antennae: '1 pair of antennae' },
          ].map((a) => (
            <div key={a.name} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/60">
              <h5 className="font-bold text-sm text-amber-300 mb-2">{a.name}</h5>
              <div className="space-y-1.5 text-xs text-slate-300">
                <p><span className="text-slate-400 font-medium">Body:</span> {a.body}</p>
                <p><span className="text-slate-400 font-medium">Legs:</span> {a.legs}</p>
                <p><span className="text-slate-400 font-medium">Wings:</span> {a.wings}</p>
                <p><span className="text-slate-400 font-medium">Sensory:</span> {a.antennae}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === 'monocot_dicot' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-800/70 border border-emerald-500/30">
            <h5 className="font-bold text-base text-emerald-400 mb-2 flex items-center justify-between">
              <span>Monocotyledons (Monocots)</span>
              <span className="text-xs font-normal text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded">e.g. Grasses, Maize, Lilies</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-center">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Seed</span>
                <span className="text-xs text-emerald-300 font-bold">1 Cotyledon</span>
                <p className="text-[10px] text-slate-400 mt-1">(Single seed leaf)</p>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Leaf Venation</span>
                <span className="text-xs text-emerald-300 font-bold">Parallel Veins</span>
                <p className="text-[10px] text-slate-400 mt-1">Long narrow blades</p>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Flower Parts</span>
                <span className="text-xs text-emerald-300 font-bold">Multiples of 3</span>
                <p className="text-[10px] text-slate-400 mt-1">Petals in 3s or 6s</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/70 border border-indigo-500/30">
            <h5 className="font-bold text-base text-indigo-400 mb-2 flex items-center justify-between">
              <span>Dicotyledons (Dicots)</span>
              <span className="text-xs font-normal text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded">e.g. Oak, Beans, Roses</span>
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3 text-center">
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Seed</span>
                <span className="text-xs text-indigo-300 font-bold">2 Cotyledons</span>
                <p className="text-[10px] text-slate-400 mt-1">(Two food storage leaves)</p>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Leaf Venation</span>
                <span className="text-xs text-indigo-300 font-bold">Branching / Net Veins</span>
                <p className="text-[10px] text-slate-400 mt-1">Reticulate network</p>
              </div>
              <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-1">Flower Parts</span>
                <span className="text-xs text-indigo-300 font-bold">Multiples of 4 or 5</span>
                <p className="text-[10px] text-slate-400 mt-1">Petals in 4s or 5s</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
