import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostData } from "../../lib/posts";
import Head from "next/head";
import Date from "@/components/date";
import utilClasses from "../../styles/utils.module.css";

export default function Post({ postData }: PostData) {
  return (
    <Layout home>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilClasses.headingXl}>{postData.title}</h1>
        <div className={utilClasses.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
