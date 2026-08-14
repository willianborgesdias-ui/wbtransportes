import React from "react";
import { ShieldCheck } from "lucide-react";

// Precise high-fidelity recreation of the ABALOG GROUP vector logo
const AbalogLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Upper upward growth bar chart & arrow indicator */}
    <g>
      {/* 5 rounded vertical bars representing logistics metrics & growth */}
      <rect x="50" y="28" width="3.5" height="14" rx="1" fill="white" className="fill-white/70 group-hover:fill-white transition-colors duration-300" />
      <rect x="58" y="23" width="3.5" height="19" rx="1" fill="white" className="fill-white/70 group-hover:fill-white transition-colors duration-300" />
      <rect x="66" y="17" width="3.5" height="25" rx="1" fill="white" className="fill-white/70 group-hover:fill-white transition-colors duration-300" />
      <rect x="74" y="21" width="3.5" height="21" rx="1" fill="white" className="fill-white/70 group-hover:fill-white transition-colors duration-300" />
      <rect x="82" y="15" width="3.5" height="27" rx="1" fill="white" className="fill-white/70 group-hover:fill-white transition-colors duration-300" />
      
      {/* Dynamic line connecting the bars */}
      <path 
        d="M 45 36 L 57 24 L 66 30 L 88 8" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="stroke-white/70 group-hover:stroke-white transition-colors duration-300"
      />
      {/* Target Arrow Head pointing right-up */}
      <path 
        d="M 78 8 H 88 V 18" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="stroke-white/70 group-hover:stroke-white transition-colors duration-300"
      />
    </g>

    {/* Elegant futuristic ABALOG text */}
    <g>
      {/* A */}
      <path d="M 6 83 L 14 58 L 22 83 M 10 74 H 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* B */}
      <path d="M 28 58 H 36 A 4.5 4.5 0 0 1 40.5 62.5 A 4.5 4.5 0 0 1 36 67 H 28 H 37 A 5 5 0 0 1 42 72 A 5 5 0 0 1 37 83 H 28 V 58 Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* A */}
      <path d="M 48 83 L 56 58 L 64 83 M 52 74 H 60" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* L */}
      <path d="M 70 58 V 83 H 82" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Stylized Glowing Golden Circuit O */}
      <g>
        {/* Outer concentric high-tech ring */}
        <circle cx="96" cy="70.5" r="12" stroke="#FBBF24" strokeWidth="2.5" className="drop-shadow-[0_0_8px_rgba(251,191,36,0.85)] group-hover:scale-105 transition-transform duration-300" />
        {/* Internal micro-electronic schematic traces */}
        <path d="M 87.5 79 L 104.5 62" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="96" cy="70.5" r="3.5" stroke="#FBBF24" strokeWidth="1" fill="none" />
        <circle cx="87.5" cy="79" r="1.5" fill="#FBBF24" />
        <circle cx="104.5" cy="62" r="1.5" fill="#FBBF24" />
      </g>

      {/* G */}
      <path d="M 129 65 C 127 61 123 58.5 119 58.5 C 111 58.5 107 64 107 70.5 C 107 77 111 82.5 119 82.5 C 124 82.5 128 80 129 75 H 121" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* GROUP subtext spacing */}
    <text 
      x="50%" 
      y="114" 
      textAnchor="middle" 
      fill="white" 
      fontSize="11" 
      fontWeight="900" 
      letterSpacing="8" 
      className="fill-white/60 group-hover:fill-white/90 transition-colors duration-300 font-sans"
    >
      GROUP
    </text>
  </svg>
);

