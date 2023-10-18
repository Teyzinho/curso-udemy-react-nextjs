import * as Styled from './styles';

export type DummyProps = {
  children: string;
};

export const Dummy = ({ children }: DummyProps) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};
