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

// export const establishmentSchema = z.object({
//   "Nom de l'établissement": z
//     .string()
//     .nonempty("Le nom de l'établissement est obligatoire"),
//   "Code postal": z.string().nonempty("Le code postal est obligatoire"),
//   Ville: z.string().nonempty("La ville est obligatoire"),
//   Adresse: z.string().nonempty("L'adresse est obligatoire"),
//   "Caractéristiques de l'établissement": z.array(z.enum(FEATURES)),
//   "Numéro de SIRET": z
//     .string()
//     .min(14, "Le numéro de SIRET doit contenir 14 chiffres")
//     .max(14, "Le numéro de SIRET doit contenir 14 chiffres")
//     .optional(),
//   "Nombre de clients par jour": z
//     .number()
//     .nonnegative("Le nombre de clients moyen par jour doit être supérieur à 0"),
// });

export const establishmentSchema = v.object({
  "Nom de l'établissement": v.pipe(
    v.string(),
    v.nonEmpty("Le nom de l'établissement est requis")
  ),
  "Code postal": v.pipe(v.string(), v.nonEmpty("Le code postal est requis")),
  Ville: v.pipe(v.string(), v.nonEmpty("La ville est requise")),
  Adresse: v.pipe(v.string(), v.nonEmpty("L'adresse est requise")),
  "Caractéristiques de l'établissement": v.union(
    FEATURES.map((feature) => v.literal(feature))
  ),
});

export type EstablishmentSchema = v.InferOutput<typeof establishmentSchema>;

// export const missionSchema = z.object({
//   "Période de remplacement": z
//     .object({
//       start: z.object({ year: z.number(), month: z.number(), day: z.number() }),
//       end: z.object({ year: z.number(), month: z.number(), day: z.number() }),
//     })
//     .required(),
//   "Jours travaillés": z
//     .array(z.enum(DAYS))
//     .min(1, "Au moins un jour est requis"),
//   "Nombre d'heures par semaine": z
//     .number()
//     .positive("Le nombre d'heures par semaine doit être supérieur à 0"),
//   "Autres employés présents": z.number(),
//   "Hébergement sur place": z.enum(ACCOMODATIONS, {
//     required_error: "Veuillez sélectionner un type d'hébergement",
//   }),
//   "Autres informations": z.string().optional(),
// });

// export type MissionSchema = z.infer<typeof missionSchema>;
