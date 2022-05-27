import Image from "next/image";

import { Link } from "@codely/design-system/src/atoms/Link";
import { Container } from "@codely/design-system/src/objects/Container";

import styles from "./TrustedCompanies.module.scss";

const logos = [
  {
    src: "/img/logos/pccomponentes.svg",
    alt: "logo de PC componentes",
    width: 150,
    height: 52,
  },
  {
    src: "/img/logos/atrapalo.svg",
    alt: "logo de Atrápalo",
    width: 150,
    height: 36,
  },
  {
    src: "/img/logos/audiense.svg",
    alt: "logo de Audiense",
    width: 150,
    height: 35,
  },
  {
    src: "/img/logos/exoticca.svg",
    alt: "logo de Exoticca",
    width: 150,
    height: 31,
  },
  {
    src: "/img/logos/flywire.svg",
    alt: "logo de Flywire",
    width: 150,
    height: 50,
  },
  {
    src: "/img/logos/freepik.svg",
    alt: "logo de Freepik",
    width: 150,
    height: 37,
  },
  {
    src: "/img/logos/promofarma.svg",
    alt: "logo de Promofarma",
    width: 150,
    height: 29,
  },
  {
    src: "/img/logos/signaturit.svg",
    alt: "logo de Signaturit",
    width: 150,
    height: 50,
  },
  {
    src: "/img/logos/socialpoint.svg",
    alt: "logo de Socialpoint",
    width: 150,
    height: 30,
  },
  {
    src: "/img/logos/softonic.svg",
    alt: "logo de Softonic",
    width: 150,
    height: 27,
  },
  {
    src: "/img/logos/wallapop.svg",
    alt: "logo de Wallapop",
    width: 150,
    height: 37,
  },
  {
    src: "/img/logos/freshlycosmetics.svg",
    alt: "logo de Freshly Cosmetics",
    width: 150,
    height: 42,
  },
];

export function TrustedCompanies() {
  return (
    <section id="trusted" className={styles.companies}>
      <Container>
        <p className={styles.companies__title}>
          🔥 Empresas como PcComponentes cambiaron su visión técnica gracias a Codely
        </p>
        <div className={styles.companies__grid}>
          {logos.map((logo) => {
            return (
              <div key={logo.src} className={styles.companies__cell}>
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              </div>
            );
          })}
        </div>
        <p className={styles.companies__link}>
          👩 ¿No formas parte de un equipo?{" "}
          <Link mode="inverted" href="/">
            Visita la sección de Individuales
          </Link>
        </p>
      </Container>
    </section>
  );
}