// High-fidelity luxury vector asset recreating the circular gold seal of ELITE DO OURO 18K
const EliteDoOuroLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Concentric outer circular rope with dynamic rotational neon gold glow */}
    <circle cx="70" cy="70" r="54" stroke="#FBBF24" strokeWidth="1.5" strokeDasharray="3 2" className="drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
    <circle cx="70" cy="70" r="49" stroke="#EAB308" strokeWidth="1" className="opacity-60" />

    {/* Elegant classical background sunburst rays */}
    <path d="M 70 70 L 70 30 M 70 70 L 70 110 M 70 70 L 30 70 M 70 70 L 110 70" stroke="#FBBF24" strokeWidth="0.5" className="opacity-20 translate-x-0" />
    <path d="M 70 70 L 42 42 M 70 70 L 98 98 M 70 70 L 42 98 M 70 70 L 98 42" stroke="#FBBF24" strokeWidth="0.5" className="opacity-15" />

    {/* Elite gold crown at the top center representing nobility and high-quality 18K */}
    <path 
      d="M 56 46 L 61 54 L 70 48 L 79 54 L 84 46 L 78 59 L 62 59 Z" 
      fill="#FBBF24" 
      className="drop-shadow-[0_0_6px_rgba(251,191,36,0.9)] animate-pulse"
    />
    {/* Small jewel beads on crown tips */}
    <circle cx="56" cy="45" r="1" fill="#FEF08A" />
    <circle cx="70" cy="47" r="1.2" fill="#FEF08A" />
    <circle cx="84" cy="45" r="1" fill="#FEF08A" />

    {/* Luxury styled monogram letter EO with high typography contrast */}
    <text 
      x="70" 
      y="84" 
      textAnchor="middle" 
      fill="#FBBF24" 
      fontSize="19" 
      fontWeight="900" 
      letterSpacing="1.5" 
      className="drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] font-sans"
    >
      EO
    </text>

    {/* 18K luxury quality certification line */}
    <path d="M 50 92 H 90" stroke="#FBBF24" strokeWidth="1.2" className="opacity-40" />
    <text 
      x="70" 
      y="102" 
      textAnchor="middle" 
      fill="#FEF08A" 
      fontSize="7.5" 
      fontWeight="900" 
      letterSpacing="3"
      className="font-sans tracking-wide"
    >
      18K
    </text>

    {/* Classic frame leaf/wing flourish design elements left/right */}
    <path d="M 38 72 C 38 68, 44 70, 42 74" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" className="opacity-80" />
    <path d="M 102 72 C 102 68, 96 70, 98 74" stroke="#FBBF24" strokeWidth="1" strokeLinecap="round" className="opacity-80" />
  </svg>
);

