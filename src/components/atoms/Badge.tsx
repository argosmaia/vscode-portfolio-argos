import type { BadgeProps } from "../../props/BadgeProps";

const cores = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  purple: "bg-purple-600",
  cyan: "bg-cyan-600",
  orange: "bg-orange-600",
  red: "bg-red-600",
  gray: "bg-gray-700",
};

export function Badge({ children, cor = "blue" }: BadgeProps) {
  return (
    <span className={`${cores[cor]} text-xs px-2 py-1 rounded`}>
      {children}
    </span>
  );
}