import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark' | 'horizontal';
  theme?: 'light' | 'dark';
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  theme = 'light',
  alt = 'One Allied Tanzania',
}) => {
  // Dimension presets
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto',
  };

  const textColor = theme === 'dark' ? '#F8FAFC' : '#0F172A';

  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 290 290"
        className={`${sizeClasses[size]} ${className}`}
        aria-label={alt}
        role="img"
      >
        <defs>
          <linearGradient id="markBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A2E8" />
            <stop offset="60%" stopColor="#0072CE" />
            <stop offset="100%" stopColor="#00529B" />
          </linearGradient>
          <linearGradient id="markLime" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9EE218" />
            <stop offset="65%" stopColor="#8DC63F" />
            <stop offset="100%" stopColor="#72AA24" />
          </linearGradient>
          <radialGradient id="markGloss" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#E8FA9E" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#9CD634" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#6AA218" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        <g transform="translate(15, 10)">
          {/* Lime Green Arc & Base */}
          <path
            d="M 125,255 C 65,255 30,210 40,145 C 44,120 55,95 72,75 C 66,100 70,140 92,170 C 115,202 155,228 200,228 C 220,228 238,220 252,208 C 248,238 220,265 180,275 C 160,280 140,280 120,278 C 85,274 50,245 42,210 C 37,190 38,165 45,140 C 40,165 42,195 58,220 C 75,248 100,262 135,262 C 185,262 225,225 235,170 C 238,155 238,135 232,118 C 248,142 250,175 240,205 C 225,248 180,275 125,255 Z"
            fill="url(#markLime)"
          />
          {/* Leaf Drop Gloss */}
          <path
            d="M 120,145 C 110,190 145,235 190,225 C 228,215 245,170 235,130 C 225,90 180,75 145,100 C 130,112 124,128 120,145 Z"
            fill="url(#markGloss)"
          />
          <ellipse
            cx="160"
            cy="135"
            rx="34"
            ry="20"
            transform="rotate(-28 160 135)"
            fill="#FFFFFF"
            opacity="0.45"
          />

          {/* Blue Figure Head */}
          <circle cx="132" cy="58" r="21" fill="#0072CE" />
          {/* Upper Reaching Arm & Body */}
          <path
            d="M 172,22 C 176,38 170,62 155,82 C 138,105 110,128 102,165 C 96,195 106,225 120,245 C 105,228 92,195 95,162 C 98,125 125,95 145,70 C 160,52 168,35 172,22 Z"
            fill="url(#markBlue)"
          />
          {/* Left Dynamic Arm Arc */}
          <path
            d="M 132,85 C 112,100 85,120 70,142 C 55,165 52,182 55,188 C 60,180 70,165 88,148 C 105,132 125,120 135,105 C 140,98 138,90 132,85 Z"
            fill="#0096E6"
          />
        </g>
      </svg>
    );
  }

  // Full official logo matching the One Allied Tanzania emblem
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 540 380"
        className={`${sizeClasses[size]} transition-transform duration-200`}
        aria-label={alt}
        role="img"
      >
        <defs>
          <linearGradient id="logoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A2E8" />
            <stop offset="50%" stopColor="#0072CE" />
            <stop offset="100%" stopColor="#00569E" />
          </linearGradient>
          <linearGradient id="logoLimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A4E01B" />
            <stop offset="60%" stopColor="#8DC63F" />
            <stop offset="100%" stopColor="#73AC24" />
          </linearGradient>
          <radialGradient id="logoGloss" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#E8FA9E" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#9BD633" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#6CA418" stopOpacity="0.95" />
          </radialGradient>
        </defs>

        <g id="logo-emblem" transform="translate(10, 10)">
          {/* Green outer ring & lower arc of the "O" */}
          <path
            d="M 125,255 C 65,255 30,210 40,145 C 44,120 55,95 72,75 C 66,100 70,140 92,170 C 115,202 155,228 200,228 C 220,228 238,220 252,208 C 248,238 220,265 180,275 C 160,280 140,280 120,278 C 85,274 50,245 42,210 C 37,190 38,165 45,140 C 40,165 42,195 58,220 C 75,248 100,262 135,262 C 185,262 225,225 235,170 C 238,155 238,135 232,118 C 248,142 250,175 240,205 C 225,248 180,275 125,255 Z"
            fill="url(#logoLimeGrad)"
          />
          <path
            d="M 52,222 C 40,195 38,155 52,120 C 65,90 88,65 118,50 C 100,68 85,92 78,118 C 68,152 75,190 98,218 C 118,242 150,258 182,255 C 145,266 100,262 72,242 C 60,233 54,225 52,222 Z"
            fill="#84CC16"
          />

          {/* Green 3D Droplet */}
          <path
            d="M 120,145 C 110,190 145,235 190,225 C 228,215 245,170 235,130 C 225,90 180,75 145,100 C 130,112 124,128 120,145 Z"
            fill="url(#logoGloss)"
          />
          <ellipse
            cx="160"
            cy="135"
            rx="34"
            ry="20"
            transform="rotate(-28 160 135)"
            fill="#FFFFFF"
            opacity="0.45"
          />

          {/* Blue Figure Head */}
          <circle cx="132" cy="58" r="21" fill="#0072CE" />
          {/* Blue Dynamic Swoosh (Upper Reaching) */}
          <path
            d="M 172,22 C 176,38 170,62 155,82 C 138,105 110,128 102,165 C 96,195 106,225 120,245 C 105,228 92,195 95,162 C 98,125 125,95 145,70 C 160,52 168,35 172,22 Z"
            fill="url(#logoBlueGrad)"
          />
          {/* Blue Left Body Arc */}
          <path
            d="M 132,85 C 112,100 85,120 70,142 C 55,165 52,182 55,188 C 60,180 70,165 88,148 C 105,132 125,120 135,105 C 140,98 138,90 132,85 Z"
            fill="#0096E6"
          />
          <path
            d="M 100,140 C 90,160 88,195 100,225 C 92,208 88,178 94,155 C 98,142 108,125 118,115 C 110,122 104,130 100,140 Z"
            fill="#005A9C"
          />

          {/* Letter 'n' */}
          <path
            d="M 275,172 L 275,270 L 310,270 L 310,195 C 310,178 322,168 338,168 C 354,168 365,178 365,195 L 365,270 L 400,270 L 400,188 C 400,152 376,135 348,135 C 328,135 315,145 306,160 L 306,140 L 275,140 L 275,172 Z"
            fill="url(#logoLimeGrad)"
          />

          {/* Letter 'e' */}
          <path
            d="M 458,135 C 418,135 390,165 390,205 C 390,248 420,275 462,275 C 488,275 508,264 520,248 L 494,228 C 486,238 475,244 462,244 C 442,244 426,230 424,212 L 526,212 C 527,208 528,200 528,194 C 528,158 500,135 458,135 Z M 424,190 C 426,172 440,162 458,162 C 476,162 490,172 492,190 L 424,190 Z"
            fill="url(#logoLimeGrad)"
          />
        </g>

        {/* Brand Name "Allied Tanzania" (combined with "One" emblem = One Allied Tanzania) */}
        <text
          x="180"
          y="350"
          fontFamily="'Plus Jakarta Sans', 'Manrope', 'Arial Black', sans-serif"
          fontSize="44"
          fontWeight="900"
          fontStyle="italic"
          fill={textColor}
          letterSpacing="-0.5"
        >
          Allied Tanzania
        </text>
      </svg>
    </div>
  );
};
