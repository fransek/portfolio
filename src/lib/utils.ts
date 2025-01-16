import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ghFetch = async <T>(path: string) =>
  (await fetch(`https://api.github.com/${path}`, {
    cache: 'reload',
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json())) as Promise<T>

export interface Repo {
  name: string
  description: string
  html_url: string
}

export interface Readme {
  content: string
}
