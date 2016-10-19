export function validColorValue(value: any, id: string): boolean {
  if (id === '255') return (typeof value === 'number') && (value >= 0 && value <= 255);
  return false;
}
