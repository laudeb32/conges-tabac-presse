import * as v from "valibot";

export const infoSchema = v.object({
  Prénom: v.pipe(v.string(), v.nonEmpty("Votre prénom est requis")),
  Nom: v.pipe(v.string(), v.nonEmpty("Votre nom est requis")),
  Téléphone: v.pipe(
    v.string(),
    v.nonEmpty("Votre numéro de téléphone est requis")
  ),
  Email: v.pipe(v.string(), v.email("L'email est invalide")),
});

export type InfoForm = v.InferOutput<typeof infoSchema>;

export const establishmentSchema = v.object({
  "Nom de l'établissement": v.pipe(
    v.string(),
    v.nonEmpty("Le nom de l'établissement est requis")
  ),
  "Code postal": v.pipe(v.string(), v.nonEmpty("Le code postal est requis")),
  Ville: v.pipe(v.string(), v.nonEmpty("La ville est requise")),
  Adresse: v.pipe(v.string(), v.nonEmpty("L'adresse est requise")),
  Caractéristiques: v.pipe(
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
  "Nombre de clients": v.pipe(
    v.number(),
    v.minValue(50, "Le nombre de clients par jour doit être supérieur à 0")
  ),
});

export type EstablishmentForm = v.InferOutput<typeof establishmentSchema>;

const dateObject = v.looseObject({
  year: v.number(),
  month: v.number(),
  day: v.number(),
});

export const missionSchema = v.object({
  Période: v.object(
    { start: dateObject, end: dateObject },
    "Vous devez définir la période de remplacement"
  ),
  "Jours travaillés": v.pipe(
    v.array(v.union(DAYS.map((day) => v.literal(day)))),
    v.minLength(1, "Au moins un jour est requis")
  ),
  "Heures travaillées": v.pipe(
    v.number(),
    v.minValue(
      1,
      "Le nombre d'heures travaillées par semaine doit être supérieur à 0"
    )
  ),
  "Employés présents": v.number(),
  Hébergement: v.pipe(
    v.union(
      ACCOMODATIONS.map((accomodation) => v.literal(accomodation)),
      "Veuillez sélectionner un type d'hébergement valide"
    ),
    v.nonEmpty("Veuillez sélectionner un type d'hébergement")
  ),
  "Autres informations": v.optional(v.string()),
});

export type MissionForm = v.InferOutput<typeof missionSchema>;

export const formSchema = v.object({
  ...infoSchema.entries,
  ...establishmentSchema.entries,
  ...missionSchema.entries,
});

export type Form = v.InferOutput<typeof formSchema>;
