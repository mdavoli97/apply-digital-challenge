import { cn } from "@/utils/utils";
import React from "react";

export default function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn("animate-bounce size-6 self-center", className)}
      fill="black"
      viewBox="0 0 250 250"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M122.963 0 0 215.659h245.851L122.963 0ZM75.4 150.984h57.537l-28.731-50.429 18.757-32.94 66.319 116.309H56.643l18.757-32.94Z" />
    </svg>
  );
}
