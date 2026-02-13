'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DatePlan } from '@/utils/types';

interface DatePlanCardProps {
  plan: DatePlan;
  index: number;
}

export const DatePlanCard: React.FC<DatePlanCardProps> = ({ plan, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const createCalendarEvent = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Parse time string (e.g., "7:00 PM")
    const timeRef = new Date();
    // Default to tomorrow
    timeRef.setDate(timeRef.getDate() + 1);

    // Parse the time from the plan
    const timeMatch = plan.time.match(/(\d+):(\d+)\s?(AM|PM)/i);
    let hours = 19; // Default 7 PM
    let minutes = 0;

    if (timeMatch) {
      hours = parseInt(timeMatch[1]);
      minutes = parseInt(timeMatch[2]);
      const period = timeMatch[3].toUpperCase();

      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
    }

    timeRef.setHours(hours, minutes, 0, 0);

    // Create end time (2 hours later)
    const endTimeRef = new Date(timeRef);
    endTimeRef.setHours(timeRef.getHours() + 2);

    // Format dates for Google Calendar (YYYYMMDDTHHmmssZ)
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    const start = formatDate(timeRef);
    const end = formatDate(endTimeRef);

    const title = encodeURIComponent(`Date Night: ${plan.title} ${plan.emoji}`);
    const details = encodeURIComponent(
      `Activity: ${plan.description}\n\n📍 Location: ${plan.location}\n\n💡 Tips:\n${plan.tips ? plan.tips.map(t => `• ${t}`).join('\n') : '• Enjoy your date!'}\n\n👗 Dress Code: ${plan.dressCode}\n💰 Cost: ${plan.cost}`
    );
    const location = encodeURIComponent(plan.location);

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${start}/${end}`;

    window.open(googleCalendarUrl, '_blank');
  };

  const copyInviteLink = async (e: React.MouseEvent) => {
    e.stopPropagation();

    // Construct URL with query params
    const params = new URLSearchParams({
      title: plan.title,
      emoji: plan.emoji,
      location: plan.location,
      time: plan.time,
      description: plan.description,
      tips: plan.tips ? plan.tips.join('\n') : '',
    });

    const url = `${window.location.origin}/invite?${params.toString()}`;

    try {
      await navigator.clipboard.writeText(url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
      alert('Failed to copy link automatically.');
    }
  };

  return (
    <motion.div
      className="relative h-[420px] cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      onClick={toggleFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-lg border border-romantic-pink overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
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
              <p className="text-foreground/60 leading-relaxed pt-2 line-clamp-3">
                {plan.description}
              </p>
            </div>

            {/* Click hint */}
            <div className="absolute bottom-4 right-6 text-primary/50 text-sm flex items-center gap-1">
              <span>Click to see more</span>
              <span className="text-lg">↻</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg border border-romantic-pink overflow-hidden p-6 text-primary-foreground"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-serif font-bold">{plan.title}</h3>
              <span className="text-4xl">{plan.emoji}</span>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto">
              {/* Full Description */}
              <div>
                <h4 className="font-semibold mb-2 text-lg">Description</h4>
                <p className="text-primary-foreground/90 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Tips */}
              <div>
                <h4 className="font-semibold mb-2 text-lg flex items-center gap-2">
                  <span>💡</span> Tips
                </h4>
                <ul className="text-primary-foreground/90 space-y-1 list-disc list-inside">
                  {plan.tips && plan.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                  {!plan.tips && (
                    <>
                      <li>Book in advance for the best experience</li>
                      <li>Arrive 10-15 minutes early</li>
                      <li>Bring a camera to capture memories</li>
                    </>
                  )}
                </ul>
              </div>

              {/* Estimated Cost */}
              <div>
                <h4 className="font-semibold mb-2 text-lg flex items-center gap-2">
                  <span>💰</span> Estimated Cost
                </h4>
                <p className="text-primary-foreground/90">{plan.cost || '$$$ - Premium Experience'}</p>
              </div>

              {/* Dress Code */}
              <div>
                <h4 className="font-semibold mb-2 text-lg flex items-center gap-2">
                  <span>👔</span> Dress Code
                </h4>
                <p className="text-primary-foreground/90">{plan.dressCode || 'Smart Casual'}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mt-4">
              <motion.button
                className="w-full py-3 bg-white text-primary font-semibold rounded-lg hover:bg-secondary transition-colors shadow-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={createCalendarEvent}
              >
                Add to Calendar
              </motion.button>

              <motion.button
                className={`w-full py-3 font-semibold rounded-lg transition-colors border-2 ${linkCopied
                    ? 'bg-green-100 text-green-700 border-green-200'
                    : 'bg-transparent text-white border-white/50 hover:bg-white/10'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={copyInviteLink}
              >
                {linkCopied ? 'Link Copied! ✓' : 'Share Invite 💌'}
              </motion.button>
            </div>

            {/* Click hint */}
            <div className="text-center text-primary-foreground/60 text-sm mt-3 flex items-center justify-center gap-1">
              <span>Click to flip back</span>
              <span className="text-lg">↻</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
