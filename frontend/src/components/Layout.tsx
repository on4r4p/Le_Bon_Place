import Head from "next/head";
import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}


export default function Layout({ children, pageTitle }: LayoutProps) {
    return (
        <>
            <Head>

                <title>Le Bon Place - {pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="A marketplace for buying stuff and selling stuff" />
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="bg-gray-50">{children}</main>


        </>
    );
}