# Padrão de design — Café StarBuzz (React)

Regras do projeto. Se for quebrar uma, mude este arquivo antes.

## Stack
- **Vite + React 19 + TypeScript** (strict).
- **CSS Modules** para estilo de componente. Sem lib de UI, sem Tailwind.
- **oxlint** para lint (`npm run lint`).

## Estrutura de pastas
```
src/
  assets/img/          imagens importadas pelo código
  styles/
    tokens.css         design tokens (cores, fontes, espaço, raio, sombra, movimento)
    global.css         reset + estilos base. Único CSS global.
  lib/                 utilitários puros (format.ts...)
  components/
    ui/                componentes genéricos, sem regra de negócio (Button...)
    layout/            estrutura da página (Header, Footer)
  features/
    <feature>/         tudo de um domínio junto
      components/
      data/            mocks locais (até a API existir)
      types.ts
      index.ts         API pública da feature
  App.tsx
```

**Regra:** `ui/` não importa de `features/`. Feature importa de `ui/` e `lib/`, nunca de outra feature.

## Componentes
- Uma pasta por componente: `Nome/Nome.tsx`, `Nome/Nome.module.css`, `Nome/index.ts`.
- Named export (`export function Button`). Só `App` usa default export.
- Props tipadas com `interface NomeProps`.
- Imports absolutos com `@/` (ex.: `@/components/ui/Button`).
- Estado sobe só até onde precisa. Nada de estado global até doer.

## Tokens (styles/tokens.css)
- Dois níveis: **primitivos** (`--brown-700`) e **semânticos** (`--color-primary`).
- Componentes usam **só semânticos**. Trocar o tema = mexer só nos semânticos.
- Proibido cor, sombra ou espaçamento cru em `.module.css`.

| Grupo | Tokens |
|---|---|
| Cor | `--color-bg`, `--color-surface`, `--color-primary`, `--color-primary-hover`, `--color-on-primary`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-overlay` |
| Fonte | `--font-display` (Saira, títulos), `--font-body` |
| Tamanho | `--text-sm` · `--text-md` · `--text-lg` · `--text-xl` · `--text-display` |
| Espaço | escala 4px: `--space-1/2/3/4/6/8/12` |
| Raio | `--radius-sm/md/lg` |
| Sombra | `--shadow-sm`, `--shadow-lg` |
| Movimento | `--duration-fast/base`, `--ease` |

## CSS
- Classes em camelCase (`styles.fullWidth`).
- Mobile-first quando for layout novo; breakpoint padrão `600px`.
- Grid para listas de cards (`auto-fit, minmax(...)`), flex para alinhar.
- `:focus-visible` e `prefers-reduced-motion` já estão no global. Não remova.

## Acessibilidade (mínimo obrigatório)
- Modal = `<dialog>` nativo com `showModal()`.
- Botão só com ícone leva `aria-label`.
- Toda `<img>` tem `alt`.
- Feedback dinâmico em `role="status"` / `aria-live`.

## Dados
- Preço sempre via `formatCurrency` (`@/lib/format`). Nunca montar "R$" à mão.
- Mocks em `features/<feature>/data`. Quando o BackEnd tiver endpoint, criar `features/<feature>/api.ts` e trocar ali.

## Commits
- Mensagem curta em português, imperativo: `feat(menu): adiciona filtro por categoria`.
