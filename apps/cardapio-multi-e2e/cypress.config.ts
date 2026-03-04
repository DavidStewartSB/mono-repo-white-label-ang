import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run cardapio-online:serve:development',
        production: 'nx run cardapio-online:serve:production',
      },
      ciWebServerCommand: 'nx run cardapio-online:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
