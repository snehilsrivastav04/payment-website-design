
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-1')!.imageUrl,
    dataAiHint: "woman portrait",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-2')!.imageUrl,
    dataAiHint: "man portrait",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-3')!.imageUrl,
    dataAiHint: "woman professional",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-4')!.imageUrl,
    dataAiHint: "man professional",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-5')!.imageUrl,
    dataAiHint: "woman smiling",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-6')!.imageUrl,
    dataAiHint: "man smiling",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-7')!.imageUrl,
    dataAiHint: "woman thinking",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-8')!.imageUrl,
    dataAiHint: "man thinking",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-v2-9')!.imageUrl,
    dataAiHint: "person happy",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, dataAiHint }, i) => (
                <motion.div
                  key={i}
                  className="p-8 rounded-2xl border bg-card text-card-foreground shadow-lg shadow-primary/5 max-w-xs w-full relative overflow-hidden"
                  whileHover="hover"
                  initial="initial"
                  variants={{
                    initial: {},
                    hover: {}
                  }}
                >
                  <motion.div
                    className="absolute top-0 left-0 w-32 h-32 bg-primary z-0 rounded-full"
                    variants={{
                      initial: {
                        scale: 0,
                        x: "-50%",
                        y: "-50%",
                      },
                      hover: {
                        scale: 8,
                      },
                    }}
                    transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
                  />
                  <div className="relative z-10">
                    <motion.p 
                      className="text-base leading-relaxed"
                      variants={{
                        initial: { color: "hsl(var(--muted-foreground))" },
                        hover: { color: "hsl(var(--primary-foreground) / 0.9)" }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                    >
                      {text}
                    </motion.p>
                    <div className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <motion.div 
                          className="font-semibold tracking-tight"
                          variants={{
                            initial: { color: "hsl(var(--card-foreground))" },
                            hover: { color: "hsl(var(--primary-foreground))" }
                          }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                        >
                          {name}
                        </motion.div>
                        <motion.div 
                          className="text-sm"
                          variants={{
                            initial: { color: "hsl(var(--muted-foreground))" },
                            hover: { color: "hsl(var(--primary-foreground) / 0.8)" }
                          }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                        >
                          {role}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const TestimonialsV2 = () => {
  return (
    <section className="bg-background py-20 md:py-24 relative">
      <div className="container z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto"
        >
          <div className="bg-secondary text-secondary-foreground border py-1 px-4 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center text-foreground">
            What our users say
          </h2>
          <p className="text-center mt-5 text-lg text-muted-foreground">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
