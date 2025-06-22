"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";
import { Pinwheel } from "ldrs/react";
import "ldrs/react/Pinwheel.css";

type FormInputs = {
  email: string;
  companyName: string;
  website: string;
};

const CreateStartupForm = () => {
  const [pitch, setPitch] = React.useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log({ ...data, pitch });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[600px] mx-auto">
        {/* Email Field */}
        <div className="grid w-full gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="grid w-full gap-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            placeholder="Awesome Startup Inc."
            {...register("companyName", {
              required: "Company name is required",
            })}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}
        </div>

        {/* Website */}
        <div className="grid w-full gap-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            placeholder="https://startup.com"
            {...register("website", { required: "Website is required" })}
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}
        </div>

        {/* Pitch (Markdown Editor) */}
        <div className="grid w-full gap-2">
          <Label htmlFor="pitch">Pitch</Label>
          <MDEditor
            data-color-mode="light"
            value={pitch}
            onChange={setPitch}
            preview="edit"
            style={{ overflow: "hidden" }}
            height={300}
            textareaProps={{
              placeholder:
                "Describe your startup idea and what problems it solves.",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
        </div>

        <Button type="submit">
          {isSubmitting ? (
            <Pinwheel size="20" stroke="3.5" speed="0.9" color="white" />
          ) : (
            "Submit Startup"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CreateStartupForm;
