export function splitText(text: string): string[] {
  return text.includes('*') ? text.split('*') : [text];
}