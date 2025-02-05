export const projects = ['fransek/statekit', 'fransek/next-i18n'] as const

export const routes = {
  home: '/',
  projects: '/projects',
  project: (name: string) => `/projects/${name}`,
}
