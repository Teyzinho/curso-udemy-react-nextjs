import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, isNewTab = false }) => {
  return (
    <Styled.Container href={link} target={isNewTab ? '_blank' : '_self'}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  isNewTab: P.bool,
};
