// /app/produtos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";

// import Footer from '@/components/layout/Footer'; // Ainda não temos um Footer, mas ele virá!

// Dados de Exemplo (MOCK) para um produto
// No futuro, isso virá do Backend (Shopify, Medusa.js, etc.)
const mockProduct = {
  id: "camarao-rosa-vg",
  name: "Camarão Rosa Grande (VG)",
  description:
    "O Camarão Rosa Grande é a escolha perfeita para quem busca sabor e textura inigualáveis. Selecionado manualmente e sem casca, pronto para suas receitas mais especiais. Ideal para grelhados, risotos ou moquecas.",
  longDescription: [
    "Frescor garantido: Direto do Mercadão para sua casa.",
    "Produto limpo: Sem casca e eviscerado, pronto para cozinhar.",
    "Versatilidade: Perfeito para diversas receitas, do sofisticado ao dia a dia.",
    "Qualidade Premium: Selecionado pelos especialistas do Rei do Camarão.",
  ],
  price: 89.9, // Preço por kg (exemplo)
  unit: "kg",
  images: [
    { src: "/camarao-rosa-vg-1.jpg", alt: "Camarão Rosa Grande em bandeja" },
    { src: "/camarao-rosa-vg-2.jpg", alt: "Detalhe do Camarão Rosa Grande" },
    { src: "/camarao-rosa-vg-3.jpg", alt: "Camarão Rosa Grande cozinhando" },
  ],
  options: [
    {
      name: "Tamanho",
      values: ["G (30-40 un/kg)", "VG (20-30 un/kg)", "GG (10-20 un/kg)"],
    },
    { name: "Tipo", values: ["Fresco", "Congelado"] },
  ],
  relatedProducts: [
    {
      name: "Lagosta Inteira",
      price: "R$ 180,00/kg",
      img: "/lagosta-inteira.jpg",
      href: "/produtos/lagosta-inteira",
    },
    {
      name: "Polvo Cozido",
      price: "R$ 75,00/kg",
      img: "/polvo-cozido.jpg",
      href: "/produtos/polvo-cozido",
    },
    {
      name: "Vieiras Frescas",
      price: "R$ 150,00/dz",
      img: "/vieiras-frescas.jpg",
      href: "/produtos/vieiras-frescas",
    },
  ],
};

export default function ProductDetailPage(): React.ReactElement {
  // No futuro, receberemos params para buscar o produto real no backend.
  // Por enquanto usamos o mockProduct.
  const product = mockProduct; // Simplificado para usar o mock fixo

  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Coluna da Esquerda: Imagens do Produto */}
          <div className="flex flex-col gap-4">
            {/* Imagem Principal */}
            <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img) => (
                <div
                  key={img.src}
                  className="relative h-20 w-full cursor-pointer overflow-hidden rounded-md border-2 border-transparent hover:border-blue-600"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 10vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da Direita: Detalhes do Produto */}
          <div>
            {/* Nome do Produto */}
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
              {product.name}
            </h1>
            {/* Preço */}
            <p className="mt-2 text-3xl font-semibold text-blue-600">
              R$ {product.price.toFixed(2)}
              <span className="text-base text-gray-600">/{product.unit}</span>
            </p>

            {/* Descrição Curta */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Opções de Seleção (Tamanho, Tipo) */}
            <div className="mt-6 space-y-4">
              {product.options.map((option) => (
                <div key={option.name}>
                  <label
                    htmlFor={option.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {option.name}:
                  </label>
                  <select
                    id={option.name}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 shadow-sm focus:border-blue-600 focus:ring-blue-600"
                  >
                    {option.values.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Botão Adicionar ao Carrinho */}
            <button
              type="button"
              className="mt-8 w-full rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              Adicionar ao Carrinho
            </button>

            {/* Seção "Por que comprar no Rei do Camarão?" */}
            <div className="mt-10 rounded-lg bg-gray-50 p-6">
              <h2 className="text-xl text-gray-800 font-bold">
                Por que escolher o Rei do Camarão?
              </h2>
              <ul className="mt-4 space-y-3">
                {product.longDescription.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <title>{item}</title>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800">
            Produtos que você pode gostar
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {product.relatedProducts.map((p) => (
              <Link
                href={p.href}
                key={p.href}
                className="group block rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-lg"
              >
                <div className="relative mb-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-blue-600">{p.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Vamos adicionar o Footer aqui no futuro */}
      {/* <Footer /> */}
    </>
  );
}
