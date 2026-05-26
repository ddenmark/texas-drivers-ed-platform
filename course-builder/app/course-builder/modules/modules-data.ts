export interface Module {
  id: number;
  name: string;
  description: string;
  timeMinutes: number;
  statutoryTopics: string[];
}

export const initialModules: Module[] = [
  {
    id: 1,
    name: "Traffic Laws",
    description: "Texas licensing process, GDL, signs, signals, right-of-way, and basic traffic laws. Includes Traffic Stops statutory topic.",
    timeMinutes: 360,
    statutoryTopics: ["Traffic Stops"]
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
    description: "Physical and mental fitness to drive, vision, fatigue, medications, and responsible decision-making.",
    timeMinutes: 120,
    statutoryTopics: []
  },
  {
    id: 5,
    name: "Risk Reduction",
    description: "Defensive driving principles, hazard recognition, space management, speed management, and street racing awareness.",
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
    description: "Effects of alcohol and drugs on driving, Texas zero-tolerance laws, and refusal skills.",
    timeMinutes: 180,
    statutoryTopics: ["Alcohol Awareness Information", "Drug and Alcohol Driving Awareness Programs"]
  },
  {
    id: 9,
    name: "Adverse Conditions",
    description: "Vehicle emergencies, skid recovery, hydroplaning, and post-crash procedures.",
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