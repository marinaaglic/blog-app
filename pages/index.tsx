import Link from "next/link";
import Head from "next/head";
import { getSortedPostsData } from "@/lib/posts";
import { PostData } from "@/lib/posts";
import Layout from "@/components/layout";
import utilClasses from "../styles/utils.module.css";
import Date from "@/components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: PostData) {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
      </div>
      <section className={`${utilClasses.headingMd} ${utilClasses.padding1px}`}>
        <h2 className={utilClasses.headingLg}>Blog</h2>
        <ul className={utilClasses.list}>
          {allPostsData.map(({ id, date, title }: PostData) => (
            <li className={utilClasses.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilClasses.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
