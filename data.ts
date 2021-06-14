import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService, ISkill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
];

export const languages: ISkill[] = [
  {
    name:'Python',
    level: '50%',
    Icon:BsCircleFill
  },
  {
    name:'html',
    level: '90%',
    Icon:BsCircleFill
  },
  {
    name:'pug',
    level: '90%',
    Icon:BsCircleFill
  },
  {
    name:'css(scss)',
    level: '70%',
    Icon:BsCircleFill
  },
  {
    name:'Java Script',
    level: '70%',
    Icon:BsCircleFill
  },
  {
    name:'React',
    level: '60%',
    Icon:BsCircleFill
  },
  {
    name:'Next.js',
    level: '60%',
    Icon:BsCircleFill
  },
  {
    name:'php',
    level: '50%',
    Icon:BsCircleFill
  },
  {
    name:'Django',
    level: '50%',
    Icon:BsCircleFill
  },
]

export const tools: ISkill[] = [
  {
    name:'Figma',
    level: '80%',
    Icon:BsCircleFill
  },
  {
    name:'Photoshop',
    level: '60%',
    Icon:BsCircleFill
  },
  {
    name:'BigQuery',
    level: '60%',
    Icon:BsCircleFill
  },
  {
    name:'Miro',
    level: '70%',
    Icon:BsCircleFill
  },
  {
    name:'Sanity',
    level: '70%',
    Icon:BsCircleFill
  },
]