import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ghFetch = async (path: string) =>
  await fetch(`https://api.github.com/${path}`, {
    cache: 'reload',
    headers: {
      Authorization: `token ${import.meta.env.GITHUB_TOKEN}`,
    },
  })
