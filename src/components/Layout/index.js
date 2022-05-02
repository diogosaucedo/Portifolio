import Head from "next/head";
import { Main } from "./styles";


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Portifólio</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8"></meta>
            </Head>
            <Main>{children}</Main>
        </>
    );
}