// High-fidelity vector logo representing NSL BRASIL
const NslBrasilLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized Globe network with custom faceted nodes and 3 golden stars */}
    <g transform="translate(-8, 0)">
      {/* Outer Circle Sphere */}
      <circle cx="50" cy="70" r="33" stroke="#0284C7" strokeWidth="2" className="stroke-sky-500 group-hover:stroke-sky-400 transition-colors" />
      
      {/* Meridians */}
      <path d="M 50 37 V 103" stroke="#0284C7" strokeWidth="1.5" className="stroke-sky-500/80" />
      <path d="M 34 49 C 42 54, 42 86, 34 91" stroke="#0284C7" strokeWidth="1.2" className="stroke-sky-500/60" />
      <path d="M 66 49 C 58 54, 58 86, 66 91" stroke="#0284C7" strokeWidth="1.2" className="stroke-sky-500/60" />
      
      {/* Latitudes */}
      <path d="M 22 53 H 78" stroke="#0284C7" strokeWidth="1.2" className="stroke-sky-500/70" />
      <path d="M 17 70 H 83" stroke="#0284C7" strokeWidth="1.5" className="stroke-sky-500/80" />
      <path d="M 22 87 H 78" stroke="#0284C7" strokeWidth="1.2" className="stroke-sky-500/70" />
      
      {/* Triangular Facets pattern connecting node endpoints */}
      <path d="M 50 37 L 34 49 L 17 70 L 34 91 L 50 103 L 66 91 L 83 70 L 66 49 Z" stroke="#0284C7" strokeWidth="1" className="stroke-sky-500/55" />
      <path d="M 50 37 L 50 70" stroke="#0284C7" strokeWidth="1" />
      <path d="M 50 70 L 34 49" stroke="#0284C7" strokeWidth="1" />
      <path d="M 50 70 L 66 49" stroke="#0284C7" strokeWidth="1" />
      <path d="M 50 70 L 17 70" stroke="#0284C7" strokeWidth="1" />
      <path d="M 50 70 L 83 70" stroke="#0284C7" strokeWidth="1" />
      <path d="M 50 70 L 34 91" stroke="#0284C7" strokeWidth="1" />
      <path d="M 50 70 L 66 91" stroke="#0284C7" strokeWidth="1" />
      
      {/* 3 Golden quality stars representing global service certifications */}
      {/* Left Star */}
      <path d="M 34 113 L 35.5 110.5 L 38 110.5 L 36 112.5 L 36.5 115 L 34 113.5 L 31.5 115 L 32 112.5 L 30 110.5 L 32.5 110.5 Z" fill="#FBBF24" />
      {/* Center Star (slightly larger) */}
      <path d="M 50 116 L 51.8 113 L 55 113 L 52.5 115 L 53.2 118 L 50 116.2 L 46.8 118 L 47.5 115 L 45 113 L 48.2 113 Z" fill="#FBBF24" />
      {/* Right Star */}
      <path d="M 66 113 L 67.5 110.5 L 70 110.5 L 68 112.5 L 68.5 115 L 66 113.5 L 63.5 115 L 64 112.5 L 62 110.5 L 64.5 110.5 Z" fill="#FBBF24" />
    </g>

    {/* Elegant geometric NSL wordmark with solid rounded curves */}
    <text 
      x="91" 
      y="66" 
      fill="#0284C7" 
      fontSize="25" 
      fontWeight="900" 
      className="font-sans font-black tracking-normal fill-sky-500 group-hover:fill-sky-400 transition-colors duration-300"
    >
      NSL
    </text>
    
    {/* BRASIL regional tagline wordmark */}
    <text 
      x="91" 
      y="86" 
      fill="white" 
      fontSize="11" 
      fontWeight="900" 
      letterSpacing="2"
      className="font-sans opacity-60 group-hover:opacity-100 transition-opacity duration-300"
    >
      BRASIL
    </text>
  </svg>
);

// Modern high-speed vector logo for JETCO BRASIL
const JetcoLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Silver Stylized High-Speed X */}
    <g className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
      {/* Background X segments with beautiful curve swooshes */}
      <path d="M 32 25 L 56 25 L 80 62 L 56 62 Z" fill="url(#silverGrad)" />
      <path d="M 108 25 L 84 25 L 60 62 L 84 62 Z" fill="url(#silverGrad)" />
      <path d="M 32 115 L 56 115 L 80 78 L 56 78 Z" fill="url(#silverGrad)" />
      <path d="M 108 115 L 84 115 L 60 78 L 84 78 Z" fill="url(#silverGrad)" />
      
      {/* Dynamic inner speed swooshes */}
      <path d="M 44 35 C 55 45, 65 60, 70 70 C 75 60, 85 45, 96 35" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
      <path d="M 44 105 C 55 95, 65 80, 70 70 C 75 80, 85 95, 96 105" stroke="white" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    </g>

    {/* Elegant futuristic container for JETCO to contrast on top */}
    <rect x="15" y="52" width="110" height="36" rx="6" fill="#0b0f19" stroke="#EA580C" strokeWidth="2" className="drop-shadow-[0_0_10px_rgba(234,88,12,0.4)]" />
    
    {/* High contrast orange JETCO text */}
    <text 
      x="70" 
      y="77" 
      textAnchor="middle" 
      fill="#EA580C" 
      fontSize="19" 
      fontWeight="900" 
      letterSpacing="2"
      className="font-sans font-black tracking-widest drop-shadow-[0_0_6px_rgba(234,88,12,0.7)]"
    >
      JETCO
    </text>

    <defs>
      <linearGradient id="silverGrad" x1="32" y1="25" x2="108" y2="115" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#CBD5E1" />
        <stop offset="70%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
    </defs>
  </svg>
);

