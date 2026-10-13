import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/format'
import type { Product } from '../../types'
import styles from './OrderModal.module.css'

interface OrderModalProps {
  product: Product
  onClose: () => void
  onConfirm: (product: Product, quantity: number) => void
}

// <dialog> nativo: foco, Esc e acessibilidade de graça. Monte só quando houver produto.
export function OrderModal({ product, onClose, onConfirm }: OrderModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  const total = product.price * quantity

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="order-title"
    >
      <Button variant="ghost" className={styles.close} aria-label="Fechar" onClick={onClose}>
        &times;
      </Button>

      <h2 id="order-title" className={styles.title}>
        {product.name}
      </h2>
      <p className={styles.description}>{product.description}</p>

      <p className={styles.total} aria-live="polite">
        {formatCurrency(total)}
      </p>

      <div className={styles.quantity}>
        <span>Quantidade:</span>
        <Button size="sm" aria-label="Diminuir" disabled={quantity <= 1} onClick={() => setQuantity((q) => q - 1)}>
          −
        </Button>
        <output className={styles.count}>{quantity}</output>
        <Button size="sm" aria-label="Aumentar" onClick={() => setQuantity((q) => q + 1)}>
          +
        </Button>
      </div>

      <Button size="lg" fullWidth onClick={() => onConfirm(product, quantity)}>
        Confirmar pedido
      </Button>
    </dialog>
  )
}
