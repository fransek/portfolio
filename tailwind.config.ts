import type { Config } from 'tailwindcss'
import tailwindCSSAnimated from 'tailwindcss-animated'
import plugin from 'tailwindcss/plugin'
import type { CSSRuleObject } from 'tailwindcss/types/config'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: 'hsl(240, 16%, 5%)',
        foreground: 'hsl(60, 5%, 96%)',
      },
      secondary: {
        DEFAULT: 'hsl(222, 46%, 20%)',
        foreground: 'hsl(60, 5%, 96%)',
      },
      card: {
        DEFAULT: 'hsl(240, 16%, 6%)',
        foreground: 'hsl(60, 5%, 96%)',
      },
      muted: {
        DEFAULT: 'hsl(24, 10%, 10%)',
        foreground: 'hsl(24, 6%, 83%)',
      },
      border: 'hsl(24, 10%, 10%)',
      error: 'hsl(0, 84%, 60%)',
      link: 'hsl(217, 91%, 60%)',
    },
    extend: {
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [
    tailwindCSSAnimated,
    plugin(({ addComponents, theme }) => {
      const containerFull = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme('spacing.4'),
      } satisfies CSSRuleObject

      const containers = {
        '.container-xs': {
          ...containerFull,
          maxWidth: theme('screens.xs'),
        },
        '.container-sm': {
          ...containerFull,
          maxWidth: theme('screens.sm'),
        },
        '.container-md': {
          ...containerFull,
          maxWidth: theme('screens.md'),
        },
        '.container-lg': {
          ...containerFull,
          maxWidth: theme('screens.lg'),
        },
        '.container-xl': {
          ...containerFull,
          maxWidth: theme('screens.xl'),
        },
        '.container-2xl': {
          ...containerFull,
          maxWidth: theme('screens.2xl'),
        },
        '.container-full': containerFull,
      } satisfies CSSRuleObject

      const txt = {
        '.txt-h1': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: '700',
          lineHeight: theme('lineHeight.10'),
        },
        '.txt-h2': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: '700',
          lineHeight: theme('lineHeight.9'),
        },
        '.txt-h3': {
          fontSize: theme('fontSize.xl'),
          fontWeight: '600',
          lineHeight: theme('lineHeight.8'),
        },
        '.txt-h4': {
          fontSize: theme('fontSize.lg'),
          fontWeight: '600',
          lineHeight: theme('lineHeight.7'),
        },
        '.txt-1': {
          fontSize: theme('fontSize.base'),
          fontWeight: '600',
          lineHeight: theme('lineHeight.6'),
        },
        '.txt-2': {
          fontSize: theme('fontSize.base'),
          fontWeight: '400',
          lineHeight: theme('lineHeight.6'),
        },
        '.txt-3': {
          fontSize: theme('fontSize.base'),
          fontWeight: '300',
          lineHeight: theme('lineHeight.5'),
          color: theme('colors.muted.foreground'),
        },
        '.txt-4': {
          fontSize: theme('fontSize.sm'),
          fontWeight: '300',
          lineHeight: theme('lineHeight.5'),
          color: theme('colors.muted.foreground'),
        },
        '.txt-link': {
          textUnderlineOffset: '4px',
          color: "theme('colors.link')",
          '&:hover': {
            textDecorationLine: 'underline',
          },
          display: 'inline-block',
        },
        '.txt-label': {
          fontSize: theme('fontSize.sm'),
          fontWeight: '500',
          lineHeight: '1',
        },
        '.txt-error': {
          fontSize: theme('fontSize.sm'),
          fontWeight: '500',
          lineHeight: '1',
          color: "theme('colors.error')",
        },
        '.txt-info': {
          fontSize: theme('fontSize.sm'),
          fontWeight: '300',
          lineHeight: '1',
          color: theme('colors.muted.foreground'),
        },
      } satisfies CSSRuleObject

      const components = {
        '.card': {
          backgroundColor: theme('colors.card.DEFAULT'),
          border: `1px solid ${theme('colors.border')}`,
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.4'),
        },
        '.typography': {
          '& h1': txt['.txt-h1'],
          '& h2': txt['.txt-h2'],
          '& h3': txt['.txt-h3'],
          '& h4': txt['.txt-h4'],
          '& p': txt['.txt-3'],
          '& a': txt['.txt-link'],
          '& label': txt['.txt-label'],
          '& small': txt['.txt-4'],
          '& strong': txt['.txt-1'],
          '& ul li': {
            ...txt['.txt-3'],
            listStyleType: 'disc',
            listStylePosition: 'inside',
          },
          '& ol li': {
            ...txt['.txt-3'],
            listStyleType: 'decimal',
            listStylePosition: 'inside',
          },
          '& pre': {
            padding: theme('spacing.3'),
            borderRadius: theme('borderRadius.md'),
          },
        },
      } satisfies CSSRuleObject

      addComponents({
        ...containers,
        ...txt,
        ...components,
      })
    }),
  ],
} satisfies Config
