import Head from "next/head";
import Layout from "../components/layout";
import { DATABASE_ID, TOKEN } from "../config";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>윤정빈 포트폴리오</title>
        <meta name="description" content="Next.JS 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트: {projects.length}</h1>

      {projects.results.map((aProject) => (
        <h1>{aProject.properties.Name.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const url = `https://api.notion.com/v1/databases/${DATABASE_ID}/query`;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(url, options);
  const projects = await res.json();

  // const projectNames = projects.results.map(
  //   (aProject) => aProject.properties.Name.title[0].plain_text
  // );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
