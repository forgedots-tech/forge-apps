/**
 * Utility to convert hex color to HSL values used in Tailwind CSS variables.
 */
export function hexToHsl(hex: string): string {
  // Remove the hash if it's there
  hex = hex.replace(/^#/, "");

  // Parse r, g, b
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  }

  // Convert r, g, b to 0-1 range
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    switch (max) {
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / delta + 2;
        break;
      case b:
        h = (r - g) / delta + 4;
        break;
    }
    h /= 6;
  }

  // Return as "H S% L%" format for Tailwind CSS variables
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}

/**
 * Common primary color presets
 */
export const PRIMARY_COLOR_PRESETS = [
  { name: "Default", value: "#2b2b77" }, // Deep Navy (Current Primary)
  { name: "Purple", value: "#7c3aed" }, // Purple/Violet
  { name: "Indigo", value: "#4f46e5" }, // Indigo 600
  { name: "Blue", value: "#2563eb" }, // Blue 600
  { name: "Emerald", value: "#059669" }, // Emerald 600
  { name: "Orange", value: "#d97706" }, // Amber 600
  { name: "Rose", value: "#e11d48" }, // Rose 600
];
