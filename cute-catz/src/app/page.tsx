import DalyButton from "@/components/buttons/DalyButton/DalyButton";
import styles from "./page.module.scss";
import Menu from "@/components/Menu/Menu";

const aboba : { 
  title: string | undefined,
  link: string | undefined }[] =
[
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Home",
      link: "/"
    }
]


export default function Home() {
  return (
    <main className={`${styles.main} ${styles['content-container']}`}>
      <h1 className="micro-5-regular"> Hellow cuty Kriss {`<3`} </h1>
      <div>
        <Menu links={aboba}></Menu>
      </div>
      <DalyButton variant="primary" size="sm">
        kekv
      </DalyButton>
      <DalyButton variant="primary-outline" size="lg">
        i love you
      </DalyButton>
    </main>
  );
}
