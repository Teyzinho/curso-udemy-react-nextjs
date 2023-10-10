import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>FooterText/p>`,
  },
  argTypes: {},
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
