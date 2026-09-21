/**
 * `NEXT_PUBLIC_BASE_PATH` serve às publicações em subpasta (ex.: lamna.tech/usequadri).
 * Sem ele, o build sai para a raiz do domínio, que é o destino final.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  images: { unoptimized: true },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};
