export function formatPrice(price: number) {
  const priceValue = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      currencyDisplay: 'code',
    })
    .replace('BRL', '')
    .trim()

  return priceValue
}
