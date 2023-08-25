import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Image from "@theme/IdealImage";
import projects from "../json/projects.json";

<head>
  <title>Sirius Documentation</title>
  <meta name="title" content="Sirius Documentation" />
</head>;

function CardLayout({ children }) {
  return <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 pb-4 md:flex-row md:gap-6 md:pb-6 xl:gap-8 xl:pb-8">{children}</div>;
}

function Card({ imgurl, name, link }) {
  return (
    <a href={link} className="group relative aspect-video max-w-xl">
      <div className="overflow-hidden rounded-lg transition duration-500 ease-in-out group-hover:scale-105">
        <Image img={imgurl} alt={name} className="pointer-events-none block object-cover object-center transition duration-500 ease-in-out group-hover:scale-110" />
      </div>
      <Image img={imgurl} alt={name} className="pointer-events-none absolute inset-0 -z-10 h-full w-full blur-xl saturate-[1.3]" />
    </a>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Documentation for all Sirius related projects" />
        <meta property="og:title" content="Sirius Documentation" />
        <meta property="og:image:alt" content="Sirius Documentation" />
        <meta name="description" property="og:description" content="Documentation for all Sirius related projects" />
      </Head>
      <main className="flex h-[70vh] items-center">
        <div className="mx-auto py-6 sm:py-8 lg:py-12">
          <div className="w-screen px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h1 className="mb-1 text-center font-sfdisplay text-2xl font-bold dark:text-white lg:text-3xl">Sirius Documentation</h1>
              <p className="mx-auto max-w-screen-md text-center font-sfdisplay dark:text-neutral-200 md:text-lg">Documentation for all Sirius related projects</p>
            </div>

            <CardLayout>
              <Card imgurl="/img/rayfield/rayfield.png" name="Rayfield" link="/rayfield" />
              <Card imgurl="/img/sense/SenseBanner.png" name="Sense" link="/sense" />
            </CardLayout>
          </div>
        </div>
      </main>

      <section className="mb-[25vh] flex items-center">
        <div className="mx-auto py-6 sm:py-8 lg:py-12">
          <div className=" w-screen px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h1 className="mb-1 text-center font-sfdisplay text-2xl font-bold dark:text-white lg:text-3xl">Community Documentation</h1>
              <p className="mx-auto max-w-screen-md text-center font-sfdisplay dark:text-neutral-200 md:text-lg">
                Documentation for all the projects the community has made <br />
                <span className="mx-auto max-w-screen-md text-center font-sfdisplay text-xs opacity-30 dark:text-neutral-200">Not associated with Sirius in any way</span>
              </p>
            </div>

            <CardLayout>
              {projects.map((card) => (
                <Card imgurl={`/img${card.image}`} name={card.name} link={`/community${card.link}`} />
              ))}
            </CardLayout>
          </div>
        </div>
      </section>
    </Layout>
  );
}
