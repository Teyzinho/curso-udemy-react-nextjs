import P from 'prop-types';

const Button = ({ children, onButtonClick }) => {
  return <button onClick={onButtonClick}>{children}</button>;
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func,
};

export default Button;
