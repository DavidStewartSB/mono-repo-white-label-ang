# Snapshot da Arquitetura

- **Root:** `C:\dev\angular-arch\cardapio-online`
- **Gerado em:** 2026-03-02T18:46:14.449Z
- **Formato:** `md`
- **Profundidade máxima:** `12`
- **Incluir arquivos:** `true`

## Árvore de pastas

```txt
cardapio-online/
├── apps/
│   ├── blend-food/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.scss
│   │   │   │   ├── app.component.spec.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   │   └── app.routes.ts
│   │   │   ├── assets/
│   │   │   │   └── brand/
│   │   │   │       └── logo.png
│   │   │   ├── environments/
│   │   │   │   ├── environment.dev.ts
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── styles/
│   │   │   │   └── _brand.scss
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── styles.scss
│   │   │   └── test-setup.ts
│   │   ├── jest.config.ts
│   │   ├── project.json
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.editor.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
│   ├── blend-food-e2e/
│   │   ├── src/
│   │   │   ├── e2e/
│   │   │   │   └── app.cy.ts
│   │   │   ├── fixtures/
│   │   │   │   └── example.json
│   │   │   └── support/
│   │   │       ├── app.po.ts
│   │   │       ├── commands.ts
│   │   │       └── e2e.ts
│   │   ├── cypress.config.ts
│   │   ├── project.json
│   │   └── tsconfig.json
│   ├── ju-marmitaria/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.scss
│   │   │   │   ├── app.component.spec.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   │   └── app.routes.ts
│   │   │   ├── assets/
│   │   │   │   └── brand/
│   │   │   │       └── logo.png
│   │   │   ├── environments/
│   │   │   │   ├── environment.dev.ts
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── styles/
│   │   │   │   └── _brand.scss
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── styles.scss
│   │   │   └── test-setup.ts
│   │   ├── jest.config.ts
│   │   ├── project.json
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.editor.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
│   └── ju-marmitaria-e2e/
│       ├── src/
│       │   ├── e2e/
│       │   │   └── app.cy.ts
│       │   ├── fixtures/
│       │   │   └── example.json
│       │   └── support/
│       │       ├── app.po.ts
│       │       ├── commands.ts
│       │       └── e2e.ts
│       ├── cypress.config.ts
│       ├── project.json
│       └── tsconfig.json
├── libs/
│   ├── components/
│   │   ├── button/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── ui-button/
│   │   │   │   │   │   ├── ui-button.component.html
│   │   │   │   │   │   ├── ui-button.component.scss
│   │   │   │   │   │   ├── ui-button.component.spec.ts
│   │   │   │   │   │   └── ui-button.component.ts
│   │   │   │   │   └── button.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── inputs/
│   │       ├── src/
│   │       │   ├── lib/
│   │       │   │   └── inputs.module.ts
│   │       │   ├── index.ts
│   │       │   └── test-setup.ts
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   ├── core/
│   │   ├── auth/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── data-access/
│   │   │   │   │   │   ├── auth.service.spec.ts
│   │   │   │   │   │   └── auth.service.ts
│   │   │   │   │   ├── guards/
│   │   │   │   │   │   └── auth.guard.ts
│   │   │   │   │   └── auth.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── config/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── app-config.token.ts
│   │   │   │   │   └── config.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── http/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── interceptors/
│   │   │   │   │   │   └── base-url.interceptor.ts
│   │   │   │   │   ├── http-core.module.ts
│   │   │   │   │   └── http-providers.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── shell/
│   │       ├── src/
│   │       │   ├── lib/
│   │       │   │   ├── layout/
│   │       │   │   │   └── shell-layout/
│   │       │   │   │       ├── shell-layout.component.html
│   │       │   │   │       ├── shell-layout.component.scss
│   │       │   │   │       ├── shell-layout.component.spec.ts
│   │       │   │   │       └── shell-layout.component.ts
│   │       │   │   └── shell.module.ts
│   │       │   ├── index.ts
│   │       │   └── test-setup.ts
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   └── featureds/
│       ├── agendamento/
│       │   ├── src/
│       │   │   ├── lib/
│       │   │   │   ├── pages/
│       │   │   │   │   └── agendamento-home/
│       │   │   │   │       ├── agendamento-home.component.html
│       │   │   │   │       ├── agendamento-home.component.scss
│       │   │   │   │       ├── agendamento-home.component.spec.ts
│       │   │   │   │       └── agendamento-home.component.ts
│       │   │   │   ├── agendamento.module.ts
│       │   │   │   └── lib.routes.ts
│       │   │   ├── index.ts
│       │   │   └── test-setup.ts
│       │   ├── jest.config.ts
│       │   ├── project.json
│       │   ├── README.md
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   └── tsconfig.spec.json
│       ├── categories/
│       │   ├── src/
│       │   │   ├── lib/
│       │   │   │   ├── pages/
│       │   │   │   │   └── admin/
│       │   │   │   │       ├── category-form/
│       │   │   │   │       │   ├── category-form.component.html
│       │   │   │   │       │   ├── category-form.component.scss
│       │   │   │   │       │   ├── category-form.component.spec.ts
│       │   │   │   │       │   └── category-form.component.ts
│       │   │   │   │       └── category-list/
│       │   │   │   │           ├── category-list.component.html
│       │   │   │   │           ├── category-list.component.scss
│       │   │   │   │           ├── category-list.component.spec.ts
│       │   │   │   │           └── category-list.component.ts
│       │   │   │   ├── categories.module.ts
│       │   │   │   └── lib.routes.ts
│       │   │   ├── index.ts
│       │   │   └── test-setup.ts
│       │   ├── jest.config.ts
│       │   ├── project.json
│       │   ├── README.md
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   └── tsconfig.spec.json
│       ├── company/
│       │   ├── src/
│       │   │   ├── lib/
│       │   │   │   ├── pages/
│       │   │   │   │   ├── admin/
│       │   │   │   │   │   └── company-detail/
│       │   │   │   │   │       ├── company-detail.component.html
│       │   │   │   │   │       ├── company-detail.component.scss
│       │   │   │   │   │       ├── company-detail.component.spec.ts
│       │   │   │   │   │       └── company-detail.component.ts
│       │   │   │   │   └── client/
│       │   │   │   ├── company.module.ts
│       │   │   │   └── lib.routes.ts
│       │   │   ├── index.ts
│       │   │   └── test-setup.ts
│       │   ├── jest.config.ts
│       │   ├── project.json
│       │   ├── README.md
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   └── tsconfig.spec.json
│       ├── login/
│       │   ├── src/
│       │   │   ├── lib/
│       │   │   │   ├── pages/
│       │   │   │   │   └── login-page/
│       │   │   │   │       ├── login-page.component.html
│       │   │   │   │       ├── login-page.component.scss
│       │   │   │   │       ├── login-page.component.spec.ts
│       │   │   │   │       └── login-page.component.ts
│       │   │   │   ├── lib.routes.ts
│       │   │   │   └── login.module.ts
│       │   │   ├── index.ts
│       │   │   └── test-setup.ts
│       │   ├── jest.config.ts
│       │   ├── project.json
│       │   ├── README.md
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   └── tsconfig.spec.json
│       ├── orders/
│       │   ├── src/
│       │   │   ├── lib/
│       │   │   │   ├── lib.routes.ts
│       │   │   │   └── orders.module.ts
│       │   │   ├── index.ts
│       │   │   └── test-setup.ts
│       │   ├── jest.config.ts
│       │   ├── project.json
│       │   ├── README.md
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   └── tsconfig.spec.json
│       └── produtos/
│           ├── src/
│           │   ├── lib/
│           │   │   ├── data-access/
│           │   │   │   ├── products.service.spec.ts
│           │   │   │   └── products.service.ts
│           │   │   ├── pages/
│           │   │   │   ├── admin/
│           │   │   │   │   ├── product-form/
│           │   │   │   │   │   ├── product-form.component.html
│           │   │   │   │   │   ├── product-form.component.scss
│           │   │   │   │   │   ├── product-form.component.spec.ts
│           │   │   │   │   │   └── product-form.component.ts
│           │   │   │   │   └── product-table/
│           │   │   │   │       ├── product-table.component.html
│           │   │   │   │       ├── product-table.component.scss
│           │   │   │   │       ├── product-table.component.spec.ts
│           │   │   │   │       └── product-table.component.ts
│           │   │   │   └── public/
│           │   │   │       ├── product-detail/
│           │   │   │       │   ├── product-detail.component.html
│           │   │   │       │   ├── product-detail.component.scss
│           │   │   │       │   ├── product-detail.component.spec.ts
│           │   │   │       │   └── product-detail.component.ts
│           │   │   │       └── products-list/
│           │   │   │           ├── products-list.component.html
│           │   │   │           ├── products-list.component.scss
│           │   │   │           ├── products-list.component.spec.ts
│           │   │   │           └── products-list.component.ts
│           │   │   ├── lib.routes.ts
│           │   │   └── produtos.module.ts
│           │   ├── index.ts
│           │   └── test-setup.ts
│           ├── jest.config.ts
│           ├── project.json
│           ├── README.md
│           ├── tsconfig.json
│           ├── tsconfig.lib.json
│           └── tsconfig.spec.json
├── tools/
│   └── snapshot-arch.mjs
├── ARCHITECTURE_SNAPSHOT.md
├── jest.config.ts
├── jest.preset.js
├── nx.json
├── package.json
├── README.md
└── tsconfig.base.json
```

## Partes de assembly detectadas (heurística)

```txt
- apps/
- libs/
```

_Dica: ajuste os marcadores em `ARCHITECTURE_MARKERS` para refletir seu padrão real (Clean/Hexagonal/Nx/etc)._
