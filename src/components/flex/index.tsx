import styled from "styled-components";

interface Props {
    justify?: string,
    align?: string,
    wrap?: string,
    gap?: string,
    width?: string,
    height?: string;
}

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  gap: ${({ gap }) => gap || "0"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
`;

export const Row = styled(Flex)`
    flex-direction: row
`

export const Column = styled(Flex)`
    flex-direction: column
`
