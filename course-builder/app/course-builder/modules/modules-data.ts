export interface Lesson {
  title: string;
  duration: string;
  keyPoints: string[];
}

export interface Module {
  id: number;
  name: string;
  description: string;
  timeMinutes: number;
  statutoryTopics: string[];
  lessons?: Lesson[];
}

export const initialModules: Module[] = [
  {
    id: 1,
    name: "Traffic Laws",
    description: "Texas licensing process, GDL, signs, signals, right-of-way, and basic traffic laws. Includes Traffic Stops statutory topic.",
    timeMinutes: 360,
    statutoryTopics: ["Traffic Stops"],
    lessons: [
      { title: "Welcome & Texas Licensing Pathways", duration: "25 min", keyPoints: ["GDL system explained", "Learner Permit → Provisional → Full License", "Parent/Guardian role in PTDE"] },
      { title: "Texas Driver Handbook – Signs & Signals", duration: "45 min", keyPoints: ["Regulatory, warning, and guide signs", "Traffic signals and pavement markings", "School zones and construction zones"] },
      { title: "Right-of-Way Rules", duration: "40 min", keyPoints: ["4-way stops and uncontrolled intersections", "Yield signs and merging", "Emergency vehicles and school buses"] },
      { title: "Core Traffic Laws & Speed Management", duration: "35 min", keyPoints: ["Basic speed laws", "Following distance (3-second rule)", "Lane usage and passing basics"] },
      { title: "Consequences of Violations", duration: "20 min", keyPoints: ["Points system and suspensions", "Impact on insurance", "How violations affect teens"] },
      { title: "Traffic Stops – What to Expect", duration: "25 min", keyPoints: ["Statutory: Traffic Stops topic", "What to do during a stop", "Rights and responsibilities"] },
      { title: "Module 1 Review & Assessment", duration: "30 min", keyPoints: ["Comprehensive review", "Final Module 1 Assessment (20 questions)", "80% passing threshold"] }
    ]
  },
  {
    id: 2,
    name: "Driver Preparation",
    description: "Vehicle controls, pre-trip inspection, seating position, mirrors, and starting/stopping procedures.",
    timeMinutes: 150,
    statutoryTopics: []
  },
  {
    id: 3,
    name: "Vehicle Movements",
    description: "Turning, lane changes, merging, backing, parking, and safe passing of certain vehicles.",
    timeMinutes: 180,
    statutoryTopics: ["Passing Certain Vehicles"]
  },
  {
    id: 4,
    name: "Driver Readiness",
    description: "Physical and mental fitness, vision, fatigue, medications, and responsible decision-making.",
    timeMinutes: 120,
    statutoryTopics: []
  },
  {
    id: 5,
    name: "Risk Reduction",
    description: "Defensive driving principles, hazard recognition, space management, and street racing awareness.",
    timeMinutes: 150,
    statutoryTopics: ["Street Racing"]
  },
  {
    id: 6,
    name: "Environmental Factors",
    description: "Weather, night driving, construction zones, railroad crossings, oversize vehicles, and litter prevention.",
    timeMinutes: 180,
    statutoryTopics: ["Railroad and Highway Grade Crossing Safety", "Oversize and Overweight Vehicles", "Litter Prevention"]
  },
  {
    id: 7,
    name: "Distractions",
    description: "Types of distracted driving, Texas laws, statistics, and prevention strategies.",
    timeMinutes: 150,
    statutoryTopics: ["Driving Distractions"]
  },
  {
    id: 8,
    name: "Alcohol and Drugs",
    description: "Effects of alcohol and drugs on driving, Texas laws, refusal skills, and awareness programs.",
    timeMinutes: 180,
    statutoryTopics: ["Alcohol Awareness Information", "Drug and Alcohol Driving Awareness Programs"],
    lessons: [
      { title: "How Alcohol Affects Driving", duration: "35 min", keyPoints: ["BAC and impairment levels", "Reaction time, vision, and judgment effects", "Interactive BAC estimator activity"] },
      { title: "Texas Alcohol Laws for Drivers", duration: "30 min", keyPoints: ["Zero tolerance for minors (any detectable amount)", "Open Container law", "DUI/DWI penalties and consequences"] },
      { title: "Drugs and Driving", duration: "30 min", keyPoints: ["Prescription, over-the-counter, and illegal drugs", "How drugs affect driving differently than alcohol", "Synergistic effects when combined"] },
      { title: "Consequences & Real Stories", duration: "25 min", keyPoints: ["Legal consequences (license loss, jail, fines)", "Financial and personal/family impact", "Age-appropriate stories from victims"] },
      { title: "Refusal Skills & Making Good Decisions", duration: "30 min", keyPoints: ["Peer pressure resistance techniques", "Designated driver planning", "Rideshare and alternative options"] },
      { title: "Module 8 Assessment", duration: "30 min", keyPoints: ["Comprehensive quiz on laws, effects, and decision-making"] }
    ]
  },
  {
    id: 9,
    name: "Adverse Conditions",
    description: "Vehicle emergencies, skid recovery, crash avoidance, and impact on hospitals/rehabilitation facilities.",
    timeMinutes: 120,
    statutoryTopics: ["Hospital and Rehabilitation Facilities"]
  },
  {
    id: 10,
    name: "Vehicle Requirements",
    description: "Basic maintenance, safety equipment, and child passenger safety seat systems.",
    timeMinutes: 120,
    statutoryTopics: ["Child Passenger Safety Seat Systems"]
  },
  {
    id: 11,
    name: "Consumer Responsibility",
    description: "Buying/leasing vehicles, insurance requirements, TDI role, and anatomical gifts.",
    timeMinutes: 120,
    statutoryTopics: ["Texas Department of Insurance", "Anatomical Gifts"]
  },
  {
    id: 12,
    name: "Personal Responsibility and Driving",
    description: "Courtesy, road rage, sharing the road (motorcycles), and human trafficking prevention awareness.",
    timeMinutes: 150,
    statutoryTopics: ["Motorcycle Awareness Information", "Human Trafficking Prevention Information"]
  }
];