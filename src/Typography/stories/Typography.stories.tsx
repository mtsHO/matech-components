import type { Meta, StoryObj } from '@storybook/react-vite';
import { MatechThemeProvider } from '../../theme';
import { Typography } from '../Typography';
import { StoryStack } from './story-layout';
import { createTypographyStoryTheme } from './story-theme';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Texto de exemplo',
    variant: 'body1',
  },
  argTypes: {
    as: {
      control: false,
    },
    color: {
      control: 'inline-radio',
      options: ['default', 'muted', 'brand', 'inherit'],
    },
    variant: {
      control: 'select',
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
        'lead',
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const H1: Story = {
  args: {
    children: 'Heading h1',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Heading h2',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Heading h3',
    variant: 'h3',
  },
};

export const H4: Story = {
  args: {
    children: 'Heading h4',
    variant: 'h4',
  },
};

export const H5: Story = {
  args: {
    children: 'Heading h5',
    variant: 'h5',
  },
};

export const H6: Story = {
  args: {
    children: 'Heading h6',
    variant: 'h6',
  },
};

export const Subtitle1: Story = {
  args: {
    children: 'Subtitle 1',
    variant: 'subtitle1',
  },
};

export const Subtitle2: Story = {
  args: {
    children: 'Subtitle 2',
    color: 'muted',
    variant: 'subtitle2',
  },
};

export const Lead: Story = {
  args: {
    children: 'Lead e uma sugestao extra para introducoes e blocos de destaque.',
    variant: 'lead',
  },
};

export const Body1: Story = {
  args: {
    children:
      'Body 1 para paragrafos principais com melhor legibilidade em blocos maiores.',
    variant: 'body1',
  },
};

export const Body2: Story = {
  args: {
    children: 'Body 2 para textos secundarios, metadata e apoio visual.',
    color: 'muted',
    variant: 'body2',
  },
};

export const Caption: Story = {
  args: {
    children: 'Caption para detalhes pequenos e textos auxiliares.',
    color: 'muted',
    variant: 'caption',
  },
};

export const Overline: Story = {
  args: {
    children: 'Overline',
    color: 'brand',
    variant: 'overline',
  },
};

export const AllVariants: Story = {
  render: () => (
    <StoryStack>
      <Typography variant="h1">Heading h1</Typography>
      <Typography variant="h2">Heading h2</Typography>
      <Typography variant="h3">Heading h3</Typography>
      <Typography variant="h4">Heading h4</Typography>
      <Typography variant="h5">Heading h5</Typography>
      <Typography variant="h6">Heading h6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography color="muted" variant="subtitle2">
        Subtitle 2
      </Typography>
      <Typography variant="lead">
        Lead e uma sugestao extra para introducoes e blocos de destaque.
      </Typography>
      <Typography variant="body1">
        Body 1 para paragrafos principais com melhor legibilidade em blocos maiores.
      </Typography>
      <Typography color="muted" variant="body2">
        Body 2 para textos secundarios, metadata e apoio visual.
      </Typography>
      <Typography color="muted" variant="caption">
        Caption para detalhes pequenos e textos auxiliares.
      </Typography>
      <Typography color="brand" variant="overline">
        Overline
      </Typography>
    </StoryStack>
  ),
};

export const CustomTypography: Story = {
  render: () => {
    const theme = createTypographyStoryTheme();

    return (
      <MatechThemeProvider theme={theme}>
        <StoryStack>
          <Typography color="brand" variant="h3">
            Feed da comunidade
          </Typography>
          <Typography variant="subtitle1">
            Leia o feed, comente ou publique algo.
          </Typography>
          <Typography color="muted" variant="body1">
            Veja o que esta acontecendo na comunidade e participe das conversas.
          </Typography>
          <Typography color="muted" variant="caption">
            Exibindo 1 de 1 publicacoes.
          </Typography>
        </StoryStack>
      </MatechThemeProvider>
    );
  },
};
