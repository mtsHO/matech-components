import type { Meta, StoryObj } from '@storybook/react-vite';
import { MatechThemeProvider } from '../../theme';
import { Button } from '../Button';
import { StoryStack } from './story-layout';
import {
  HeartIcon,
  PlayIcon,
  PlusIcon,
  ReplyIcon,
  TrashIcon,
} from './story-icons';
import { createButtonStoryTheme } from './story-theme';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Novo curso',
    size: 'large',
    variant: 'primary',
  },
  argTypes: {
    icon: {
      control: false,
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    children: 'Retomar curso',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Responder',
    variant: 'tertiary',
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    children: 'Novo evento',
    icon: <PlusIcon />,
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    children: 'Retomar curso',
    icon: <PlayIcon />,
    variant: 'secondary',
  },
};

export const TertiaryWithIcon: Story = {
  args: {
    children: 'Curtir',
    icon: <HeartIcon />,
    variant: 'tertiary',
  },
};

export const Showcase: Story = {
  render: () => (
    <StoryStack alignItems="flex-start">
      <Button icon={<PlusIcon />}>Novo evento</Button>
      <Button icon={<PlayIcon />} variant="secondary">
        Retomar curso
      </Button>
      <Button>Novo curso</Button>
      <StoryStack alignItems="center" direction="row" gap={8} wrap="wrap">
        <Button icon={<HeartIcon />} variant="tertiary">
          Curtido (1)
        </Button>
        <Button icon={<ReplyIcon />} variant="tertiary">
          Responder
        </Button>
        <Button
          icon={<TrashIcon />}
          style={{ color: '#FF4D3D' }}
          variant="tertiary"
        >
          Remover
        </Button>
      </StoryStack>
    </StoryStack>
  ),
};

export const CustomPalette: Story = {
  render: () => {
    const theme = createButtonStoryTheme();

    return (
      <MatechThemeProvider theme={theme}>
        <StoryStack alignItems="flex-start">
          <Button icon={<PlusIcon />}>Novo evento</Button>
          <Button icon={<PlayIcon />} variant="secondary">
            Retomar curso
          </Button>
          <StoryStack alignItems="center" direction="row" gap={8} wrap="wrap">
            <Button icon={<HeartIcon />} variant="tertiary">
              Curtido (1)
            </Button>
            <Button
              icon={<TrashIcon />}
              style={{ color: '#D9485F' }}
              variant="tertiary"
            >
              Remover
            </Button>
          </StoryStack>
        </StoryStack>
      </MatechThemeProvider>
    );
  },
};
