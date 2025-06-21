"use server";

import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LoginButton from "./client/LoginButton";
import UserAvatar from "./client/UserAvatar";
import Container from "./Container";

export async function NavBar() {
  const session = await auth();

  return (
    <Container>
      <div className="w-full flex items-center justify-between lg:p-2 p-1">
        <Image src={"/ks-logo.jpg"} alt="Logo" width={50} height={50} />

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/startup/create">Create</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              {session?.user ? (
                <UserAvatar
                  image={session.user.image || ""}
                  name={session.user.name || "User"}
                />
              ) : (
                <LoginButton />
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>{" "}
    </Container>
  );
}
