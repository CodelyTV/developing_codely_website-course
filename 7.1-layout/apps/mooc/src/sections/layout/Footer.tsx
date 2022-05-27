import NextLink from "next/link";

import { IconButton } from "@codely/design-system/src/atoms/IconButton";
import { Link } from "@codely/design-system/src/atoms/Link";
import Brand from "@codely/design-system/src/icons/brand.svg";
import { Container } from "@codely/design-system/src/objects/Container";
import { UIList } from "@codely/design-system/src/objects/UIList";

import { classNames } from "../shared/classNames";

import { socialLinks } from "./social";

import styles from "./Footer.module.scss";

const links = [
  {
    name: "Cursos",
    href: "/cursos",
  },
  {
    name: "Empresas",
    href: "/empresas",
  },
  {
    name: "Comunidades",
    href: "/comunidades",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contacta",
    href: "/contacta",
  },
];

const legalLinks = [
  {
    name: "Aviso legal",
    href: "/aviso-legal",
  },
  {
    name: "Condiciones generales",
    href: "/condiciones-generales",
  },
  {
    name: "Política de privacidad",
    href: "/politica-privacidad",
  },
  {
    name: "Política de cookies",
    href: "/politica-cookies",
  },
  {
    name: "Contacta",
    href: "/contacta",
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__section}>
          <NextLink href="/">
            <a aria-label="Codely">
              <Brand width="120" height="30" />
            </a>
          </NextLink>
        </div>

        <nav className={styles.footer__section}>
          <UIList>
            {links.map((link) => (
              <Link href={link.href} key={link.name} mode="secondary">
                {link.name}
              </Link>
            ))}
          </UIList>
        </nav>

        <section className={styles.footer__section}>
          <UIList>
            {socialLinks.map((link) => (
              <IconButton
                icon={link.icon}
                href={link.href}
                label={link.name}
                rel="nofollow"
                key={link.name}
                mode="dark"
                size="small"
              />
            ))}
          </UIList>
        </section>

        <section className={classNames(styles.footer__section, styles["footer__section--legal"])}>
          <UIList>
            {legalLinks.map((link) => (
              <a rel="nofollow" href={link.href} key={link.name}>
                {link.name}
              </a>
            ))}
          </UIList>
        </section>
      </Container>
    </footer>
  );
}
