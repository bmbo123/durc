import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export const userSchema: ZodType<AuthFormData> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
  username: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" })
    .optional(),
});

export type AuthFormData = {
  email: string;
  password: string;
  username?: string;
};

export type AuthInputProps = {
  type: string;
  placeholder: string;
  name: AuthFormNames;
  register: UseFormRegister<AuthFormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type AuthFormNames = "email" | "password" | "username";
