import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Project1 from "./Project/Project1";
import Project2 from "./Project/Project2";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0  "
    >
      <h3 className="absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl ">
        Projects
      </h3>


      <div className="w-full absolute top-[30%] bg-[#EF5350]/40 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
