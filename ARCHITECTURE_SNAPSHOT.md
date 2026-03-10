# Snapshot da Arquitetura

- **Root:** `C:\dev\angular-arch\cardapio-online`
- **Gerado em:** 2026-03-10T02:33:16.065Z
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
│   ├── cardapio-multi/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── app.component.html
│   │   │   │   ├── app.component.scss
│   │   │   │   ├── app.component.spec.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   │   ├── app.routes.ts
│   │   │   │   └── nx-welcome.component.ts
│   │   │   ├── assets/
│   │   │   ├── environments/
│   │   │   │   ├── environment.dev.ts
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── favicon.ico
│   │   │   ├── index.html
│   │   │   ├── main.ts
│   │   │   ├── styles.scss
│   │   │   └── test-setup.ts
│   │   ├── jest.config.ts
│   │   ├── project.json
│   │   ├── proxy.conf.json
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.editor.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.spec.json
│   ├── cardapio-multi-e2e/
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
│   │   │   │       ├── empty.jpg
│   │   │   │       ├── framed-pictured.svg
│   │   │   │       └── logo.png
│   │   │   ├── environments/
│   │   │   │   ├── environment.dev.ts
│   │   │   │   ├── environment.prod.ts
│   │   │   │   └── environment.ts
│   │   │   ├── styles/
│   │   │   │   ├── _brand.scss
│   │   │   │   ├── _config.scss
│   │   │   │   └── _driver-tutorial.scss
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
├── docs/
│   ├── commands-init.txt
│   ├── core-commands.txt
│   ├── criar-module.txt
│   ├── criar-tokens.txt
│   └── proposta-featureds.txt
├── libs/
│   ├── components/
│   │   ├── breadcrumb/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── models/
│   │   │   │   │   │   └── breadcrumb-item.interface.ts
│   │   │   │   │   ├── ui-breadcrumb/
│   │   │   │   │   │   ├── ui-breadcrumb.component.html
│   │   │   │   │   │   ├── ui-breadcrumb.component.scss
│   │   │   │   │   │   ├── ui-breadcrumb.component.spec.ts
│   │   │   │   │   │   └── ui-breadcrumb.component.ts
│   │   │   │   │   └── breadcrumb.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── button/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── ui-button/
│   │   │   │   │   │   ├── button.palette.ts
│   │   │   │   │   │   ├── button.types.ts
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
│   │   ├── drawer/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── ui-drawer/
│   │   │   │   │   │   ├── ui-drawer.component.html
│   │   │   │   │   │   ├── ui-drawer.component.scss
│   │   │   │   │   │   ├── ui-drawer.component.spec.ts
│   │   │   │   │   │   └── ui-drawer.component.ts
│   │   │   │   │   ├── drawer.module.ts
│   │   │   │   │   └── drawer.service.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── forms/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── form-dynamic/
│   │   │   │   │   │   ├── ui-forms-dynamic.component.html
│   │   │   │   │   │   ├── ui-forms-dynamic.component.scss
│   │   │   │   │   │   ├── ui-forms-dynamic.component.spec.ts
│   │   │   │   │   │   └── ui-forms-dynamic.component.ts
│   │   │   │   │   ├── ui-forms/
│   │   │   │   │   │   ├── ui-forms.component.html
│   │   │   │   │   │   ├── ui-forms.component.scss
│   │   │   │   │   │   ├── ui-forms.component.spec.ts
│   │   │   │   │   │   └── ui-forms.component.ts
│   │   │   │   │   └── forms.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── input-photo/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── models/
│   │   │   │   │   │   ├── input-photo-mode.types.ts
│   │   │   │   │   │   └── input-photo.interfaces.ts
│   │   │   │   │   ├── ui-input-photo/
│   │   │   │   │   │   ├── ui-input-photo.component.html
│   │   │   │   │   │   ├── ui-input-photo.component.scss
│   │   │   │   │   │   ├── ui-input-photo.component.spec.ts
│   │   │   │   │   │   └── ui-input-photo.component.ts
│   │   │   │   │   └── input-photo.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── inputs/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── input-container/
│   │   │   │   │   │   ├── input-container.component.html
│   │   │   │   │   │   ├── input-container.component.scss
│   │   │   │   │   │   ├── input-container.component.spec.ts
│   │   │   │   │   │   └── input-container.component.ts
│   │   │   │   │   ├── lib-input-email/
│   │   │   │   │   │   ├── input-email.component.html
│   │   │   │   │   │   ├── input-email.component.scss
│   │   │   │   │   │   ├── input-email.component.spec.ts
│   │   │   │   │   │   └── input-email.component.ts
│   │   │   │   │   ├── lib-input-password/
│   │   │   │   │   │   ├── input-password.component.html
│   │   │   │   │   │   ├── input-password.component.scss
│   │   │   │   │   │   ├── input-password.component.spec.ts
│   │   │   │   │   │   └── input-password.component.ts
│   │   │   │   │   ├── lib-input-tel/
│   │   │   │   │   │   ├── lib-input-tel.component.html
│   │   │   │   │   │   ├── lib-input-tel.component.scss
│   │   │   │   │   │   ├── lib-input-tel.component.spec.ts
│   │   │   │   │   │   └── lib-input-tel.component.ts
│   │   │   │   │   ├── lib-input-texto/
│   │   │   │   │   │   ├── input-texto.component.html
│   │   │   │   │   │   ├── input-texto.component.scss
│   │   │   │   │   │   ├── input-texto.component.spec.ts
│   │   │   │   │   │   └── input-texto.component.ts
│   │   │   │   │   ├── ui-input-checkbox/
│   │   │   │   │   │   ├── input-checkbox.component.html
│   │   │   │   │   │   ├── input-checkbox.component.scss
│   │   │   │   │   │   ├── input-checkbox.component.spec.ts
│   │   │   │   │   │   └── input-checkbox.component.ts
│   │   │   │   │   ├── utils/
│   │   │   │   │   │   ├── _input-field-foundation.scss
│   │   │   │   │   │   ├── input-global.ts
│   │   │   │   │   │   ├── input-message.interface.ts
│   │   │   │   │   │   ├── input-select.interface.ts
│   │   │   │   │   │   ├── input.config.interface.ts
│   │   │   │   │   │   ├── input.types.ts
│   │   │   │   │   │   └── mensagens.errors.ts
│   │   │   │   │   ├── input.component.html
│   │   │   │   │   ├── input.component.scss
│   │   │   │   │   ├── input.component.spec.ts
│   │   │   │   │   ├── input.component.ts
│   │   │   │   │   └── inputs.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── loaders/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── loader/
│   │   │   │   │   │   ├── ui-loader.component.html
│   │   │   │   │   │   ├── ui-loader.component.scss
│   │   │   │   │   │   ├── ui-loader.component.spec.ts
│   │   │   │   │   │   └── ui-loader.component.ts
│   │   │   │   │   └── loaders.module.ts
│   │   │   │   ├── types/
│   │   │   │   │   └── loader.type.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── table/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── models/
│   │   │   │   │   │   ├── table.interface.ts
│   │   │   │   │   │   └── table.type.ts
│   │   │   │   │   ├── ui-tables/
│   │   │   │   │   │   ├── ui-tables.component.html
│   │   │   │   │   │   ├── ui-tables.component.scss
│   │   │   │   │   │   ├── ui-tables.component.spec.ts
│   │   │   │   │   │   └── ui-tables.component.ts
│   │   │   │   │   └── tables.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── tooltips/
│   │       ├── src/
│   │       │   ├── lib/
│   │       │   │   ├── tooltips/
│   │       │   │   │   ├── tooltip.directive.ts
│   │       │   │   │   ├── ui-tooltip.component.html
│   │       │   │   │   ├── ui-tooltip.component.scss
│   │       │   │   │   ├── ui-tooltip.component.spec.ts
│   │       │   │   │   └── ui-tooltip.component.ts
│   │       │   │   ├── utils/
│   │       │   │   │   └── tooltip-position.type.ts
│   │       │   │   └── tooltip.module.ts
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
│   │   │   │   │   ├── tenant/
│   │   │   │   │   │   ├── guards/
│   │   │   │   │   │   │   └── tenant-auth.guard.ts
│   │   │   │   │   │   └── tenant-auth.service.ts
│   │   │   │   │   ├── types/
│   │   │   │   │   │   ├── login.type.ts
│   │   │   │   │   │   └── tenant.state.type.ts
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
│   │   │   │   │   ├── config.module.ts
│   │   │   │   │   └── runtime-app-config.service.ts
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
│   │   │   │   │   ├── tenant/
│   │   │   │   │   │   ├── tenant-base-url.interceptor.ts
│   │   │   │   │   │   └── tenant-http-core.module.ts
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
│   │   ├── loading/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   └── loading.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── media/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── data-access/
│   │   │   │   │   │   ├── media-upload.service.spec.ts
│   │   │   │   │   │   └── media-upload.service.ts
│   │   │   │   │   ├── models/
│   │   │   │   │   │   ├── media-upload.interfaces.ts
│   │   │   │   │   │   └── media-upload.types.ts
│   │   │   │   │   └── media.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── onboarding/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── models/
│   │   │   │   │   │   ├── onboarding-events.constants.ts
│   │   │   │   │   │   ├── onboarding-step.model.ts
│   │   │   │   │   │   └── onboarding-tour-options.model.ts
│   │   │   │   │   ├── services/
│   │   │   │   │   │   ├── tour.service.spec.ts
│   │   │   │   │   │   ├── tour.service.ts
│   │   │   │   │   │   ├── tutorial-storage.service.spec.ts
│   │   │   │   │   │   └── tutorial-storage.service.ts
│   │   │   │   │   └── onboarding.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   ├── shell/
│   │   │   ├── src/
│   │   │   │   ├── lib/
│   │   │   │   │   ├── layout/
│   │   │   │   │   │   ├── admin/
│   │   │   │   │   │   │   ├── shell-admin-sidebar/
│   │   │   │   │   │   │   │   ├── shell-admin-sidebar.component.html
│   │   │   │   │   │   │   │   ├── shell-admin-sidebar.component.scss
│   │   │   │   │   │   │   │   ├── shell-admin-sidebar.component.spec.ts
│   │   │   │   │   │   │   │   └── shell-admin-sidebar.component.ts
│   │   │   │   │   │   │   ├── shell-admin-toolbar/
│   │   │   │   │   │   │   │   ├── shell-admin-toolbar.component.html
│   │   │   │   │   │   │   │   ├── shell-admin-toolbar.component.scss
│   │   │   │   │   │   │   │   ├── shell-admin-toolbar.component.spec.ts
│   │   │   │   │   │   │   │   └── shell-admin-toolbar.component.ts
│   │   │   │   │   │   │   └── shell-layout-admin/
│   │   │   │   │   │   │       ├── shell-layout-admin.component.html
│   │   │   │   │   │   │       ├── shell-layout-admin.component.scss
│   │   │   │   │   │   │       ├── shell-layout-admin.component.spec.ts
│   │   │   │   │   │   │       └── shell-layout-admin.component.ts
│   │   │   │   │   │   └── public/
│   │   │   │   │   │       ├── shell-footer/
│   │   │   │   │   │       │   ├── shell-footer.component.html
│   │   │   │   │   │       │   ├── shell-footer.component.scss
│   │   │   │   │   │       │   ├── shell-footer.component.spec.ts
│   │   │   │   │   │       │   └── shell-footer.component.ts
│   │   │   │   │   │       ├── shell-header/
│   │   │   │   │   │       │   ├── shell-header.component.html
│   │   │   │   │   │       │   ├── shell-header.component.scss
│   │   │   │   │   │       │   ├── shell-header.component.spec.ts
│   │   │   │   │   │       │   └── shell-header.component.ts
│   │   │   │   │   │       └── shell-layout/
│   │   │   │   │   │           ├── shell-layout.component.html
│   │   │   │   │   │           ├── shell-layout.component.scss
│   │   │   │   │   │           ├── shell-layout.component.spec.ts
│   │   │   │   │   │           └── shell-layout.component.ts
│   │   │   │   │   ├── models/
│   │   │   │   │   │   └── admin-nav-item.model.ts
│   │   │   │   │   ├── theme/
│   │   │   │   │   │   └── theme-applier.service.ts
│   │   │   │   │   └── shell.module.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── test-setup.ts
│   │   │   ├── jest.config.ts
│   │   │   ├── project.json
│   │   │   ├── README.md
│   │   │   ├── tsconfig.json
│   │   │   ├── tsconfig.lib.json
│   │   │   └── tsconfig.spec.json
│   │   └── tenant/
│   │       ├── src/
│   │       │   ├── lib/
│   │       │   │   ├── tenant-resolver.service.ts
│   │       │   │   └── tenant.module.ts
│   │       │   ├── index.ts
│   │       │   └── test-setup.ts
│   │       ├── jest.config.ts
│   │       ├── project.json
│   │       ├── README.md
│   │       ├── tsconfig.json
│   │       ├── tsconfig.lib.json
│   │       └── tsconfig.spec.json
│   └── featureds/
│       ├── admin/
│       │   ├── dashboard/
│       │   │   ├── src/
│       │   │   │   ├── lib/
│       │   │   │   │   ├── pages/
│       │   │   │   │   │   └── dashboard/
│       │   │   │   │   │       ├── dashboard-admin.component.html
│       │   │   │   │   │       ├── dashboard-admin.component.scss
│       │   │   │   │   │       ├── dashboard-admin.component.spec.ts
│       │   │   │   │   │       └── dashboard-admin.component.ts
│       │   │   │   │   ├── utils/
│       │   │   │   │   │   ├── dashboard-admin-tour.ts
│       │   │   │   │   │   ├── dashboard-widget.registry.ts
│       │   │   │   │   │   ├── dashboard.interfaces.ts
│       │   │   │   │   │   └── dashboard.types.ts
│       │   │   │   │   ├── dashboard.module.ts
│       │   │   │   │   └── lib.routes.ts
│       │   │   │   ├── index.ts
│       │   │   │   └── test-setup.ts
│       │   │   ├── jest.config.ts
│       │   │   ├── pontas-soltas.txt
│       │   │   ├── project.json
│       │   │   ├── README.md
│       │   │   ├── tsconfig.json
│       │   │   ├── tsconfig.lib.json
│       │   │   └── tsconfig.spec.json
│       │   └── products-admin/
│       │       ├── src/
│       │       │   ├── lib/
│       │       │   │   ├── data-access/
│       │       │   │   │   └── products-admin.service.ts
│       │       │   │   ├── mocks/
│       │       │   │   │   └── products-admin.mock.ts
│       │       │   │   ├── models/
│       │       │   │   │   ├── product-admin-item.type.ts
│       │       │   │   │   └── product-admin-list-response.type.ts
│       │       │   │   ├── pages/
│       │       │   │   │   ├── product-form/
│       │       │   │   │   │   ├── product-form-admin.component.html
│       │       │   │   │   │   ├── product-form-admin.component.scss
│       │       │   │   │   │   ├── product-form-admin.component.spec.ts
│       │       │   │   │   │   └── product-form-admin.component.ts
│       │       │   │   │   └── product-list/
│       │       │   │   │       ├── product-list-admin.component.html
│       │       │   │   │       ├── product-list-admin.component.scss
│       │       │   │   │       ├── product-list-admin.component.spec.ts
│       │       │   │   │       └── product-list-admin.component.ts
│       │       │   │   ├── utils/
│       │       │   │   │   └── breadcrumb-items.const.ts
│       │       │   │   ├── lib.routes.ts
│       │       │   │   └── products-admin.module.ts
│       │       │   ├── index.ts
│       │       │   └── test-setup.ts
│       │       ├── jest.config.ts
│       │       ├── project.json
│       │       ├── README.md
│       │       ├── tsconfig.json
│       │       ├── tsconfig.lib.json
│       │       └── tsconfig.spec.json
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
│       ├── produtos/
│       │   ├── src/
│       │   │   ├── lib/
│       │   │   │   ├── data-access/
│       │   │   │   │   ├── products.service.spec.ts
│       │   │   │   │   └── products.service.ts
│       │   │   │   ├── pages/
│       │   │   │   │   ├── admin/
│       │   │   │   │   │   ├── product-form/
│       │   │   │   │   │   │   ├── product-form.component.html
│       │   │   │   │   │   │   ├── product-form.component.scss
│       │   │   │   │   │   │   ├── product-form.component.spec.ts
│       │   │   │   │   │   │   └── product-form.component.ts
│       │   │   │   │   │   └── product-table/
│       │   │   │   │   │       ├── product-table.component.html
│       │   │   │   │   │       ├── product-table.component.scss
│       │   │   │   │   │       ├── product-table.component.spec.ts
│       │   │   │   │   │       └── product-table.component.ts
│       │   │   │   │   └── public/
│       │   │   │   │       ├── product-detail/
│       │   │   │   │       │   ├── product-detail.component.html
│       │   │   │   │       │   ├── product-detail.component.scss
│       │   │   │   │       │   ├── product-detail.component.spec.ts
│       │   │   │   │       │   └── product-detail.component.ts
│       │   │   │   │       └── products-list/
│       │   │   │   │           ├── products-list.component.html
│       │   │   │   │           ├── products-list.component.scss
│       │   │   │   │           ├── products-list.component.spec.ts
│       │   │   │   │           └── products-list.component.ts
│       │   │   │   ├── lib.routes.ts
│       │   │   │   └── produtos.module.ts
│       │   │   ├── index.ts
│       │   │   └── test-setup.ts
│       │   ├── jest.config.ts
│       │   ├── project.json
│       │   ├── README.md
│       │   ├── tsconfig.json
│       │   ├── tsconfig.lib.json
│       │   └── tsconfig.spec.json
│       └── public/
├── tools/
│   └── snapshot-arch.mjs
├── ARCHITECTURE_SNAPSHOT.md
├── jest.config.ts
├── jest.preset.js
├── nx.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.base.json
```

## Partes de assembly detectadas (heurística)

```txt
- apps/
- libs/
```

_Dica: ajuste os marcadores em `ARCHITECTURE_MARKERS` para refletir seu padrão real (Clean/Hexagonal/Nx/etc)._
