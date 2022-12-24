import styles from './til-button.module.scss';

/* eslint-disable-next-line */
export interface TilButtonProps {
  content: string;
  handleButtonClick: () => Promise<void>;
}

export function TilButton({ content, handleButtonClick }: TilButtonProps) {
  return (
    <button onClick={handleButtonClick} className={styles.tilButton}>
      {content}
    </button>
  );
}

export default TilButton;
