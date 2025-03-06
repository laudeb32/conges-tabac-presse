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
  "Jours d'ouverture": z.array(z.enum(DAYS)),
  "Horaire d'ouverture": z
    .string()
    .nonempty("L'horaire d'ouverture est obligatoire"),
  "Horaire de fermeture": z
    .string()
    .nonempty("L'horaire de fermeture est obligatoire"),
  "Caractéristiques de l'établissement": z.array(z.enum(FEATURES)),
  "Code postal": z.string().nonempty("Le code postal est obligatoire"),
  Ville: z.string().nonempty("La ville est obligatoire"),
  Adresse: z.string().nonempty("L'adresse est obligatoire"),
  "Numéro de SIRET": z.string().nonempty("Le numéro de SIRET est obligatoire"),
  "Nombre de clients par jour": z
    .number()
    .nonnegative("Le nombre de clients moyen par jour doit être supérieur à 0"),
});

export type EstablishmentSchema = z.infer<typeof establishmentSchema>;

export const missionSchema = z.object({
  "Période de réservation": z.object({
    start: z.object({ year: z.number(), month: z.number(), day: z.number() }),
    end: z.object({ year: z.number(), month: z.number(), day: z.number() }),
  }),
  "Horaire de début": z.string().nonempty("L'horaire de début est obligatoire"),
  "Horaire de fin": z.string().nonempty("L'horaire de fin est obligatoire"),
  "Autres employés présents": z.number(),
  "Hébergement sur place": z.boolean(),
  "Autres informations": z.string().optional(),
});

export type MissionSchema = z.infer<typeof missionSchema>;
