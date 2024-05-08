
import styles from "./Header.module.scss";

export type HeaderLink = {
  href: string;
  title: string;
};

export type LinksProps = {
  Links: HeaderLink[] | undefined;
};

export default function HeaderLinks({ Links }: LinksProps): JSX.Element {
  return (
    <>
      {Links &&
        Links.map((link: HeaderLink) => <div className={styles["header__links"]} key={link.href}>link.href</div>)}
    </>
  );
}
