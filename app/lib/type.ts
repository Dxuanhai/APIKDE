import { z } from "zod";
import {
  detailTypeScheme,
  idSchema,
  productFormSchema,
  profileSchema,
  signInSchema,
  signUpSchema,
} from "./validation";

export type IsignInSchema = z.infer<typeof signInSchema>;
export type IsignUnSchema = z.infer<typeof signUpSchema>;
export type Tprofile = z.infer<typeof profileSchema>;
export type TprofileFormSchema = z.infer<typeof productFormSchema>;
export type TdetailParam = z.infer<typeof detailTypeScheme>;
export type Tid = z.infer<typeof idSchema>;

export interface Iuser {
  email: string;
  password: string;
  genders: string;
  fullName: string;
}
// export interface SlideData {
//   id: number;
//   urlImage: string;
//   title: string;
//   desc: string | null;
//   link: string;
//   type: string;
//   createdAt?: Date;
// }

export interface TrailerType {
  id: number;
  name: string;
  idVideo: string;
  urlImage: string;
  title: string;
}
