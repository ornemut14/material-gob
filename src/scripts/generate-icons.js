import fs from "fs"
import path from "path"

const ICONS_DIR = path.resolve("src/icons/gobicons")

const iconNames = fs
  .readdirSync(ICONS_DIR)
  .filter((dir) =>
    fs.statSync(path.join(ICONS_DIR, dir)).isDirectory()
  )

const content = `
export const ICON_NAMES = ${JSON.stringify(iconNames, null, 2)} as const
export type IconName = typeof ICON_NAMES[number]
`

fs.writeFileSync(
  "src/icons/icons.generated.ts",
  content.trim()
)

console.log("✔ Icons generated")