import logo from '@/assets/img/logo.png'
import styles from './Header.module.css'

const links = [
  { label: 'Encomendas', href: '#cardapio' },
  { label: 'Contato', href: '#contato' },
  { label: 'Sobre nós', href: '#sobre' },
]

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Café StarBuzz" className={styles.logo} />
      <nav aria-label="Principal">
        <ul className={styles.nav}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
