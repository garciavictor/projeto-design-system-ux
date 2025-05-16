import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Theme } from '../../styles';

const LinkButtonWrapper = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: ${Theme.typography.button.size};
  font-weight: ${Theme.typography.button.weight};
  line-height: ${Theme.typography.button.height};
  color: ${Theme.colors.neutrals.white[100]};
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${Theme.colors.neutrals.black[75]};
    text-decoration: underline;
  }
`;

interface LinkButtonProps {
    icon?: any;
    linkButtonText: string;
}

export const LinkButton = ({ linkButtonText, icon, ...props }: LinkButtonProps) => {
    return (
        <LinkButtonWrapper {...props}>
            {icon && <FontAwesomeIcon style={{ paddingRight: Theme.spacing.s4 }} icon={icon} />}
            {linkButtonText}
        </LinkButtonWrapper>
    );
};
