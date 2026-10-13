import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/format'
import type { Product } from '../../types'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  onOrder: (product: Product) => void
}

export function ProductCard({ product, onOrder }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} loading="lazy" />
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>{formatCurrency(product.price)}</p>
      <Button fullWidth onClick={() => onOrder(product)}>
        Fazer pedido
      </Button>
    </article>
  )
}
