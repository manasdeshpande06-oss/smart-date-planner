'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ScrollSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen w-full bg-gradient-to-b from-secondary to-romantic-light px-6 py-20 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Take the Quiz
              </h3>
              <p className="text-foreground/60">
                Answer a few quick questions about your preferences and style.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Get Results
              </h3>
              <p className="text-foreground/60">
                Discover your compatibility score and personality type.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Plan Your Date
              </h3>
              <p className="text-foreground/60">
                Get personalized date ideas perfect for you and your match.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Ready to start section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-foreground/70 mb-8">
            Ready to find your perfect date?
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('quiz');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start the Quiz Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
