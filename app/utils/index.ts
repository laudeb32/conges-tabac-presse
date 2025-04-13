export const ACCOMODATIONS = [
  "À domicile",
  "Airbnb",
  "Gîte",
  "Hôtel",
  "Autre",
] as const;

export const DAYS = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
] as const;

export const FEATURES = [
  "Bar",
  "FDJ",
  "Nickel",
  "PMU",
  "Presse",
  "Relais Colis",
  "Tabac",
  "Autre",
] as const;

export const PARTNERSHIPS = [
  { label: "Un remplaçant", icon: "heroicons:user-solid" },
  { label: "Deux remplaçants", icon: "heroicons:users-solid" },
  { label: "Devenir remplaçant", icon: "heroicons:user-plus-solid" },
] as const;

export type Partnership = (typeof PARTNERSHIPS)[number]["label"];
