'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const InviteContent = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const emoji = searchParams.get('emoji');
    const location = searchParams.get('location');
    const time = searchParams.get('time');
    const description = searchParams.get('description');
    const tips = searchParams.get('tips');

    if (!title) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
                <h2 className="text-2xl font-serif text-primary font-bold mb-2">Oops! Invalid Invitation</h2>
                <p className="text-foreground/70">Please check the link and try again.</p>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-romantic-pink max-w-2xl w-full text-center relative overflow-hidden mx-4"
        >
            {/* Decorative background hearts */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-romantic-pink via-primary to-romantic-pink" />

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
            >
                <span className="text-6xl mb-4 block animate-bounce-gentle">{emoji}</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                    You're Invited!
                </h1>
                <p className="text-xl text-foreground/70 italic">
                    To a special date night...
                </p>
            </motion.div>

            <div className="space-y-6 mb-10 text-left bg-romantic-pink/20 p-6 rounded-2xl relative">
                {/* Heart icon absolute */}
                <div className="absolute -top-3 right-4 text-2xl">💌</div>

                <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Activity</h3>
                    <p className="text-2xl font-serif text-foreground font-bold">{title}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">When</h3>
                        <p className="text-lg text-foreground flex items-center gap-2">
                            <span>🕐</span> {time}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Where</h3>
                        <p className="text-lg text-foreground flex items-center gap-2">
                            <span>📍</span> {location}
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">The Plan</h3>
                    <p className="text-foreground/80 leading-relaxed">{description}</p>
                </div>

                {tips && tips.length > 0 && (
                    <div className="p-4 bg-white/50 rounded-lg border border-romantic-pink/30">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-1">
                            <span>💡</span> Special Tips
                        </h3>
                        <p className="text-foreground/80 italic text-sm">{tips}</p>
                    </div>
                )}
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-4 bg-primary text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => alert("Yay! Can't wait! ❤️")}
            >
                I'll Be There! 💖
            </motion.button>
        </motion.div>
    );
};

export default function InvitePage() {
    return (
        <main className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-romantic-pink/30">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Simple floating hearts background */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-2xl opacity-40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            bottom: '-20px',
                        }}
                        animate={{
                            y: '-110vh',
                            opacity: [0, 0.5, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: 'linear',
                        }}
                    >
                        {Math.random() > 0.5 ? '💕' : '💖'}
                    </motion.div>
                ))}
            </div>

            <Suspense fallback={<div className="text-primary animate-pulse">Loading invitation...</div>}>
                <InviteContent />
            </Suspense>
        </main>
    );
}
