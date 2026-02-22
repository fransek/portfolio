export const projects = [
  'fransek/dharma',
  'fransek/next-i18n',
  'fransek/evercatch',
  'fransek/form',
  'fransek/react-input-formatting',
] as const

export const routes = {
  home: '/',
  projects: '/projects',
  project: (name: string) => `/projects/${name}`,
}
