import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    genders: z.string(),
    fullName: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const productFormSchema = z.object({
  title: z
    .string()
    .refine((value) => value.length > 0, {
      message: "Title must not be empty",
    })
    .refine((value) => typeof value === "string", {
      message: "Title must be a string",
    })
    .refine((value) => /^[A-Z].*$/.test(value), {
      message: "Title must start with an uppercase letter",
    }),
  desc: z.string().optional().nullable(),
  link: z.string().url(),
  type: z.string(),
  urlImage: z.string(),
  typeAnime: z.string(),
  path: z.string().optional(),
});

export const profileSchema = z.object({
  id: z.number().int().positive().optional(),
  email: z.string().email(),
  genders: z.string(),
  fullName: z.string(),
  createAt: z.string().optional(),
});

export const permission = z.object({
  permissonName: z.string(),
  description: z.string(),
});

export const role = z.object({
  roleName: z.string(),
});

export const idSchema = z.object({
  id: z.number().int().positive(),
});

export const detailTypeScheme = z
  .string()
  .refine((value) => ["ANIME", "TOY", "BOX"].includes(value));
export const detailTypeAnimeScheme = z
  .string()
  .refine((value) => ["TV", "MOVIE", "GAME", "OTHER", "NONE"].includes(value));
