import React from "react";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

export function Button({ label, variant = "primary" }: ButtonProps) {
  return <button>{label}</button>;
}
