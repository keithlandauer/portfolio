import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";

import { ContactForm } from "../Dynamic_Components/ContactForm";

const xMoveVariantTop = {
  hidden: {
    x: "-100vw",
    textShadow: "0px 0px 0px",
  },
  visible: {
    x: 0,
    textShadow: "0px 0px 15px",
    transition: {
      duration: 1.75,
      delay: 1,
      type: "spring",
      textShadow: {
        delay: 2.75,
        duration: 1,
        repeat: 14,
        repeatType: "reverse",
      },
    },
  },
};

const xMoveVariantBottom = {
  hidden: {
    x: "-100vw",
    textShadow: "0px 0px 0px",
  },
  visible: {
    x: 0,
    textShadow: "0px 0px 15px",
    transition: {
      duration: 1.75,
      delay: 1,
      type: "spring",
      textShadow: {
        delay: 3.75,
        duration: 1,
        repeat: 14,
        repeatType: "reverse",
      },
    },
  },
};
const yMoveVariant = {
  hidden: {
    y: "250vw",
    textShadow: "0px 0px 0px",
  },
  visible: {
    y: 1,
    textShadow: "0px 0px 15px",
    transition: {
      duration: 1.75,
      type: "spring",
      textShadow: {
        delay: 3.25,
        duration: 1,
        repeat: 14,
        repeatType: "reverse",
      },
    },
  },
};

export const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {}, [modalOpen]);
  return (
    <div className="h-screen font-mono font-bold">
      <motion.div
        className="fixed mt-8 flex w-1/4 flex-col opacity-75 "
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 2, duration: 0.75, type: "tween" }}
      >
        <a
          href="https://www.linkedin.com/in/keith-landauer/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="h-16 w-16 p-4 text-gray-300 delay-100 duration-300 hover:scale-125 hover:cursor-pointer hover:text-green-300"></AiFillLinkedin>
        </a>

        <a
          href="https://github.com/keithlandauer"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="h-16 w-16 p-4 text-gray-300 delay-100 duration-300 hover:scale-125 hover:cursor-pointer hover:text-green-300"></AiFillGithub>
        </a>

        <button onClick={() => setModalOpen(true)}>
          <AiTwotoneMail className="h-16 w-16 p-4 text-gray-300 delay-100 duration-300 hover:scale-125 hover:cursor-pointer hover:text-green-300"></AiTwotoneMail>
        </button>
      </motion.div>
      <div className="-red-400 mt-24 flex flex-row items-end">
        <motion.p
          variants={xMoveVariantTop}
          initial="hidden"
          animate="visible"
          className="text-md mx-16 whitespace-nowrap text-gray-300 md:mx-28 md:mr-0 md:text-xl "
        >
          Hello, my name is
        </motion.p>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0, rotate: 360 }}
          transition={{ delay: 0.2, duration: 1 }}
          src={require("../../img/logo.jpg")}
          alt=""
          className="h-24 w-24 rounded-full sm:h-36 sm:w-36 md:mx-auto md:h-56 md:w-56"
        />
      </div>
      <div className="flex flex-col">
        <motion.p
          variants={yMoveVariant}
          initial="hidden"
          animate="visible"
          className="mx-28 whitespace-nowrap py-12 text-lg text-green-300 md:mx-48 md:text-4xl "
        >
          Keith Landauer.
        </motion.p>
        <motion.p
          variants={xMoveVariantBottom}
          initial="hidden"
          animate="visible"
          className="text-md mx-16 text-gray-300 md:mx-28 md:text-xl "
        >
          I'm an Air Force Veteran and web developer.
        </motion.p>
      </div>
      {modalOpen && <ContactForm modal={modalOpen} setModal={setModalOpen} />}
    </div>
  );
};
