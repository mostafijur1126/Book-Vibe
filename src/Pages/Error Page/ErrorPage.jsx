import React, { useEffect, useState } from 'react';

const ErrorPage = () => {
  const [glitching, setGlitching] = useState(false);
            const [countdown, setCountdown] = useState(10);
            const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
                setGlitching(true);
      setTimeout(() => setGlitching(false), 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (countdown === 0) return;
    const t = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => clearInterval(t);
  }, [countdown]);

  useEffect(() => {
    const t = setInterval(() => {
                setDots(d => d.length >= 3 ? '' : d + '.');
    }, 500);
    return () => clearInterval(t);
  }, []);

            return (
            <>
                <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&display=swap');
        .font-bebas { font-family: 'Bebas Neue', sans-serif; }
        .font-mono-custom { font-family: 'Space Mono', monospace; }
        @keyframes scanline { 0% { top: -10%; } 100% { top: 110%; } }
        @keyframes gridMove { 0% { background-position: 0 0; } 100% { background-position: 60px 60px; } }
        @keyframes flicker { 0%,94%,100%{opacity:1} 95%{opacity:.4} 97%{opacity:.7} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes cardPulse { 0%,100%{box-shadow:0 0 12px #ff2d55,0 0 40px #ff2d5533} 50%{box-shadow:0 0 24px #ff2d55,0 0 70px #ff2d5566} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes glitch1 { 0%,100%{clip-path:inset(0 0 96% 0);transform:translate(-4px,0)} 25%{clip-path:inset(40% 0 40% 0);transform:translate(4px,0)} 50%{clip-path:inset(70% 0 10% 0);transform:translate(-3px,0)} 75%{clip-path:inset(20% 0 65% 0);transform:translate(3px,0)} }
        @keyframes glitch2 { 0%,100%{clip-path:inset(50% 0 25% 0);transform:translate(4px,0)} 25%{clip-path:inset(10% 0 75% 0);transform:translate(-4px,0)} 50%{clip-path:inset(80% 0 5% 0);transform:translate(2px,0)} 75%{clip-path:inset(30% 0 55% 0);transform:translate(-2px,0)} }
        .animate-scanline   { animation: scanline 5s linear infinite; }
        .animate-gridMove   { animation: gridMove 4s linear infinite; }
        .animate-flicker    { animation: flicker 8s infinite; }
        .animate-fadeUp     { animation: fadeUp 0.6s ease both; }
        .animate-cardPulse  { animation: cardPulse 3s ease-in-out infinite; }
        .animate-blink      { animation: blink 1s infinite; }
        .animate-glitch1    { animation: glitch1 0.3s steps(1) infinite; }
        .animate-glitch2    { animation: glitch2 0.3s steps(1) infinite; }
        .delay-200  { animation-delay: 0.2s; }
        .delay-350  { animation-delay: 0.35s; }
        .delay-500  { animation-delay: 0.5s; }
        .delay-650  { animation-delay: 0.65s; }
        .delay-800  { animation-delay: 0.8s; }
      `}</style>

                <div className="animate-flicker font-mono-custom relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0f]">

                    {/* Animated grid bg */}
                    <div
                        className="animate-gridMove pointer-events-none absolute inset-0"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,45,85,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,45,85,.07) 1px,transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />

                    {/* Scanline */}
                    <div className="animate-scanline pointer-events-none absolute left-0 right-0 z-20 h-[3px] bg-gradient-to-b from-transparent via-[rgba(255,45,85,.4)] to-transparent" />

                    {/* Vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.9)_100%)]" />

                    {/* Card */}
                    <div className="animate-cardPulse animate-fadeUp relative z-10 w-[90%] max-w-[660px] border border-[rgba(255,45,85,.35)] bg-[rgba(10,10,15,.95)] px-10 py-14 backdrop-blur-md sm:px-14">

                        {/* Corner brackets */}
                        <span className="absolute left-4 top-4 h-[18px] w-[18px] border-l-2 border-t-2 border-[#ff2d55]" />
                        <span className="absolute right-4 top-4 h-[18px] w-[18px] border-r-2 border-t-2 border-[#ff2d55]" />
                        <span className="absolute bottom-4 left-4 h-[18px] w-[18px] border-b-2 border-l-2 border-[#ff2d55]" />
                        <span className="absolute bottom-4 right-4 h-[18px] w-[18px] border-b-2 border-r-2 border-[#ff2d55]" />

                        {/* Status bar */}
                        <div className="mb-9 flex items-center gap-2.5 text-[11px] tracking-[3px] text-[#ff2d55] opacity-60 uppercase">
                            <span className="animate-blink h-2 w-2 rounded-full bg-[#ff2d55]" />
                            SYSTEM_FAULT — KERNEL 0x00FF
                        </div>

                        {/* Glitch 404 */}
                        <div className="relative mb-1 select-none leading-none">
                            <p className="font-bebas text-[clamp(90px,18vw,148px)] leading-[0.9] tracking-[8px] text-[#ff2d55]">404</p>
                            {glitching && (
                                <>
                                    <p className="animate-glitch1 font-bebas absolute inset-0 text-[clamp(90px,18vw,148px)] leading-[0.9] tracking-[8px] text-[#00ffcc] opacity-80">404</p>
                                    <p className="animate-glitch2 font-bebas absolute inset-0 text-[clamp(90px,18vw,148px)] leading-[0.9] tracking-[8px] text-[#ff00aa] opacity-70">404</p>
                                </>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="my-5 h-px bg-gradient-to-r from-[#ff2d55] to-transparent" />

                        {/* Heading */}
                        <h1 className="animate-fadeUp delay-200 font-bebas mb-3 text-[clamp(18px,3vw,24px)] tracking-[4px] text-white opacity-0">
                            PAGE NOT FOUND
                        </h1>

                        {/* Subtitle */}
                        <p className="animate-fadeUp delay-350 mb-8 text-[13px] leading-7 tracking-wide text-white/40 opacity-0">
                            The requested resource could not be located on this server.<br />
                            It may have been moved, deleted, or never existed.
                        </p>

                        {/* Terminal */}
                        <div className="animate-fadeUp delay-500 mb-8 border border-[rgba(255,45,85,.15)] bg-[rgba(255,45,85,.04)] px-5 py-4 text-[11px] leading-7 tracking-wide text-[rgba(255,45,85,.7)] opacity-0">
                            <p>&gt; ERROR: 404 — RESOURCE_NOT_FOUND</p>
                            <p>&gt; PATH: /unknown/route</p>
                            <p>&gt; TIMESTAMP: {new Date().toISOString()}</p>
                            <p className="text-[rgba(255,45,85,.35)]">&gt; SEARCHING FALLBACK ROUTES{dots}</p>
                        </div>

                        {/* Buttons */}
                        <div className="animate-fadeUp delay-650 flex flex-wrap gap-3 opacity-0">
                            <button
                                onClick={() => window.history.back()}
                                className="bg-[#ff2d55] px-7 py-3 text-[12px] tracking-[2px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff0040] active:translate-y-0"
                            >
                                ← Go Back
                            </button>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="border border-[rgba(255,45,85,.45)] bg-transparent px-7 py-3 text-[12px] tracking-[2px] text-[#ff2d55] uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff2d55] hover:bg-[rgba(255,45,85,.08)] active:translate-y-0"
                            >
                                ⌂ Home
                            </button>
                        </div>

                        {/* Countdown */}
                        {countdown > 0 && (
                            <p className="animate-fadeUp delay-800 mt-6 text-[11px] tracking-[2px] text-white/20 opacity-0">
                                AUTO-REDIRECT IN {countdown}s
                            </p>
                        )}
                    </div>
                </div>
            </>
            );
};

            export default ErrorPage;