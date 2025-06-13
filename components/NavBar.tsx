"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { auth } from "@/auth";

export async function NavBar() {
  const session = await auth();

  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div>
          <Image
            src={"/ks-logo.jpg"}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">
                  {session && session?.user ? (
                    <>
                      <p>Is exit</p>
                    </>
                  ) : (
                    <p>Is not</p>
                  )}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
