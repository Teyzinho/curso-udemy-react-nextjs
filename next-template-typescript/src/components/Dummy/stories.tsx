import { Dummy, DummyProps } from '.';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Dummy',
  component: Dummy,
  args: {
    children: 'Dummy',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: StoryFn<DummyProps> = (args) => {
  return (
    <div>
      <Dummy {...args} />
    </div>
  );
};
