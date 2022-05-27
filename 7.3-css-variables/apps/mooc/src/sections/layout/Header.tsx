import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Button } from "@codely/design-system/src/atoms/Button";
import { Icon } from "@codely/design-system/src/atoms/Icon";
import { IconButton } from "@codely/design-system/src/atoms/IconButton";
import { NavLink } from "@codely/design-system/src/atoms/NavLink";
import Brand from "@codely/design-system/src/icons/brand.svg";
import { Container } from "@codely/design-system/src/objects/Container";
import { UIList } from "@codely/design-system/src/objects/UIList";
import { classNames } from "../shared/classNames";

import { socialLinks } from "./social";

import styles from "./Header.module.scss";

export function Header() {
  const [isMenuOpen, toggleMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleNavigation = () => {
      toggleMenu(false);
    };

    router.events.on("routeChangeComplete", handleNavigation);
    router.events.on("hashChangeComplete", handleNavigation);

    return () => {
      router.events.off("routeChangeComplete", handleNavigation);
      router.events.off("hashChangeComplete", handleNavigation);
    };
  }, [router]);

  return (
    <header className={classNames(styles["header"], { [styles["header--open"]]: isMenuOpen })}>
      <Container>
        <section className={styles["header__menu"]}>
          <NextLink href="/">
            <a className={styles["header__brand"]} aria-label="Codely">
              <Brand width="120" height="30" />
            </a>
          </NextLink>

          <nav className={styles["header__desktop"]}>
            <NavLink href="https://pro.codely.tv/library/">Cursos</NavLink>
            <NavLink href="/empresas">Empresas</NavLink>
            <NextLink href="https://pro.codely.tv/auth/sign-in/">
              <a rel="nofollow" className={styles["header__login"]}>
                Inicia sesión
              </a>
            </NextLink>
            <Button rel="nofollow" mode="secondary" size="small" href="#pricing">
              Suscríbete
            </Button>
          </nav>

          <div className={styles["header__mobile"]}>
            <a
              rel="nofollow"
              href="https://pro.codely.tv/auth/sign-in/"
              className={styles["header__icon-btn"]}
              aria-label="Iniciar sesión"
            >
              <Icon icon="user" />
            </a>
            <button
              className={styles["header__icon-btn"]}
              onClick={() => toggleMenu(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <Icon icon={isMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </section>

        <section className={styles["header__collapsible"]}>
          <nav className={styles["header__nav"]}>
            <UIList mode="vertical">
              <NextLink href="/empresas">
                <a>Empresas</a>
              </NextLink>
              <NextLink href="https://pro.codely.tv/library/">
                <a>Cursos</a>
              </NextLink>
            </UIList>
          </nav>

          <section className={styles["header__social"]}>
            {socialLinks.map((link) => (
              <IconButton
                rel="nofollow"
                icon={link.icon}
                href={link.href}
                label={link.name}
                key={link.name}
                mode="light"
                size="small"
              />
            ))}
          </section>

          <Button rel="nofollow" mode="primary" size="large" href="#pricing">
            Suscríbete
          </Button>
        </section>
      </Container>
    </header>
  );
}
