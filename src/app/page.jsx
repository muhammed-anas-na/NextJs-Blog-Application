import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Categorylist from "@/components/categoryList/Categorylist";
import Cardlist from "@/components/cardList/Cardlist";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <Categorylist />
      <div className={styles.content}>
        <Cardlist />
        <Menu />
      </div>
    </div>
  );
}
