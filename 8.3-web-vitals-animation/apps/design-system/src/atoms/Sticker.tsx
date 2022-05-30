import Image from "next/image";

import android from "../assets/stickers/android.png";
import batduck from "../assets/stickers/batduck.png";
import burger from "../assets/stickers/burger.png";
import pineapple from "../assets/stickers/pineapple.png";
import stormtrooper from "../assets/stickers/stormtrooper.png";
import ufo from "../assets/stickers/ufo.png";

const stickers = {
  android,
  batduck,
  burger,
  pineapple,
  stormtrooper,
  ufo,
};

export type Stickers = keyof typeof stickers;

export interface StickerProps {
  sticker: Stickers | "random";
  width: number;
  height: number;
}

const getRandomSticker = () => {
  const keys = Object.keys(stickers) as Stickers[];

  return stickers[keys[(keys.length * Math.random()) << 0]];
};

export const Sticker = ({ sticker, width, height }: StickerProps) => {
  const stickerSrc = sticker === "random" ? getRandomSticker() : stickers[sticker];

  return <Image src={stickerSrc} alt="" width={width} height={height} />;
};
