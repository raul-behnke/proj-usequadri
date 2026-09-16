import { Cabecalho } from "@/components/sections/Cabecalho";
import { Hero } from "@/components/sections/Hero";
import { Numeros } from "@/components/sections/Numeros";
import { FormasDeReceber } from "@/components/sections/FormasDeReceber";
import { Pilares } from "@/components/sections/Pilares";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Calculadora } from "@/components/sections/Calculadora";
import { Clientes } from "@/components/sections/Clientes";
import { Faq } from "@/components/sections/Faq";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Fechamento } from "@/components/sections/Fechamento";

/**
 * Ritmo de tema: escuro é dinheiro, claro é explicação.
 * Escuro abre (hero, taxas, prova), volta no meio (calculadora) e fecha.
 */
export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Numeros />
        <FormasDeReceber />
        <Pilares />
        <ComoFunciona />
        <Calculadora />
        <Clientes />
        <Faq />
        <QuemSomos />
      </main>
      <Fechamento />
    </>
  );
}
