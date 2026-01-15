import React from "react";

export type CardProps = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16 }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
