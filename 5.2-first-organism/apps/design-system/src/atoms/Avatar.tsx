import Image from "next/image";
import React from "react";

import styles from "./Avatar.module.scss";

export interface AvatarProps {
  src: string;
  alt?: string;
  size?: "small" | "medium" | "large";
}

const sizes = {
  small: 40,
  medium: 48,
  large: 64,
};

export const Avatar = ({ src, alt = "", size = "medium" }: AvatarProps) => {
  const pxSize = sizes[size];

  return (
    <span className={styles["avatar"]} style={{ width: `${pxSize}px`, height: `${pxSize}px` }}>
      <Image src={src} alt={alt} width={pxSize} height={pxSize} objectFit="cover" />
    </span>
  );
};
