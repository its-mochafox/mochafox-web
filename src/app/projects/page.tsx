import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import warmFox from "../../../public/warm.png";

export const metadata: Metadata = {
  title: "Projects - MochaFox",
  description:
    "Explore my current and past projects - from web development to system administration and everything in between.",
  openGraph: {
    title: "Projects - MochaFox",
    description:
      "Explore my current and past projects - from web development to system administration and everything in between.",
    images: ["/warm.png"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section
        id="hero"
        className="sm:flex-row items-center justify-center sm:p-20 md:h-full space-x-4 bg-foamWhite"
      >
        <Image
          src={warmFox}
          alt="MochaFox drinking a cup of coffee and wearing a scarf"
          className="w-full sm:w-1/2 lg:w-1/3 block max-w-96"
        />

        <div className="flex flex-col">
          <h1 className="text-center sm:text-left text-3xl sm:text-4xl text-darkRoast">
            My Projects
          </h1>
          <p className="sm:text-xl md:text-2xl text-foxOrange">
            Hey there! Here&apos;s what I&apos;ve been working on lately.
          </p>
        </div>
      </section>

      <section>
        <h1 className="section-header">
          Active Projects &mdash; <span>Currently working on</span>
        </h1>
        <div className="flex flex-wrap justify-center">
          <ProjectCard
            title="Gatorade Minecraft Mod"
            description="A NeoForge mod for Minecraft that adds Gatorade as a naturally occurring resource to the world. Find gatorade lakes, fill your gatorade bucket and drink from a gatorade squeeze bottle."
            tech={["Minecraft", "NeoForge", "Java"]}
            status="Active"
            startDate="2025"
            liveLink="https://legacy.curseforge.com/minecraft/mc-mods/gatorade"
            repoLink="https://github.com/its-mochafox/gatorade"
          />

          <ProjectCard
            title="MochaFox.com"
            description="My personal website built with Next.js and TypeScript. Features a responsive design with custom styling using Tailwind CSS. Deployed using Docker containers on my homelab infrastructure."
            tech={["Next.js", "TypeScript", "Tailwind CSS", "Docker"]}
            status="Active"
            liveLink="https://mochafox.com"
            repoLink="https://github.com/its-mochafox/mochafox-web"
            startDate="2024"
          />

          <ProjectCard
            title="Homelab Infrastructure"
            description="A custom 24-core ThreadRipper server with 256GB RAM, two Dell R330 servers, 10Gb fiber networking, and 144TB of storage. Running various services including web hosting, media servers, and development environments."
            tech={["Proxmox", "Docker", "Nginx", "Linux", "Networking"]}
            status="Active"
            startDate="2023"
          />
        </div>
      </section>

      {/* <section>
        <h1 className="section-header">
          Completed Projects &mdash; <span>Finished and deployed</span>
        </h1>
        <div className="flex flex-wrap justify-center">
         
        </div>
      </section> */}

      {/* <section>
        <h1 className="section-header">
          Planned Projects &mdash; <span>Coming soon</span>
        </h1>
        <div className="flex flex-wrap justify-center">
        </div>
      </section> */}
    </>
  );
}
