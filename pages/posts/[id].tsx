import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostData } from "../../lib/posts";
import Head from "next/head";
import Date from "@/components/date";

export default function Post({ postData }: PostData) {
  return (
    <Layout home>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
