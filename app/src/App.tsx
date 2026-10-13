import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { MenuSection } from '@/features/menu'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.hero}>Café StarBuzz</h1>
        <MenuSection />
      </main>
      <Footer />
    </>
  )
}
