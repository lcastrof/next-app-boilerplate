import { Meta, Story } from '@storybook/react/types-6-0';
import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      options: ['Next boilerplate', 'Next.js'],
      control: { type: 'radio' },
      defaultValue: 'Next boilerplate'
    },
    subtitle: { type: 'string', defaultValue: 'Nice hacking!' }
  }
} as Meta;

const Template: Story = (args) => <Main {...args} />;

export const Basic = Template.bind({});
