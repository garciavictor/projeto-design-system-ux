import styled, { css } from "styled-components";
import { Theme } from "../../styles";

export const H1 = styled.h1`
    font-weight: ${Theme.typography.h1.weight};
    font-size: ${Theme.typography.h1.size};
    line-height: ${Theme.typography.h1.height};
`;

export const H2 = styled.h2`
    font-weight: ${Theme.typography.h2.weight};
    font-size: ${Theme.typography.h2.size};
    line-height: ${Theme.typography.h2.height};
`;

export const H3 = styled.h2`
    font-weight: ${Theme.typography.h3.weight};
    font-size: ${Theme.typography.h3.size};
    line-height: ${Theme.typography.h3.height};
    color: ${Theme.colors.neutrals.white[100]};
`;

export const Paragraph = styled.p<{ variant: "default" | "small" }>`
    font-weight: ${Theme.typography.text.weight};
    font-size: ${Theme.typography.text.size};
    line-height: ${Theme.typography.text.height};

    ${({ variant }) => variant === 'small' && css`
        font-weight: ${Theme.typography.small.weight};
        font-size: ${Theme.typography.small.size};
        line-height: ${Theme.typography.small.height};
    `}
`