// High-fidelity natural design vector reproducing Life Balanced by Feh Crispim logo beautifully
const LifeBalancedLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Organic Green Leaves graphics */}
    <g transform="translate(82, 18)" className="opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
      {/* Upper Leaf 1 */}
      <path d="M 0 18 C -4 10, -3 0, 6 0 C 10 4, 8 13, 0 18 Z" stroke="#34D399" strokeWidth="1.8" fill="none" className="drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
      <path d="M 0 18 C 1 12, 3 6, 6 0" stroke="#34D399" strokeWidth="1.2" />
      
      {/* Middle Leaf 2 */}
      <path d="M 7 20 C 11 12, 17 8, 22 13 C 20 19, 13 21, 7 20 Z" stroke="#34D399" strokeWidth="1.8" fill="none" className="drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
      <path d="M 7 20 C 11 17, 16 15, 22 13" stroke="#34D399" strokeWidth="1.2" />
      
      {/* Lower Leaf 3 */}
      <path d="M 3 30 C 10 29, 18 31, 21 35 C 15 39, 7 38, 3 30 Z" stroke="#34D399" strokeWidth="1.8" fill="none" className="drop-shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
      <path d="M 3 30 C 9 31, 15 33, 21 35" stroke="#34D399" strokeWidth="1.2" />
    </g>

    {/* Elegant cursive hand-made typography effect for "Life" */}
    <text 
      x="44" 
      y="54" 
      textAnchor="middle" 
      fill="#34D399" 
      fontSize="35" 
      fontWeight="900"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      className="drop-shadow-[0_0_8px_rgba(52,211,153,0.7)] font-serif tracking-tight"
    >
      Life
    </text>

    {/* Elegant gold geometric typography for "balanced" */}
    <text 
      x="70" 
      y="84" 
      textAnchor="middle" 
      fill="#FBBF24" 
      fontSize="17.5" 
      fontWeight="800"
      letterSpacing="1.2"
      className="font-sans font-extrabold select-none tracking-wide drop-shadow-[0_0_6px_rgba(251,191,36,0.5)] uppercase"
    >
      balanced
    </text>

    {/* Autograph / script text "by Feh Crispim" styling */}
    <text 
      x="70" 
      y="112" 
      textAnchor="middle" 
      fill="white" 
      fontSize="10" 
      fontWeight="600"
      fontStyle="italic"
      letterSpacing="0.5"
      className="font-sans opacity-80 group-hover:opacity-100 transition-opacity duration-300 italic text-[10px]"
    >
      By Feh Crispim
    </text>
  </svg>
);

