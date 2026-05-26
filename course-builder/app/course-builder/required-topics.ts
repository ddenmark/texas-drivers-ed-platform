export interface StatutoryTopic {
  id: number;
  name: string;
  primaryModule: string;
  dedicatedTime: string;
  description: string;
  complianceNote: string;
}

export const statutoryTopics: StatutoryTopic[] = [
  { id: 1, name: "Alcohol Awareness Information", primaryModule: "Module 8: Alcohol and Drugs", dedicatedTime: "10-15 min", description: "Dedicated content on alcohol effects, Texas laws, and refusal skills.", complianceNote: "Texas Education Code §1001.102" },
  { id: 2, name: "Information Relating to Street Racing", primaryModule: "Module 5: Risk Reduction", dedicatedTime: "8-10 min", description: "Dangers of street racing, legal consequences in Texas, and prevention messaging.", complianceNote: "Texas Education Code §1001.103" },
  { id: 3, name: "Human Trafficking Prevention Information", primaryModule: "Module 12: Personal Responsibility", dedicatedTime: "10 min", description: "Awareness of human trafficking signs, reporting resources, and safe practices for drivers.", complianceNote: "Texas Education Code §1001.104" },
  { id: 4, name: "Motorcycle Awareness Information", primaryModule: "Module 12: Personal Responsibility", dedicatedTime: "8 min", description: "Safe sharing of the road with motorcyclists and specific hazard awareness.", complianceNote: "Texas Education Code §1001.105" },
  { id: 5, name: "Drug and Alcohol Driving Awareness Programs", primaryModule: "Module 8: Alcohol and Drugs", dedicatedTime: "15+ min", description: "Comprehensive coverage of both substances, impairment, laws and consequences.", complianceNote: "Texas Education Code §1001.106" },
  { id: 6, name: "Hospital and Rehabilitation Facilities", primaryModule: "Module 9: Adverse Conditions", dedicatedTime: "8 min", description: "Real impact of crashes on victims and long-term rehabilitation.", complianceNote: "Texas Education Code §1001.107" },
  { id: 7, name: "Texas Department of Insurance", primaryModule: "Module 11: Consumer Responsibility", dedicatedTime: "6-8 min", description: "Role of TDI, how to file complaints, insurance shopping tips.", complianceNote: "Texas Education Code §1001.108" },
  { id: 8, name: "Information Relating to Railroad and Highway Grade Crossing Safety", primaryModule: "Module 6: Environmental Factors", dedicatedTime: "10 min", description: "Signs, signals, stopping requirements, and dangers at rail crossings.", complianceNote: "Texas Education Code §1001.109" },
  { id: 9, name: "Information Relating to Litter Prevention", primaryModule: "Module 6 or 11: Environmental / Consumer", dedicatedTime: "5 min", description: "Texas litter laws and environmental responsibility for drivers.", complianceNote: "Texas Education Code §1001.110" },
  { id: 10, name: "Information Relating to Anatomical Gifts", primaryModule: "Module 11: Consumer Responsibility", dedicatedTime: "6 min", description: "Organ and tissue donation awareness and the Texas donor registry.", complianceNote: "Texas Education Code §1001.111" },
  { id: 11, name: "Information Relating to Traffic Stops", primaryModule: "Module 1: Traffic Laws", dedicatedTime: "8-10 min", description: "What to expect during a traffic stop and how to interact safely with law enforcement.", complianceNote: "Texas Education Code §1001.112" },
  { id: 12, name: "Information Relating to Child Passenger Safety Seat Systems", primaryModule: "Module 10: Vehicle Requirements", dedicatedTime: "12 min", description: "Texas child restraint laws and proper installation techniques.", complianceNote: "Texas Education Code §1001.113" },
  { id: 13, name: "Information Relating to Oversize and Overweight Vehicles", primaryModule: "Module 6: Environmental Factors", dedicatedTime: "8 min", description: "Safe interaction with oversize/overweight vehicles and Move Over laws.", complianceNote: "Texas Education Code §1001.114" },
  { id: 14, name: "Information Relating to Driving Distractions", primaryModule: "Module 7: Distractions", dedicatedTime: "12+ min", description: "All forms of distracted driving and Texas-specific penalties and prevention.", complianceNote: "Texas Education Code §1001.115" },
  { id: 15, name: "Information Relating to Passing Certain Vehicles", primaryModule: "Module 3: Vehicle Movements", dedicatedTime: "8 min", description: "Safe passing procedures for trucks, buses, emergency, and farm vehicles.", complianceNote: "Texas Education Code §1001.116" }
];