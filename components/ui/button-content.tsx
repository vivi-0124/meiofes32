import * as React from "react";

export interface ButtonContentProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function ButtonContent({
  children,
  icon,
  className,
}: ButtonContentProps) {
  return (
    <span className={`flex items-center ${className || ''}`}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </span>
  );
} 