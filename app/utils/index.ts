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
  "Loto",
  "Nickel",
  "PMU",
  "Presse",
  "Relais Colis",
  "Tabac",
  "Autre",
] as const;

export const PARTNERSHIPS = [
  "Un remplaçant",
  "Un binôme de remplaçants",
  "Devenir remplaçant",
] as const

export type Partnership = (typeof PARTNERSHIPS)[number];