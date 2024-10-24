import styles from './Page.module.css';
import classNames from 'classnames';

type PageProps = React.HTMLAttributes<HTMLDivElement>;

export const Page = (props: PageProps) => {
  const { children, className } = props;

  const cm = classNames(className, styles['Page']);

  return <div className={cm}>{children}</div>;
};
