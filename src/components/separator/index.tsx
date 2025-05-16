import styled from 'styled-components';
import { Theme } from '../../styles';
import { Paragraph } from '../typography';

const SeparatorWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  color: ${Theme.colors.neutrals.white[100]};
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${Theme.colors.neutrals.white[100]};
`;

export const Separator = () => {
  return (
    <SeparatorWrapper>
      <Line />
      <Paragraph
        variant="small"
        style={{
          paddingTop: Theme.spacing.s7,
          paddingBottom: Theme.spacing.s7,
          paddingRight: Theme.spacing.s4,
          paddingLeft: Theme.spacing.s4,
          color: Theme.colors.neutrals.white[100]
        }}>
        ou
      </Paragraph>
      <Line />
    </SeparatorWrapper>
  );
};
