"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userSchema, AuthInputProps, AuthFormData } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

export const FormField: React.FC<AuthInputProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      className="border-l-2 border-gray-300  w-64 p-2 bg-stone-950 text-white focus:outline-none"
      {...register(name, { valueAsNumber })}
    />
    {error && <span className="text-red-500">{error.message}</span>}
  </>
);

export default function Form({ formType }: { formType: "signup" | "signin" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(userSchema),
  });

  const [hover, setHover] = useState(false);

  const onSubmit = async (data: AuthFormData) => {
    if (formType == "signin") {
      const res: any = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      return;
    }

    const url = "/api/auth/signup";
    const res = await fetch(url, {
      headers: { contentType: "application/json" },
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        username: data?.username,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 justify-end">
        {formType == "signup" && (
          <FormField
            type="username"
            placeholder="username"
            name="username"
            register={register}
            error={errors.username}
          />
        )}
        <FormField
          type="string"
          placeholder="email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          type="password"
          placeholder="password"
          name="password"
          register={register}
          error={errors.password}
        />
        <button
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          type="submit"
          className="ml-auto"
        >
          <ArrowRight strokeWidth={hover ? 2 : 1} />
        </button>
      </div>
    </form>
  );
}
