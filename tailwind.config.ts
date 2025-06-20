
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
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neon: {
					purple: '#a855f7',
					blue: '#1EAEDB'
				},
				dark: {
					DEFAULT: '#101010',
					deeper: '#0d0d0d'
				},
				light: {
					gray: '#cccccc'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
					'100%': { transform: 'scale(1)' }
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 5px 0 rgba(168, 85, 247, 0.4)' },
					'50%': { boxShadow: '0 0 20px 0 rgba(168, 85, 247, 0.7)' },
					'100%': { boxShadow: '0 0 5px 0 rgba(168, 85, 247, 0.4)' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'rotate-cube': {
					'0%': { transform: 'rotateX(0) rotateY(0)' },
					'50%': { transform: 'rotateX(180deg) rotateY(180deg)' },
					'100%': { transform: 'rotateX(360deg) rotateY(360deg)' }
				},
				'neon-text': {
					'0%': { textShadow: '0 0 5px rgba(168, 85, 247, 0.8), 0 0 10px rgba(168, 85, 247, 0.5)' },
					'50%': { textShadow: '0 0 20px rgba(168, 85, 247, 1), 0 0 30px rgba(168, 85, 247, 0.8)' },
					'100%': { textShadow: '0 0 5px rgba(168, 85, 247, 0.8), 0 0 10px rgba(168, 85, 247, 0.5)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'glow-pulse': 'glow-pulse 3s infinite',
				'float': 'float 5s ease-in-out infinite',
				'rotate-cube': 'rotate-cube 15s linear infinite',
				'neon-text': 'neon-text 3s ease-in-out infinite'
			},
			backgroundImage: {
				'dark-texture': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23222\' fill-opacity=\'0.4\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1z\'%3E%3C/path%3E%3C/svg%3E")',
				'neon-gradient': 'linear-gradient(135deg, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.2) 100%)',
				'purple-glow': 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
			},
			boxShadow: {
				'neon-glow': '0 0 10px rgba(168, 85, 247, 0.7), 0 0 20px rgba(168, 85, 247, 0.4)',
				'neon-blue-glow': '0 0 10px rgba(30, 174, 219, 0.7), 0 0 20px rgba(30, 174, 219, 0.4)'
			},
			theme: {
				extend: {
				  animation: {
					fadein: 'fadein 1s ease-out',
				  },
				  keyframes: {
					fadein: {
					  '0%': { opacity: '0' },
					  '100%': { opacity: '1' },
					},
				  },
				},
			  },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
