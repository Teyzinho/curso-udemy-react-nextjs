import P from 'prop-types';
import * as Styled from './styles';
import { useState } from 'react';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        aria-label="Open/Close menu"
        visible={visible}
        onClick={() => setVisible(true)}
      >
        {visible ? (
          <CloseIcon aria-label="Open menu" />
        ) : (
          <MenuIcon aria-label="Close menu" />
        )}
      </Styled.Button>
      <Styled.Container onClick={() => setVisible(false)} visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
