import { Topic } from '../types';

export const BIOLOGY_TOPICS: Topic[] = [
  {
    id: 1,
    title: "Cells",
    category: "Cell Biology",
    color: "from-emerald-500/20 to-teal-500/20",
    accent: "emerald",
    summary: "Cell structures, functions, specialized cell adaptations, biological organization, and microscopic magnification calculations.",
    memorise: "cell structure → function; magnification = image size ÷ actual size (always convert units first, e.g. 1 mm = 1000 µm).",
    diagramType: "cells",
    examTips: [
      "In magnification questions, always convert all values to the same unit (usually micrometres µm) before doing the division.",
      "State specific organelle functions: ribosomes make proteins, mitochondria release energy via aerobic respiration (do NOT say 'produces energy').",
      "Bacterial cells have peptidoglycan cell walls, circular DNA and plasmids, but lack a true nucleus or membrane-bound organelles."
    ],
    sections: [
      {
        title: "Cell structures and functions",
        points: [
          "Animal cell: nucleus – contains genetic material and controls cell activities; cytoplasm – site of chemical reactions; cell membrane – controls movement of substances into and out of cell; mitochondria – site of aerobic respiration; ribosomes – site of protein synthesis.",
          "Plant cell: has all of the above plus cell wall – supports/strengthens cell; chloroplast – site of photosynthesis; permanent vacuole containing cell sap – helps maintain turgor.",
          "Bacterial cell: cell wall, cell membrane, cytoplasm, ribosomes, circular DNA and plasmids; no nucleus."
        ],
        tableData: {
          headers: ["Structure", "Animal Cell", "Plant Cell", "Bacterial Cell", "Key Function"],
          rows: [
            ["Nucleus", "Present", "Present", "Absent", "Contains DNA; controls all cell activities"],
            ["Cell Membrane", "Present", "Present", "Present", "Partially permeable barrier controlling substance transport"],
            ["Mitochondria", "Present", "Present", "Absent", "Site of aerobic respiration releasing ATP energy"],
            ["Ribosomes", "Present (80S)", "Present (80S)", "Present (70S)", "Site of protein synthesis"],
            ["Cell Wall", "Absent", "Present (cellulose)", "Present (peptidoglycan)", "Provides rigid structural support; prevents bursting"],
            ["Chloroplasts", "Absent", "Present (in green parts)", "Absent", "Contains chlorophyll; traps light for photosynthesis"],
            ["Permanent Vacuole", "Absent (small temporary only)", "Present (large central)", "Absent", "Stores cell sap (sugars/salts); maintains turgidity"],
            ["Genetic Material", "Linear chromosomes in nucleus", "Linear chromosomes in nucleus", "Circular DNA loop + Plasmids", "Genetic code directing metabolic enzymes"]
          ]
        }
      },
      {
        title: "Specialised cells",
        points: [
          "Red blood cell: biconcave shape gives large surface area; no nucleus gives more space for haemoglobin; flexible to pass through capillaries.",
          "Root hair cell: long projection gives large surface area; thin wall gives short diffusion distance; absorbs water and mineral ions.",
          "Palisade cell: many chloroplasts; near upper surface to absorb light.",
          "Ciliated cell: cilia move mucus containing trapped particles.",
          "Sperm cell: flagellum for movement; many mitochondria for energy; acrosome contains enzymes."
        ],
        chains: [
          "Red blood cell: Biconcave disc → ↑ Surface area-to-volume ratio → Rapid oxygen diffusion",
          "Root hair: Cytoplasmic extension → ↑ Contact with soil solution → Max water/mineral uptake",
          "Palisade mesophyll: Columnar packed + Dense chloroplasts → Max photons absorbed for photosynthesis",
          "Ciliated epithelial cell: Rhythmic beating cilia → Wafts mucus upward away from lungs",
          "Sperm cell: Streamlined head + Acrosome digest egg coat + Midpiece mitochondria ATP → Flagellum propulsion"
        ]
      },
      {
        title: "Organisation",
        points: [
          "cell → tissue → organ → organ system → organism."
        ],
        chains: [
          "cell → tissue → organ → organ system → organism"
        ],
        callout: "Example: Muscle cell → Muscle tissue → Stomach → Digestive system → Human."
      },
      {
        title: "Magnification",
        points: [
          "magnification = image size ÷ actual size.",
          "Actual size = image size ÷ magnification; image size = actual size × magnification.",
          "Convert units before calculating (1 mm = 1000 µm, 1 cm = 10 mm = 10,000 µm)."
        ],
        equations: [
          {
            word: "Magnification (M) = Image Size (I) ÷ Actual Size (A)",
            symbol: "M = I / A  |  A = I / M  |  I = A × M"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Classification",
    category: "Organisms & Diversity",
    color: "from-sky-500/20 to-blue-500/20",
    accent: "sky",
    summary: "Systematic classification, species criteria, binomial nomenclature, five kingdoms, vertebrate classes, arthropods, and dichotomous keys.",
    memorise: "Classification = grouping by shared features; Species = produce fertile offspring; Binomial naming = Genus (capitalised) + species (lowercase).",
    diagramType: "classification",
    examTips: [
      "Always write scientific names with Genus capitalised and species in lowercase (e.g. Homo sapiens). Underline when handwriting.",
      "Dichotomous keys strictly use pairs of contrasting, readily observable morphological features (e.g., 'Has wings' vs 'Does not have wings').",
      "Viruses are not classified in the five kingdoms because they do not carry out all life processes and are non-cellular."
    ],
    sections: [
      {
        title: "Key definitions",
        points: [
          "Classification: grouping organisms according to shared features.",
          "Species: organisms that can reproduce with each other to produce fertile offspring.",
          "Binomial naming: genus + species.",
          "Dichotomous key: uses pairs of contrasting statements to identify organisms."
        ]
      },
      {
        title: "Five kingdoms",
        points: [
          "Animals, plants, fungi, prokaryotes and protoctists."
        ],
        tableData: {
          headers: ["Kingdom", "Cell Type", "Cell Wall", "Nutrition Mode", "Key Characteristics"],
          rows: [
            ["Animals", "Multicellular eukaryotic", "Absent", "Heterotrophic (ingestion)", "Nervous coordination; motile at some stage"],
            ["Plants", "Multicellular eukaryotic", "Cellulose", "Autotrophic (photosynthesis)", "Contains chlorophyll in chloroplasts"],
            ["Fungi", "Mostly multicellular eukaryotic", "Chitin", "Saprotrophic (external digestion)", "Hyphae mycelium; produce spores"],
            ["Prokaryotes", "Unicellular prokaryotic", "Peptidoglycan", "Heterotrophic or autotrophic", "No true nucleus; circular DNA loop"],
            ["Protoctists", "Mostly unicellular eukaryotic", "Variable", "Autotrophic or heterotrophic", "Catch-all eukaryotic kingdom (e.g. Amoeba, algae)"]
          ]
        }
      },
      {
        title: "Vertebrates",
        points: [
          "Mammals: hair/fur; lungs; mammary glands; usually give birth to live young.",
          "Birds: feathers; beak; wings; lungs; lay eggs.",
          "Reptiles: dry scaly skin; lungs; eggs with leathery shells.",
          "Amphibians: moist skin; eggs usually in water; larvae and adults have different habitats.",
          "Fish: gills; fins; scales; reproduce in water."
        ]
      },
      {
        title: "Arthropods",
        points: [
          "Myriapods: many body segments and legs.",
          "Insects: three body regions, three pairs of legs, usually two pairs of wings.",
          "Arachnids: two body regions and four pairs of legs.",
          "Crustaceans: mainly aquatic; more than four pairs of limbs; hard exoskeleton."
        ]
      },
      {
        title: "Plants, viruses",
        points: [
          "Monocots vs dicots: monocots have one cotyledon, parallel leaf veins and floral parts often in threes; dicots have two cotyledons, branching veins and floral parts often in fours/fives.",
          "Virus: genetic material surrounded by a protein coat; reproduces only inside living cells."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Movement into and out of cells",
    category: "Cell Biology",
    color: "from-cyan-500/20 to-teal-500/20",
    accent: "cyan",
    summary: "Diffusion mechanics, osmosis water potential gradients, plant vs animal osmotic responses, and ATP-powered active transport.",
    memorise: "Diffusion = high → low concentration; Osmosis = water molecules, high water potential → low water potential across partially permeable membrane; Active transport = low → high concentration + energy from respiration.",
    diagramType: "transport",
    examTips: [
      "Never say 'water concentration' in exam answers. Cambridge 5090 mandates 'water potential'.",
      "Pure water has the highest water potential (0 kPa). Adding solute lowers water potential (becomes more negative).",
      "Plant cells in hypertonic solutions become plasmolysed because the cytoplasm pulls away from the cell wall, leaving the space filled with outside solution."
    ],
    sections: [
      {
        title: "Diffusion",
        points: [
          "Diffusion: net movement of particles from a region of higher concentration to lower concentration, down a concentration gradient, due to random movement.",
          "Rate increases with larger surface area, higher temperature and steeper concentration gradient; decreases with greater diffusion distance."
        ],
        chains: [
          "Higher temperature → Particles gain kinetic energy → Move faster → Increased rate of diffusion",
          "Steeper concentration gradient → Greater net difference per unit time → Increased diffusion rate"
        ]
      },
      {
        title: "Osmosis",
        points: [
          "Osmosis: net movement of water molecules from higher water potential to lower water potential through a partially permeable membrane."
        ]
      },
      {
        title: "Plant cells in solutions",
        points: [
          "Turgid: water enters; vacuole swells; cell membrane pushes against cell wall.",
          "Flaccid: cell loses some water and becomes less firm.",
          "Plasmolysed: much water leaves; cell membrane pulls away from cell wall."
        ],
        chains: [
          "Dilute solution (high water potential) → Water enters plant cell by osmosis → Vacuole swells → Membrane exerts turgor pressure against strong cell wall → Turgid",
          "Concentrated solution (low water potential) → Water leaves plant cell by osmosis → Vacuole shrinks → Cytoplasm detaches from cell wall → Plasmolysed"
        ]
      },
      {
        title: "Animal cells",
        points: [
          "In a dilute solution, water enters by osmosis and a cell may burst.",
          "In a concentrated solution, water leaves by osmosis and the cell shrivels."
        ],
        callout: "Animal cells lack a rigid cellulose cell wall. In pure water, uncontrolled osmosis causes lysis (bursting). In hypertonic saline, water leaves causing crenation (shrivelling)."
      },
      {
        title: "Active transport",
        points: [
          "Active transport: movement of particles from lower to higher concentration, against the concentration gradient, using energy from respiration.",
          "Root hair cells use active transport to absorb mineral ions from dilute soil into cells."
        ],
        chains: [
          "Carrier protein in cell membrane binds ion → ATP from respiration hydrolysed → Protein changes conformation → Ion pumped against concentration gradient into cell"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Biological molecules",
    category: "Cell Biology",
    color: "from-amber-500/20 to-orange-500/20",
    accent: "amber",
    summary: "Constituent elements, macromolecule polymers, nucleotide chains, and the 4 fundamental diagnostic food tests.",
    memorise: "Food tests: Iodine → Starch (blue-black); Benedict's + heat → Reducing Sugar (brick-red); Biuret → Protein (lilac); Ethanol emulsion → Lipid (milky emulsion).",
    diagramType: "molecules",
    examTips: [
      "Benedict's test requires heating in a hot water bath (80–100°C) for 3–5 minutes. It is semi-quantitative: green → yellow → orange → brick-red.",
      "In the ethanol emulsion test, shake food sample with ethanol first to dissolve lipids, then decant into water to see the white milky emulsion.",
      "DNA base pairing rule: Adenine pairs with Thymine (A-T), Cytosine pairs with Guanine (C-G)."
    ],
    sections: [
      {
        title: "Elements and polymers",
        points: [
          "Carbohydrates and lipids contain carbon, hydrogen and oxygen; proteins contain carbon, hydrogen, oxygen and nitrogen; DNA contains carbon, hydrogen, oxygen, nitrogen and phosphorus.",
          "Glucose forms starch, glycogen and cellulose; amino acids form proteins; fatty acids + glycerol form lipids; nucleotides form DNA."
        ],
        tableData: {
          headers: ["Biological Molecule", "Elements Present", "Monomer / Subunit", "Polymer / Larger Molecule", "Biological Role"],
          rows: [
            ["Carbohydrate", "C, H, O", "Glucose (monosaccharide)", "Starch (plants), Glycogen (animals), Cellulose (walls)", "Immediate respiration energy & structural fiber"],
            ["Lipid (Fats & Oils)", "C, H, O", "1 Glycerol + 3 Fatty acids", "Triglyceride", "Long-term energy store, thermal insulation, cell membranes"],
            ["Protein", "C, H, O, N (often S)", "Amino acids (20 types)", "Polypeptide / Functional protein", "Enzymes, antibodies, haemoglobin, structural tissue"],
            ["DNA", "C, H, O, N, P", "Nucleotides (A, T, C, G)", "Double helix polynucleotide", "Genetic instructions encoding amino acid sequences"]
          ]
        }
      },
      {
        title: "Food tests",
        points: [
          "Starch: iodine solution → blue-black.",
          "Reducing sugar: Benedict's solution + heat → green/yellow/orange/brick-red depending on amount.",
          "Protein: Biuret test → lilac/purple.",
          "Lipid: ethanol emulsion test → milky/cloudy white emulsion."
        ],
        tableData: {
          headers: ["Nutrient Tested", "Reagent Added", "Specific Condition", "Positive Result", "Negative Result"],
          rows: [
            ["Starch", "Iodine solution", "Room temperature", "Blue-black", "Yellow-brown"],
            ["Reducing Sugar (glucose/maltose)", "Benedict's solution", "Heat in boiling water bath (>80°C)", "Green → Yellow → Orange → Brick-red precipitate", "Blue (no color change)"],
            ["Protein", "Biuret reagent (NaOH + dilute CuSO4)", "Room temperature", "Lilac / Purple / Violet", "Pale blue"],
            ["Lipid", "Ethanol + Water", "Dissolve in ethanol, pour into water", "Milky-white cloudy emulsion", "Clear / colourless"]
          ]
        }
      }
    ]
  },
  {
    id: 5,
    title: "Enzymes",
    category: "Cell Biology",
    color: "from-violet-500/20 to-purple-500/20",
    accent: "violet",
    summary: "Biological catalysts, active site lock-and-key specificity, thermal kinetics, denaturation, and controlled experimental methodology.",
    memorise: "Enzymes are proteins; active site shape is specific & complementary to substrate; high temperature breaks bonds causing irreversible denaturation.",
    diagramType: "enzymes",
    examTips: [
      "Never say an enzyme 'dies'—it is a molecule, not a living thing! State: 'The enzyme denatures: bonds break, active site changes shape, substrate no longer fits.'",
      "Below optimum temperature, enzymes are inactive due to low kinetic energy, but NOT denatured.",
      "Always distinguish independent variable (what you change), dependent variable (what you measure), and control variables (what you keep constant)."
    ],
    sections: [
      {
        title: "Key terms",
        points: [
          "Enzyme: a protein biological catalyst that speeds up reactions without being used up.",
          "Substrate: molecule acted on by an enzyme. Active site: region where substrate binds.",
          "Lock-and-key: substrate shape is complementary to the enzyme active site, so only suitable substrates bind."
        ],
        chains: [
          "Free Substrate + Free Enzyme → Enzyme-Substrate Complex formed → Reaction occurs → Enzyme + Products released unchanged"
        ]
      },
      {
        title: "Temperature and pH",
        points: [
          "As temperature rises, enzyme and substrate molecules move faster, increasing successful collisions and rate up to an optimum.",
          "Above the optimum, bonds maintaining the enzyme's shape break; the active site changes shape and the enzyme is denatured.",
          "Extreme pH can change the active-site shape and reduce enzyme activity."
        ],
        chains: [
          "Temperature rises to optimum → ↑ Kinetic energy → Faster molecular motion → More frequent successful collisions → ↑ Rate",
          "Temperature exceeds optimum → Thermal vibration breaks hydrogen bonds → Active site changes tertiary conformation → Substrate cannot bind → Enzyme denatured"
        ]
      },
      {
        title: "Enzyme investigation",
        points: [
          "Identify independent variable, dependent variable and control variables; repeat measurements and calculate a mean; measure rate rather than just final amount where appropriate."
        ],
        callout: "Standard experimental variables: Independent = Temperature (°C) or pH; Dependent = Volume of gas per min or time taken for starch to disappear; Control = Enzyme conc, substrate conc, volume."
      }
    ]
  },
  {
    id: 6,
    title: "Plant nutrition",
    category: "Plant Physiology",
    color: "from-emerald-500/20 to-lime-500/20",
    accent: "emerald",
    summary: "Photosynthesis biochemistry, glucose fates, light/CO2/temperature limiting factor dynamics, leaf anatomy, and essential mineral ions.",
    memorise: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂; Limiting factor = factor in shortest supply that restricts the rate; Nitrates → amino acids/proteins; Magnesium → chlorophyll.",
    diagramType: "plant_nutrition",
    examTips: [
      "Always balance the photosynthesis equation: 6 Carbon dioxide + 6 Water → 1 Glucose + 6 Oxygen.",
      "Destarching leaves prior to experiments: keep the plant in total darkness for 48 hours so stored starch is used up.",
      "Spongy mesophyll has large intercellular air spaces to facilitate rapid gas diffusion between stomata and palisade cells."
    ],
    sections: [
      {
        title: "Photosynthesis",
        points: [
          "Photosynthesis: process by which plants use light energy to make glucose from carbon dioxide and water, releasing oxygen.",
          "Word equation: carbon dioxide + water → glucose + oxygen.",
          "Symbol equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂."
        ],
        equations: [
          {
            word: "Carbon dioxide + Water —[Light & Chlorophyll]→ Glucose + Oxygen",
            symbol: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"
          }
        ]
      },
      {
        title: "Uses of glucose",
        points: [
          "Glucose can be converted to starch for storage, cellulose for cell walls, sucrose for transport, or used in respiration."
        ],
        chains: [
          "Glucose → Converted to insoluble Starch (stored in leaves/tubers; osmotic advantage)",
          "Glucose → Converted to Cellulose (structural polymer for rigid plant cell walls)",
          "Glucose → Converted to Sucrose (translocated through phloem sieve tubes to sinks)",
          "Glucose → Combines with Nitrates → Amino acids → Proteins for growth and repair"
        ]
      },
      {
        title: "Limiting factors",
        points: [
          "Rate is affected by light intensity, carbon dioxide concentration and temperature.",
          "Limiting factor: factor present in insufficient quantity that limits the rate of a process."
        ],
        chains: [
          "Increasing light/CO₂ while low → Rate increases proportionally (light/CO₂ is limiting factor)",
          "Graph curves and plateaus → Another factor is now in shortest supply (becomes limiting)"
        ]
      },
      {
        title: "Leaf adaptations",
        points: [
          "Large surface area; thin; transparent upper epidermis/cuticle; palisade layer with many chloroplasts; spongy mesophyll with air spaces; stomata and guard cells; vascular bundles with xylem and phloem."
        ],
        tableData: {
          headers: ["Leaf Tissue / Feature", "Structure", "Adaptation Function"],
          rows: [
            ["Waxy Cuticle", "Waterproof lipid coating on surface", "Minimises water loss by evaporation; protects from pathogens"],
            ["Upper Epidermis", "Single layer of transparent cells with no chloroplasts", "Allows maximum sunlight to penetrate down to palisade cells"],
            ["Palisade Mesophyll", "Tightly packed columnar cells rich in chloroplasts", "Positioned at upper surface to absorb maximum light for photosynthesis"],
            ["Spongy Mesophyll", "Loosely arranged irregular cells with large air cavities", "Provides enormous moist surface area and fast diffusion path for CO₂ and O₂"],
            ["Vascular Bundle (Vein)", "Xylem vessels + Phloem sieve tubes", "Xylem delivers water/minerals; Phloem exports sucrose to rest of plant"],
            ["Stomata & Guard Cells", "Microscopic pores flanked by kidney-shaped guard cells", "Open to allow CO₂ in and O₂ out; close in dark or drought to conserve water"]
          ]
        }
      },
      {
        title: "Investigations and minerals",
        points: [
          "Test leaves for starch using iodine after investigating light, chlorophyll or carbon dioxide availability.",
          "Nitrate ions: needed to make amino acids and therefore proteins. Deficiency leads to stunted growth and yellow older leaves.",
          "Magnesium ions: needed to make chlorophyll. Deficiency causes chlorosis (yellowing between leaf veins)."
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Transport in flowering plants",
    category: "Plant Physiology",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "emerald",
    summary: "Root water uptake, the continuous transpiration stream, xylem lignin support, stomatal regulation, wilting, and source-to-sink translocation.",
    memorise: "Transpiration chain: root hair → cortex → xylem → mesophyll → stomata; Translocation = transport of sucrose & amino acids in phloem from sources to sinks.",
    diagramType: "plant_transport",
    examTips: [
      "Transpiration rate increases with: higher temperature (more kinetic energy), higher light intensity (stomata open), higher wind speed (removes water vapour boundary layer), and LOWER humidity (steeper water potential gradient).",
      "Xylem is composed of dead, hollow, lignified vessels transporting water upwards unidirectionally.",
      "Phloem is composed of living sieve tube elements and companion cells transporting sugars bidirectionally."
    ],
    sections: [
      {
        title: "Root hair cells",
        points: [
          "Long projection gives large surface area; thin wall gives short pathway; absorbs water by osmosis and mineral ions by active transport."
        ]
      },
      {
        title: "Water pathway",
        points: [
          "root hair → cortex → xylem → mesophyll → evaporates from mesophyll cells → air spaces → stomata."
        ],
        chains: [
          "Soil water → Root hair cell → Root cortex parenchyma → Endodermis → Root xylem → Stem xylem → Leaf xylem → Mesophyll cell surface → Evaporation into substomatal air space → Diffusion through open stomata into atmosphere"
        ]
      },
      {
        title: "Xylem and transpiration",
        points: [
          "Xylem vessels transport water and mineral ions upwards and have lignified walls for support.",
          "Transpiration: loss of water vapour from leaves, mainly through stomata.",
          "Transpiration increases with higher temperature, greater light intensity and greater wind speed; it decreases with higher humidity."
        ]
      },
      {
        title: "Transpiration pull",
        points: [
          "Water evaporates from mesophyll → water potential decreases → more water is pulled from xylem → cohesion between water molecules helps maintain a continuous column."
        ],
        chains: [
          "Water evaporates from mesophyll cell walls → Meniscus curves & water potential drops → Water drawn from leaf xylem vessels by osmosis → Cohesion (hydrogen bonding) between water molecules draws continuous water column up xylem → Transpiration pull"
        ]
      },
      {
        title: "Wilting and translocation",
        points: [
          "Excessive water loss → cells lose turgor → leaves become flaccid and wilt.",
          "Translocation: transport of sucrose and amino acids in phloem from sources to sinks."
        ],
        callout: "Source = region of production or release (e.g. mature photosynthesising leaf or storage tuber in spring). Sink = region of usage or storage (e.g. growing shoot tip, developing root, fruit or flower)."
      }
    ]
  },
  {
    id: 8,
    title: "Human nutrition",
    category: "Human Physiology",
    color: "from-rose-500/20 to-red-500/20",
    accent: "rose",
    summary: "Balanced diet requirements, nutrient deficiencies, physical vs chemical breakdown, digestive enzymes, bile emulsification, and villus absorption.",
    memorise: "Digestive enzymes: Amylase: starch → maltose; Maltase: maltose → glucose; Protease: protein → amino acids; Lipase: lipids → fatty acids + glycerol; Villus adaptations: large surface area, thin 1-cell epithelium, capillaries + lacteal.",
    diagramType: "human_nutrition",
    examTips: [
      "Bile is produced in the liver, stored in the gallbladder, and enters the duodenum. It is NOT an enzyme: it mechanically emulsifies large lipid globules into small droplets to increase surface area for lipase, and neutralises acidic stomach chyme.",
      "Assimilation is the movement of digested food molecules into the cells of the body where they are used, becoming part of the cells.",
      "Lacteals absorb fatty acids and glycerol; blood capillaries absorb glucose, amino acids, minerals, and water."
    ],
    sections: [
      {
        title: "Balanced diet",
        points: [
          "Balanced diet: provides the correct amounts of carbohydrates, lipids, proteins, vitamins, minerals, fibre and water for health.",
          "Vitamin C deficiency → scurvy (bleeding gums, poor wound healing); vitamin D/calcium deficiency → rickets (soft, bowed bones); iron deficiency → anaemia (fatigue, lack of haemoglobin for oxygen transport)."
        ]
      },
      {
        title: "Teeth and digestion",
        points: [
          "Incisors cut; canines tear; premolars/molars crush and grind.",
          "Physical digestion: breaks food into smaller pieces without changing chemical composition.",
          "Chemical digestion: enzymes break large insoluble molecules into small soluble molecules."
        ]
      },
      {
        title: "Digestive enzymes",
        points: [
          "Amylase: starch → maltose.",
          "Maltase: maltose → glucose.",
          "Protease: protein → amino acids.",
          "Lipase: lipids → fatty acids + glycerol."
        ],
        tableData: {
          headers: ["Enzyme", "Production Site", "Active Site", "Substrate", "End Product(s)", "Optimum pH"],
          rows: [
            ["Salivary Amylase", "Salivary glands", "Mouth", "Starch", "Maltose", "pH 7 (neutral)"],
            ["Pepsin (Protease)", "Gastric glands", "Stomach", "Proteins", "Peptides / polypeptides", "pH 1.5–2.0 (acidic)"],
            ["Pancreatic Amylase", "Pancreas", "Duodenum (small intestine)", "Starch", "Maltose", "pH 8 (alkaline)"],
            ["Trypsin (Protease)", "Pancreas", "Duodenum (small intestine)", "Proteins / peptides", "Amino acids", "pH 8 (alkaline)"],
            ["Pancreatic Lipase", "Pancreas", "Duodenum (small intestine)", "Emulsified Lipids", "Fatty acids + Glycerol", "pH 8 (alkaline)"],
            ["Maltase", "Small intestine lining", "Ileum (small intestine)", "Maltose", "Glucose", "pH 8 (alkaline)"]
          ]
        }
      },
      {
        title: "Digestive system",
        points: [
          "Mouth: ingestion, chewing, saliva/amylase. Oesophagus: peristalsis. Stomach: acid and protease; acid kills bacteria and provides suitable pH. Small intestine: digestion and absorption. Large intestine: absorbs water. Rectum stores faeces; anus egests."
        ]
      },
      {
        title: "Bile, peristalsis, absorption",
        points: [
          "Bile emulsifies fats into small droplets, increasing surface area for lipase; it also neutralises stomach acid. Bile is not an enzyme.",
          "Peristalsis: rhythmic contraction and relaxation of circular and longitudinal muscles moves food along the gut.",
          "Absorption: movement of digested soluble molecules into blood/lymph. Assimilation: use/incorporation of absorbed substances by cells."
        ]
      },
      {
        title: "Villi",
        points: [
          "Large surface area; thin epithelium; good blood supply maintains concentration gradients; lacteals absorb fatty acids and glycerol products."
        ],
        chains: [
          "Finger-like villi + microvilli → Vastly enlarged surface area → Maximum rate of absorption",
          "Single-cell thin epithelium → Short diffusion pathway → Rapid nutrient entry",
          "Dense blood capillary network → Rapid transport of glucose & amino acids → High concentration gradient maintained"
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Human gas exchange",
    category: "Human Physiology",
    color: "from-sky-500/20 to-indigo-500/20",
    accent: "sky",
    summary: "Respiratory anatomy, gas exchange surface adaptations, inspired vs expired air composition, alveolus diffusion, and ventilation mechanics.",
    memorise: "Alveoli: huge surface area, 1-cell thin walls, dense capillary network, moist lining; Inspiration: diaphragm flattens, external intercostals contract, thorax volume ↑, pressure ↓, air enters.",
    diagramType: "gas_exchange",
    examTips: [
      "Inspiration is an ACTIVE process: external intercostal muscles contract, ribs move up and out, diaphragm contracts and flattens.",
      "Pressure and volume are inversely related: as thoracic volume increases, pulmonary pressure drops below atmospheric pressure, forcing air in.",
      "Alveolus wall is ONE cell thick, capillary wall is ONE cell thick—total diffusion distance is only two cells!"
    ],
    sections: [
      {
        title: "Gas exchange surface",
        points: [
          "Large surface area, thin barrier and good ventilation/blood supply maintain a steep diffusion gradient."
        ]
      },
      {
        title: "Air composition",
        points: [
          "Atmospheric air is approximately 78% nitrogen, 21% oxygen and 0.04% carbon dioxide."
        ],
        tableData: {
          headers: ["Gas Component", "Inspired Air (%)", "Expired Air (%)", "Biological Reason for Difference"],
          rows: [
            ["Oxygen (O₂)", "21%", "16%", "Absorbed into bloodstream across alveoli; consumed in cellular aerobic respiration"],
            ["Carbon Dioxide (CO₂)", "0.04%", "4.0%", "Produced as a waste product of cellular aerobic respiration; diffuses into alveoli"],
            ["Nitrogen (N₂)", "78%", "78%", "Inert gas; not absorbed or used by human metabolic cells"],
            ["Water Vapour", "Variable / Low", "Saturated (High)", "Evaporates from warm, moist respiratory mucosal surfaces"],
            ["Temperature", "Ambient temperature", "Body temperature (~37°C)", "Warmed by blood flow through respiratory passages"]
          ]
        }
      },
      {
        title: "Air pathway",
        points: [
          "larynx → trachea → bronchi → bronchioles → alveoli."
        ],
        chains: [
          "Nasal cavity → Larynx → Trachea (C-shaped cartilage rings) → Left/Right Bronchi → Bronchioles → Alveoli air sacs"
        ]
      },
      {
        title: "Alveoli",
        points: [
          "Many alveoli give large surface area; walls one cell thick give short diffusion distance; dense capillary network maintains gradient; ventilation maintains oxygen/carbon dioxide gradients."
        ]
      },
      {
        title: "Ventilation",
        points: [
          "Inspiration: external intercostal muscles contract, ribs move up/out, diaphragm contracts/flattens, thorax volume increases, pressure decreases, air enters.",
          "Expiration: muscles relax, ribs move down/in, diaphragm domes, thorax volume decreases, pressure increases, air leaves."
        ],
        chains: [
          "Inspiration: Ext intercostals contract → Ribs up/out → Diaphragm contracts/flattens → Thorax volume ↑ → Thorax pressure < Atmos → Air sucked in",
          "Expiration: Ext intercostals relax → Ribs down/in → Diaphragm relaxes/domes → Thorax volume ↓ → Thorax pressure > Atmos → Air expelled"
        ]
      },
      {
        title: "Airway protection and exercise",
        points: [
          "Goblet cells produce mucus; cilia move mucus and trapped particles toward the throat.",
          "During exercise, breathing becomes faster/deeper to increase oxygen supply and remove carbon dioxide."
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Respiration",
    category: "Human Physiology",
    color: "from-orange-500/20 to-amber-500/20",
    accent: "amber",
    summary: "Cellular energy release, aerobic vs anaerobic pathways, fermentation in yeast, exercise oxygen debt, and lactic acid hepatic metabolism.",
    memorise: "Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O; Anaerobic in humans: glucose → lactic acid; Anaerobic in yeast: glucose → ethanol + CO₂; Oxygen debt = oxygen needed to oxidise lactic acid in liver.",
    diagramType: "respiration",
    examTips: [
      "Do NOT confuse respiration with breathing! Breathing is ventilation (moving air in and out); respiration is a chemical reaction occurring inside all living cells.",
      "Anaerobic respiration in humans releases significantly less ATP energy per glucose molecule compared to aerobic respiration because glucose is only partially broken down.",
      "Oxygen debt is repaid after exercise by continued deep breathing so oxygen can be transported to the liver to oxidise lactic acid back into glucose or CO₂ and water."
    ],
    sections: [
      {
        title: "Definition and energy",
        points: [
          "Respiration: chemical reactions in cells that break down nutrient molecules and release energy.",
          "Energy is used for muscle contraction, protein synthesis, cell division, active transport, growth, nerve impulses and maintaining body temperature."
        ]
      },
      {
        title: "Aerobic respiration",
        points: [
          "Word equation: glucose + oxygen → carbon dioxide + water.",
          "Symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O."
        ],
        equations: [
          {
            word: "Glucose + Oxygen → Carbon dioxide + Water (+ Large amount of ATP energy)",
            symbol: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O"
          }
        ]
      },
      {
        title: "Anaerobic respiration",
        points: [
          "In humans: glucose → lactic acid.",
          "In yeast: glucose → ethanol + carbon dioxide. This is fermentation."
        ],
        equations: [
          {
            word: "In Muscle Cells: Glucose → Lactic acid (+ Small amount of ATP)",
            symbol: "C₆H₁₂O₆ → 2C₃H₆O₃"
          },
          {
            word: "In Yeast Cells (Fermentation): Glucose → Ethanol + Carbon dioxide (+ Small ATP)",
            symbol: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂"
          }
        ]
      },
      {
        title: "Exercise and oxygen debt",
        points: [
          "Vigorous exercise can cause insufficient oxygen for aerobic respiration → anaerobic respiration increases → lactic acid accumulates.",
          "After exercise, breathing and heart rate remain elevated to supply oxygen; the liver uses oxygen to break down/oxidise lactic acid."
        ],
        chains: [
          "Vigorous muscular activity → Oxygen demand exceeds cardiovascular supply → Cells respire anaerobically → Lactic acid accumulates in muscles causing fatigue & cramp → Oxygen debt created",
          "Recovery phase → Elevated pulse and breathing rate maintain high oxygen delivery → Lactic acid transported via blood to liver → Liver uses oxygen to oxidise lactic acid → Debt repaid"
        ]
      },
      {
        title: "Temperature and yeast",
        points: [
          "Temperature affects enzyme-controlled respiration. Rate increases up to an optimum; above the optimum enzymes become denatured and rate falls."
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Transport in humans",
    category: "Human Physiology",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "rose",
    summary: "Double circulatory system, 4-chambered heart anatomy, blood vessel structural adaptations, cellular blood components, and coronary artery pathology.",
    memorise: "Double circulation: heart → lungs → heart (pulmonary) & heart → body → heart (systemic); Left ventricle has thickest muscular wall to pump blood around whole body at high pressure.",
    diagramType: "circulation",
    examTips: [
      "Arteries carry oxygenated blood AWAY from the heart—EXCEPT the Pulmonary Artery, which carries deoxygenated blood to the lungs.",
      "Veins carry deoxygenated blood TOWARD the heart—EXCEPT the Pulmonary Vein, which carries oxygenated blood from the lungs.",
      "Valves are present in veins and the heart to prevent the backflow of blood under low pressure."
    ],
    sections: [
      {
        title: "Circulatory system and double circulation",
        points: [
          "Circulatory system consists of a pump, blood vessels and valves; valves help maintain one-way flow.",
          "Double circulation: blood passes through the heart twice in one complete circuit: heart → lungs → heart and heart → body → heart."
        ],
        chains: [
          "Pulmonary Circuit: Right Ventricle → Pulmonary Artery → Lungs (oxygenated) → Pulmonary Vein → Left Atrium",
          "Systemic Circuit: Left Ventricle → Aorta → Body Tissues (deoxygenated) → Vena Cava → Right Atrium"
        ]
      },
      {
        title: "Heart",
        points: [
          "Right atrium receives deoxygenated blood; right ventricle pumps it to lungs; left atrium receives oxygenated blood; left ventricle pumps it to body.",
          "Septum prevents mixing of oxygenated and deoxygenated blood.",
          "Valves prevent backflow.",
          "Left ventricle has thicker muscular wall because it pumps blood around the whole body at higher pressure.",
          "Coronary arteries supply oxygen and nutrients to heart muscle."
        ]
      },
      {
        title: "Blood vessels",
        points: [
          "Arteries: carry blood away from heart; thick muscular/elastic walls; small lumen; high pressure; no valves.",
          "Veins: carry blood toward heart; thinner walls; large lumen; valves; low pressure.",
          "Capillaries: walls one cell thick; narrow lumen; allow exchange with tissues."
        ],
        tableData: {
          headers: ["Feature", "Artery", "Vein", "Capillary"],
          rows: [
            ["Direction of Flow", "Away from heart", "Towards heart", "Connects arterioles to venules"],
            ["Blood Pressure", "High (pulsatile)", "Low (smooth)", "Falling / Low"],
            ["Wall Thickness", "Thick and muscular", "Thin, less muscular", "Single endothelial cell thick"],
            ["Lumen Diameter", "Narrow / Small", "Wide / Large", "Microscopic (~size of 1 RBC)"],
            ["Valves Present?", "Absent (except semilunar at exit)", "Present throughout to stop backflow", "Absent"],
            ["Key Function", "Withstand & maintain high pumping pressure", "Return blood under low pressure with low resistance", "Rapid exchange of O₂, CO₂, nutrients & waste with tissue fluid"]
          ]
        }
      },
      {
        title: "Blood",
        points: [
          "Red blood cells: carry oxygen using haemoglobin.",
          "Lymphocytes: produce antibodies.",
          "Phagocytes: engulf pathogens.",
          "Platelets: help blood clot.",
          "Plasma: transports cells and dissolved substances including ions, glucose, amino acids, hormones, carbon dioxide, urea and other substances."
        ]
      },
      {
        title: "Coronary heart disease",
        points: [
          "Coronary artery blockage reduces blood and oxygen supply to heart muscle. Risk factors include unhealthy diet, sedentary lifestyle, smoking, stress, age, genetics and gender. Healthy diet and exercise reduce risk."
        ],
        chains: [
          "High saturated fat diet / smoking / hypertension → Atheroma plaque deposits inside coronary arteries → Lumen narrows → Reduced oxygen & glucose delivered to cardiac muscle cells → Anaerobic respiration → Angina / Myocardial infarction (heart attack)"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Disease and immunity",
    category: "Health & Disease",
    color: "from-purple-500/20 to-violet-500/20",
    accent: "purple",
    summary: "Pathogen transmission routes, primary physiological barriers, infectious case studies, antibiotic action, active vs passive immunity, and vaccination.",
    memorise: "Vaccination: dead/weakened antigen stimulates lymphocytes → antibodies produced → memory cells remain → faster, stronger secondary response on later exposure; Antibiotics kill bacteria, NEVER viruses.",
    diagramType: "immunity",
    examTips: [
      "Explain why antibiotics cannot cure viral infections: viruses live inside host cells and lack cell walls or independent bacterial metabolic machinery.",
      "Active immunity involves memory cells and provides long-lasting protection; passive immunity provides instant but temporary antibodies with no memory cells formed.",
      "Cholera mechanism: Vibrio cholerae produces a toxin that causes chloride ion secretion into the gut lumen; water follows by osmosis, resulting in watery diarrhoea and dehydration."
    ],
    sections: [
      {
        title: "Disease and transmission",
        points: [
          "Pathogen: disease-causing organism.",
          "Transmissible disease: disease caused by a pathogen that can pass from one host to another.",
          "Transmission can occur directly by contact/blood/body fluids or indirectly via contaminated food, surfaces, air or vectors."
        ]
      },
      {
        title: "Defences",
        points: [
          "Skin forms a physical barrier; hairs trap particles; mucus traps pathogens; stomach acid kills many pathogens."
        ]
      },
      {
        title: "Examples",
        points: [
          "Malaria: caused by a parasite (Plasmodium) and transmitted by mosquito vector (female Anopheles). Control includes reducing mosquito breeding and preventing bites (nets, insect repellent, draining stagnant water).",
          "HIV: virus transmitted through infected blood/body fluids; attacks lymphocytes and can lead to AIDS. Prevention includes safe sex, safe needles, screened blood and appropriate medical treatment.",
          "Cholera: bacterium (Vibrio cholerae) transmitted in contaminated water. Toxin causes chloride ion secretion; water follows by osmosis into intestine → diarrhoea → dehydration."
        ],
        chains: [
          "Cholera bacterium ingested → Secretes enterotoxin in small intestine → Epithelial cells actively secrete Cl⁻ ions into lumen → Water potential in gut decreases → Water moves from blood into intestine by osmosis → Severe watery diarrhoea and dehydration"
        ]
      },
      {
        title: "Antibiotics",
        points: [
          "Antibiotics treat bacterial infections but do not treat viruses. Use only when necessary to reduce selection for resistant bacteria."
        ]
      },
      {
        title: "Active and passive immunity",
        points: [
          "Active immunity: body's lymphocytes make antibodies and memory cells; usually long-lasting.",
          "Passive immunity: antibodies are received from another individual; no memory cells are made and protection is temporary. Examples include antibodies through placenta or breast milk."
        ],
        tableData: {
          headers: ["Feature", "Active Immunity", "Passive Immunity"],
          rows: [
            ["Source of Antibodies", "Produced by host's own lymphocytes", "Acquired from an external source"],
            ["Antigen Contact Needed?", "Yes (pathogen or vaccine)", "No"],
            ["Memory Cells Formed?", "Yes (memory lymphocytes persist)", "No memory cells produced"],
            ["Time for Protection", "Slow onset (takes days/weeks)", "Immediate protection upon receipt"],
            ["Duration of Protection", "Long-term (years or lifelong)", "Short-term / temporary (antibodies degraded)"],
            ["Examples", "Natural infection or vaccination", "Colostrum/breastmilk, transplacental transfer, antivenom injection"]
          ]
        }
      },
      {
        title: "Vaccination",
        points: [
          "Weakened/dead pathogen or antigen stimulates lymphocytes → antibodies produced → memory cells remain → faster, stronger response on later exposure."
        ],
        chains: [
          "Weakened/attenuated pathogen injected → Antigens recognized by lymphocytes → Lymphocytes clone and produce specific complementary antibodies → Memory cells remain in circulation → Future infection results in rapid mass antibody production → Pathogen destroyed before disease develops"
        ]
      }
    ]
  },
  {
    id: 13,
    title: "Excretion",
    category: "Human Physiology",
    color: "from-teal-500/20 to-emerald-500/20",
    accent: "teal",
    summary: "Metabolic waste excretion, renal organology, Bowman's capsule ultrafiltration, selective tubular reabsorption, and hepatic deamination.",
    memorise: "Chain: excess amino acids → liver → deamination → urea → kidneys → urine; Ultrafiltration = Bowman's capsule; Selective reabsorption = all glucose + some ions + most water back into blood.",
    diagramType: "excretion",
    examTips: [
      "Do NOT confuse excretion with egestion! Egestion is the removal of undigested food (faeces) via the anus; excretion is the removal of metabolic waste products produced by cells.",
      "100% of glucose is selectively reabsorbed from the proximal tubule back into blood by active transport.",
      "Proteins and blood cells are too large to pass through the basement membrane during ultrafiltration in the glomerulus."
    ],
    sections: [
      {
        title: "Key definition",
        points: [
          "Excretion: removal from the body of toxic materials and substances produced by metabolism."
        ]
      },
      {
        title: "Waste products",
        points: [
          "Carbon dioxide from respiration is excreted by lungs.",
          "Urea is made in the liver from excess amino acids and excreted by kidneys."
        ]
      },
      {
        title: "Urinary system",
        points: [
          "Kidneys remove urea, excess water and excess ions; ureters carry urine to bladder; bladder stores urine; urethra carries urine out."
        ],
        chains: [
          "Renal artery delivers blood to kidney → Nephrons filter blood and produce urine → Ureters transport urine to bladder → Bladder stores urine → Urethra excretes urine during urination"
        ]
      },
      {
        title: "Nephron",
        points: [
          "Glomerulus/Bowman's capsule: high-pressure filtration of water, glucose, ions and urea from blood.",
          "Selective reabsorption in tubules returns all glucose, some ions and most water to blood.",
          "Urine contains urea, excess water and excess ions."
        ],
        chains: [
          "High hydrostatic pressure in glomerulus → Ultrafiltration through basement membrane into Bowman's capsule → Glomerular filtrate formed (water, glucose, ions, urea)",
          "Filtrate passes down tubules → Active transport reabsorbs 100% glucose and required salts → Osmosis reabsorbs water → Remaining concentrated solution is Urine"
        ]
      },
      {
        title: "Deamination",
        points: [
          "Deamination: removal of the nitrogen-containing part of excess amino acids in the liver, producing urea.",
          "Chain: excess amino acids → liver → deamination → urea → kidneys → urine."
        ],
        chains: [
          "excess amino acids → liver → deamination → urea → kidneys → urine"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Coordination and control",
    category: "Human Physiology",
    color: "from-sky-500/20 to-blue-500/20",
    accent: "sky",
    summary: "Central and peripheral nervous systems, reflex arc arc, synaptic neurotransmission, eye accommodation, hormonal regulation, and thermoregulation/glucose homeostasis.",
    memorise: "Reflex arc: stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response; Eye accommodation: Near = ciliary muscles contract, ligaments slack, lens rounder/thicker.",
    diagramType: "coordination",
    examTips: [
      "In a synapse, impulse transmission is strictly ONE-WAY because neurotransmitter vesicles are only present in the presynaptic terminal, and receptor proteins are only on the postsynaptic membrane.",
      "For looking at NEAR objects: Ciliary muscles CONTRACT, suspensory ligaments SLACKEN, lens becomes THICKER/MORE ROUND, refracts light strongly.",
      "Insulin lowers blood glucose by converting glucose into glycogen stored in liver/muscles. Glucagon raises blood glucose by converting glycogen back to glucose."
    ],
    sections: [
      {
        title: "Nervous system",
        points: [
          "CNS: brain + spinal cord. PNS: nerves outside CNS.",
          "Sensory neurone: receptor → CNS. Relay neurone: within CNS. Motor neurone: CNS → effector."
        ]
      },
      {
        title: "Reflex arc",
        points: [
          "stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response."
        ],
        chains: [
          "stimulus → receptor → sensory neurone → relay neurone → motor neurone → effector → response"
        ],
        callout: "Reflexes are rapid, automatic, and involuntary responses that protect the body from damage without requiring conscious cerebral processing."
      },
      {
        title: "Synapses",
        points: [
          "Impulse arrives → neurotransmitter released → diffuses across synaptic gap → binds receptors on next neurone → new impulse. Transmission is one-way because neurotransmitter release and receptors are arranged on opposite sides."
        ],
        chains: [
          "Electrical impulse reaches axon terminal → Vesicles fuse with presynaptic membrane → Neurotransmitter released by exocytosis → Diffuses across synaptic cleft → Binds to specific receptors on postsynaptic membrane → Generates new electrical action potential"
        ]
      },
      {
        title: "Eye",
        points: [
          "Cornea refracts light; iris controls pupil size; lens focuses light; ciliary muscles and suspensory ligaments change lens shape; retina contains light receptors; optic nerve carries impulses; fovea has highest receptor density; blind spot has no receptors."
        ]
      },
      {
        title: "Pupil reflex and accommodation",
        points: [
          "Bright light: circular muscles contract, radial muscles relax → pupil becomes smaller (protects retina).",
          "Dim light: circular muscles relax, radial muscles contract → pupil becomes larger (allows more light in).",
          "Near object: ciliary muscles contract → suspensory ligaments slack → lens thicker/rounder → more refraction.",
          "Far object: ciliary muscles relax → ligaments tight → lens flatter → less refraction."
        ],
        tableData: {
          headers: ["Vision Task", "Ciliary Muscles", "Suspensory Ligaments", "Lens Shape", "Degree of Refraction"],
          rows: [
            ["Viewing Near Object (<6 m)", "Contract", "Slack / Loosen", "Thick / Round / Spherical", "Strong refraction (light rays diverge)"],
            ["Viewing Distant Object (>6 m)", "Relax", "Taut / Tighten", "Thin / Flat / Elongated", "Weak refraction (light rays almost parallel)"],
            ["Bright Light Exposure", "Circular contract, Radial relax", "N/A", "Pupil constricts (smaller diameter)", "Protects retinal photoreceptors"],
            ["Dim Light Exposure", "Circular relax, Radial contract", "N/A", "Pupil dilates (larger diameter)", "Maximises light reaching retina"]
          ]
        }
      },
      {
        title: "Hormones and homeostasis",
        points: [
          "Hormone: chemical messenger carried in blood from an endocrine gland to a target organ.",
          "Adrenal glands: adrenaline. Pancreas: insulin/glucagon. Pituitary: FSH/LH. Testes: testosterone. Ovaries: oestrogen/progesterone.",
          "Adrenaline increases heart rate and blood glucose.",
          "Homeostasis: maintenance of a constant internal environment. Negative feedback: response reverses a change and returns a factor toward its set point."
        ]
      },
      {
        title: "Temperature and glucose control",
        points: [
          "Hot: sweating, vasodilation (arterioles widen, more blood flow near skin surface radiating heat), hair erector muscles relax.",
          "Cold: shivering (involuntary muscle contraction generates heat), vasoconstriction (arterioles constrict, less blood flow to skin surface), hair erector muscles contract.",
          "High blood glucose: insulin promotes conversion of glucose to glycogen in liver and lowers blood glucose.",
          "Low blood glucose: glucagon promotes glycogen breakdown to glucose and raises blood glucose.",
          "Type 1 diabetes: insufficient insulin; high blood glucose and glucose may appear in urine; treated with insulin injections."
        ],
        chains: [
          "High blood glucose → Pancreatic beta cells secrete insulin → Liver & muscle cells absorb glucose and convert it to stored glycogen → Blood glucose returns to normal set point",
          "Low blood glucose → Pancreatic alpha cells secrete glucagon → Liver breaks down glycogen into glucose and releases into blood → Blood glucose rises back to normal set point"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "Coordination and response in plants",
    category: "Plant Physiology",
    color: "from-lime-500/20 to-green-500/20",
    accent: "lime",
    summary: "Plant tropisms, auxin synthesis in shoot apices, unilateral light redistribution, cell elongation kinetics, and experimental investigations.",
    memorise: "Auxin is made in shoot tip; one-sided light → auxin moves to shaded side → cells on shaded side elongate more → shoot bends towards light.",
    diagramType: "plant_tropism",
    examTips: [
      "Auxin stimulates cell ELONGATION in shoots, but INHIBITS cell elongation in roots!",
      "Shoots are positively phototropic (bend toward light) and negatively gravitropic (grow upward against gravity).",
      "Roots are positively gravitropic (grow downwards in gravity vector) and negatively phototropic."
    ],
    sections: [
      {
        title: "Tropisms",
        points: [
          "Gravitropism: roots positive, shoots negative.",
          "Phototropism: shoots positive."
        ]
      },
      {
        title: "Auxin",
        points: [
          "Auxin is produced in the shoot tip. Unequal distribution occurs in response to light/gravity and affects cell elongation.",
          "Shoot phototropism: one-sided light → auxin accumulates on shaded side → shaded side elongates more → shoot bends toward light.",
          "Gravitropism: unequal auxin distribution causes differential growth; shoots bend away from gravity and roots bend toward gravity."
        ],
        chains: [
          "Unilateral light hits shoot tip → Auxin diffuses down and migrates towards the shaded side → High auxin concentration on shaded side → Cells on shaded side absorb water and elongate rapidly → Unequal cell growth forces shoot to curve towards light"
        ]
      },
      {
        title: "Investigation",
        points: [
          "Independent variable: light direction/intensity or orientation. Dependent variable: direction/amount of growth. Control species, age, temperature, water and time. Repeat and calculate a mean."
        ],
        callout: "Classic experiments: Decapitating shoot tip stops phototropism (source removed); Opaque cap stops response; Transparent cap allows phototropism; Mica sheet blocks chemical diffusion."
      }
    ]
  },
  {
    id: 16,
    title: "Development of organisms and continuity of life",
    category: "Genetics & Evolution",
    color: "from-pink-500/20 to-rose-500/20",
    accent: "pink",
    summary: "Mitosis vs meiosis, stem cells, floral reproductive morphology, pollination vectors, seed germination, human gametogenesis, and menstrual cycle hormones.",
    memorise: "Mitosis = 2 identical diploid cells (growth/repair); Meiosis = 4 different haploid cells (gametes); Menstrual cycle: FSH (follicle), Oestrogen (thickens lining), LH (ovulation), Progesterone (maintains lining).",
    diagramType: "reproduction",
    examTips: [
      "Wind-pollinated flowers have exposed feathery stigmas to catch pollen and loose dangling anthers; insect-pollinated flowers have large colourful petals, scent, nectar, and sticky pollen.",
      "Seed germination conditions mnemonic WOW: Water (activates enzymes), Oxygen (aerobic respiration for ATP), Warmth (optimum temperature for enzyme reactions).",
      "Maternal and fetal blood normally do not mix in the placenta; diffusion occurs across a thin placental barrier to protect fetus from maternal high blood pressure and pathogens."
    ],
    sections: [
      {
        title: "Chromosomes, mitosis and stem cells",
        points: [
          "Chromosomes contain DNA; genes carry genetic information.",
          "Haploid: one set of chromosomes. Diploid: two sets. Humans have 23 pairs in diploid cells (46 total).",
          "Mitosis: nuclear division producing genetically identical cells with the same chromosome number; used for growth, repair, replacement and asexual reproduction.",
          "Stem cells: unspecialised cells that divide by mitosis and can differentiate into specialised cells.",
          "Cancer: uncontrolled cell division."
        ]
      },
      {
        title: "Meiosis and reproduction",
        points: [
          "Meiosis: reduction division producing haploid gametes; chromosome number is halved and cells are genetically different.",
          "Asexual reproduction: one parent; genetically identical offspring; rapid/no mate needed but little variation.",
          "Sexual reproduction: fusion of haploid nuclei → diploid zygote; produces genetic variation."
        ],
        tableData: {
          headers: ["Feature", "Mitosis", "Meiosis"],
          rows: [
            ["Division Type", "Equational division (1 division)", "Reduction division (2 divisions)"],
            ["Number of Daughter Cells", "2 daughter cells", "4 daughter cells"],
            ["Ploidy Level", "Diploid (2n) → Diploid (2n)", "Diploid (2n) → Haploid (n)"],
            ["Genetic Identity", "Genetically identical clones", "Genetically distinct (recombination & crossing over)"],
            ["Biological Role", "Growth, tissue repair, asexual reproduction", "Production of gametes (sperm and egg cells)"]
          ]
        }
      },
      {
        title: "Flower structure and pollination",
        points: [
          "Sepals protect bud; petals attract pollinators; anther produces pollen; filament supports anther; stigma receives pollen; style supports stigma/route for pollen tube; ovary contains ovules; ovule contains female gamete/nucleus and develops into seed.",
          "Pollination: transfer of pollen from anther to stigma. Cross-pollination increases genetic variation.",
          "Insect-pollinated: large petals/nectar/sticky pollen. Wind-pollinated: exposed anthers, feathery stigma, light pollen."
        ]
      },
      {
        title: "Fertilisation, seeds and germination",
        points: [
          "Pollen grain germinates on stigma → pollen tube grows down style → reaches ovule → male nucleus fuses with female nucleus → zygote.",
          "Seed dispersal reduces competition and allows colonisation.",
          "Germination requires water, oxygen and suitable temperature: water activates enzymes; oxygen is needed for aerobic respiration; suitable temperature allows enzyme activity."
        ],
        chains: [
          "Pollen on stigma → Pollen tube germinates → Grows down through style tissue → Enters micropyle of ovule → Male gamete nucleus enters embryo sac → Fuses with female egg nucleus → Diploid zygote → Zygote forms embryo; ovule becomes seed; ovary wall becomes fruit"
        ]
      },
      {
        title: "Human reproduction",
        points: [
          "Male: testes, scrotum, sperm duct, prostate gland, urethra, penis.",
          "Female: ovaries, oviducts, uterus, cervix, vagina.",
          "Fertilisation = haploid sperm nucleus + haploid egg nucleus → diploid zygote.",
          "Testosterone causes male secondary sexual characteristics; oestrogen causes female secondary sexual characteristics."
        ]
      },
      {
        title: "Menstrual cycle and pregnancy",
        points: [
          "FSH stimulates follicle/egg development; oestrogen thickens uterus lining and inhibits FSH; LH causes ovulation; progesterone maintains uterus lining.",
          "Embryo implants in uterus. Amniotic fluid protects embryo. Placenta exchanges dissolved nutrients, gases and wastes; umbilical cord connects fetus to placenta; maternal and fetal blood normally do not mix."
        ],
        chains: [
          "FSH secreted by pituitary → Follicle matures in ovary → Follicle produces Oestrogen → Oestrogen thickens endometrium & triggers LH surge → LH surge causes ovulation (day 14) → Empty follicle becomes corpus luteum secreting Progesterone → Maintains uterus lining for implantation"
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Inheritance",
    category: "Genetics & Evolution",
    color: "from-purple-500/20 to-indigo-500/20",
    accent: "purple",
    summary: "Continuous vs discontinuous variation, DNA double helix architecture, genetic terminology, monohybrid Punnett crosses, ABO codominance, mutations, and natural selection.",
    memorise: "Monohybrid heterozygous cross (Bb × Bb): Genotype ratio = 1 BB : 2 Bb : 1 bb; Phenotype ratio = 3 dominant : 1 recessive; Natural selection chain: variation → competition → survival → reproduction → alleles passed on.",
    diagramType: "inheritance",
    examTips: [
      "In ABO blood typing, I^A and I^B are codominant with each other, and both are dominant over I^O. Therefore, genotype I^A I^B produces blood group AB, while I^O I^O produces blood group O.",
      "Antibiotics DO NOT cause bacteria to mutate or become resistant! The mutation is already present randomly; antibiotic application acts as a selective pressure killing non-resistant bacteria.",
      "Continuous variation shows a spectrum of intermediates (e.g. height) influenced by genes and environment; discontinuous variation shows distinct categories (e.g. blood group) determined purely by genes."
    ],
    sections: [
      {
        title: "Variation",
        points: [
          "Continuous variation: range of phenotypes, e.g. body mass/length; affected by genes and environment.",
          "Discontinuous variation: distinct categories, e.g. ABO blood groups; mainly determined by genes."
        ]
      },
      {
        title: "DNA and genes",
        points: [
          "DNA is a double helix made of nucleotides. Bases are A, T, C and G; A pairs with T, C pairs with G.",
          "Gene: length of DNA coding for a protein.",
          "DNA base sequence determines amino acid sequence → protein structure → protein function.",
          "Allele: alternative form of a gene."
        ],
        chains: [
          "DNA triplet base sequence → Specific mRNA codon sequence → Order of amino acids in polypeptide chain → Protein folding & 3D tertiary structure → Specific protein function"
        ]
      },
      {
        title: "Genetic terminology",
        points: [
          "Dominant: expressed when present. Recessive: expressed only when dominant allele absent.",
          "Genotype: genetic makeup. Phenotype: observable characteristics.",
          "Homozygous: two same alleles. Heterozygous: two different alleles."
        ]
      },
      {
        title: "Monohybrid inheritance",
        points: [
          "For Bb × Bb: offspring genotypes are 1 BB : 2 Bb : 1 bb; if B is dominant, phenotypes are 3 dominant : 1 recessive.",
          "Expected ratios are probabilities; small samples may differ because of chance."
        ],
        tableData: {
          headers: ["Gametes", "B allele (from Parent 1)", "b allele (from Parent 1)"],
          rows: [
            ["B allele (from Parent 2)", "BB (Homozygous Dominant)", "Bb (Heterozygous)"],
            ["b allele (from Parent 2)", "Bb (Heterozygous)", "bb (Homozygous Recessive)"]
          ]
        }
      },
      {
        title: "ABO and sex determination",
        points: [
          "I^A and I^B are codominant; I^O is recessive. I^A I^A / I^A I^O = A; I^B I^B / I^B I^O = B; I^A I^B = AB; I^O I^O = O.",
          "Females XX, males XY. Eggs carry X; sperm carry X or Y."
        ]
      },
      {
        title: "Mutation and natural selection",
        points: [
          "Gene mutation: random change in DNA base sequence. Chromosome mutation: change in chromosome number/structure. Ionising radiation and some chemicals can increase mutation rate.",
          "Genetic variation arises from mutation, meiosis, random mating and random fertilisation.",
          "Natural selection chain: variation → competition → better-adapted organisms survive and reproduce more → alleles passed to offspring → advantageous allele frequency increases → population evolves.",
          "Antibiotic resistance: resistant bacteria already present survive antibiotic treatment → reproduce → resistance becomes more common. Antibiotics do not create the resistance."
        ],
        chains: [
          "variation → competition → better-adapted organisms survive and reproduce more → alleles passed to offspring → advantageous allele frequency increases → population evolves",
          "Random mutation confers resistance → Antibiotic applied → Non-resistant bacteria killed → Resistant bacteria survive with reduced competition → Multiply rapidly → Pass resistance allele to offspring"
        ]
      },
      {
        title: "Artificial selection",
        points: [
          "Humans select parents with desirable traits → breed them → select offspring with desired traits → repeat over generations."
        ],
        chains: [
          "Humans select parents with desirable traits → breed them → select offspring with desired traits → repeat over generations"
        ]
      }
    ]
  },
  {
    id: 18,
    title: "Biotechnology and genetic modification",
    category: "Ecology & Biotech",
    color: "from-teal-500/20 to-cyan-500/20",
    accent: "teal",
    summary: "Yeast anaerobic biotechnology, industrial bioreactor control systems, commercial enzyme utility, and recombinant DNA human insulin production.",
    memorise: "Insulin production chain: human insulin gene cut with restriction enzyme → inserted into plasmid cut with same enzyme using DNA ligase → recombinant plasmid into bacteria → grown in fermenter → insulin purified.",
    diagramType: "biotechnology",
    examTips: [
      "Industrial fermenters require a cooling water jacket because microbial respiration produces excess metabolic heat which could denature bacterial enzymes.",
      "The same restriction enzyme must be used to cut both the human gene and the bacterial plasmid so they possess complementary sticky ends.",
      "DNA ligase is the enzyme that anneals/joins the sticky ends together by forming covalent phosphodiester bonds."
    ],
    sections: [
      {
        title: "Yeast and fermentation",
        points: [
          "Yeast carries out anaerobic respiration, producing carbon dioxide and ethanol. Carbon dioxide makes bread dough rise.",
          "Yeast can be used to produce ethanol."
        ],
        equations: [
          {
            word: "Glucose —[Yeast enzymes]→ Ethanol + Carbon dioxide (+ ATP)",
            symbol: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂"
          }
        ]
      },
      {
        title: "Bacteria and fermenters",
        points: [
          "Bacteria are useful because they reproduce rapidly, can produce complex molecules and contain plasmids.",
          "Fermenters allow large-scale production using bacteria/fungi. Conditions such as temperature, pH, oxygen, nutrients and waste are controlled."
        ],
        tableData: {
          headers: ["Fermenter Component", "Engineering Feature", "Biological Purpose"],
          rows: [
            ["Cooling Water Jacket", "Cold water circulated around vessel", "Removes excess metabolic heat from respiration; maintains optimum temperature"],
            ["Stirrer / Impeller Paddles", "Motorized rotating blades", "Keeps microorganisms suspended, ensures uniform temperature, nutrient distribution & oxygenation"],
            ["Sterile Air Sparger", "Filtered bubbles pumped through bottom", "Supplies sterile oxygen for aerobic respiration; prevents contamination"],
            ["Probes (pH & Temperature)", "Electronic sensor feedback monitors", "Constantly monitors conditions; automated acid/alkali or coolant addition"],
            ["Nutrient Inlet", "Steam-sterilised feed port", "Supplies sterile glucose, amino acids, and minerals for cell growth and synthesis"],
            ["Harvest Outlet", "Drainage tap at base", "Allows aseptic collection of product for downstream separation and purification"]
          ]
        }
      },
      {
        title: "Enzymes in biotechnology",
        points: [
          "Biological washing powders use enzymes (proteases and lipases) to remove protein and grease stains at lower temperatures.",
          "Pectinase is used in fruit juice production to break down pectin, clarifying juice and increasing extraction yield.",
          "Lactase is used to break down lactose into glucose and galactose to make lactose-free milk for intolerant consumers."
        ]
      },
      {
        title: "Genetic modification",
        points: [
          "Genetic modification: changing genetic material by removing, changing or inserting individual genes.",
          "Insulin: human insulin gene inserted into bacterial DNA → bacteria reproduce → insulin produced → insulin collected."
        ],
        chains: [
          "human insulin gene inserted into bacterial DNA → bacteria reproduce → insulin produced → insulin collected",
          "Identify human insulin gene on chromosome 11 → Cut gene with restriction enzyme leaving sticky ends → Extract bacterial plasmid and cut with same restriction enzyme → Use DNA ligase to splice gene into plasmid → Recombinant plasmid inserted into E. coli bacterium → Transgenic bacteria cultured in fermenter → Human insulin expressed, extracted & purified"
        ]
      },
      {
        title: "GM crops",
        points: [
          "Examples of traits include herbicide resistance, insect-pest resistance and increased vitamin content.",
          "Potential benefits: increased yield, reduced pest losses, improved nutrition and easier weed control.",
          "Potential concerns: effects on non-target organisms, gene transfer to other populations, biodiversity changes and uncertainty about long-term effects."
        ]
      }
    ]
  },
  {
    id: 19,
    title: "Relationships of organisms with one another and the environment",
    category: "Ecology & Biotech",
    color: "from-emerald-500/20 to-green-500/20",
    accent: "emerald",
    summary: "Trophic energy thermodynamics, ecological pyramids, carbon & nitrogen geochemical cycles, population ecology, deforestation, and eutrophication.",
    memorise: "Energy decreases between trophic levels (~90% lost via heat/respiration/faeces); Eutrophication: fertiliser runoff → nitrate increase → algal bloom → algae die → decomposers increase → aerobic respiration ↑ → dissolved oxygen ↓ → fish die.",
    diagramType: "ecology",
    examTips: [
      "Energy is NEVER recycled in an ecosystem; it enters as sunlight and exits as dissipated heat. Nutrients (carbon and nitrogen) ARE recycled.",
      "Pyramids of energy are ALWAYS upright (broadest at producer level), whereas pyramids of numbers and biomass can occasionally be inverted.",
      "In the nitrogen cycle: Nitrifying bacteria convert ammonium into nitrites then nitrates; Nitrogen-fixing bacteria convert nitrogen gas into ammonium; Denitrifying bacteria convert nitrates back to nitrogen gas."
    ],
    sections: [
      {
        title: "Energy and food chains",
        points: [
          "The Sun is the principal energy source for ecosystems. Photosynthesis converts light energy into chemical energy.",
          "Food-chain arrows show direction of energy transfer/feeding.",
          "Producer: makes organic substances, usually by photosynthesis. Consumer: obtains food by feeding. Herbivore: eats plants. Carnivore: eats animals. Decomposer: breaks down dead material."
        ]
      },
      {
        title: "Trophic levels and energy loss",
        points: [
          "Food web = interconnected food chains. Each feeding position is a trophic level.",
          "Energy is lost through respiration/heat, movement, faeces, uneaten material and indigestible material.",
          "Less energy is available at higher trophic levels, so food chains usually have fewer than five trophic levels.",
          "Eating crops directly is more energy-efficient than feeding crops to livestock and then eating livestock."
        ],
        chains: [
          "Producer (10,000 kJ) → Primary Consumer (1,000 kJ) → Secondary Consumer (100 kJ) → Tertiary Consumer (10 kJ) [~90% lost at each transition]"
        ]
      },
      {
        title: "Pyramids",
        points: [
          "Pyramids of numbers show number of organisms; pyramids of biomass show total dry mass; pyramids of energy show energy available at each trophic level."
        ]
      },
      {
        title: "Carbon cycle",
        points: [
          "CO₂ → photosynthesis → plants → feeding → animals → death/waste → decomposers → respiration → CO₂.",
          "Fossil fuels store carbon; combustion releases CO₂."
        ],
        chains: [
          "Atmospheric CO₂ → Photosynthesis in plants → Feeding by animals → Cellular respiration in plants & animals releases CO₂ back to atmosphere",
          "Dead organisms + waste → Decomposers respire releasing CO₂  OR  Millions of years heat & pressure → Fossil fuels formed → Combustion releases CO₂"
        ]
      },
      {
        title: "Nitrogen cycle",
        points: [
          "Proteins → decomposition → ammonium compounds → nitrates → plant uptake → amino acids/proteins → feeding.",
          "Nitrogen fixation adds usable nitrogen compounds; denitrification returns nitrogen to the atmosphere."
        ],
        chains: [
          "Atmospheric N₂ gas → Nitrogen-fixing bacteria (in soil & legume root nodules) → Ammonium compounds",
          "Dead plant/animal proteins & urea → Decomposers decompose → Ammonium compounds → Nitrifying bacteria convert to Nitrites then Nitrates → Plant root uptake → Amino acids & proteins",
          "Nitrates in waterlogged anaerobic soil → Denitrifying bacteria convert nitrates back to N₂ gas into atmosphere"
        ]
      },
      {
        title: "Decomposition and populations",
        points: [
          "Fungi/bacteria secrete enzymes onto dead material → digest material → absorb soluble products.",
          "Population: organisms of one species in an area at given time. Community: populations of different species. Ecosystem: community plus its environment and interactions. Biodiversity: number of different species."
        ]
      },
      {
        title: "Human impacts and conservation",
        points: [
          "Population size is affected by food supply, competition, predation and disease.",
          "Human population growth increases demand for resources.",
          "Deforestation: causes include agriculture, timber and development; effects include habitat loss, reduced biodiversity, changes in carbon dioxide and soil erosion.",
          "Eutrophication: fertiliser/sewage → nitrate increase → algal growth → algae die → decomposers increase → aerobic respiration increases → dissolved oxygen decreases → aquatic organisms die.",
          "Greenhouse gases include carbon dioxide and methane.",
          "Insecticides/herbicides can harm non-target organisms and ecosystems. Non-biodegradable plastics persist and can harm organisms.",
          "Conservation: education, protected areas, quotas and replanting. Fish conservation can include closed seasons, protected areas, suitable net mesh size, quotas and monitoring.",
          "Sustainable resource: resource produced/replenished as rapidly as it is removed."
        ],
        chains: [
          "fertiliser/sewage → nitrate increase → algal growth → algae die → decomposers increase → aerobic respiration increases → dissolved oxygen decreases → aquatic organisms die"
        ]
      }
    ]
  }
];

export const HOW_TO_USE_GUIDE = {
  title: "Cambridge O Level Biology 5090 • Exam Answer Bank",
  syllabus: "Topics 1–19 • Exam-focused answer bank • 2026–2028 syllabus",
  instructions: "How to use this: Learn the bold definitions and chains first. For explain questions, write the cause → process → result chain. Each bullet is designed to correspond closely to a typical mark point.",
  keyTips: [
    "Cause → Process → Result: Cambridge 5090 marking schemes award marks strictly for the sequential biological mechanism.",
    "Bold terminology: Use the exact syllabus biological keywords (e.g. 'water potential', 'partially permeable', 'active site', 'complementary', 'denature').",
    "Formula conversions: Always check units before calculations (e.g. convert mm to µm by multiplying by 1000)."
  ]
};
