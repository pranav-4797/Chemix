// ============================================================================
// CONTENT DATA FILE: Preparation of Liquid Detergent
// SY B.Tech Artificial Intelligence & Machine Learning (AI & ML) | Course: Chemical Prototyping | MIT Academy of Engineering
// All project text and data are centralized here for quick and easy editing.
// ============================================================================

export interface TeamMember {
  name: string;
  prn?: string;
  role: string;
  initials: string;
  isGuide?: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  formula?: string;
  category: 'surfactant' | 'alkali' | 'solvent' | 'oil' | 'builder' | 'chelant' | 'salt' | 'humectant' | 'fatty-acid';
  role: string;
  safetyWarning?: string;
  badge?: string;
  statusNotes?: string;
  targetQuantity?: string;
  actualQuantity?: string;
}

export interface ApparatusItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  recommended?: boolean;
}

export interface TheoryTopic {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  points: string[];
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  temperature?: string;
  rpm?: string;
  caution?: string;
  keyAction: string;
}

export interface GalleryPhoto {
  id: string;
  figNumber: string;
  title: string;
  caption: string;
  src: string;
  alt: string;
  aspect?: 'portrait' | 'landscape';
}

export interface ObservationRow {
  parameter: string;
  observation: string;
  status: string;
  highlight?: boolean;
}

export interface PendingDataRow {
  ingredient: string;
  targetQuantity: string;
  actualQuantity: string;
  remarks: string;
}

export interface SafetyRule {
  id: string;
  severity: 'danger' | 'warning' | 'info';
  title: string;
  description: string;
  icon: string;
}

