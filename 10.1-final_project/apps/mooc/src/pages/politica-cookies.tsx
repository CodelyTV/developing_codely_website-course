import { LegalText } from "../sections/legal/LegalText";

export default function PoliticaCookies(): JSX.Element {
  return (
    <LegalText title="Política de cookies">
      <h2 id="que-son-las-cookies">¿Qué son las cookies?</h2>
      <p>
        Este sitio web utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas.
        En general, estas tecnologías pueden servir para finalidades muy diversas, como, por ejemplo, reconocerte como
        usuario, obtener información sobre tus hábitos de navegación, o personalizar la forma en que se muestra el
        contenido. Los usos concretos que hacemos de estas tecnologías se describen a continuación.
      </p>

      <h2 id="para-que-utilizar-cookies">¿Para qué utiliza las cookies esta página web?</h2>
      <p>Esta página web utiliza las cookies para una serie de finalidades, incluidas:</p>
      <ul>
        <li>
          Análisis: son aquellas que, tratadas por nosotros o por terceros, nos permiten cuantificar el número de
          usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del
          servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de
          productos o servicios que le ofrecemos.
        </li>
        <li>
          Publicitarias: son aquellas que, tratadas por nosotros o por terceros, nos permiten analizar sus hábitos de
          navegación en Internet para que podamos mostrarle publicidad relacionada con su perfil de navegación.
        </li>
      </ul>

      <h2 id="quien-utiliza-cookies">¿Quién utiliza las cookies en esta página web?</h2>
      <p>
        La identificación de quién utiliza las cookies, el tipo de cookies utilizadas y demás detalles, se indica a
        continuación:
      </p>

      <p>
        Nota: Las cookies de tipo “Propias” son utilizadas sólo por el propietario de esta web y las cookies “De
        terceros” son utilizadas, también, por el prestador del servicio que está detallado la tabla anterior.
      </p>
      <p>
        Puede informarse de las transferencias a terceros países que, en su caso, realizan los terceros identificados en
        esta política de cookies en sus correspondientes políticas (ver los enlaces facilitados en el apartado “Más
        información” de la tabla anterior).
      </p>

      <h2>¿Cómo puedo desactivar o eliminar estas cookies?</h2>
      <p>
        Puede usted permitir o bloquear las cookies, así como borrar sus datos de navegación (incluidas las cookies)
        desde el navegador que usted utiliza. Consulte las opciones e instrucciones que ofrece su navegador para ello.
        Tenga en cuenta que si acepta las cookies de terceros, deberá eliminarlas desde las opciones del navegador.
      </p>
      <p>
        A continuación tiene disponibles los enlaces con la información para gestionar las cookies de los navegadores
        más utilizados:
      </p>
      <ul>
        <li>
          Firefox:{" "}
          <a rel="nofollow" href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we">
            http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
          </a>
        </li>
        <li>
          Chrome:{" "}
          <a rel="nofollow" href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647">
            http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647
          </a>
        </li>
        <li>
          Internet Explorer{" "}
          <a
            rel="nofollow"
            href="https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer"
          >
            https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer
          </a>
        </li>
        <li>
          Microsoft Edge:{" "}
          <a
            rel="nofollow"
            href="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy"
          >
            https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy
          </a>
        </li>
        <li>
          Safari:{" "}
          <a rel="nofollow" href="http://support.apple.com/kb/ph5042">
            http://support.apple.com/kb/ph5042
          </a>
        </li>
        <li>
          Opera:{" "}
          <a rel="nofollow" href="http://help.opera.com/Windows/11.50/es-ES/cookies.html">
            http://help.opera.com/Windows/11.50/es-ES/cookies.html
          </a>
        </li>
        <li>Otros navegadores: consulte la documentación del navegador que tenga instalado.</li>
      </ul>

      <h2>Complemento de inhabilitación para navegadores de Google Analytics</h2>
      <p>
        Si desea rechazar las cookies analíticas de Google Analytics en todos los navegadores, de forma que no se envíe
        información suya a Google Analytics, puede descargar un complemento que realiza esta función desde este enlace:{" "}
        <a rel="nofollow" href="https://tools.google.com/dlpage/gaoptout">
          https://tools.google.com/dlpage/gaoptout
        </a>
        .
      </p>
    </LegalText>
  );
}
