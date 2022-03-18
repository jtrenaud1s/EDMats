import { ManufacturedMaterial, RawMaterialSystem } from "../interfaces";

export const manufacturedMaterials: ManufacturedMaterial[] = [
  {
    name: "Core Dynamics Composites",
    requirements: {
      allegiance: ["Federation"],
      population: "High",
      states: ["None"],
    },
  },
  {
    name: "Proprietary Composites",
    requirements: {
      allegiance: ["Federation"],
      population: "High",
      states: ["War", "Civil War"],
    },
  },
  {
    name: "Military Grade Alloys",
    requirements: {
      allegiance: ["Any"],
      population: "High",
      states: ["War", "Civil War"],
    },
  },
  {
    name: "Military Grade Superconductors",
    notes: "May just need to use a material trader for these.",
    requirements: {
      allegiance: ["Any"],
      population: "High",
      states: ["War", "Civil War"],
    },
  },
  {
    name: "Imperial Shielding",
    requirements: {
      allegiance: ["Empire"],
      population: "High",
      states: ["None", "Election"],
    },
  },
  {
    name: "Proto Heat Radiators",
    requirements: {
      allegiance: ["Independent"],
      population: "High",
      states: ["Boom"],
    },
  },
  {
    name: "Pharmaceutical Isolators",
    requirements: {
      allegiance: ["Any"],
      population: "Any",
      states: ["Outbreak"],
    },
  },
  {
    name: "Improvised Components",
    requirements: {
      allegiance: ["Independent"],
      population: "Any",
      states: ["Civil Unrest"],
    },
  },
  {
    name: "Proto Light Alloys",
    requirements: {
      allegiance: ["Independent", "Alliance"],
      population: "High",
      states: ["Boom"],
    },
  },
  {
    name: "Proto Radiolic Alloys",
    requirements: {
      allegiance: ["Independent", "Alliance"],
      population: "High",
      states: ["Boom"],
    },
  },
  {
    name: "Biotech Conductors",
    notes:
      "Can be obtained by completing missions. (Massacre Missions can be good for this, as you make money and get mats.)",
  },
  {
    name: "Exquisite Focus Crystals",
    notes:
      "Can be obtained by completing missions. (Massacre Missions can be good for this, as you make money and get mats.)",
  },
];

export const rawMaterialSystems: RawMaterialSystem[] = [
  {
    name: "HIP 36601",
    materials: [
      { name: "Polonium", location: "C 1 A", site: "Biological Site [5]" },
      { name: "Ruthenium", location: "C 1 D", site: "Biological Site [3]" },
      { name: "Tellurium", location: "C 3 B", site: "Biological Site [5]" },
      {
        name: "Technetium",
        location: "C 5 A",
        site: "Biological Site [10] OR [6]",
      },
    ],
  },
  {
    name: "Outotz LS-K D8-3",
    materials: [
      { name: "Yttrium", location: "B 5 A", site: "Biological Site [15]" },
      { name: "Antimony", location: "B 5 C", site: "Biological Site [3]" },
    ],
  },
  {
    name: "LHS 417",
    materials: [
      { name: "Selenium", location: "9 E A", site: "Geological Sites [17], [19], [20], [22], [23], [25], [26]" },
    ],
  },
];

export const allegiances = {
  "Any": "",
  "Alliance": 1,
  "Empire": 2,
  "Federation": 3,
  "Guardian": 4,
  "Independent": 5,
  "None": 6,
  "Pilots Federation": 7,
  "Pirate": 8,
  "Thargoid": 9,
}

export const states = {
  "Any": "",
  "Blight": 102,
  "Bust": 32,
  "Boom": 16,
  "Civil Liberty": 66,
  "Civil Unrest": 48,
  "Civil War": 64,
  "Cold War": 108,
  "Colonisation": 109,
  "Damaged": 15,
  "Drought": 103,
  "Election": 65,
  "Expansion": 67,
  "Famine": 37,
  "Historic Event": 110,
  "Infrastructure Failure": 104,
  "Investment": 101,
  "Lockdown": 69,
  "Natural Disaster": 105,
  "None": 80,
  "Outbreak": 72,
  "Pirate Attack": 81,
  "Public Holiday": 106,
  "Retreat": 96,
  "Revolution": 111,
  "Technological Leap": 112, 
  "Terrorist Attack": 107,
  "Trade War": 113,
  "Under Repairs": 14,
  "War": 73
}