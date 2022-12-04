import styles from './sidebar.module.scss';
import {Button} from "@mantine/core";

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <nav className={styles['container']}>
      <Button>create</Button>
      <h1>Sidebar</h1>
    </nav>
  );
}

export default Sidebar;
