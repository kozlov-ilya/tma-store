import styles from './Title.module.css';

import classNames from 'classnames';

interface TitleProps {
  text: string;
  role?: 'primary' | 'secondary';
  size?: 's' | 'm' | 'l';
}

export const Title = (props: TitleProps) => {
  const { text, role = 'primary', size = 'm' } = props;

  const classname = classNames(
    styles['Title'],
    styles[`Title_role_${role}`],
    styles[`Title_size_${size}`],
  );

  return <div className={classname}>{text}</div>;
};
