import { icons } from 'assets/icons';

export type IconName = keyof typeof icons;

interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  icon: IconName;
  size?: number;
}

export const Icon = (props: IconProps) => {
  const { icon, size = 24, className, style, ...rest } = props;

  const IconComponent = icons[icon];

  return (
    <IconComponent
      aria-label={icon}
      className={className}
      style={{ width: size, height: size, ...style }}
      {...rest}
    />
  );
};
