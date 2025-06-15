// components/StartUpCardSkeleton.tsx
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StartUpCardSkeleton = () => {
  return (
    <Card className="w-full max-w-sm gap-2.5 border-2 border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="w-24 h-4" />
          </div>
          <Skeleton className="w-16 h-4" />
        </div>

        <div className="rounded-md max-h-[200px] overflow-hidden mt-2">
          <Skeleton className="w-full h-[200px]" />
        </div>
      </CardHeader>

      <CardContent>
        <Skeleton className="w-3/4 h-6 mb-2" />
        <Skeleton className="w-full h-4" />
      </CardContent>

      <CardFooter className="flex justify-between">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-24 h-9" />
      </CardFooter>
    </Card>
  );
};

export default StartUpCardSkeleton;
