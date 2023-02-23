import { motion } from "framer-motion";
import { ReactNode } from "react";

export const Animate = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
      variants={{
        visible: { x: 0 },
        hidden: { x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
};
