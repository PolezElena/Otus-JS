/**
 * Эта функция возвращает максимальное числовое значение
 * из произвольного количества переданых параметров
 * max(1, 2, 3) // = 3
 * max(1, 100, 89, -900) // = 100
 */
export default function max(...args) {
  return Math.max.apply(this, Array.from(args))
}