// High-fidelity natural design vector reproducing Cintia Borba Bolos e Doces logo
const CintiaBorbaLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Whisk in background (slanted) */}
    <g className="opacity-30 select-none">
      <path d="M 42 105 L 85 40" stroke="#F472B6" strokeWidth="1.8" strokeLinecap="round" />
      {/* Whisk wires (balloon shape loops at the top right) */}
      <path d="M 75 55 C 80 43, 98 48, 88 64 C 80 68, 70 65, 75 55 Z" stroke="#F472B6" strokeWidth="1.2" />
      <path d="M 72 59 C 75 48, 92 53, 85 68" stroke="#F472B6" strokeWidth="1" />
      <path d="M 78 51 C 82 40, 102 44, 92 60" stroke="#F472B6" strokeWidth="1" />
      {/* Whisk handle ring */}
      <circle cx="41" cy="106" r="2" stroke="#F472B6" strokeWidth="1.2" />
    </g>

    {/* Retro Stand Mixer (Mint Green and Rose Pink) */}
    <g transform="translate(0, -6)" className="group-hover:scale-105 transition-transform duration-300">
      {/* Back Neck of Mixer */}
      <path d="M 52 82 C 52 82, 53 60, 48 55 C 46 53, 44 55, 44 58 L 47 82 Z" fill="#6EE7B7" stroke="#374151" strokeWidth="1" />
      
      {/* Base Plate */}
      <path d="M 42 82 H 84 Q 85 82 85 84 Q 85 86 83 86 H 43 Q 41 86 41 84 Q 41 82 42 82 Z" fill="#6EE7B7" stroke="#374151" strokeWidth="1" />
      
      {/* Mixer Head (Top engine box) */}
      <path d="M 45 44 H 79 C 81 44, 82 45, 82 47 V 53 C 82 55, 81 56, 79 56 H 48 L 45 44 Z" fill="#6EE7B7" stroke="#374151" strokeWidth="1" />
      
      {/* Small detail knobs */}
      <circle cx="53" cy="50" r="1.2" fill="#374151" />
      <circle cx="74" cy="50" r="0.8" fill="#FFFFFF" />
      
      {/* Beater Shaft */}
      <rect x="70" y="56" width="2" height="8" fill="#D1D5DB" stroke="#374151" strokeWidth="0.6" />
      
      {/* Pink Bowl */}
      <path d="M 58 64 H 86 C 88 64, 88 78, 72 82 C 58 78, 56 64, 58 64 Z" fill="#F472B6" stroke="#374151" strokeWidth="1" />
      {/* Bowl rim */}
      <rect x="56" y="63" width="31" height="2" rx="0.5" fill="#F472B6" stroke="#374151" strokeWidth="0.8" />
    </g>

    {/* Cursive cursive text Cintia Borba */}
    <text 
      x="70" 
      y="104" 
      textAnchor="middle" 
      fill="#F472B6" 
      fontSize="15.5" 
      fontWeight="900"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      className="drop-shadow-[0_0_8px_rgba(244,114,182,0.65)] font-serif"
    >
      Cintia Borba
    </text>

    {/* Subtitle: BOLOS E DOCES flanked by pink hearts */}
    <g transform="translate(0, 3)">
      {/* Small left heart */}
      <path d="M 33 111 C 31 109, 29 111, 31 113 L 33 115 L 35 113 C 37 111, 35 109, 33 111 Z" fill="#F472B6" />
      
      <text 
        x="70" 
        y="116" 
        textAnchor="middle" 
        fill="white" 
        fontSize="7.5" 
        fontWeight="900" 
        letterSpacing="2.5"
        className="font-sans font-black tracking-widest opacity-80 group-hover:opacity-100 transition-opacity"
      >
        BOLOS E DOCES
      </text>

      {/* Small right heart */}
      <path d="M 107 111 C 105 109, 103 111, 105 113 L 107 115 L 109 113 C 111 111, 109 109, 107 111 Z" fill="#F472B6" />
    </g>
  </svg>
);

