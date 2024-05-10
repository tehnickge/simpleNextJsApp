import DalyButton from "@/components/buttons/DalyButton/DalyButton";
import styles from "./page.module.scss";
import { JazzBallThin, JazzBallBold, BIPs } from "@/components/common/fonts";
import { CardProps } from "@/components/Card/Card";
import CardContainer from "@/components/Card/CardContainer";

const itemData: CardProps[] = [
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://yastatic.net/naydex/yandex-search/y8hYCH781/4eec8ajbyW/_zftdZ28RkNLpO85TLrkLvU-BWCEfRexqkjKZJ6l4qZYybStY3aFUc4P4DN5730WGDY9vHI7VbsKM1QKXMegkuhmrjne_VwYH-D3cQC97SrqdRgohDoL46Ff0T3E4b34Vp3lxwlUpXehI4ZOXZcECU1uarg9IhP5Z1k",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "1",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "2",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "3",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "4",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://yastatic.net/naydex/yandex-search/y8hYCH781/4eec8ajbyW/_zftdZ28RkNLpO85TLrkLvU-BWCEfRexqkjKZJ6l4qZYybStY3aFUc4P4DN5730WGDY9vHI7VbsKM1QKXMegkuhmrjne_VwYH-D3cQC97SrqdRgohDoL46Ff0T3E4b34Vp3lxwlUpXehI4ZOXZcECU1uarg9IhP5Z1k",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "5",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "6",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "7",
  },
  {
    info: "Aboba asdad sd fegji gjerigjei jgierjgidgjd\nsdadaskdmas\nsfherterughrgf\nsadsad",
    pics: [
      "https://sun9-51.userapi.com/impg/rIdrFUjDGiBC241Ao9xP0q_rRE5o3HZBj7Ncbg/GVsdcfnnu-g.jpg?size=749x499&quality=96&sign=23ead45bd9341626e9000afcd8e4f008&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
      "https://sun9-20.userapi.com/impg/xFehn6lx4InehQkXzlmWxvhsXFv2qFcdB7bF4w/3OVYULGg3qk.jpg?size=1280x1600&quality=96&sign=739d8d9e2566d743e6cf202a350f596e&type=album",
    ],
    title: "Svechka",
    id: "8",
  },
];

export default function Home() {
  return (
    <main className={`${styles.main} ${styles["content-container"]}`}>
      <h1 className={`${BIPs.className} ${styles.test}`}>
        {" "}
        МЫ ЛЮБИм КоТиКов Оооочень {`<3`}{" "}
      </h1>
      <DalyButton variant="primary" size="sm" font="">
        kekv
      </DalyButton>
      <DalyButton variant="primary-outline" size="lg" font="jazzb">
        i love you krot
      </DalyButton>
      <div style={{ fontSize: "64px" }}>ABOBA</div>
      <div style={{ fontSize: "64px" }}>ABOBA</div>
      <CardContainer cards={itemData}></CardContainer>
      <h1>DSFDFKJGHFDJKGfdsfaflkdsjgffdhgkdjgk fdhgjklh|;g fdg h gsdfguds ghdg dughkljhdsghs</h1>
      <h2>DSFDFKJGHFDJKGfdsfaflkdsjgffdhgkdjgk fdhgjklh|;g fdg h gsdfguds ghdg dughkljhdsghs</h2>
      <h3>DSFDFKJGHFDJKGfdsfaflkdsjgffdhgkdjgk fdhgjklh|;g fdg h gsdfguds ghdg dughkljhdsghs</h3>
      <h4>DSFDFKJGHFDJKGfdsfaflkdsjgffdhgkdjgk fdhgjklh|;g fdg h gsdfguds ghdg dughkljhdsghs</h4>
      <h5>DSFDFKJGHFDJKGfdsfaflkdsjgffdhgkdjgk fdhgjklh|;g fdg h gsdfguds ghdg dughkljhdsghs</h5>
      <h6>DSFDFKJGHFDJKGfdsfaflkdsjgffdhgkdjgk fdhgjklh|;g fdg h gsdfguds ghdg dughkljhdsghs</h6>
    </main>
  );
}
