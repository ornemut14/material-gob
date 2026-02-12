const icons = import.meta.glob("./gobicons/**/**/*.svg", {
    eager: true,
    import: "default"
  })
  
  export function getIcon(name: string, variant: string): string | undefined {
    return icons[`./gobicons/${name}/${variant}.svg`] as string | undefined
  }