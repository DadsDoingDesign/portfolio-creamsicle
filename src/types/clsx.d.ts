declare module 'clsx' {
  type ClassValue = string | number | boolean | undefined | null | ClassValue[] | { [key: string]: any };

  export default function clsx(...inputs: ClassValue[]): string;
}
