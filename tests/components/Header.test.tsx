import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Header component", () => {
  test("renderiza o título do site", () => {
    render(<Header />);
    expect(screen.getByText(/Rei do Camarão/i)).toBeInTheDocument();
  });

  test("contém os links de navegação principais", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Produtos/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Sobre Nós/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contato/i })).toBeInTheDocument();
  });

  test("botão do carrinho existe e tem aria-label e ícone com aria-hidden", () => {
    render(<Header />);
    const cartButton = screen.getByRole("button", { name: /Abrir carrinho/i });
    expect(cartButton).toBeInTheDocument();

    const svg = cartButton.querySelector("svg");
    expect(svg).not.toBeNull();
    if (svg) {
      expect(svg).toHaveAttribute("aria-hidden", "true");
    }
  });

  test("links possuem hrefs corretos e nav tem classe para desktop", () => {
    render(<Header />);
    const home = screen.getByRole("link", { name: /Home/i });
    const produtos = screen.getByRole("link", { name: /Produtos/i });
    const sobre = screen.getByRole("link", { name: /Sobre Nós/i });
    const contato = screen.getByRole("link", { name: /Contato/i });

    expect(home).toHaveAttribute("href", "/");
    expect(produtos).toHaveAttribute("href", "/produtos");
    expect(sobre).toHaveAttribute("href", "/sobre");
    expect(contato).toHaveAttribute("href", "/contato");

    const nav = document.querySelector("nav");
    expect(nav).not.toBeNull();
    if (nav) {
      expect(nav.className).toMatch(/md:flex/);
    }
  });

  test("snapshot do Header", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
