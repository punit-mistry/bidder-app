import React, { use } from "react";
import { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import FeedbackCards from "./FeedbackCards";
const SuccessSection = () => {
  const successSectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 text-[#fff]"
      ref={successSectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: "all", once: true }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="container px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-black">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl success-title">
              Hear from Our Satisfied Users
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our customers have had great experiences with Bidder. Read their
              testimonials to learn more.
            </p>
          </div>
        </div>
        <FeedbackCards />
      </motion.div>
    </section>
  );
};

export default SuccessSection;

