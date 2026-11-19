// ============================================================================
// CONTENT DATA FILE: Preparation of Liquid Detergent
// SY B.Tech Minor Project | Subject: Chemical Prototyping | MIT Academy of Engineering
// All project text and data are centralized here for quick and easy editing.
// ============================================================================

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topicBadge: string;
}

export interface TeamGroupPhoto {
  src: string;
  alt: string;
  title: string;
  caption: string;
  location: string;
}

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
  image?: string;
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
  figNumber?: string;
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
      { label: "Quiz", href: "#quiz" },
    ]
  },

  hero: {
    supertitle: "Chemical Prototyping Laboratory Prototype",
    title: "Preparation of Liquid Detergent",
    subtitle: "SY B.Tech Minor Project | Subject: Chemical Prototyping",
    institutionLine: "MIT Academy of Engineering, Alandi (D), Pune – 412105, Maharashtra, India",
    heroImage: {
      src: "/images/fig-5-1.jpeg",
      alt: "Blue liquid detergent mixture in a beaker being agitated on a REMI magnetic hotplate stirrer at 970 RPM",
      caption: "Blue mixture in a beaker on a laboratory hotplate/magnetic stirrer (display reads approx. 970 RPM)",
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
    tagline: "Laboratory-scale preparation and process documentation of a liquid detergent prototype",
    paragraphs: [
      "Liquid detergents blend surfactants, water, and functional builders to detach and suspend oily soils. Performance depends on surfactant concentration, water hardness, pH, and ingredient compatibility.",
      "This prototype was prepared on a bench scale to observe magnetic agitation (~970 RPM), sequential reagent addition, and qualitative physical characteristics."
    ],
    cards: [
      {
        id: "motivation",
        title: "Motivation & Scope",
        badge: "Lab Practical",
        content: "Practical experience in formulation chemistry, weighing, and controlled agitation. Demonstrates how electrolyte balance and reagent sequence govern clarity and viscosity."
      },
      {
        id: "aim",
        title: "Project Aim",
        badge: "Course Scope",
        content: "Prepare a laboratory liquid detergent prototype from bench chemicals, documenting unit operations, apparatus, photographic observations, and safety measures."
      }
    ],
    objectives: [
      "Identify key chemical ingredients and laboratory apparatus.",
      "Execute controlled sequential addition and magnetic stirring.",
      "Record physical appearance, color progression, and clarity.",
      "Document unit operations with photographs and a process flow diagram.",
      "Establish essential laboratory safety protocols and follow-up tests."
    ]
  },

  team: {
    sectionTitle: "Project Team",
    subtitle: "SY B.Tech Students | Subject: Chemical Prototyping",
    groupPhoto: {
      src: "/images/team-group.jpg",
      alt: "Chemix Project Team — SY B.Tech, MIT Academy of Engineering",
      title: "Student Project Innovators",
      caption: "Chemix team at MIT Academy of Engineering campus, Alandi (D), Pune.",
      location: "School of Chemical Engineering / Campus Quad, MIT AoE"
    },
    members: [
      {
        name: "Pranav Chopade",
        prn: "202501110025",
        role: "SY B.Tech Student, MIT Academy of Engineering",
        initials: "PC"
      },
      {
        name: "Rushabh Somase",
        prn: "202501110024",
        role: "SY B.Tech Student, MIT Academy of Engineering",
        initials: "RS"
      },
      {
        name: "Swayam Kasar",
        prn: "202501110022",
        role: "SY B.Tech Student, MIT Academy of Engineering",
        initials: "SK"
      },
      {
        name: "Yash Kadam",
        prn: "202501110020",
        role: "SY B.Tech Student, MIT Academy of Engineering",
        initials: "YK"
      },
      {
        name: "Dishant Maraskolhe",
        prn: "202501110018",
        role: "SY B.Tech Student, MIT Academy of Engineering",
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
    infoNote: "Batch formulation from Lab Notebook Table 6.1 (~33 mL total liquid): 2g SLS, 2g NaOH, 20mL water, 5mL castor oil, 3mL EDTA, 5mL glycerol, and 2g CuSO₄ (blue colorant).",
    items: [
      {
        id: "sls",
        name: "Sodium Lauryl Sulfate (SLS)",
        formula: "NaC₁₂H₂₅SO₄",
        image: "/images/chemicals/sls.jpg",
        category: "surfactant",
        role: "Primary anionic surfactant; lowers surface tension and encapsulates oily dirt into micelles.",
        badge: "Primary Surfactant",
        statusNotes: "Solid needles/powder dissolved under agitation",
        targetQuantity: "2gm",
        actualQuantity: "2gm"
      },
      {
        id: "naoh",
        name: "Sodium Hydroxide (NaOH)",
        formula: "NaOH",
        image: "/images/chemicals/naoh.jpg",
        category: "alkali",
        role: "Caustic base; provides alkaline pH control and saponifies fatty precursors. Corrosive.",
        badge: "Corrosive Alkali",
        safetyWarning: "Corrosive: causes severe chemical burns. Handle with strict PPE.",
        statusNotes: "Measured precisely per lab notebook protocol",
        targetQuantity: "2gm",
        actualQuantity: "2gm"
      },
      {
        id: "water",
        name: "Distilled Water",
        formula: "H₂O",
        image: "/images/chemicals/water.jpg",
        category: "solvent",
        role: "Aqueous continuous phase and solvent for dissolving reagents and forming micelles.",
        badge: "Solvent / Diluent",
        statusNotes: "De-ionized to avoid extraneous minerals",
        targetQuantity: "20ml",
        actualQuantity: "20ml"
      },
      {
        id: "castor-oil",
        name: "Castor Oil",
        formula: "Triglyceride matrix",
        image: "/images/chemicals/castor-oil.jpg",
        category: "oil",
        role: "Vegetable oil serving as fatty substrate and emollient precursor for emulsification.",
        badge: "Fatty Precursor",
        statusNotes: "Requires agitation for uniform emulsion",
        targetQuantity: "5ml",
        actualQuantity: "5ml"
      },
      {
        id: "edta",
        name: "EDTA (Chelating Agent)",
        formula: "C₁₀H₁₆N₂O₈",
        image: "/images/chemicals/edta.jpg",
        category: "chelant",
        role: "Chelating agent; binds Ca²⁺ and Mg²⁺ hard water ions to protect surfactant foaming power.",
        badge: "Chelating Agent",
        statusNotes: "Prevents insoluble calcium soap precipitation",
        targetQuantity: "3ml",
        actualQuantity: "3ml"
      },
      {
        id: "glycerol",
        name: "Glycerol / Glycerin",
        formula: "C₃H₈O₃",
        image: "/images/chemicals/glycerol.jpg",
        category: "humectant",
        role: "Polyol humectant and co-solvent; provides smooth hand feel and regulates viscosity.",
        badge: "Humectant & Co-solvent",
        statusNotes: "Enhances moisture retention and tactile smoothness",
        targetQuantity: "5ml",
        actualQuantity: "5ml"
      },
      {
        id: "cuso4",
        name: "Copper(II) Sulfate (CuSO₄)",
        formula: "CuSO₄ · 5H₂O",
        image: "/images/chemicals/cuso4.jpg",
        category: "salt",
        role: "Transition metal salt imparting the signature vibrant blue color to the prototype.",
        badge: "Blue Colorant & Salt",
        statusNotes: "Confirmed in Table 6.1 (responsible for blue appearance)",
        targetQuantity: "2gm",
        actualQuantity: "2gm"
      },
      {
        id: "na2co3",
        name: "Sodium Carbonate (Na₂CO₃)",
        formula: "Na₂CO₃",
        image: "/images/chemicals/na2co3.jpg",
        category: "builder",
        role: "Alkaline builder providing reserve buffering and saponification support. (Optional in this run).",
        badge: "Alkaline Builder",
        statusNotes: "Auxiliary builder evaluated in laboratory literature",
        targetQuantity: "Optional",
        actualQuantity: "—"
      },
      {
        id: "stearic-acid",
        name: "Stearic Acid",
        formula: "CH₃(CH₂)₁₆COOH",
        image: "/images/chemicals/stearic-acid.jpg",
        category: "fatty-acid",
        role: "Saturated fatty acid for creaminess and opacity under alkaline heating. (Optional in this run).",
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
    sectionTitle: "Formulation Principles",
    subtitle: "Mechanisms governing surfactant action, builder alkalinity, and mixing kinetics",
    topics: [
      {
        id: "surfactant-action",
        title: "Surfactant Action & Micelle Formation",
        subtitle: "Surface tension reduction & soil dispersion",
        summary: "SLS has an amphiphilic structure: a hydrophilic sulfate head and lipophilic hydrocarbon tail that synergistically remove oily dirt.",
        points: [
          "Lowers interfacial surface tension between water and hydrophobic oily soils.",
          "Self-assembles into spherical micelles once Critical Micelle Concentration (CMC) is reached.",
          "Lipophilic core traps oily soil while hydrophilic heads keep particles suspended for rinsing."
        ]
      },
      {
        id: "builders-chelants",
        title: "Builders & Chelating Agents",
        subtitle: "Water conditioning & ion sequestration",
        summary: "Sodium carbonate (Na₂CO₃) and EDTA condition the wash liquor to maximize cleaning potential.",
        points: [
          "Na₂CO₃ supplies reserve alkalinity to neutralize acidic dirt and saponify fatty acids.",
          "EDTA forms stable hexadentate complexes with hard water ions (Ca²⁺, Mg²⁺).",
          "Prevents insoluble calcium curd/scum precipitation from deactivating SLS."
        ]
      },
      {
        id: "ph-compatibility",
        title: "pH Control & Compatibility",
        subtitle: "Phase stability & safety considerations",
        summary: "Ingredient compatibility dictates whether components stay transparently dissolved or separate into cloudy phases.",
        points: [
          "NaOH provides alkaline pH control for saponification; requires precise handling.",
          "Reagent addition order and temperature govern clarity vs phase separation.",
          "Electrolyte salts (CuSO₄) modulate micelle repulsion and solution viscosity."
        ]
      },
      {
        id: "mixing-heating",
        title: "Agitation Kinetics & Heat Transfer",
        subtitle: "Vortex mixing & thermal dissolution",
        summary: "Continuous stirring accelerates dissolution by reducing stagnant boundary layers around solid reagents.",
        points: [
          "Magnetic stirrer recorded ~970 RPM, generating a stable vortex without splashing.",
          "Gradual reagent addition prevents excessive air entrainment and persistent foam.",
          "Controlled heating accelerates precursor dissolution without thermal degradation."
        ]
      }
    ]
  },

  process: {
    sectionTitle: "Process & Methodology",
    subtitle: "Unit operations and sequential execution of the laboratory batch",
    diagramImage: "/images/img-1.svg",
    diagramAlt: "Process Flow Diagram showing sequential stages from raw materials to final collection",
    processVideo: "/video/process-video.mp4",
    flowStages: [
      "Raw Materials & Water",
      "Controlled Mixing (970 RPM)",
      "Heating (If Required)",
      "Cooling & Filtration",
      "Collection & Labelling"
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparation & Safety Setup",
        shortDesc: "PPE check and equipment setup",
        fullDesc: "Don splash goggles, lab coat, and nitrile gloves. Inspect glassware, clear bench, and measure 20 mL distilled water into the reaction beaker.",
        keyAction: "Equip PPE, tare balance, and set up magnetic hotplate"
      },
      {
        stepNumber: 2,
        title: "Controlled Reagent Mixing",
        shortDesc: "Vortex addition (~970 RPM)",
        fullDesc: "Sequentially introduce SLS (2g), NaOH (2g), castor oil (5mL), EDTA (3mL), glycerol (5mL), and CuSO₄ (2g) under steady ~970 RPM stirring.",
        rpm: "~970 RPM",
        keyAction: "Gentle sequential dosing to avoid excess foam"
      },
      {
        stepNumber: 3,
        title: "Controlled Thermal Assist",
        shortDesc: "Gentle heating if required",
        fullDesc: "Apply mild, monitored heat via the hotplate if needed to dissolve fatty precursors. Never heat sealed vessels or allow boiling.",
        caution: "Vented glassware only; monitor temperature continuously",
        keyAction: "Maintain controlled heat profile with thermometer verification"
      },
      {
        stepNumber: 4,
        title: "Stabilization & Filtration",
        shortDesc: "Ambient cooling and filtration",
        fullDesc: "Allow the mixture to cool to room temperature. Pass through filter paper if undissolved micro-particles remain.",
        keyAction: "Cool to room temperature and check optical clarity"
      },
      {
        stepNumber: 5,
        title: "Sample Collection & Labelling",
        shortDesc: "Aliquoting and parameter logging",
        fullDesc: "Transfer the homogeneous blue liquid into a sealed sample bottle with hazard labels, date, and team identifiers.",
        keyAction: "Seal container, affix GHS label, and log notebook data"
      }
    ]
  },

  gallery: {
    sectionTitle: "Photographic Evidence Gallery",
    subtitle: "Authentic laboratory documentation recorded during the minor project experiment",
    note: "All photographs document actual laboratory work conducted in the Chemical Prototyping laboratory at MIT Academy of Engineering.",
    photos: [
      {
        id: "photo-stirrer-agitation",
        title: "Agitation on Magnetic Stirrer",
        caption: "Blue mixture in a beaker on a laboratory hotplate/magnetic stirrer; digital tachometer display reads approximately 970 RPM.",
        src: "/images/fig-5-1.jpeg",
        alt: "Beaker on REMI magnetic stirrer with blue liquid and 970 RPM digital display",
        aspect: "portrait"
      },
      {
        id: "photo-collected-sample",
        title: "Collected Liquid Sample (Top View)",
        caption: "Small aliquot sample of the blue liquid collected for visual clarity and phase observation.",
        src: "/images/fig-5-2.jpeg",
        alt: "Top-down view into small glass beaker showing uniform deep blue liquid detergent sample",
        aspect: "portrait"
      },
      {
        id: "photo-glassware-measurement",
        title: "Glassware & Measuring Cylinder",
        caption: "Precision laboratory glassware and graduated cylinders used for volumetric addition.",
        src: "/images/fig-5-3.jpeg",
        alt: "Handling small glass measuring cylinder and beaker with white solid precursor",
        aspect: "portrait"
      },
      {
        id: "photo-solid-reagents",
        title: "Solid Reagents Preparation",
        caption: "Reagents accurately weighed for surfactant dissolving and stoichiometric blending.",
        src: "/images/fig-5-4.jpeg",
        alt: "Beaker containing white solid pellets/needles prepared beside wash bottle",
        aspect: "portrait"
      },
      {
        id: "photo-mixture-inspection",
        title: "Blue Mixture Handling & Inspection",
        caption: "Beaker containing the formulated blue detergent prototype during handling and visual check.",
        src: "/images/fig-5-5.jpeg",
        alt: "Student hand holding 50 mL glass beaker filled with 20 mL blue detergent prototype",
        aspect: "portrait"
      },
      {
        id: "photo-lab-work-area",
        title: "Reagents & Lab Work Area",
        caption: "Chemical prototyping laboratory bench with reagent containers, wash bottles, and balance station.",
        src: "/images/fig-5-6.jpeg",
        alt: "Laboratory bench view with reagent wash bottles, chemical balance paper, and beaker",
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
      detail: "Captured on REMI 2MLH magnetic stirrer during liquid agitation"
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
    sectionTitle: "Discussion & Limitations",
    subtitle: "Scientific appraisal and technical boundary conditions",
    discussionPoints: [
      "The formulation developed a characteristic blue color and was blended under ~970 RPM magnetic stirring. Color alone does not verify detergent performance.",
      "Ingredient addition order, solution pH, and electrolyte balance directly control micelle formation, optical clarity, and macroscopic viscosity.",
      "Comprehensive evaluation requires calibrated pH testing, rotational viscosity measurement, shelf-stability logging, and standardized fabric stain removal trials."
    ],
    limitations: [
      "Quantitative values for pH, dynamic viscosity, and soil removal efficiency were not instrumentally measured.",
      "Heating temperature and total residence mixing duration were not continuously logged across runs.",
      "Discrepancies in project flowcharts (NaCl vs MgCl₂) require faculty reconciliation."
    ]
  },

  safety: {
    sectionTitle: "Safety & Waste Disposal",
    subtitle: "Mandatory laboratory protocols and hazard mitigation",
    rules: [
      {
        id: "naoh-hazard",
        severity: "danger",
        title: "Sodium Hydroxide (NaOH) Hazard",
        description: "NaOH is a strong caustic base causing severe chemical burns and corneal damage. Full PPE (splash goggles, lab coat, nitrile gloves) is mandatory.",
        icon: "ShieldAlert"
      },
      {
        id: "stirring-safety",
        severity: "warning",
        title: "Splashes & Rotating Equipment",
        description: "Prevent splashes during ~970 RPM magnetic stirring. Keep hair tied back and loose clothing away from the hotplate surface.",
        icon: "AlertTriangle"
      },
      {
        id: "thermal-safety",
        severity: "warning",
        title: "Heating Limitations",
        description: "Never heat liquids in sealed vessels due to pressure risk. Use minimal heat and never leave hot glassware unattended.",
        icon: "Flame"
      },
      {
        id: "mixing-hazard",
        severity: "danger",
        title: "Prohibited Incompatible Mixtures",
        description: "Never mix the formulation with bleach (hypochlorite) or mineral acids; toxic fumes or violent exotherms may result.",
        icon: "Ban"
      },
      {
        id: "labelling-vessels",
        severity: "warning",
        title: "Strict Container Labelling",
        description: "Label all test vessels with chemical identity, batch date, and hazard warnings. Never use food or beverage containers.",
        icon: "Tag"
      },
      {
        id: "waste-disposal",
        severity: "danger",
        title: "Regulated Waste Disposal",
        description: "Dispose of all surplus detergent and rinsates in designated hazardous waste carboys. Zero unauthorized sink disposal.",
        icon: "Trash2"
      },
      {
        id: "emergency-contact",
        severity: "danger",
        title: "Emergency Exposure Protocol",
        description: "For skin or eye contact, flush immediately at an emergency eyewash station for at least 15 minutes and notify the instructor.",
        icon: "HeartPulse"
      }
    ]
  },

  conclusion: {
    sectionTitle: "Conclusion & Future Scope",
    subtitle: "Summary of prototype outcomes and strategic recommendations",
    conclusionText: "A laboratory-scale liquid detergent prototype was successfully synthesized and documented with magnetic stirring at ~970 RPM. The resulting blue solution demonstrates basic surfactant and builder dispersion, while definitive cleaning performance and stability require formal instrumental validation.",
    futureScopeList: [
      "Quantitatively measure solution pH, rotational viscosity, and specific gravity with calibrated lab instruments.",
      "Conduct standardized fabric and glass cleaning efficiency tests against commercial liquid detergents.",
      "Perform a 14-day stability trial to observe phase separation, cloud point, or sediment precipitation.",
      "Reconcile electrolyte salt selections (NaCl vs MgCl₂) with course faculty advisors."
    ]
  },

  video: {
    sectionTitle: "Laboratory Video Documentation",
    subtitle: "Real-time process execution and project presentation recorded at MIT Academy of Engineering",
    processVideoUrl: "/video/process-video.mp4",
    presentationVideoUrl: "/video/liquid-detergent-prototype.mp4",
    driveUrl: "https://drive.google.com/file/d/1Ggo0yIQx5cBjQ0EfpUiWHAe_Lsfva8Q3/view?usp=sharing",
    driveEmbedUrl: "https://drive.google.com/file/d/1Ggo0yIQx5cBjQ0EfpUiWHAe_Lsfva8Q3/preview",
    caption: "Laboratory process execution and prototype documentation for the Chemical Prototyping course, MIT Academy of Engineering."
  },

  quiz: {
    sectionTitle: "Laboratory Prototyping Quiz",
    subtitle: "Test your understanding of formulation chemistry, agitation kinetics, and safety protocols",
    description: "Challenge your mastery of surfactant kinetics, stoichiometric calculations, and laboratory observations from this experiment.",
    questions: [
      {
        id: 1,
        question: "What is the primary thermodynamic mechanism of Sodium Lauryl Sulfate (SLS) in this liquid detergent prototype?",
        options: [
          "Increases bulk solution density without modifying interfacial surface tension",
          "Lowers water-oil interfacial tension and self-assembles into soil-encapsulating micelles",
          "Acts as an acidic neutralizer to prevent caustic burns from alkalis",
          "Provides inorganic blue coloration via transition metal d-orbital splitting"
        ],
        correctIndex: 1,
        explanation: "SLS is an amphiphilic anionic surfactant. Its hydrophilic sulfate head and lipophilic tail lower interfacial tension and assemble into spherical micelles above the CMC to encapsulate oily dirt.",
        topicBadge: "Surfactant Chemistry"
      },
      {
        id: 2,
        question: "What operational agitation speed was recorded on the REMI magnetic stirrer digital tachometer during mixing?",
        options: [
          "~350 RPM",
          "~1800 RPM",
          "~970 RPM",
          "~5000 RPM"
        ],
        correctIndex: 2,
        explanation: "The digital tachometer on the REMI 2MLH magnetic hotplate stirrer displayed approximately 970 RPM during the photographed agitation phase, creating a stable mixing vortex.",
        topicBadge: "Agitation Kinetics"
      },
      {
        id: 3,
        question: "Which chemical reagent gave the prototype its characteristic deep blue color observed in the reaction beaker?",
        options: [
          "Copper(II) Sulfate (CuSO₄ · 5H₂O)",
          "Methylene Blue synthetic organic dye",
          "Saponified Castor Oil lipid complex",
          "Concentrated Sodium Hydroxide (NaOH)"
        ],
        correctIndex: 0,
        explanation: "As documented in Lab Notebook Table 6.1, 2 gm of Copper(II) Sulfate (CuSO₄) was introduced as an inorganic transition metal salt, yielding the signature blue aqueous solution.",
        topicBadge: "Colorant & Salts"
      },
      {
        id: 4,
        question: "Why does Sodium Hydroxide (NaOH) require strict PPE (splash goggles, nitrile gloves, lab coat) during handling?",
        options: [
          "It demagnetizes the magnetic stirrer bar inside the beaker",
          "It releases toxic chlorine gas immediately upon contact with ambient air",
          "It is a caustic strong base causing severe chemical burns and corneal tissue damage",
          "It is a volatile flammable liquid prone to flash combustion"
        ],
        correctIndex: 2,
        explanation: "NaOH is a strongly alkaline, corrosive solid with an exothermic heat of solution. Contact with skin or eyes rapidly hydrolyzes proteins and saponifies cell lipids; full PPE is mandatory.",
        topicBadge: "Chemical Safety"
      },
      {
        id: 5,
        question: "What is the key role of EDTA in the liquid detergent prototype formulation?",
        options: [
          "Chelates divalent hard water ions (Ca²⁺ and Mg²⁺) to preserve surfactant foaming power",
          "Acts as a thickening associative polymer to achieve high commercial gel viscosity",
          "Serves as an artificial scent carrier and botanical fragrance stabilizer",
          "Provides chemical bleaching power through active peroxygen release"
        ],
        correctIndex: 0,
        explanation: "EDTA acts as a hexadentate chelating ligand that sequesters polyvalent calcium and magnesium cations in tap water, preventing the formation of insoluble calcium scum and protecting lather.",
        topicBadge: "Builders & Chelants"
      },
      {
        id: 6,
        question: "According to Lab Notebook Table 6.1, what was the total liquid volume scale of the initial laboratory batch?",
        options: [
          "~500 mL (Pilot scale)",
          "~33 mL (20 mL Water + 5 mL Oil + 5 mL Glycerol + 3 mL EDTA)",
          "~2.5 Litres (Semi-industrial run)",
          "~10 mL (Micro-pipette scale)"
        ],
        correctIndex: 1,
        explanation: "The measured laboratory run comprised 20 mL distilled water, 5 mL castor oil, 5 mL glycerol, and 3 mL EDTA liquid components, yielding ~33 mL total liquid volume alongside 6g total dry reagents.",
        topicBadge: "Batch Formulation"
      }
    ]
  },

  references: {
    sectionTitle: "References & Documentation",
    subtitle: "Authoritative academic sources, institutional standards, and project notes",
    items: [
      {
        title: "Chemical Prototyping Laboratory Manual & Approved Procedure for Liquid Detergent Preparation",
        source: "Chemical Prototyping Laboratory, MIT Academy of Engineering, Alandi (D), Pune."
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
        source: "SY B.Tech Minor Project Documentation, Academic Year 2026–2027."
      }
    ]
  },

  footer: {
    course: "SY B.Tech Minor Project • Course: Chemical Prototyping",
    department: "Subject: Chemical Prototyping",
    institution: "MIT Academy of Engineering, Alandi (D), Pune – 412105, Maharashtra, India",
    academicYear: "Academic Year 2026–2027",
    disclaimer: "Laboratory prototype. Not for skin, dish, clothing or household use.",
    teamSummary: "Pranav Chopade • Rushabh Somase • Swayam Kasar • Yash Kadam • Dishant Maraskolhe"
  }
};
