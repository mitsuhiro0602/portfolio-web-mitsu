import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../animations';
import Head from 'next/head';
import Contact from "../components/Contact";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}
    >
      <Head>
        <title>
          プロジェクト
        </title>
      </Head>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div
        variants={stagger} 
        initial="initial" 
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <motion.div 
            variants={fadeInUp}
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={project.name}
          >
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail} /> 
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="col-span-2 p-2 py-4 pl-6 my-4 rounded-lg pybg-gray-200 dark:bg-dark-200 md:col-span-1 lg:px-88"
        variants={fadeInUp}
      >
        <Contact/>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
