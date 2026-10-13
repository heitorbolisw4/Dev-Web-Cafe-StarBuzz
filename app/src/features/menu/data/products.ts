// Mock local. Quando o BackEnd expuser GET /products, troque por um fetch em features/menu/api.
import cafe1 from '@/assets/img/cafe1.jpg'
import cafe2 from '@/assets/img/cafe2.jpg'
import cafe3 from '@/assets/img/cafe3.jpg'
import cafe4 from '@/assets/img/cafe4.jpg'
import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'mistura-casa',
    name: 'Mistura da Casa',
    description: 'Uma mistura delicada de cafés do México, Bolívia e Guatemala',
    price: 12.0,
    image: cafe1,
  },
  {
    id: 'cafe-arabico',
    name: 'Café Arábico com Leite',
    description: 'Expresso, leite fervido e xarope de chocolate',
    price: 13.5,
    image: cafe2,
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description: 'Uma mistura de expresso, leite fervido e espuma',
    price: 17.98,
    image: cafe3,
  },
  {
    id: 'cha-chai',
    name: 'Chá Chai',
    description: 'Uma bebida condimentada com chá preto, especiarias, leite e mel',
    price: 14.99,
    image: cafe4,
  },
]