export const projectContent = {
  header: {
    badge: "SY B.Tech Minor Project",
    navLinks: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Ingredients", href: "#ingredients" },
      { label: "Apparatus", href: "#apparatus" },
      { label: "Theory", href: "#theory" },
      { label: "Process", href: "#process" },
      { label: "Gallery", href: "#gallery" },
      { label: "Observations", href: "#observations" },
      { label: "Safety", href: "#safety" },
      { label: "Video", href: "#video" },
    ]
  },

  hero: {
    supertitle: "Chemical Prototyping Laboratory Prototype",
    title: "Preparation of Liquid Detergent",
    subtitle: "SY B.Tech (Artificial Intelligence & Machine Learning) | Subject: Chemical Prototyping",
    institutionLine: "Department of Artificial Intelligence & Machine Learning (AI & ML), MIT Academy of Engineering, Alandi (D), Pune – 412105, Maharashtra, India",
    heroImage: {
      src: "/images/fig-5-1.jpeg",
      alt: "Figure 5.1: Blue liquid detergent mixture in a beaker being agitated on a REMI magnetic hotplate stirrer at 970 RPM",
      caption: "Fig 5.1: Blue mixture in a beaker on a laboratory hotplate/magnetic stirrer (display reads approx. 970 RPM)",
    },
    primaryCta: {
      text: "View Process Flow",
      href: "#process"
    },
    secondaryCta: {
      text: "Watch Lab Video",
      href: "#video"
    },
    quickStats: [
      { label: "Observed Agitation", value: "970 RPM", note: "Magnetic Stirrer Readout" },
      { label: "Batch Scale (Table 6.1)", value: "~33 mL", note: "20ml Water + 5ml Oil + 5ml Gly" },
      { label: "Key Colorant", value: "CuSO₄ (2g)", note: "Characteristic Blue Complex" }
    ]
  },

  about: {
    sectionTitle: "About & Introduction",
    tagline: "Multidisciplinary exploration: AI & ML students bridging computational thinking with hands-on formulation chemistry",
    aiPerspective: "As Second-Year B.Tech students specializing in Artificial Intelligence & Machine Learning (AI & ML), our curriculum features the hands-on experiential subject 'Chemical Prototyping'. This laboratory project took our team from algorithmic and digital data modeling into the physical, tactile realm of material chemistry—learning the delicate balance of surfactant interfacial kinetics, magnetic vortex agitation, precise reagent stoichiometry, and empirical physical parameter logging.",
    paragraphs: [
      "Liquid detergents are cleaning formulations containing one or more surfactants, water and supporting ingredients. Surfactants help water wet a surface and loosen oily soil and dirt so it can be rinsed away. Performance depends on surfactant type and concentration, water quality, pH, viscosity and ingredient compatibility.",
      "This was a small laboratory prototype, not a commercial product. Conducted for our Chemical Prototyping practical, laboratory documentation captures a blue mixture being stirred on a hotplate/stirrer and a small sample collected for visual inspection."
    ],
    cards: [
      {
        id: "motivation",
        title: "Motivation & AI × Chemistry Bridge",
        badge: "Multidisciplinary Learning",
        content: "Practical experience for AI & ML engineers in formulation, weighing, controlled mixing, heat-assisted processing and observation. Demonstrates why physical formulation needs care: too much electrolyte or an incompatible ingredient can cause cloudiness, separation, precipitation or viscosity change."
      },
      {
        id: "aim",
        title: "Project Aim",
        badge: "Course Scope",
        content: "Prepare a laboratory-scale liquid detergent prototype from ingredients available in the chemical prototyping lab, and document the process, apparatus, observations and possible improvements."
      }
    ],
    objectives: [
      "Identify the main chemical ingredients and lab apparatus used in liquid detergent synthesis.",
      "Prepare a uniform mixture through controlled sequential addition and magnetic stirring.",
      "Observe physical appearance, colour progression, and clarity during and after mixing.",
      "Document process stages with high-resolution laboratory photographs and a structured process flow diagram.",
      "Identify critical chemical safety precautions, handling protocols, and verification tests needed before any practical use."
    ]
  },

  team: {
    sectionTitle: "Project Team",
    subtitle: "SY B.Tech Students | Department of Artificial Intelligence & Machine Learning (AI & ML)",
    members: [
      {
        name: "Pranav Chopade",
        prn: "202501110025",
        role: "SY B.Tech (AI & ML), Department of Artificial Intelligence & Machine Learning",
        initials: "PC"
      },
      {
        name: "Rushabh Somase",
        prn: "202501110024",
        role: "SY B.Tech (AI & ML), Department of Artificial Intelligence & Machine Learning",
        initials: "RS"
      },
      {
        name: "Swayam Kasar",
        prn: "202501110022",
        role: "SY B.Tech (AI & ML), Department of Artificial Intelligence & Machine Learning",
        initials: "SK"
      },
      {
        name: "Yash Kadam",
        prn: "202501110020",
        role: "SY B.Tech (AI & ML), Department of Artificial Intelligence & Machine Learning",
        initials: "YK"
      },
      {
        name: "Dishant Maraskolhe",
        prn: "202501110018",
        role: "SY B.Tech (AI & ML), Department of Artificial Intelligence & Machine Learning",
        initials: "DM"
      },
      {
        name: "Faculty Guide",
        role: "Course Faculty, Chemical Prototyping | MIT AoE",
        initials: "FG",
        isGuide: true
      }
    ]
  },

  ingredients: {
    sectionTitle: "Chemical Ingredients",
    subtitle: "Component functions, chemical roles, and laboratory safety classifications",
    infoNote: "Quantities confirmed from Lab Notebook Table 6.1 ('Suggested data table to complete from lab notebook'): 2g SLS, 2g NaOH, 20ml Distilled water, 5ml Castor oil, 3ml EDTA, 5ml Glycerol, and 2g CuSO₄ (which imparts the vibrant blue color). Total liquid volume ~33ml.",
    items: [
      {
        id: "sls",
        name: "Sodium Lauryl Sulfate (SLS)",
        formula: "NaC₁₂H₂₅SO₄",
        category: "surfactant",
        role: "Primary surfactant/cleaning agent; lowers surface tension, helps wet surfaces, and emulsifies/disperses oily soils into the aqueous phase.",
        badge: "Primary Surfactant",
        statusNotes: "Solid needles/powder dissolved under agitation",
        targetQuantity: "2gm",
        actualQuantity: "2gm"
      },
      {
        id: "naoh",
        name: "Sodium Hydroxide (NaOH)",
        formula: "NaOH",
        category: "alkali",
        role: "Strong alkali; used for pH adjustment and saponification of fatty substrates. Exothermic dissolution.",
        badge: "Corrosive Alkali",
        safetyWarning: "Corrosive: causes severe chemical burns. Handle with strict PPE and supervision.",
        statusNotes: "Measured precisely per lab notebook protocol",
        targetQuantity: "2gm",
        actualQuantity: "2gm"
      },
      {
        id: "water",
        name: "Distilled Water",
        formula: "H₂O",
        category: "solvent",
        role: "Continuous solvent and diluent for the aqueous mixture; provides the medium for surfactant micelle formation and salt dissolution.",
        badge: "Solvent / Diluent",
        statusNotes: "De-ionized / distilled to avoid extraneous minerals",
        targetQuantity: "20ml",
        actualQuantity: "20ml"
      },
      {
        id: "castor-oil",
        name: "Castor Oil",
        formula: "Triglyceride matrix",
        category: "oil",
        role: "Oil-based ingredient; serves as the fatty substrate / emollient precursor in the formulation.",
        badge: "Fatty Precursor",
        statusNotes: "Requires agitation for uniform emulsion",
        targetQuantity: "5ml",
        actualQuantity: "5ml"
      },
      {
        id: "edta",
        name: "EDTA (Ethylenediaminetetraacetic Acid)",
        formula: "C₁₀H₁₆N₂O₈",
        category: "chelant",
        role: "Chelating agent that sequesters polyvalent metal ions (Ca²⁺, Mg²⁺), mitigating the adverse impact of water hardness on foaming.",
        badge: "Chelating Agent",
        statusNotes: "Prevents insoluble calcium soap precipitation",
        targetQuantity: "3ml",
        actualQuantity: "3ml"
      },
      {
        id: "glycerol",
        name: "Glycerol / Glycerin",
        formula: "C₃H₈O₃",
        category: "humectant",
        role: "Polyol humectant and co-solvent; influences mixture texture, hand feel, and rheological viscosity profile.",
        badge: "Humectant & Co-solvent",
        statusNotes: "Enhances moisture retention and tactile smoothness",
        targetQuantity: "5ml",
        actualQuantity: "5ml"
      },
      {
        id: "cuso4",
        name: "Copper(II) Sulfate (CuSO₄)",
        formula: "CuSO₄ · 5H₂O",
        category: "salt",
        role: "Inorganic transition metal salt; imparts the characteristic vibrant blue colour observed throughout the prototype mixture.",
        badge: "Blue Colorant & Salt",
        statusNotes: "Verified in Lab Notebook Table 6.1 (responsible for blue appearance)",
        targetQuantity: "2gm",
        actualQuantity: "2gm"
      },
      {
        id: "na2co3",
        name: "Sodium Carbonate (Na₂CO₃)",
        formula: "Na₂CO₃",
        category: "builder",
        role: "Alkaline builder that supports cleaning efficacy, provides buffering capacity, and assists in water conditioning.",
        badge: "Alkaline Builder",
        statusNotes: "Auxiliary builder evaluated in laboratory literature",
        targetQuantity: "Optional",
        actualQuantity: "—"
      },
      {
        id: "stearic-acid",
        name: "Stearic Acid",
        formula: "CH₃(CH₂)₁₆COOH",
        category: "fatty-acid",
        role: "Saturated long-chain fatty acid used in select detergent formulations; requires thermal assistance and neutralization conditions to disperse.",
        badge: "Fatty Acid",
        statusNotes: "Higher melting point (~69°C); optional thermal precursor",
        targetQuantity: "Optional",
        actualQuantity: "—"
      }
    ]
  },

  apparatus: {
    sectionTitle: "Apparatus & Laboratory Equipment",
    subtitle: "Precision hardware and glassware utilized in prototype synthesis",
    items: [
      {
        id: "beakers",
        name: "Beakers & Sample Containers",
        description: "Borosilicate glass beakers (50 mL, 250 mL, 500 mL) for staging, mixing, and visual aliquot inspection.",
        iconName: "FlaskConical"
      },
      {
        id: "balance",
        name: "Electronic Analytical Balance",
        description: "Precision digital weighing balance for measuring chemical solid reagents and powders accurately.",
        iconName: "Scale"
      },
      {
        id: "cylinder",
        name: "Graduated Measuring Cylinder",
        description: "Calibrated glass measuring cylinder for volumetric measurement of distilled water and liquid additives.",
        iconName: "Pipette"
      },
      {
        id: "stirring-rod",
        name: "Glass Stirring Rod & Spatula",
        description: "Inert borosilicate rod and stainless steel laboratory spatula for manual agitation and powder transfer.",
        iconName: "Wand2"
      },
      {
        id: "hotplate-stirrer",
        name: "Magnetic Hotplate / Stirrer",
        description: "REMI 2MLH unit with teflon-coated magnetic stir bar, heating surface, and digital tachometer (observed ~970 RPM).",
        iconName: "Activity"
      },
      {
        id: "thermometer-ph",
        name: "Thermometer & pH Paper / Meter",
        description: "Precision mercury/digital thermometer and pH indicators (recommended for accurate formulation logging).",
        iconName: "Gauge",
        recommended: true
      },
      {
        id: "funnel",
        name: "Filter Funnel & Filter Medium",
        description: "Conical funnel and qualitative filter paper (if mechanical separation of undissolved particulates is dictated).",
        iconName: "Filter"
      },
      {
        id: "bottles-labels",
        name: "Labelled Storage Bottles",
        description: "Chemically compatible, sealed prototype bottles with unambiguous hazard and date labelling.",
        iconName: "Tag"
      }
    ]
  },

  theory: {
    sectionTitle: "Formulation & Prototyping Principles",
    subtitle: "Theoretical mechanisms governing detergent synthesis, interfacial kinetics, and surfactant chemistry",
    topics: [
      {
        id: "surfactant-action",
        title: "Surfactant Action & Micelle Formation",
        subtitle: "Interfacial tension reduction and soil dispersion",
        summary: "SLS is an anionic surfactant possessing an amphiphilic architecture with a polar hydrophilic sulfate head and a non-polar hydrophobic hydrocarbon tail.",
        points: [
          "Lowers the interfacial tension between water and hydrophobic dirt/oil matrices.",
          "Self-assembles into spherical micelles once the Critical Micelle Concentration (CMC) is exceeded.",
          "Hydrophobic cores encapsulate oily soil while charged outer heads disperse into the bulk aqueous phase for rinseability.",
          "Detergent performance is directly controlled by surfactant concentration, temperature, and electrolyte compatibility."
        ]
      },
      {
        id: "builders-chelants",
        title: "Builders & Chelating Agents",
        subtitle: "Alkalinity regulation and polyvalent ion sequestration",
        summary: "Detergent builders like Sodium Carbonate (Na₂CO₃) and chelating agents like EDTA synergistically condition the wash liquor.",
        points: [
          "Na₂CO₃ supplies necessary reserve alkalinity to assist in saponifying free fatty acids and neutralizing acidic soil.",
          "EDTA forms stable hexadentate chelation complexes with divalent hard water ions (Ca²⁺ and Mg²⁺).",
          "Eliminates competitive ionic interference that would otherwise deactivate anionic surfactants and precipitate curd.",
          "Proper stoichiometric balancing prevents excessive ionic strength that could destabilize the colloidal suspension."
        ]
      },
      {
        id: "ph-compatibility",
        title: "pH Control & Compatibility",
        subtitle: "Thermodynamic stability and skin contact hazard considerations",
        summary: "Chemical compatibility dictates whether ingredients remain homogeneously solubilized or undergo precipitation and phase inversion.",
        points: [
          "NaOH is highly corrosive and exothermically reactive; addition must be strictly supervised and neutralized if used.",
          "Concentration, temperature, and addition sequence govern whether clear isotropic solutions or turbid gels form.",
          "Inorganic salts (MgCl₂ / NaCl) shift the electrostatic double layer, tuning micelle aggregation and fluid viscosity.",
          "Fatty phases (Stearic acid, Castor oil) necessitate specific pH and thermal windows to solubilize without separate oil phase stratification."
        ]
      },
      {
        id: "mixing-heating",
        title: "Agitation Kinetics & Heat Transfer",
        subtitle: "Hydrodynamic shear and controlled thermal dissolution",
        summary: "Agitation accelerates dissolution kinetics by minimizing stagnant boundary layers surrounding solid solutes.",
        points: [
          "The laboratory magnetic stirrer displayed approximately 970 RPM at the photographed stage.",
          "970 RPM is a documented real-time observational setting, not an optimized commercial operating parameter.",
          "Vigorous shearing can entrap unwanted air and induce persistent micro-foam; addition order must be gentle.",
          "Controlled heating accelerates dissolution of high-melting-point solids (e.g. stearic acid) but must never exceed evaporation safety limits."
        ]
      }
    ]
  },

  process: {
    sectionTitle: "Process & Methodology",
    subtitle: "Laboratory batch procedure, unit operations, and process-flow architecture",
    diagramImage: "/images/img-1.svg",
    diagramAlt: "Process Flow Diagram showing sequential stages from raw materials to final collection",
    flowStages: [
      "Raw Materials & Water",
      "Controlled Mixing (970 RPM)",
      "Heating (If Required)",
      "Cooling & Filtration (If Required)",
      "Collection & Labelling"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparation & Safety Check",
        shortDesc: "PPE inspection, workstation clearance, and glassware setup",
        fullDesc: "Don approved personal protective equipment including laboratory coat, splash goggles, and chemical-resistant nitrile gloves. Thoroughly inspect all borosilicate beakers and stirrer bars for cleanliness and micro-cracks. Clear the work area, review chemical safety cards, and measure distilled water into the primary reaction beaker.",
        keyAction: "Set up magnetic hotplate, inspect PPE, and tare balance"
      },
      {
        stepNumber: 2,
        title: "Controlled Mixing & Agitation",
        shortDesc: "Gradual reagent addition under continuous magnetic stirring (~970 RPM)",
        fullDesc: "Add instructor-approved chemical reagents in designated sequence slowly to the vortex. Maintain magnetic agitation (observed at ~970 RPM) to facilitate dispersion while minimizing air entrainment and severe foam generation. Observe colour change to vibrant blue and ensure solid dissolution.",
        rpm: "~970 RPM",
        keyAction: "Gradual addition to limit foam; continuous observation"
      },
      {
        stepNumber: 3,
        title: "Thermal Treatment (If Dictated)",
        shortDesc: "Controlled heat-assist for stubborn solids with continuous monitoring",
        fullDesc: "If the specific formulation manual calls for heat to dissolve solid fatty acids or builders, apply gentle, regulated heat through the hotplate. Continuously monitor with an immersed thermometer. Never heat a sealed container and never leave the apparatus unattended.",
        caution: "Never heat in closed containers; avoid boiling or dry evaporation",
        keyAction: "Controlled heat assist; record duration and temperature"
      },
      {
        stepNumber: 4,
        title: "Cooling & Conditional Filtration",
        shortDesc: "Thermal stabilization to ambient temperature and particulate separation",
        fullDesc: "Allow the stirred liquid detergent prototype to cool naturally to ambient room conditions. If undissolved matter remains and filtration is sanctioned in the lab procedure, gravity-filter the mixture through a clean conical funnel with appropriate filter paper.",
        keyAction: "Equilibrate to room temperature; inspect optical clarity"
      },
      {
        stepNumber: 5,
        title: "Collection, Labelling & Data Entry",
        shortDesc: "Transfer to dedicated laboratory sample bottle and parameter logging",
        fullDesc: "Transfer an aliquot into a dedicated sample container for visual inspection. Affix a chemical label detailing formulation date, team identifier, and hazard cautions. Record physical observations including blue colour intensity, transparency, and note missing parameters for follow-up testing.",
        keyAction: "Seal container, apply hazard label, and record observations"
      }
    ]
  },

  gallery: {
    sectionTitle: "Photographic Evidence Gallery",
    subtitle: "Authentic laboratory documentation recorded during the minor project experiment",
    note: "All photographs document actual laboratory work conducted in the Chemical Prototyping laboratory by AI & ML students at MIT Academy of Engineering.",
    photos: [
      {
        id: "fig-5-1",
        figNumber: "Fig 5.1",
        title: "Agitation on Magnetic Stirrer",
        caption: "Fig 5.1: Blue mixture in a beaker on a laboratory hotplate/magnetic stirrer; display reads approximately 970 RPM.",
        src: "/images/fig-5-1.jpeg",
        alt: "Figure 5.1: Beaker on REMI magnetic stirrer with blue liquid and 970 RPM digital display",
        aspect: "portrait"
      },
      {
        id: "fig-5-2",
        figNumber: "Fig 5.2",
        title: "Collected Liquid Sample (Top View)",
        caption: "Fig 5.2: Small sample of the blue liquid collected for visual observation.",
        src: "/images/fig-5-2.jpeg",
        alt: "Figure 5.2: Top-down view into small glass beaker showing uniform deep blue liquid detergent sample",
        aspect: "portrait"
      },
      {
        id: "fig-5-3",
        figNumber: "Fig 5.3",
        title: "Glassware & Measuring Cylinder",
        caption: "Fig 5.3: Laboratory glassware and small containers used during the practical.",
        src: "/images/fig-5-3.jpeg",
        alt: "Figure 5.3: Handling small glass measuring cylinder and beaker with white solid precursor",
        aspect: "portrait"
      },
      {
        id: "fig-5-4",
        figNumber: "Fig 5.4",
        title: "White Solid Material Prepared",
        caption: "Fig 5.4: White solid material prepared for the experiment (identity to be confirmed from label/lab notes).",
        src: "/images/fig-5-4.jpeg",
        alt: "Figure 5.4: Beaker containing white solid pellets/needles prepared beside wash bottle",
        aspect: "portrait"
      },
      {
        id: "fig-5-5",
        figNumber: "Fig 5.5",
        title: "Blue Mixture Handling & Inspection",
        caption: "Fig 5.5: Small beaker containing a blue mixture during handling and observation.",
        src: "/images/fig-5-5.jpeg",
        alt: "Figure 5.5: Student hand holding 50 mL glass beaker filled with 20 mL blue detergent prototype",
        aspect: "portrait"
      },
      {
        id: "fig-5-6",
        figNumber: "Fig 5.6",
        title: "Reagents & Lab Work Area",
        caption: "Fig 5.6: Laboratory container and reagent bottles at the work area.",
        src: "/images/fig-5-6.jpeg",
        alt: "Figure 5.6: Laboratory bench view with reagent wash bottles, chemical balance paper, and beaker",
        aspect: "portrait"
      },
      {
        id: "fig-5-7",
        figNumber: "Fig 5.7",
        title: "Work-Area Equipment & Handling",
        caption: "Fig 5.7: Additional work-area view showing equipment and sample handling.",
        src: "/images/fig-5-7.jpeg",
        alt: "Figure 5.7: Lab session workspace and presentation overview",
        aspect: "portrait"
      },
      {
        id: "fig-5-8",
        figNumber: "Fig 5.8",
        title: "Processing Step Containers",
        caption: "Fig 5.8: Sample and reagent containers before/after a processing step (see lab notes for exact sequence).",
        src: "/images/fig-5-8.jpeg",
        alt: "Figure 5.8: Containers and equipment before/after formulation step",
        aspect: "portrait"
      }
    ]
  },

  observations: {
    sectionTitle: "Results & Observations",
    subtitle: "Empirical findings, recorded instrument readings, and parameters requiring completion",
    narrative: "A blue liquid mixture was visible in the beaker during stirring, and a small blue sample was photographed in a separate container. The display showed approximately 970 RPM. These observations show mixing and sample collection were carried out, but do not establish detergent efficacy, chemical stability or suitability for skin or household use.",
    statHighlight: {
      value: "970",
      unit: "RPM",
      label: "Observed Stirrer Tachometer Display",
      detail: "Captured on REMI 2MLH magnetic stirrer during liquid agitation (Fig 5.1)"
    },
    observationTable: [
      {
        parameter: "Appearance",
        observation: "Blue liquid mixture",
        status: "Visual observation",
        highlight: true
      },
      {
        parameter: "Stirrer display",
        observation: "Digital display visible",
        status: "Approximately 970 RPM",
        highlight: true
      },
      {
        parameter: "pH",
        observation: "Not shown",
        status: "To be measured and entered"
      },
      {
        parameter: "Temperature",
        observation: "No readable value shown",
        status: "To be recorded from lab notes"
      },
      {
        parameter: "Ingredient quantities",
        observation: "Recorded per Lab Notebook Table 6.1",
        status: "2g SLS, 2g NaOH, 20ml Water, 5ml Castor oil, 3ml EDTA, 5ml Glycerol, 2g CuSO₄",
        highlight: true
      },
      {
        parameter: "Appearance",
        observation: "Vibrant blue liquid mixture",
        status: "Confirmed by 2gm CuSO₄ addition",
        highlight: true
      },
      {
        parameter: "Cleaning performance",
        observation: "No test result supplied",
        status: "Not evaluated in this report"
      },
      {
        parameter: "Stability / separation",
        observation: "Not documented over time",
        status: "Requires follow-up observation"
      }
    ],
    pendingDataTable: [
      { ingredient: "SLS (Sodium Lauryl Sulfate)", targetQuantity: "2gm", actualQuantity: "2gm", remarks: "Primary surfactant / foam generator" },
      { ingredient: "NaOH (if specified)", targetQuantity: "2gm", actualQuantity: "2gm", remarks: "Alkaline adjustment / saponification (corrosive)" },
      { ingredient: "Distilled water", targetQuantity: "20ml", actualQuantity: "20ml", remarks: "Continuous aqueous solvent medium" },
      { ingredient: "Castor oil", targetQuantity: "5ml", actualQuantity: "5ml", remarks: "Fatty substrate / emollient precursor" },
      { ingredient: "EDTA", targetQuantity: "3ml", actualQuantity: "3ml", remarks: "Hard water chelating agent" },
      { ingredient: "Glycerol", targetQuantity: "5ml", actualQuantity: "5ml", remarks: "Humectant & viscosity co-solvent" },
      { ingredient: "CuSO4 (Copper Sulfate)", targetQuantity: "2gm", actualQuantity: "2gm", remarks: "Imparts characteristic vibrant blue colour" }
    ]
  },

  discussion: {
    sectionTitle: "Discussion & Critical Limitations",
    subtitle: "Scientific appraisal of the prototype and technical boundary conditions",
    discussionPoints: [
      "The mixture developed a blue appearance and was stirred with lab equipment. Colour alone cannot confirm full dissolution or cleaning action.",
      "Ingredient addition order, solution pH, thermal history, and salt electrolyte concentration strongly govern micelle geometry, optical clarity, and macroscopic viscosity.",
      "A rigorous chemical prototyping evaluation must encompass pH measurement, microscopic inspection for undissolved particulate suspension, short-term and long-term shelf stability monitoring, and standardized cleaning efficiency tests against defined soil coupons.",
      "If the formulation exhibits phase separation, sedimentation, or unpredictable rheology, the chemical recipe must be re-evaluated alongside the faculty guide."
    ],
    limitations: [
      "Exact reagent quantities and chronological order of addition were not recorded in the available log.",
      "Heating temperature and agitation duration were not systematically monitored or logged.",
      "Quantitative values for pH, dynamic viscosity, specific gravity/density, and soil removal efficiency were not measured.",
      "Existing project flowcharts display conflicting ingredient lists (e.g. NaCl vs MgCl₂) and contain an ambiguous label ('WO₂*') requiring faculty verification."
    ]
  },

  safety: {
    sectionTitle: "Safety & Chemical Waste Disposal",
    subtitle: "Mandatory laboratory protocols, hazard mitigation, and environmental compliance",
    rules: [
      {
        id: "naoh-hazard",
        severity: "danger",
        title: "Sodium Hydroxide (NaOH) Corrosive Hazard",
        description: "NaOH is a strong, caustic base that causes severe chemical burns to skin and irreversible corneal damage. Use only under direct faculty supervision with splash goggles, full lab coat, and chemical-resistant gloves.",
        icon: "ShieldAlert"
      },
      {
        id: "stirring-safety",
        severity: "warning",
        title: "Splashes & Rotating Equipment",
        description: "Avoid splashing and aerosol generation during magnetic agitation. Keep hair tied back, lab coats buttoned, and loose objects well away from the rotating hotplate surface.",
        icon: "AlertTriangle"
      },
      {
        id: "thermal-safety",
        severity: "warning",
        title: "Heating Limitations",
        description: "Never heat liquids in a sealed or stoppered vessel due to pressure buildup. Use the minimum effective thermal setting and never leave heating glassware unattended.",
        icon: "Flame"
      },
      {
        id: "mixing-hazard",
        severity: "danger",
        title: "Prohibited Incompatible Mixtures",
        description: "Never mix the prototype or any of its reagents with bleach (sodium hypochlorite), strong mineral acids, or household chemical cleaners. Toxic fumes or hazardous exotherms can evolve.",
        icon: "Ban"
      },
      {
        id: "labelling-vessels",
        severity: "warning",
        title: "Strict Container Labelling",
        description: "Label all test vessels and storage containers with clear chemical identities, date, and hazard warnings. Never utilize beverage containers or food bottles for chemical storage under any circumstances.",
        icon: "Tag"
      },
      {
        id: "waste-disposal",
        severity: "danger",
        title: "Regulated Waste Disposal",
        description: "Dispose of all surplus detergent mixtures, chemical rinsates, and wash liquids into designated institutional hazardous waste carboys. Zero drain disposal unless explicitly authorized by the instructor.",
        icon: "Trash2"
      },
      {
        id: "emergency-contact",
        severity: "danger",
        title: "Emergency Exposure Protocol",
        description: "In case of skin or eye contact, immediately flush with copious running water at an emergency eye wash / deluge shower station for at least 15 minutes. Notify the lab supervisor immediately and refer to the Safety Data Sheet (SDS).",
        icon: "HeartPulse"
      }
    ]
  },

  conclusion: {
    sectionTitle: "Conclusion & Future Scope",
    subtitle: "Summary of prototype outcomes and strategic recommendations for academic continuation",
    conclusionText: "A laboratory-scale liquid detergent prototype was successfully prepared and documented through sequential photographs. The formulation produced a characteristic blue liquid mixture, and the magnetic stirrer recorded approximately 970 RPM during one operational stage. The overall procedure encompasses raw material staging, controlled mixing, optional thermal assistance, optional filtration, and container collection. However, definitive conclusions regarding cleaning efficacy, dermatological safety, or colloidal shelf-stability cannot be established without verified ingredient masses, pH measurements, and standardized cleaning performance evaluations.",
    futureScopeList: [
      "Systematically record exact mass (g) and volume (mL) of every constituent reagent, along with the precise order of addition.",
      "Record accurate temperature profiles and total residence mixing time across batch runs.",
      "Clarify and reconcile discrepancies across project diagrams (confirming NaCl vs MgCl₂ and decoding the ambiguous 'WO₂*' label with the faculty guide).",
      "Perform instrumental characterization: measure solution pH with a calibrated pH meter, dynamic viscosity via a rotational viscometer, and density via pycnometer.",
      "Execute standardized cleaning trials on designated fabric and glass substrates against a commercial reference detergent.",
      "Perform stability testing: monitor prototype samples over a 14-day test cycle for syneresis, phase separation, cloud point, or sediment precipitation.",
      "Evaluate packaging container compatibility (PET vs HDPE) and maintain strict 'Laboratory Prototype Only' warnings."
    ]
  },

  video: {
    sectionTitle: "Liquid Detergent Prototype | Minor Project Report",
    subtitle: "Laboratory demonstration and project presentation recorded at MIT Academy of Engineering",
    driveUrl: "https://drive.google.com/file/d/1Ggo0yIQx5cBjQ0EfpUiWHAe_Lsfva8Q3/view?usp=sharing",
    driveEmbedUrl: "https://drive.google.com/file/d/1Ggo0yIQx5cBjQ0EfpUiWHAe_Lsfva8Q3/preview",
    localVideoUrl: "/video/liquid-detergent-prototype.mp4",
    caption: "Laboratory presentation and prototype recording by SY B.Tech Artificial Intelligence & Machine Learning (AI & ML) students for the Chemical Prototyping course, MIT Academy of Engineering."
  },

  references: {
    sectionTitle: "References & Documentation",
    subtitle: "Authoritative academic sources, institutional standards, and project notes",
    items: [
      {
        title: "Chemical Prototyping Laboratory Manual & Approved Procedure for Liquid Detergent Preparation",
        source: "Department of Artificial Intelligence & Machine Learning / MIT Academy of Engineering, Alandi (D), Pune."
      },
      {
        title: "Safety Data Sheet (SDS): Sodium Hydroxide (NaOH)",
        source: "Standard Chemical Safety Documentation, UN 1823 / Hazchem Code 2W."
      },
      {
        title: "Safety Data Sheet (SDS): Sodium Lauryl Sulfate (SLS)",
        source: "Surfactant Chemical Hazard & Handling Profile, CAS 151-21-3."
      },
      {
        title: "Project Team Laboratory Photographic Archive & Process Flow Diagrams",
        source: "SY B.Tech (AI & ML) Minor Project Documentation, Academic Year 2026–2027."
      }
    ]
  },

  footer: {
    course: "SY B.Tech (AI & ML) • Course: Chemical Prototyping",
    department: "Department of Artificial Intelligence & Machine Learning (AI & ML)",
    institution: "MIT Academy of Engineering, Alandi (D), Pune – 412105, Maharashtra, India",
    academicYear: "Academic Year 2026–2027",
    disclaimer: "Laboratory prototype. Not for skin, dish, clothing or household use.",
    teamSummary: "Pranav Chopade • Rushabh Somase • Swayam Kasar • Yash Kadam • Dishant Maraskolhe"
  }
};
