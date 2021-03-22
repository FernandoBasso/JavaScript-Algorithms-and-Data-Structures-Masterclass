import { car, cdr, isEmpty } from "./index.ts";

/**
 * Capitalize the first char of `s`.
 *
 * @param s - The string to have its first char uppercased.
 * @returns The string with its first char upercased.
 */
function upcaseFirst(s: string): string {
  if (isEmpty(s)) return "";
  return (car(s) as string).toUpperCase() + cdr(s) as string;
}

export { upcaseFirst };
