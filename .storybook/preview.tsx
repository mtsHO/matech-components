import type { Preview } from '@storybook/react-vite';
import { MatechThemeProvider } from '../src/theme';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'soft',
      values: [
        { name: 'soft', value: '#F5F7FF' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#2F2A66' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <MatechThemeProvider>
        <div style={{ padding: '1rem' }}>
          <Story />
        </div>
      </MatechThemeProvider>
    ),
  ],
};

export default preview;
