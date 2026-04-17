export const easing = {
  smooth: [0.32, 0.72, 0, 1] as const,
  soft: [0.4, 0, 0.2, 1] as const,
  snappy: [0.2, 0.8, 0.2, 1] as const,
  dramatic: [0.76, 0, 0.24, 1] as const,
} as const;

export const duration = {
  instant: 0.15,
  quick: 0.3,
  smooth: 0.6,
  dramatic: 1.2,
} as const;

export const stagger = {
  tight: 0.05,
  default: 0.12,
  generous: 0.2,
} as const;

export const viewport = {
  standard: { once: true, amount: 0.2 },
  early: { once: true, amount: 0.05 },
  late: { once: true, amount: 0.5 },
} as const;
