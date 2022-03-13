export type SystemState = "Any" | "None" | "Boom" | "Outbreak" | "Election" | "War" | "Civil War" | "Civil Unrest";
export type Allegiance = "Federation" | "Alliance" | "Empire" | "Independent" | "Any";
export type Population = "High" | "Low" | "Any";

export interface SystemRequirements {
  allegiance: Allegiance[];
  states: SystemState[];
  population: Population;
}

export interface ManufacturedMaterial {
  name: string;
  notes?: string;
  requirements?: SystemRequirements;
}

export interface RawMaterial {
  name: string;
  location: string;
  site: string;
}

export interface RawMaterialSystem {
  name: string;
  materials: RawMaterial[];
}
