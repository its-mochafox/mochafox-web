import type { Metadata } from "next";
import Image from "next/image";
import warmFox from "../../../public/warm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBluesky,
  faDiscord,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faFolder,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Scan - MochaFox",
  description:
    "Quick links to connect with me on social media and other platforms.",
  openGraph: {
    title: "Scan - MochaFox",
    description:
      "Quick links to connect with me on social media and other platforms.",
    images: ["/warm.png"],
  },
};

const quickLinks: QuickLink[] = [
  {
    name: "Main Website",
    secondary: "Learn more about me",
    url: "https://mochafox.com",
    icon: faHome,
    color: "text-foxOrange",
  },
  {
    name: "Projects",
    secondary: "See what I'm working on",
    url: "https://projects.mochafox.com",
    icon: faFolder,
    color: "text-foxOrange",
  },
  {
    separator: true,
  },
  {
    name: "BlueSky",
    secondary: "@MochaFox.com",
    url: "https://bsky.app/profile/mochafox.com",
    icon: faBluesky,
    color: "text-sky-500",
  },
  {
    name: "Discord",
    secondary: "its_mochafox",
    icon: faDiscord,
    color: "text-indigo-400",
  },
  {
    name: "GitHub",
    secondary: "its-mochafox",
    url: "https://github.com/its-mochafox",
    icon: faGithub,
    color: "text-gray-700",
  },
  {
    name: "Email",
    secondary: "fox (at) mochafox.com",
    url: "mailto:fox@mochafox.com",
    icon: faEnvelope,
    color: "text-red-500",
  },
];

type QuickLink = {
  name?: string;
  secondary?: string;
  url?: string;
  icon?: any;
  color?: string;
  separator?: boolean;
};

export default function ScanPage() {
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
            Hey there!
          </h1>
          <p className="sm:text-xl md:text-2xl text-foxOrange">
            I&apos;m MochaFox, nice to meet you!
          </p>
        </div>
      </section>

      <section>
        <div className="xl:grid xl:grid-cols-5">
          <div className="xl:col-start-2 xl:col-span-3">
            <h1 className="section-header text-center">
              Socials and quick links
            </h1>

            <div className="flex flex-col space-y-4 max-w-md mx-auto">
              {quickLinks.map((social: QuickLink, index: number) => {
                if (social.separator) {
                  return (
                    <div key={index} className="flex items-center my-4">
                      <div className="flex-grow border-t border-lightRoast"></div>
                      <span className="px-3 text-foamWhite text-sm font-medium">
                        Social Media
                      </span>
                      <div className="flex-grow border-t border-lightRoast"></div>
                    </div>
                  );
                }

                const Component = social.url ? "a" : "div";
                const linkProps = social.url
                  ? {
                    href: social.url,
                    target: social.url?.startsWith("http")
                      ? "_blank"
                      : "_self",
                    rel: social.url?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined,
                  }
                  : {};

                return (
                  <Component
                    key={index}
                    {...linkProps}
                    className="flex items-center justify-between p-4 rounded-lg text-foamWhite hover:bg-foamWhite bg-lightRoast transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-4">
                      <FontAwesomeIcon
                        icon={social.icon}
                        className={`w-6 h-6 ${social.color} group-hover:text-darkRoast transition-colors`}
                      />
                      <div>
                        <div className="group-hover:text-darkRoast font-semibold text-lg">
                          {social.name}
                        </div>
                        <div className="text-gray-300 group-hover:text-lightRoast text-sm">
                          {social.secondary}
                        </div>
                      </div>
                    </div>
                    {social.url && (
                      <div className="text-darkRoast opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="w-4 h-4 animate-pulse group-hover:animate-none"
                        />
                      </div>
                    )}
                  </Component>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
