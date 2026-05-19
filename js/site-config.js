/**
 * Configuração global do site — preencha os campos quando desejar publicar dados reais.
 * Elementos com data-site="chave" recebem o valor correspondente no carregamento.
 */
const siteConfig = {
  nomeBlog: "",
  razaoSocial: "CANPAR DESPACHOS ADUANEIROS LTDA",
  cnpj: "65.027.795/0001-77",
  endereco: "RUA RODRIGUES ALVES 657, CAMPINAS - SP, CEP 13020-400",
  email: "andreia@canpar.com.br",
  telefone: "(19) 97903-228",
};

function applySiteConfig() {
  const brandFallback = "Mobilidade Urbana";

  document.querySelectorAll("[data-site]").forEach(function (el) {
    if (el.tagName === "A" && el.getAttribute("data-site") === "email") return;
    const key = el.getAttribute("data-site");
    if (!key || !(key in siteConfig)) return;
    const value = siteConfig[key];
    const str = typeof value === "string" ? value : "";
    el.textContent = str;
  });

  document.querySelectorAll("[data-site-brand]").forEach(function (el) {
    const name = siteConfig.nomeBlog && siteConfig.nomeBlog.trim();
    el.textContent = name || brandFallback;
  });

  document.querySelectorAll('a[data-site="email"]').forEach(function (el) {
    const v = siteConfig.email && String(siteConfig.email).trim();
    if (v) {
      el.textContent = v;
      el.setAttribute("href", "mailto:" + v);
      el.removeAttribute("aria-disabled");
    } else {
      el.textContent = "";
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applySiteConfig);
} else {
  applySiteConfig();
}
