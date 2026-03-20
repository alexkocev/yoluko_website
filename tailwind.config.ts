import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: '#0e0e0e',
    			foreground: '#ffffff',
    			primary: {
    				DEFAULT: '#ffdd7c',
    				foreground: '#413200',
    				container: '#fecb00',
    				dim: '#eebe00',
    				fixed: '#fecb00',
    				'fixed-dim': '#eebe00',
    			},
    			secondary: {
    				DEFAULT: '#ff6c95',
    				foreground: '#fff5f6',
    				container: '#bb0054',
    				dim: '#ff6c95',
    				fixed: '#ffc2cd',
    				'fixed-dim': '#ffadbe',
    			},
    			tertiary: {
    				DEFAULT: '#b5ffc2',
    				foreground: '#004820',
    				container: '#3fff8b',
    				dim: '#24f07e',
    				fixed: '#3fff8b',
    				'fixed-dim': '#24f07e',
    			},
    			destructive: {
    				DEFAULT: '#ff7351',
    				foreground: '#ffd2c8',
    			},
    			muted: {
    				DEFAULT: '#1a1919',
    				foreground: '#adaaaa',
    			},
    			accent: {
    				DEFAULT: '#1a1919',
    				foreground: '#ffffff',
    			},
    			popover: {
    				DEFAULT: '#1a1919',
    				foreground: '#ffffff',
    			},
    			card: {
    				DEFAULT: '#1a1919',
    				foreground: '#ffffff',
    			},
    			surface: {
    				DEFAULT: '#0e0e0e',
    				bright: '#2c2c2c',
    				dim: '#0e0e0e',
    				variant: '#262626',
    				tint: '#ffdd7c',
    				container: {
    					DEFAULT: '#1a1919',
    					low: '#131313',
    					high: '#201f1f',
    					highest: '#262626',
    					lowest: '#000000',
    				},
    			},
    			'on-surface': '#ffffff',
    			'on-surface-variant': '#adaaaa',
    			outline: {
    				DEFAULT: '#777575',
    				variant: '#484847',
    			},
    			'on-primary': '#634d00',
    			'on-primary-fixed': '#413200',
    			'on-secondary': '#48001c',
    			'on-secondary-container': '#fff5f6',
    			'on-tertiary': '#006731',
    			'on-tertiary-container': '#005d2c',
    			error: {
    				DEFAULT: '#ff7351',
    				dim: '#d53d18',
    				container: '#b92902',
    			},
    		},
    		fontFamily: {
    			sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
    			headline: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
    			body: ['var(--font-inter)', 'Inter', 'sans-serif'],
    			label: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
    		},
    		borderRadius: {
    			DEFAULT: '1rem',
    			lg: '2rem',
    			xl: '3rem',
    			sm: '0.5rem',
    			full: '9999px',
    		},
    		keyframes: {
    			'scroll': {
    				'0%': { transform: 'translateX(0)' },
    				'100%': { transform: 'translateX(-50%)' },
    			},
    			'accordion-down': {
    				from: { height: '0' },
    				to: { height: 'var(--radix-accordion-content-height)' },
    			},
    			'accordion-up': {
    				from: { height: 'var(--radix-accordion-content-height)' },
    				to: { height: '0' },
    			},
    			'fade-in': {
    				'0%': { opacity: '0', transform: 'translateY(10px)' },
    				'100%': { opacity: '1', transform: 'translateY(0)' },
    			},
    			'flow-line': {
    				'0%': { strokeDashoffset: '100' },
    				'100%': { strokeDashoffset: '0' },
    			},
    			'soft-glow': {
    				'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
    				'50%': { opacity: '0.7', filter: 'brightness(1.3)' },
    			},
    			'record-pulse': {
    				'0%, 100%': { transform: 'scaleX(1)', opacity: '0.4' },
    				'50%': { transform: 'scaleX(1.05)', opacity: '0.6' },
    			},
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.6s ease-out',
    			'flow-line': 'flow-line 10s linear infinite',
    			'soft-glow': 'soft-glow 3s ease-in-out infinite',
    			'record-pulse': 'record-pulse 4s ease-in-out infinite',
    		},
    	},
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
