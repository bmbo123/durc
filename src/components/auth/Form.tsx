"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userSchema, AuthInputProps, AuthFormData } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import HashLoader from "react-spinners/HashLoader";

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
    setError,
  } = useForm<AuthFormData>({
    resolver: zodResolver(userSchema),
  });

  const router = useRouter();

  const [hover, setHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (data: AuthFormData) => {
    const res: any = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    if (res.ok) {
      router.push("/");
    } else {
      setError("root", {
        type: "manual",
        message: "Unable to sign in, invalid credentials",
      });
    }
    setIsLoading(false);
  };

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    if (formType == "signin") {
      handleSignIn(data);
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
    if (res.ok) {
      handleSignIn(data);
    } else {
      setError("root", {
        type: "manual",
        message:
          "Unable to sign up, username or email already exists or something idk",
      });
    }
    setIsLoading(false);
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
        {errors.root && (
          <span className="text-red-500">{errors.root.message}</span>
        )}
        <button
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          type="submit"
          className="ml-auto"
        >
          {!isLoading ? (
            <ArrowRight strokeWidth={hover ? 2 : 1} />
          ) : (
            <HashLoader color="#d6d6d6" size={20} />
          )}
        </button>
      </div>
    </form>
  );
}
