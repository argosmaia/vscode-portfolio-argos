import type { IconProps } from "../../props/IconProps";

export default function Icon({ icon: IconComponent, size = 16, className = '' }: IconProps) {
  return <IconComponent size={size} className={className} />;
}
