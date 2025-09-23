import type { IconProps } from "../../props/IconProps";

export default function Icon({ icon: IconComponent, tamanho = 16, className = '' }: IconProps) {
  return <IconComponent size={tamanho} className={className} />;
}
