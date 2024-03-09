import DalyButton from "@/components/buttons/DalyButton/DalyButton";
import styles from "./page.module.scss";
import Menu from "@/components/Menu/Menu";
import { JazzBallThin, JazzBallBold, BIPs } from "@/components/common/fonts";

export default function Home() {
  return (
    <main className={`${styles.main} ${styles['content-container']}`}>
      <h1 className={`${BIPs.className} ${styles.test}`}> МЫ ЛЮБИм КоТиКов Оооочень {`<3`} </h1>
      <DalyButton variant="primary" size="sm">
        kekv
      </DalyButton>
      <DalyButton variant="primary-outline" size="lg">
        i love you krot 
      </DalyButton>
    </main>
  );
}
