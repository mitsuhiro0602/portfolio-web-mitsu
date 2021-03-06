import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService, ISkill, IProject } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "WEBサイトの制作、SPAの開発ができます。 <b> HTML</b>,<b>CSS</b>、<b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Express、nest.jsなどを使った言語でAPIと連携し、データベースを構築します",
  },
  {
    Icon: AiOutlineApi,
    title: "Writing",
    about:
      "Lステップやメルマガのライティング、LPの執筆など売り上げアップのための文章を執筆します。",
  },
  {
    Icon: MdDeveloperMode,
    title: "SNS、広告の運用",
    about: "InstagramやTiktokなどSNSや広告の運用を行い、認知を広めることができます",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "FigmaとPhotoshopを使い、LPやオウンドメディアのデザインを作成できます",
  },
];

export const languages: ISkill[] = [
  {
    name:'Python',
    level: '50%',
    Icon:BsCircleFill
  },
  {
    name:'html(pug)',
    level: '90%',
    Icon:BsCircleFill
  },
  {
    name:'css(scss)',
    level: '70%',
    Icon:BsCircleFill
  },
  {
    name:'Java Script(TypeScript)',
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
    name:'php(wordpress)',
    level: '70%',
    Icon:BsCircleFill
  },
  {
    name:'Express',
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
    name:'jest',
    level: '50%',
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

export const projects: IProject[] = [
  {
    id:1,
    name: "グランパー",
    image_path: "/images/covid.jpg",
    deployed_url: "https://glamping-book-client-1582amxeg-mitsuhiro0602.vercel.app",
    github_url: "https://github.com/mitsuhiro0602/glamping-book-client",
    category: ["react", "express"],
    description:
      "グランピング施設の予約、検索サイトです。",
    key_techs: ["React", "express", "tailwindcss" , "tailwindcss"],
  },
  {
    id:2,
    name: "アウトドアファミリー",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://design-collect-client.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
    category: ["react", "express"],
    description:
      "ファミリー向けアウトドア共有SNSです。家族の思い出や休日を共有できます。",
    key_techs: ["React", "express", "Graphql", "tailwindcss"],
  },

  {
    id:3,
    name: "WEB-HACK",
    image_path: "/images/blog.png",
    deployed_url: "https://www.web-hack.net/",
    github_url: "https://github.com/mitsuhiro0602/nextjs_blog/blob/main/README.md",
    category: ["Next.js"],
    description:
      "技術ブログの作成",
    key_techs: ["Next.js"],
  },

  {
    id:4,
    name: "Realtime Chat Bot",
    image_path: "/images/chatbot.png",
    deployed_url: "https://chatbot-login-25188.web.app/",
    github_url: "https://github.com/mitsuhiro0602/chatbot-demo",
    category: ["react"],
    description:
      "お問い合わせ専用のチャットbotを作成。slackと提携してリクエストを飛ばすとslackに通知がきます",
    key_techs: ["React", "firebase"],
  },

  {
    id:5,
    name: "ECアプリ",
    image_path: "/images/ec-app.png",
    deployed_url: "https://ec-app-3b8bd.web.app/",
    github_url: "https://github.com/mitsuhiro0602/ec-app",
    category: ["react"],
    description:
      "在宅勤務の方のためのECサイトでもです。",
    key_techs: ["React"],
  },

  // {
  //   id:6,
  //   name: "Color Classification using tf.js",
  //   image_path: "/images/color.jpg",
  //   deployed_url: "!#",
  //   github_url: "https://github.com/Dey-Sumit/color-classification",
  //   category: ["django"],
  //   description:
  //     "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
  //   key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  // },
  // {
  //   id:7,
  //   name: "YouTube using YouTube ",
  //   image_path: "/images/youtubeClone.png",
  //   deployed_url: "https://not-utube.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  //   category: ["react"],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: [
  //     "React",
  //     "Redux",
  //     "Firebase Auth",
  //     "YouTube API",
  //     "Sass",
  //     "Bootstrap",
  //   ],
  // },
  // {
  //   id:8,
  //   name: "Football App",
  //   image_path: "/images/football.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   description:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  // },
]