// High-fidelity natural design vector reproducing Espaço Virtual logo
const EspacoVirtualLogo = () => (
  <svg viewBox="0 0 140 140" className="w-14 h-14 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer circular badge frame */}
    <circle cx="70" cy="70" r="62" stroke="#374151" strokeWidth="2.5" className="opacity-80" />
    <circle cx="70" cy="70" r="58" stroke="#84CC16" strokeWidth="1" strokeDasharray="4 4" className="stroke-lime-500/40" />

    {/* High-tech green digital EV monogram */}
    <g transform="translate(5, 5)" className="group-hover:scale-105 transition-transform duration-300">
      {/* "E" portion */}
      <path 
        d="M 32 35 H 66 Q 67.5 35 67.5 38 V 41.5 Q 67.5 44 66 44 H 36 C 34 44 34 46.5 36 46.5 H 58 Q 59.5 46.5 59.5 49.5 V 53 Q 59.5 56 58 56 H 36 C 34 56 34 58.5 36 58.5 H 66 Q 67.5 58.5 67.5 61.5 V 65 Q 67.5 68 66 68 H 32 Q 30 68 30 65 V 38 Q 30 35 32 35 Z" 
        fill="#84CC16" 
        className="drop-shadow-[0_0_8px_rgba(132,204,22,0.85)]"
      />
      {/* "V" portion */}
      <path 
        d="M 72 35 H 86 Q 88 35 88 38 L 102 65 Q 103 67 101.5 68 L 94 68 Q 92 68 91 66 L 82 47 L 73 66 Q 72 68 70 68 H 62 L 70 38 Q 71 35 72 35 Z" 
        fill="#84CC16" 
        className="drop-shadow-[0_0_8px_rgba(132,204,22,0.85)]"
      />
    </g>

    {/* ESPAÇO VIRTUAL text */}
    <text 
      x="70" 
      y="84" 
      textAnchor="middle" 
      fill="white" 
      fontSize="12.5" 
      fontWeight="900" 
      letterSpacing="1.2"
      className="font-sans font-black tracking-wider uppercase drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
    >
      ESPAÇO VIRTUAL
    </text>

    {/* Subtitle / Services taglines info */}
    <text 
      x="70" 
      y="97" 
      textAnchor="middle" 
      fill="#84CC16" 
      fontSize="7.5" 
      fontWeight="900" 
      letterSpacing="0.6"
      className="font-sans tracking-wide uppercase drop-shadow-[0_0_4px_rgba(132,204,22,0.45)]"
    >
      Lan House & Periféricos
    </text>

    <text 
      x="70" 
      y="110" 
      textAnchor="middle" 
      fill="white" 
      fontSize="6" 
      fontWeight="600" 
      letterSpacing="0.4"
      className="font-sans opacity-60 uppercase tracking-widest"
    >
      Xerox • Impressões
    </text>

    {/* Small active design indicators (Red LED accents) */}
    <circle cx="70" cy="8" r="2.5" fill="#EF4444" className="drop-shadow-[0_0_4px_rgba(239,68,68,0.7)] animate-pulse" />
    <circle cx="70" cy="132" r="2.5" fill="#EF4444" className="drop-shadow-[0_0_4px_rgba(239,68,68,0.7)]" />
  </svg>
);

interface ClientBrand {
  name: string;
  segment: string;
  icon?: React.ComponentType<{ className?: string }>;
  logoSvg?: React.ReactNode;
  url?: string;
  color: "blue" | "pink" | "green" | "cyan" | "gold" | "purple" | "orange" | "lime";
  glowClass: string;
  textGlow: string;
  borderHover: string;
}

const CLIENTS_LIST: ClientBrand[] = [
  {
    name: "ABALOG Group",
    segment: "Logística Internacional",
    logoSvg: <AbalogLogo />,
    url: "https://www.instagram.com/abaloggroup/",
    color: "gold",
    glowClass: "group-hover:text-amber-400 group-hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]",
    textGlow: "text-amber-400",
    borderHover: "hover:border-amber-400/40"
  },
  {
    name: "Espaço Virtual",
    segment: "Lan House & Periféricos",
    logoSvg: <EspacoVirtualLogo />,
    url: "https://www.instagram.com/evirtual.lanhouse/",
    color: "lime",
    glowClass: "group-hover:text-lime-400 group-hover:drop-shadow-[0_0_12px_rgba(132,204,22,0.8)]",
    textGlow: "text-lime-400",
    borderHover: "hover:border-lime-400/40"
  },
  {
    name: "Cintia Borba",
    segment: "Confeitaria Artesanal",
    logoSvg: <CintiaBorbaLogo />,
    url: "https://www.instagram.com/cintiaborbabolosedoces/",
    color: "pink",
    glowClass: "group-hover:text-pink-400 group-hover:drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]",
    textGlow: "text-pink-400",
    borderHover: "hover:border-pink-400/40"
  },
  {
    name: "Life Balanced",
    segment: "Bem-Estar & Saúde",
    logoSvg: <LifeBalancedLogo />,
    url: "https://www.instagram.com/fehcrispim_lifeballanced/",
    color: "green",
    glowClass: "group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]",
    textGlow: "text-emerald-400",
    borderHover: "hover:border-emerald-400/40"
  },
  {
    name: "NSL Brasil",
    segment: "Navegação & Logística",
    logoSvg: <NslBrasilLogo />,
    url: "https://www.instagram.com/nslbrasil/",
    color: "blue",
    glowClass: "group-hover:text-sky-400 group-hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.8)]",
    textGlow: "text-sky-400",
    borderHover: "hover:border-sky-500/40"
  },
  {
    name: "Jetco Brasil",
    segment: "Navegação & Trading",
    logoSvg: <JetcoLogo />,
    url: "https://www.instagram.com/jetcobrasil/",
    color: "orange",
    glowClass: "group-hover:text-orange-500 group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]",
    textGlow: "text-orange-500",
    borderHover: "hover:border-orange-500/40"
  },
  {
    name: "Elite do Ouro 18K",
    segment: "Grife & Joalheria",
    logoSvg: <EliteDoOuroLogo />,
    url: "https://www.instagram.com/elitedoouro/",
    color: "gold",
    glowClass: "group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]",
    textGlow: "text-yellow-400",
    borderHover: "hover:border-yellow-400/40"
  }
];

