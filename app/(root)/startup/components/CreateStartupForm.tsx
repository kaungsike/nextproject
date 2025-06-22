"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MDEditor from "@uiw/react-md-editor";
import { Pinwheel } from "ldrs/react";
import "ldrs/react/Pinwheel.css";
import { Textarea } from "@/components/ui/textarea";

type FormInputs = {
  title: string;
  description: string;
  category: string;
  image: string;
  pitch: string;
};

const CreateStartupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();

  const pitch = watch("pitch", "");

  useEffect(() => {
    register("pitch", {
      required: "Pitch is required",
      minLength: {
        value: 10,
        message: "Pitch must be at least 10 characters long",
      },
    });
  }, [register]);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log({ ...data, pitch });
    reset({
      title: "",
      description: "",
      category: "",
      image: "",
      pitch: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[600px] mx-auto">
        {/* Email Field */}
        <div className="grid w-full gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Startup Idea Title"
            {...register("title", {
              required: "Title is required",
              maxLength: {
                value: 100,
                message: "Title must be at most 100 characters long",
              },
              minLength: {
                value: 5,
                message: "Title must be at least 5 characters long",
              },
            })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="grid w-full gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Briefly describe your startup idea."
            {...register("description", {
              required: "description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters long",
              },
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        {/* Category */}
        <div className="grid w-full gap-2">
          <Label htmlFor="title">Category</Label>
          <Input
            id="category"
            type="text"
            placeholder="Startup Idea Title"
            {...register("category", {
              required: "category is required",
              minLength: {
                value: 5,
                message: "category must be at least 5 characters long",
              },
            })}
          />
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>
        {/* Image URL */}
        <div className="grid w-full gap-2">
          <Label htmlFor="image">Image URL</Label>
          <Input
            id="image"
            type="text"
            placeholder="Startup Image URL"
            {...register("image", {
              required: "Image URL is required",
              validate: (value) =>
                /^https?:\/\/[^ "]+$/i.test(value)
                  ? true
                  : "Only valid external image URLs starting with http/https are allowed",
            })}
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Pitch (Markdown Editor) */}
        <div className="grid w-full gap-2">
          <Label htmlFor="pitch">Pitch</Label>
          <MDEditor
            data-color-mode="light"
            value={pitch}
            onChange={(val) => {
              setValue("pitch", val || "");
              trigger("pitch");
            }}
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
          {errors.pitch && (
            <p className="text-red-500 text-sm">{errors.pitch.message}</p>
          )}
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
