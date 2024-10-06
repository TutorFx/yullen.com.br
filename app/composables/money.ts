export function useMoney(amount: number, lang: string = 'pt-br') {
  return amount.toLocaleString(lang, { style: 'currency', currency: 'BRL' })
}
