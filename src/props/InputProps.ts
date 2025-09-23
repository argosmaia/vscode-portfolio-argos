import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | string;
  className?: string;
  icon?: ComponentType<LucideProps>; // agora opcional
}