export default function Clients() {
  return (
    <section id="clientes" className="py-20 bg-brand-dark relative overflow-hidden border-b border-white/5">
      {/* Decorative backdrop grid nodes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Visual Light Burst */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-neon-blue mb-4 block">
            Quem Confia Em Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter mb-4">
            Operações sustentadas por <span className="silver-gradient italic font-serif not-italic">Grandes Marcas</span>
          </h2>
          <p className="text-white/50 text-xs font-light tracking-wider uppercase">
            Garantimos o fluxo contínuo de indústrias, trading companies e importadoras de Itajaí e região.
          </p>
        </div>

        {/* Carousel / Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5">
          {CLIENTS_LIST.map((client, index) => {
            const CardContent = (
              <>
                {/* Logo Graphic Container */}
                <div className="w-18 h-18 rounded-xl bg-white/5 flex items-center justify-center mb-1 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 p-2">
                  {client.logoSvg ? (
                    client.logoSvg
                  ) : client.icon ? (
                    (() => {
                      const Icon = client.icon;
                      return <Icon className={`w-9 h-9 text-white/40 transition-all duration-300 ${client.glowClass}`} />;
                    })()
                  ) : null}
                </div>

                {/* Info Text */}
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase tracking-wider text-white group-hover:text-white transition-colors">
                    {client.name}
                  </h4>
                  <span className={`text-[9px] font-black uppercase tracking-widest block opacity-50 group-hover:opacity-100 transition-opacity ${client.textGlow}`}>
                    {client.segment}
                  </span>
                </div>
              </>
            );

            const cardClasses = `p-6 bg-brand-surface/30 backdrop-blur-sm border border-white/5 rounded-xl flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 group ${client.borderHover} hover:bg-brand-surface/75 w-full h-full`;

            if (client.url) {
              return (
                <a
                  key={index}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardClasses} cursor-pointer hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]`}
                  id={`client-card-${index}`}
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={index}
                className={`${cardClasses} cursor-default`}
                id={`client-card-${index}`}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Value Statement Badge */}
        <div className="mt-14 p-4 rounded-xl max-w-3xl mx-auto bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
          <div className="flex items-center gap-2 shrink-0 px-3 py-1 bg-neon-green/10 text-neon-green border border-neon-green/20 rounded-full text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            Compromisso WB
          </div>
          <p className="text-white/60 text-[11px] leading-relaxed font-light uppercase tracking-wider max-w-xl">
            Atuamos em conformidade com as exigências fiscais e portuárias, prestando serviços dedicados de alta responsabilidade e trânsito ágil.
          </p>
        </div>
      </div>
    </section>
  );
}
