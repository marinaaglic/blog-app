import { ReactNode } from "react";
import classes from "./layout.module.css";
import utilClasses from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const name = "Marina Aglić Čuvić";
export const siteTitle = "Next.js Sample Website";

type LayoutProps = {
  children: ReactNode;
  home: boolean;
};

export default function Layout({ children, home }: LayoutProps) {
  return (
    <div className={classes.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={utilClasses.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilClasses.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilClasses.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilClasses.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilClasses.headingLg}>
              <Link href="/" className={utilClasses.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={classes.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
