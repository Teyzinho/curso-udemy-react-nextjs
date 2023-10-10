import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Molestias quisquam a architecto mollitia ullam! Labore a
      repellendus cumque ullam facere, qui, fugiat saepe dicta,
      voluptate dignissimos deleniti ea nostrum reiciendis`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
