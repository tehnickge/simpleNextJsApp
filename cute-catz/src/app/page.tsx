import DalyButton from "@/components/buttons/DalyButton/DalyButton";
import styles from "./page.module.scss";
import Menu from "@/components/Menu/Menu";
import { JazzBallThin, JazzBallBold, BIPs } from "@/components/common/fonts";
import Card, { CardProps } from "@/components/Card/Card";
import CardContainer, { CardArrayProps } from "@/components/Card/CardContainer";

const cards : CardArrayProps = {
  cards : [
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["http://img-fotki.yandex.ru/get/9091/122054311.9/0_1b4a4d_aecc1685_orig.jpg","https://rasekhoon.net/_files/images/photogallery/Cats%20Wallpaper%202%20(43).jpg","https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666198680_28-mykaleidoscope-ru-p-zabavnii-kot-oboi-30.jpg"],
      title : "Svechka",
      id : "1",
    },
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["http://img-fotki.yandex.ru/get/9091/122054311.9/0_1b4a4d_aecc1685_orig.jpg","https://rasekhoon.net/_files/images/photogallery/Cats%20Wallpaper%202%20(43).jpg","https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666198680_28-mykaleidoscope-ru-p-zabavnii-kot-oboi-30.jpg"],
      title : "Svechka",
      id : "2",
    },
    {
      info : "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
      pics : ["http://img-fotki.yandex.ru/get/9091/122054311.9/0_1b4a4d_aecc1685_orig.jpg","https://rasekhoon.net/_files/images/photogallery/Cats%20Wallpaper%202%20(43).jpg","https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666198680_28-mykaleidoscope-ru-p-zabavnii-kot-oboi-30.jpg"],
      title : "Svechka",
      id : "3",
    }
  ]
}

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
      <CardContainer cards={cards}></CardContainer>
    </main>
  );
}
