import { forwardRef } from 'react';

type BaseImgProps = React.ComponentPropsWithRef<'img'>;

type Ref = HTMLImageElement;

export const Icon = forwardRef<Ref, BaseImgProps>((props, ref) => {
  return <img {...props} ref={ref}></img>;
});
