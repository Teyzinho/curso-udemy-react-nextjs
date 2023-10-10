import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda,😂 tchongado</a></p>`,
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
