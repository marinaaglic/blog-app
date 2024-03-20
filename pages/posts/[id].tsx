import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { PostData } from "../../lib/posts";

export default function Post({ postData }: PostData) {
  return (
    <Layout home>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
