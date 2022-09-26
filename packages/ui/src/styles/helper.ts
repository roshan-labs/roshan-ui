export const range = (size: number, startAt = 1) =>
  Array.from(Array(size).keys()).map((i) => i + startAt)
