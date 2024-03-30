import { z } from "zod";
import {
  detailTypeScheme,
  idSchema,
  permission,
  productFormSchema,
  profileSchema,
  role,
  signInSchema,
  signUpSchema,
} from "./validation";

export type IsignInSchema = z.infer<typeof signInSchema>;
export type IsignUnSchema = z.infer<typeof signUpSchema>;
export type Tprofile = z.infer<typeof profileSchema>;
export type Tpermisson = z.infer<typeof permission>;
export type Trole = z.infer<typeof role>;
export type TprofileFormSchema = z.infer<typeof productFormSchema>;
export type TdetailParam = z.infer<typeof detailTypeScheme>;
export type Tid = z.infer<typeof idSchema>;

export interface Iuser {
  email: string;
  password: string;
  genders: string;
  fullName: string;
  roleId?: number;
}
export interface Ilogin {
  email: string;
  password: string;
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
