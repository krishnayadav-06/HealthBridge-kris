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
						foreground: 'hsl(var(--primary-foreground))',
						glow: 'hsl(var(--primary-glow))'
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
					success: {
						DEFAULT: 'hsl(var(--success))',
						foreground: 'hsl(var(--success-foreground))'
					},
					warning: {
						DEFAULT: 'hsl(var(--warning))',
						foreground: 'hsl(var(--warning-foreground))'
					},
					emergency: {
						DEFAULT: 'hsl(var(--emergency))',
						foreground: 'hsl(var(--emergency-foreground))'
					},
					popover: {
						DEFAULT: 'hsl(var(--popover))',
						foreground: 'hsl(var(--popover-foreground))'
					},
					card: {
						DEFAULT: 'hsl(var(--card))',
						foreground: 'hsl(var(--card-foreground))'
					},
					sidebar: {
						DEFAULT: 'hsl(var(--sidebar-background))',
						foreground: 'hsl(var(--sidebar-foreground))',
						primary: 'hsl(var(--sidebar-primary))',
						'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
						accent: 'hsl(var(--sidebar-accent))',
						'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
						border: 'hsl(var(--sidebar-border))',
						ring: 'hsl(var(--sidebar-ring))'
					}
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)'
				},
				backgroundImage: {
					'gradient-primary': 'var(--gradient-primary)',
					'gradient-health': 'var(--gradient-health)',
					'gradient-subtle': 'var(--gradient-subtle)',
					'grid': 'radial-gradient(circle at 1px 1px, hsl(215 25% 85% / 0.35) 1px, transparent 0)'
				},
				boxShadow: {
					'medical': 'var(--shadow-medical)',
					'card': 'var(--shadow-card)',
					'glow': 'var(--shadow-glow)'
				},
				keyframes: {
					'accordion-down': {
						from: {
							height: '0'
						},
						to: {
							height: 'var(--radix-accordion-content-height)'
						}
					},
					'accordion-up': {
						from: {
							height: 'var(--radix-accordion-content-height)'
						},
						to: {
							height: '0'
						}
					},
					'pulse-glow': {
						'0%, 100%': {
							boxShadow: '0 0 20px hsl(var(--primary-glow) / 0.3)'
						},
						'50%': {
							boxShadow: '0 0 30px hsl(var(--primary-glow) / 0.5)'
						}
					},
					'slide-up': {
						'from': {
							transform: 'translateY(20px)',
							opacity: '0'
						},
						'to': {
							transform: 'translateY(0)',
							opacity: '1'
						}
					},
					'fade-in': {
						from: { opacity: '0' },
						to: { opacity: '1' }
					},
					'scale-in': {
						from: { transform: 'scale(0.98)', opacity: '0' },
						to: { transform: 'scale(1)', opacity: '1' }
					},
					'aurora': {
						'0%': { backgroundPosition: '0% 50%' },
						'50%': { backgroundPosition: '100% 50%' },
						'100%': { backgroundPosition: '0% 50%' }
					},
					'float': {
						'0%, 100%': { transform: 'translateY(0)' },
						'50%': { transform: 'translateY(-10px)' }
					},
					'tilt': {
						'0%, 100%': { transform: 'rotate(-1deg)' },
						'50%': { transform: 'rotate(1deg)' }
					},
					'blob': {
						'0%, 100%': { borderRadius: '42% 58% 63% 37% / 53% 35% 65% 47%' },
						'50%': { borderRadius: '58% 42% 37% 63% / 35% 53% 47% 65%' }
					},
					'shine': {
						'0%': { backgroundPosition: '-200% 0' },
						'100%': { backgroundPosition: '200% 0' }
					},
					'grid-move': {
						'0%': { backgroundPosition: '0 0' },
						'100%': { backgroundPosition: '20px 20px' }
					}
				},
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out',
					'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
					'slide-up': 'slide-up 0.3s ease-out',
					'fade-in': 'fade-in 0.25s ease-out',
					'scale-in': 'scale-in 0.2s ease-out',
					'aurora': 'aurora 14s ease-in-out infinite',
					'float': 'float 6s ease-in-out infinite',
					'tilt': 'tilt 6s ease-in-out infinite',
					'blob': 'blob 14s ease-in-out infinite',
					'shine': 'shine 2s linear infinite',
					'grid-move': 'grid-move 30s linear infinite'
				}
			}
		},
		plugins: [require("tailwindcss-animate")],
} satisfies Config;
