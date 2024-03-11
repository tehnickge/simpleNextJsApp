import DalyButton from "@/components/buttons/DalyButton/DalyButton";
import styles from "./page.module.scss";
import Menu from "@/components/Menu/Menu";
import { JazzBallThin, JazzBallBold, BIPs } from "@/components/common/fonts";
import Card, { CardProps } from "@/components/Card/Card";
import CardContainer, { CardArrayProps } from "@/components/Card/CardContainer";

const itemData : CardProps[] = [
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album"],
      title : "Svechka",
      id : "1",
    },
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album"],
      title : "Svechka",
      id : "1",
    },
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album"],
      title : "Svechka",
      id : "2",
    },
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album"],
      title : "Svechka",
      id : "3",
    },
  ]

export default function Home() {

  return (
    <main className={`${styles.main} ${styles['content-container']}`}>
      <h1 className={`${BIPs.className} ${styles.test}`}> МЫ ЛЮБИм КоТиКов Оооочень {`<3`} </h1>
      <DalyButton variant="primary" size="sm" font="">
        kekv
      </DalyButton>
      <DalyButton variant="primary-outline" size="lg" font="jazzb">
        i love you krot 
      </DalyButton>
      <div style={{fontSize: "64px"}}>ABOBA</div>
      <div style={{fontSize: "64px"}}>ABOBA</div>
      <div style={{fontSize: "64px"}}>ABOBA</div>
      <div style={{fontSize: "64px"}}>ABOBA</div>
      <div style={{fontSize: "64px"}}>ABOBA</div>
      <div style={{fontSize: "64px"}}>ABOBA</div>
      <div style={{fontSize: "64px"}}>ABOBA</div>

      <CardContainer cards={itemData}></CardContainer>
    </main>
  );
}
