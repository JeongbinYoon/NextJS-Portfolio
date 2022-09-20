import Head from "next/head";
import Layout from "../components/layout";
import ProjectItem from "../components/projects/project-item";
import { DATABASE_ID, TOKEN } from "../config";

export default function Projects({ projects }) {
  // console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen mb-10 px-6">
        <Head>
          <title>윤정빈 포트폴리오</title>
          <meta name="description" content="Next.JS 포트폴리오" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트:
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 lg:grid-cols-3">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
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

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
