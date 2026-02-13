'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DatePlan } from '@/utils/types';

interface DatePlanCardProps {
  plan: DatePlan;
  index: number;
}

export const DatePlanCard: React.FC<DatePlanCardProps> = ({ plan, index }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-romantic-pink"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-secondary to-accent/30 flex items-center justify-center text-6xl">
        {plan.emoji}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-serif font-bold text-primary flex-1">
            {plan.title}
          </h3>
        </div>

        <div className="space-y-3 mb-4">
          {/* Time */}
          <div className="flex items-center gap-2 text-foreground/70">
            <span className="text-lg">🕐</span>
            <span className="font-medium">{plan.time}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-foreground/70">
            <span className="text-lg">📍</span>
            <span className="font-medium">{plan.location}</span>
          </div>

          {/* Description */}
          <p className="text-foreground/60 leading-relaxed pt-2">
            {plan.description}
          </p>
        </div>

        {/* Action button */}
        <motion.button
          className="w-full py-2 bg-secondary text-primary font-semibold rounded-lg hover:bg-accent transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add to Calendar
        </motion.button>
      </div>
    </motion.div>
  );
};
