import styles from './til-button.module.scss';

/* eslint-disable-next-line */
export interface TilButtonProps {
  content: string;
}

export function TilButton({ content }: TilButtonProps) {
  return <button className={styles.tilButton}>{content}</button>;
}

export default TilButton;
