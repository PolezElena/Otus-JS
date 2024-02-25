export function watch(name) {
  switch (name) {
    case "Говорят":
      return `Часы стоят`
    case "Говорят1":
      return `Часы спешат`
    case "Говорят2":
      return `Часы идут`
    default:
      throw new Error("Но немножко отстают")
  }
}

export function energy(name) {
  switch (name) {
    case "Твои ошибки-твоя сила":
    case "Улыбайтесь":
      return name + "! " + name + "! " + name + "!"
    default:
      throw new Error("Неизвестный герой")
  }
}
