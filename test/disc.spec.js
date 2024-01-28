import { calculateTotal } from '../src/discount.js'



  const testCasesNegative = [
    {
      name: 'case 1: invalid negative discount',
      products: [
        { name: 'Товар1', quantity: 10, price: 1 },
        { name: 'Товар2', quantity: 5, price: 3 },
      ],
      discount: -10,
      expectedError: 'Скидка не может быть отрицательным числом.',
    },
    {
      name: 'case 2: invalid discount over 100%',
      products: [
        { name: 'Товар1', quantity: 3, price: 1 },
        { name: 'Товар2', quantity: 5, price: 3 },
      ],
      discount: 120,
      expectedError: 'Скидка не может быть больше 100%.',
    },
  ]

  test.each(testCasesNegative)(
    '%s',
    ({ products, discount, expectedError }) => {
      expect(() => calculateTotal(products, discount)).toThrow(expectedError)
    },
  )


