export function handleWithColor(value): string {
  return value;
}

export function handleWithRatio(value, originalH) {
  const ratio = value / originalH;
  const size = String(value * ratio);
  const height = String(originalH * ratio);
  return { size, height };
}

export function handleWithPropImage(color, originalW, originalHeight) {
  const { size, height } = handleWithRatio(originalW, originalHeight);
  const fill = handleWithColor(color);
  return { size, height, fill };
}
