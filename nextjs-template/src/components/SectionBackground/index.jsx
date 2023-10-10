import P from 'prop-types';
import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';

const ramdom = () => `id-${Math.random() * 1000}`.replace(/[^a-z0-9-_]/gi, '-');

export const SectionBackground = ({ children, background, sectionId = '' }) => {
  const id = sectionId ? sectionId : ramdom();

  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
