"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-300 bg-white text-black py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">🚀 StartUpHub</h2>
          <p className="text-sm text-muted-foreground">
            Discover and support emerging startups from all over the world.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/startups" className="hover:underline">Startups</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-muted-foreground">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-blue-600" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-sky-500" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-pink-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="hover:text-blue-700" />
            </Link>
          </div>
        </div>
      </div>

      <Separator className="my-6" />
      <p className="text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} StartUpHub. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
