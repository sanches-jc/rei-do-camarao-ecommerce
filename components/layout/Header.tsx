import React, { type ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              Rei do Camarão
            </div>
          </a>

          {/* Navegação Principal */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </a>
            <a
              href="/produtos"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Produtos
            </a>
            <a
              href="/sobre"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </a>
            <a
              href="/contato"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Ícones do Lado Direito */}
          <div className="flex items-center space-x-4">
            {/* Ícone de Carrinho */}
            <button
              type="button"
              aria-label="Abrir carrinho"
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
