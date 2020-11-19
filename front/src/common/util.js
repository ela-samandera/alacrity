export const fixFloatAfterDigit = (float, denominator = 100) => (
  Math.round(float * denominator) / denominator
)
