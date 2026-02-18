export const ICON_NAMES = [
  "calendarday",
  "calendarstar",
  "marketplace",
  "notebook"
] as const
export type IconName = typeof ICON_NAMES[number]