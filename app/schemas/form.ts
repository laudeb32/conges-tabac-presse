import * as z from "zod";

export const infosSchema = z.object({
  Prénom: z.string().nonempty("Votre prénom est obligatoire"),
  Nom: z.string().nonempty("Votre nom est obligatoire"),
  Téléphone: z.string().optional(),
  Email: z
    .string()
    .email("L'email est invalide")
    .nonempty("Votre email est obligatoire"),
});

export type InfosSchema = z.infer<typeof infosSchema>;

export const establishmentSchema = z.object({
  "Nom de l'établissement": z
    .string()
    .nonempty("Le nom de l'établissement est obligatoire"),
  "Code postal": z.string().nonempty("Le code postal est obligatoire"),
  Ville: z.string().nonempty("La ville est obligatoire"),
  Adresse: z.string().nonempty("L'adresse est obligatoire"),
  "Caractéristiques de l'établissement": z.array(z.enum(FEATURES)),
  "Numéro de SIRET": z
    .string()
    .min(14, "Le numéro de SIRET doit contenir 14 chiffres")
    .max(14, "Le numéro de SIRET doit contenir 14 chiffres")
    .optional(),
  "Nombre de clients par jour": z
    .number()
    .nonnegative("Le nombre de clients moyen par jour doit être supérieur à 0"),
});

export type EstablishmentSchema = z.infer<typeof establishmentSchema>;

export const missionSchema = z.object({
  "Période de remplacement": z
    .object({
      start: z.object({ year: z.number(), month: z.number(), day: z.number() }),
      end: z.object({ year: z.number(), month: z.number(), day: z.number() }),
    })
    .required(),
  "Jours travaillés": z
    .array(z.enum(DAYS))
    .min(1, "Au moins un jour est requis"),
  "Nombre d'heures par semaine": z
    .number()
    .positive("Le nombre d'heures par semaine doit être supérieur à 0"),
  "Autres employés présents": z.number(),
  "Hébergement sur place": z.enum(ACCOMODATIONS, {
    required_error: "Veuillez sélectionner un type d'hébergement",
  }),
  "Autres informations": z.string().optional(),
});

export type MissionSchema = z.infer<typeof missionSchema>;
