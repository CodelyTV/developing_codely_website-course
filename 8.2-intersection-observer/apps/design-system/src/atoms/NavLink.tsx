import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { classNames } from "../shared/classNames";

import styles from "./NavLink.module.scss";

export interface NavLinkProps {
  href: string;
  children: string;
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <NextLink href={href}>
      <a className={classNames(styles.navlink, { [styles[`navlink--active`]]: isActive })} {...props}>
        {children}
      </a>
    </NextLink>
  );
};
