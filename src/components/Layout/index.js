import Head from "next/head";
import { Main } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Head lang="pt-br">
        <title>Portifólio Diogo Saucedo</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Diogo Saucedo" />
        <meta name="description" content="Portifólio de Diogo Saucedo" />
      </Head>
      <Main>{children}</Main>
    </>
  );
}
