"use client";

import { LiveQueryProvider } from "@sanity/preview-kit";
import { client } from "@/sanity/lib/client";
import React from "react";

export const LiveProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
};
