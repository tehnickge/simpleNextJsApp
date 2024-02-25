import DalyButton from "@/components/buttons/DalyButton/DalyButton";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="micro-5-regular"> Hellow cuty Kriss {`<3`} </h1>
      <DalyButton variant="danger" size="lg">
        kek
      </DalyButton>
    </main>
  );
}
