import { useState } from 'react'
import { formatCurrency } from '@/lib/format'
import { products } from '../../data/products'
import type { Product } from '../../types'
import { OrderModal } from '../OrderModal'
import { ProductCard } from '../ProductCard'
import styles from './MenuSection.module.css'

export function MenuSection() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [feedback, setFeedback] = useState('')

  const handleConfirm = (product: Product, quantity: number) => {
    setFeedback(`Pedido confirmado: ${quantity}x ${product.name} — ${formatCurrency(product.price * quantity)}`)
    setSelected(null)
  }

  return (
    <section id="cardapio" className={styles.section} aria-label="Cardápio">
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onOrder={setSelected} />
        ))}
      </div>

      <p role="status" className={styles.feedback}>
        {feedback}
      </p>

      {selected && (
        <OrderModal product={selected} onClose={() => setSelected(null)} onConfirm={handleConfirm} />
      )}
    </section>
  )
}
