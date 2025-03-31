import * as v from "valibot";

export const infosSchema = v.object({
  Prénom: v.pipe(v.string(), v.nonEmpty("Votre prénom est requis")),
  Nom: v.pipe(v.string(), v.nonEmpty("Votre nom est requis")),
  Téléphone: v.pipe(
    v.string(),
    v.nonEmpty("Votre numéro de téléphone est requis")
  ),
  Email: v.pipe(v.string(), v.email("L'email est invalide")),
});

export type InfosSchema = v.InferOutput<typeof infosSchema>;

export const establishmentSchema = v.object({
  "Nom de l'établissement": v.pipe(
    v.string(),
    v.nonEmpty("Le nom de l'établissement est requis")
  ),
  "Code postal": v.pipe(v.string(), v.nonEmpty("Le code postal est requis")),
  Ville: v.pipe(v.string(), v.nonEmpty("La ville est requise")),
  Adresse: v.pipe(v.string(), v.nonEmpty("L'adresse est requise")),
  "Caractéristiques de l'établissement": v.pipe(
    v.array(v.union(FEATURES.map((feature) => v.literal(feature)))),
    v.minLength(1, "Veuillez sélectionner au moins une caractéristique")
  ),
  "Numéro de SIRET": v.optional(
    v.pipe(
      v.string(),
      v.minLength(14, "Le numéro de SIRET doit contenir 14 chiffres"),
      v.maxLength(14, "Le numéro de SIRET doit contenir 14 chiffres")
    )
  ),
  "Nombre de clients par jour": v.pipe(
    v.number(),
    v.minValue(50, "Le nombre de clients par jour doit être supérieur à 0")
  ),
});

export type EstablishmentSchema = v.InferOutput<typeof establishmentSchema>;

const dateObject = v.looseObject({
  year: v.number(),
  month: v.number(),
  day: v.number(),
});

export const missionSchema = v.object({
  "Période de remplacement": v.object(
    { start: dateObject, end: dateObject },
    "Vous devez sélectionner une période de remplacement"
  ),
  "Jours travaillés": v.pipe(
    v.array(v.union(DAYS.map((day) => v.literal(day)))),
    v.minLength(1, "Au moins un jour est requis")
  ),
  "Nombre d'heures par semaine": v.pipe(
    v.number(),
    v.minValue(1, "Le nombre d'heures par semaine doit être supérieur à 0")
  ),
  "Autres employés présents": v.number(),
  "Hébergement sur place": v.pipe(
    v.union(
      ACCOMODATIONS.map((accomodation) => v.literal(accomodation)),
      "Veuillez sélectionner un type d'hébergement valide"
    ),
    v.nonEmpty("Veuillez sélectionner un type d'hébergement")
  ),
  "Autres informations": v.optional(v.string()),
});

export type MissionSchema = v.InferOutput<typeof missionSchema>;
