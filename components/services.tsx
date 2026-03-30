"use client";

import React from "react";
import { FaFigma, FaCode, FaCloudUploadAlt, FaInfinity, FaGitAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiJavascript, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import { clipPath } from "framer-motion/client";
import { AiOutlineHtml5 } from "react-icons/ai";

const Service = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white" id="services">
      {/* Services Header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black">My Services</h2>
        <p className="text-black mt-2">
          These are the key services I offer
        </p>
      </div>

      {/* Service Boxes */}
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
    
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100  p-6 rounded-xl shadow-md">
               <FaCode className="text-3xl text-green-500 mb-4" />
               <h3 className="text-xl font-semibold mb-2 text-gray-900">Frontend Development</h3>
               <p className="text-gray-600 ">Building fast, responsive and accessible interfaces using React & Next.js.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-xl shadow-md">
               <FaCloudUploadAlt className="text-3xl text-blue-500 mb-4" />
               <h3 className="text-xl font-semibold mb-2 text-gray-900">Deployment</h3>
               <p className="text-gray-600 ">Efficient hosting & CI/CD pipelines using Netlify, Vercel, and GitHub.</p>
            </motion.div>

        </div>
       </div>
      {/* Skills & Experience Section */}
      <div className="bg-gray-50 p-6 md:p-10 rounded-2xl">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Skills & Experience</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center">
            <AiOutlineHtml5 className="text-4xl text-pink-500 mb-2" />
            <span className="text-gray-800">HTML/CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJavascript className="text-4xl text-blue-600 mb-2" />
            <span className="text-gray-800 ">Javascript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-cyan-500 mb-2" />
            <span className="text-gray-800">Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-4xl text-blue-500 mb-2" />
            <span className="text-gray-800">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNextdotjs className="text-4xl text-black mb-2" />
            <span className="text-gray-800">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <SiReact className="text-4xl text-green-500 mb-2" />
            <span className="text-gray-800">React</span>
          </div>
          <div className="flex flex-col items-center">
            <FaInfinity className="text-4xl text-indigo-500 mb-2" />
            <span className="text-gray-800">DevOps</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-4xl text-orange-400 mb-2" />
            <span className="text-gray-800">Git</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
