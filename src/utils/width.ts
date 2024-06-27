import SCREENS from "@/constants/screens"

export function getWidth (): number {
  return window.screen.width
}

export function isSmallScreen (): boolean {
  const screenWidth = getWidth()
  return screenWidth < SCREENS.MD
}