import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        dodger: {
          '50': 'oklch(97% 0.05 253.21)',
          '100': 'oklch(92% 0.08 253.21)',
          '200': 'oklch(85% 0.12 253.21)',
          '300': 'oklch(78% 0.15 253.21)',
          '400': 'oklch(71% 0.17 253.21)',
          '500': 'oklch(65.2% 0.1901 253.21)',
          '600': 'oklch(58% 0.17 253.21)',
          '700': 'oklch(51% 0.15 253.21)',
          '800': 'oklch(44% 0.12 253.21)',
          '900': 'oklch(37% 0.08 253.21)',
          '950': 'oklch(30% 0.05 253.21)',
        },
        hydrant: {
          '50': 'oklch(97% 0.06 29.23)',
          '100': 'oklch(92% 0.09 29.23)',
          '200': 'oklch(85% 0.14 29.23)',
          '300': 'oklch(78% 0.18 29.23)',
          '400': 'oklch(70% 0.22 29.23)',
          '500': 'oklch(62.8% 0.2577 29.23)',
          '600': 'oklch(56% 0.22 29.23)',
          '700': 'oklch(49% 0.18 29.23)',
          '800': 'oklch(42% 0.14 29.23)',
          '900': 'oklch(35% 0.09 29.23)',
          '950': 'oklch(28% 0.06 29.23)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      const fontTokens = {
        // Sans tokens
        '.text-sans-xs': {
          'font-family': 'var(--font-inter)',
          'font-size': '0.75rem',
          'line-height': '1rem',
          'letter-spacing': '-0.02em'
        },
        '.text-sans-sm': {
          'font-family': 'var(--font-inter)',
          'font-size': '0.875rem',
          'line-height': '1.25rem',
          'letter-spacing': '-0.02em'
        },
        '.text-sans-base': {
          'font-family': 'var(--font-inter)',
          'font-size': '1rem',
          'line-height': '1.5rem',
          'letter-spacing': '-0.03em'
        },
        '.text-sans-lg': {
          'font-family': 'var(--font-inter)',
          'font-size': '1.125rem',
          'line-height': '1.75rem',
          'letter-spacing': '-0.04em'
        },
        '.text-sans-xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '1.25rem',
          'line-height': '1.75rem',
          'letter-spacing': '-0.04em'
        },
        '.text-sans-2xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '1.5rem',
          'line-height': '2rem',
          'letter-spacing': '-0.05em'
        },
        '.text-sans-3xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '1.875rem',
          'line-height': '2.25rem',
          'letter-spacing': '-0.05em'
        },
        '.text-sans-4xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '2.25rem',
          'line-height': '2.5rem',
          'letter-spacing': '-0.05em'
        },
        '.text-sans-5xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '3rem',
          'line-height': '1',
          'letter-spacing': '-0.06em'
        },
        '.text-sans-6xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '3.75rem',
          'line-height': '1',
          'letter-spacing': '-0.07em'
        },
        '.text-sans-7xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '4.5rem',
          'line-height': '1',
          'letter-spacing': '-0.07em'
        },
        '.text-sans-8xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '6rem',
          'line-height': '1',
          'letter-spacing': '-0.07em'
        },
        '.text-sans-9xl': {
          'font-family': 'var(--font-inter)',
          'font-size': '8rem',
          'line-height': '1',
          'letter-spacing': '-0.08em'
        },

        // Serif tokens
        '.text-serif-xs': {
          'font-family': 'Times New Roman',
          'font-size': '0.75rem',
          'line-height': '1',
          'letter-spacing': '-0.04em'
        },
        '.text-serif-sm': {
          'font-family': 'Times New Roman',
          'font-size': '0.875rem',
          'line-height': '1',
          'letter-spacing': '-0.04em'
        },
        '.text-serif-base': {
          'font-family': 'Times New Roman',
          'font-size': '1rem',
          'line-height': '1',
          'letter-spacing': '-0.04em'
        },
        '.text-serif-lg': {
          'font-family': 'Times New Roman',
          'font-size': '1.125rem',
          'line-height': '1',
          'letter-spacing': '-0.04em'
        },
        '.text-serif-xl': {
          'font-family': 'Times New Roman',
          'font-size': '1.25rem',
          'line-height': '1',
          'letter-spacing': '-0.04em'
        },
        '.text-serif-2xl': {
          'font-family': 'Times New Roman',
          'font-size': '1.5rem',
          'line-height': '.85',
          'letter-spacing': '-0.075em'
        },
        '.text-serif-3xl': {
          'font-family': 'Times New Roman',
          'font-size': '1.875rem',
          'line-height': '.85',
          'letter-spacing': '-0.075em'
        },
        '.text-serif-4xl': {
          'font-family': 'Times New Roman',
          'font-size': '2.25rem',
          'line-height': '.85',
          'letter-spacing': '-0.075em'
        },
        '.text-serif-5xl': {
          'font-family': 'Times New Roman',
          'font-size': '3rem',
          'line-height': '.85',
          'letter-spacing': '-0.075em'
        },
        '.text-serif-6xl': {
          'font-family': 'Times New Roman',
          'font-size': '3.75rem',
          'line-height': '.8',
          'letter-spacing': '-0.08em'
        },
        '.text-serif-7xl': {
          'font-family': 'Times New Roman',
          'font-size': '4.5rem',
          'line-height': '.8',
          'letter-spacing': '-0.08em'
        },
        '.text-serif-8xl': {
          'font-family': 'Times New Roman',
          'font-size': '6rem',
          'line-height': '.8',
          'letter-spacing': '-0.09em'
        },
        '.text-serif-9xl': {
          'font-family': 'Times New Roman',
          'font-size': '8rem',
          'line-height': '.8',
          'letter-spacing': '-0.1em'
        },

        // Mono tokens
        '.text-mono-xs': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '0.75rem',
          'line-height': '1rem',
          'letter-spacing': '-0.05em'
        },
        '.text-mono-sm': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '0.875rem',
          'line-height': '1.25rem',
          'letter-spacing': '-0.06em'
        },
        '.text-mono-base': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '1rem',
          'line-height': '1.5rem',
          'letter-spacing': '-0.06em'
        },
        '.text-mono-lg': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '1.125rem',
          'line-height': '1.75rem',
          'letter-spacing': '-0.07em'
        },
        '.text-mono-xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '1.25rem',
          'line-height': '1.75rem',
          'letter-spacing': '-0.07em'
        },
        '.text-mono-2xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '1.5rem',
          'line-height': '2rem',
          'letter-spacing': '-0.08em'
        },
        '.text-mono-3xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '1.875rem',
          'line-height': '2.25rem',
          'letter-spacing': '-0.08em'
        },
        '.text-mono-4xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '2.25rem',
          'line-height': '2.5rem',
          'letter-spacing': '-0.08em'
        },
        '.text-mono-5xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '3rem',
          'line-height': '1',
          'letter-spacing': '-0.08em'
        },
        '.text-mono-6xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '3.75rem',
          'line-height': '1',
          'letter-spacing': '-0.08em'
        },
        '.text-mono-7xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '4.5rem',
          'line-height': '1',
          'letter-spacing': '-0.09em'
        },
        '.text-mono-8xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '6rem',
          'line-height': '1',
          'letter-spacing': '-0.09em'
        },
        '.text-mono-9xl': {
          'font-family': 'var(--font-geist-mono)',
          'font-size': '8rem',
          'line-height': '1',
          'letter-spacing': '-0.1em'
        }
      };

      addUtilities(fontTokens);
    }),
    
    // Plugin for semantic HTML elements
    plugin(function({ addBase }) {
      addBase({
        // Headings
        'h1': {
          '@apply text-sans-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl': {},
        },
        'h2': {
          '@apply text-sans-3xl font-semibold tracking-tight scroll-m-20 border-b pb-2 first:mt-0': {},
        },
        'h3': {
          '@apply text-sans-2xl font-semibold tracking-tight scroll-m-20': {},
        },
        'h4': {
          '@apply text-sans-xl font-semibold tracking-tight scroll-m-20': {},
        },
        'h5': {
          '@apply text-sans-lg font-semibold tracking-tight scroll-m-20': {},
        },
        'h6': {
          '@apply text-sans-base font-semibold tracking-tight scroll-m-20': {},
        },
        
        // Paragraph
        'p': {
          '@apply text-sans-base leading-7 [&:not(:first-child)]:mt-6': {},
        },
        
        // Lists
        'ul': {
          '@apply my-6 ml-6 list-disc [&>li]:mt-2': {},
        },
        'ol': {
          '@apply my-6 ml-6 list-decimal [&>li]:mt-2': {},
        },
        
        // Blockquote
        'blockquote': {
          '@apply mt-6 border-l-2 pl-6 italic': {},
        },
        
        // Code
        'code': {
          '@apply relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm': {},
        },
        
        // Tables
        'table': {
          '@apply w-full': {},
        },
        'thead': {
          '@apply bg-muted/50': {},
        },
        'th': {
          '@apply border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right': {},
        },
        'td': {
          '@apply border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right': {},
        },
        
        // Figure
        'figcaption': {
          '@apply text-sm text-muted-foreground mt-2 text-center': {},
        },
        
        // Definition lists
        'dt': {
          '@apply font-semibold': {},
        },
        'dd': {
          '@apply ml-4': {},
        },
        
        // Mark
        'mark': {
          '@apply bg-yellow-200 px-1 rounded dark:bg-yellow-800': {},
        },
      });
    }),
  ],
};

export default config; 