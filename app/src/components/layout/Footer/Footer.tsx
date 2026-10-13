import styles from './Footer.module.css'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; Café StarBuzz</p>
      <p>{year} - Todos os direitos reservados</p>
    </footer>
  )
}
