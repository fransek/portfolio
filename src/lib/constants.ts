export const projects = [
  'fransek/statekit',
  'fransek/next-i18n',
  'fransek/evercatch',
] as const

export const routes = {
  home: '/',
  projects: '/projects',
  project: (name: string) => `/projects/${name}`,
}
