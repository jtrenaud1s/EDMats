import { ManufacturedMaterial, RawMaterialSystem } from "../interfaces";

export const manufacturedMaterials: ManufacturedMaterial[] = [
  {
    name: "Core Dynamics",
    requirements: {
      allegiance: ["Federation"],
      population: "High",
      states: ["War", "Civil War"],
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
      { name: "Selenium", location: "9 E A", site: "Any Geological Site" },
    ],
  },
];
