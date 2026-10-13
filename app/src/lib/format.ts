// Formatação centralizada: nunca montar "R$" na mão nos componentes.
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export const formatCurrency = (value: number): string => brl.format(value)
