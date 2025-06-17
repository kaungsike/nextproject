"use client";

import Avatar from "react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function UserAvatar({ name,image }: { name: string , image: string }) {
  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border-none focus:outline-none"><Avatar src={image} name={name} size="40" round /></button>
         
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
          <Button onClick={() => signOut({ callbackUrl: "/" })} className="w-full flex justify-start hover:text-red-500 bg-white hover:bg-white text-black">
            Log out
          </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

