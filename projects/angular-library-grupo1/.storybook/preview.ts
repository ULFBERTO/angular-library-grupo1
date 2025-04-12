import type { Preview } from '@storybook/angular'
import { setCompodocJson } from '@storybook/addon-docs/angular'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => ({
      ...story,
      template: `<div style="margin: 3em">${story()}</div>`,
      applicationConfig: {
        providers: []
      }
    }),
  ],
};

export default preview;
