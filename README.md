# Site da Quadri

Reconstrução de `usequadri.com`. Next.js 15 com exportação estática, Tailwind
v4, sem backend.

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # cálculo da calculadora
npm run build   # gera out/ — site estático
```

Deploy: qualquer host estático. Na Vercel, funciona sem configuração.

## Onde as coisas estão

| Caminho | O quê |
|---|---|
| `content/site.ts` | Todo o conteúdo e **todas as taxas**. Mudar uma taxa é editar um objeto |
| `lib/calculator.ts` | Matemática da simulação, sem dependências |
| `components/sections/` | Uma seção da página por arquivo, na ordem de `app/page.tsx` |
| `app/globals.css` | Tokens de cor, tipografia e movimento |
| `public/img/` | Foto do produto recortada |

A faixa de taxas do hero e a calculadora leem o mesmo array de
`content/site.ts`. Por construção, não podem divergir — era o que acontecia no
site antigo, onde a calculadora mostrava 0,99% e o hero 2,69%.

## Documentos

- `PRODUCT.md` — público, propósito, personalidade, anti-referências
- `DESIGN.md` — sistema visual e o porquê de cada decisão
- `PENDENTE.md` — **o que falta do cliente antes de publicar**
- `docs/superpowers/specs/` — spec do redesign

## Estado

Onze seções implementadas, build passando, sete testes no cálculo, contraste
AA verificado no navegador nos dois temas, zero rolagem horizontal a 390px.

Não publicar sem passar pelo `PENDENTE.md`: o WhatsApp não está preenchido, as
respostas do FAQ são provisórias e as páginas de política não existem.
