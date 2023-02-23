import { GiBarn } from "react-icons/gi";
import { SiGnuprivacyguard } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import React from "react";
const projects = [
  {
    name: "Privacy Barn",
    description:
      "Single Page Application makeover of senior capstone project. Compare/contrast privacy policies and upload new policies to be deciphered. Now with dynamic loading and an interactive user interface!",
    tools: ["Vue.JS", "Django REST API", "Tailwind CSS", "SpaCy NLP"],
    link: [
      "https://keithlandauer.github.io/frontend-privacybarn/",
      "https://github.com/keithlandauer/frontend-privacybarn",
    ],
    icon: GiBarn,
  },
  {
    name: "Legal Lite",
    description:
      "Team lead of 6-person software development team. Web application designed completely with Django on the frontend and backend. Decipher policies searching for over 50 individual elements with SpaCy NLP. Create a user account to upload new policies and provide edits to existing policies. View automated scores and contribute to a community score.",
    tools: ["Python", "Django", "BootStrap", "Docker", "SpaCy NLP"],
    link: null,
    icon: SiGnuprivacyguard,
  },
  {
    name: "Twitter Me This",
    description:
      "Currently in Progress... A web application used to guage a senator's use of twitter to interact with the public. Present data such as average character count, time spent, tweets sent during their respective states' work hours, and more! ",
    tools: ["React.JS", "Django REST API", "Tailwind CSS", "Twitter API"],
    link: null,
    icon: BsTwitter,
  },
];

export const Projects = () => {
  return (
    <div className="mx-16 mt-12 font-mono font-bold md:mx-24" id="projects">
      <h2 id="about" className="mb-8 text-4xl text-green-300">
        Projects
      </h2>
      <div className="container grid grid-cols-1 gap-6 py-6 md:grid-cols-2">
        {[
          ...projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div key={proj.name} className="col-span-1 flex flex-col rounded bg-gray-700 p-8 hover:cursor-pointer">
                <div className="flex flex-row">
                  <Icon className="h-8 w-8 text-gray-300 md:h-10 md:w-10" />
                  {proj.link && (
                    <div className="ml-auto flex flex-row space-x-4">
                      <a
                        href={proj.link[0]}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <FiExternalLink className="h-8 w-8 text-gray-300 delay-100 duration-300 hover:scale-125 hover:cursor-pointer hover:text-green-300 md:h-10 md:w-10" />
                      </a>
                      <a
                        href={proj.link[1]}
                        target="_blank"
                        rel="noreferrer"
                        className=""
                      >
                        <AiFillGithub className="h-8 w-8 text-gray-300 delay-100 duration-300 hover:scale-125 hover:cursor-pointer hover:text-green-300 md:h-10 md:w-10" />
                      </a>
                    </div>
                  )}
                </div>
                <h1 className="my-4 text-lg text-green-300 md:text-2xl">
                  {proj.name}
                </h1>
                <p className="text-xs font-medium text-gray-300 md:text-sm">
                  {proj.description}
                </p>
                <div className="mt-auto flex flex-wrap py-4 text-green-300">
                  {[
                    ...proj.tools.map((tool) => (
                      <div key={tool} className="md:text-md py-4 pr-3 text-xs">{tool}</div>
                    )),
                  ]}
                </div>
              </div>
            );
          }),
        ]}
      </div>
      <div className="my-4 flex">
        <p className="mx-auto text-gray-500">
          This portfolio was developed using React.JS, tailwind CSS, and
          firebase.
        </p>
      </div>
    </div>
  );
};
