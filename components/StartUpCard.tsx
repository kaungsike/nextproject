"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LuEye } from "react-icons/lu";
import Avatar from "react-avatar";
import Link from "next/link";

const StartUpCard = ({ post }: { post: any }) => {
  return (
    <Card className="w-full max-w-sm gap-2.5 hover:bg-rose-200 border-2 hover:border-2 hover:border-[var(--only-me)] transition-colors duration-200 border-black">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Avatar
            src={post.author.image}
            name={post.author.name}
            size="40"
            round
          />{" "}
          <p className="text-black">{post.author.name}</p>
        </div>

        <div className="rounded-md max-h-[200px] overflow-hidden mt-2">
          <img src={post.image} alt={post.title} className="w-full" />
        </div>
      </CardHeader>

      <CardContent>
        <CardTitle className="text-black text-2xl font-bold">
          {post.title}
        </CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardContent>

      <CardFooter className="flex justify-between">
        <p>{new Date(post.createdAt).toISOString().split("T")[0]}</p>

        <div className="flex gap-3">
          <p className="text-nowrap flex items-center gap-1">
            <LuEye className="text-[var(--only-me)]" /> {post.views}
          </p>
          <Link href={`/startup/${post.id}`}>
          <Button className="bg-[var(--only-me)]">Details</Button>
          </Link>
        </div>
      </CardFooter>

    </Card>
  );
};

export default StartUpCard;
