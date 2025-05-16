import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../styles'

const ButtonWrapper = styled.button`
  font-size: ${Theme.typography.button.size};
  font-weight: ${Theme.typography.button.weight};
  line-height: ${Theme.typography.button.height};
  border-radius: ${Theme.border_radius.r3};
  border: none;
  color: ${Theme.colors.neutrals.black[100]};
  border-right: 2px solid ${Theme.colors.primary[700]};
  border-bottom: 3px solid ${Theme.colors.primary[700]};
  background: ${Theme.colors.neutrals.white[25]};
  cursor: pointer;
  transition: all 0.2s ease;
  width: -webkit-fill-available;
  width: stretch;
  width: -moz-available;
  height: 42px;

  ${({ disabled }) => disabled && css`
    color: ${Theme.colors.neutrals.black[75]};
    background: ${Theme.colors.neutrals.black[25]};
    border-color: ${Theme.colors.primary[500]};
    cursor: not-allowed;
  `}

  &:hover { 
    color: ${Theme.colors.neutrals.black[75]};
    background: ${Theme.colors.neutrals.black[25]};
    border-color: ${Theme.colors.primary[500]};
  }

  &:active { 
    color: ${Theme.colors.neutrals.black[50]};
    background: ${Theme.colors.neutrals.white[100]};
    border-color: ${Theme.colors.primary[900]};
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinnerIcon = styled(FontAwesomeIcon)`
  animation: ${spin} 1s linear infinite;
`;

const ButtonText = styled.span`
    font-size: ${Theme.typography.button.size};
    font-weight: ${Theme.typography.button.weight};
    line-height: ${Theme.typography.button.height};
`

export interface ButtonProps {
  isLoading?: boolean;
  icon?: any;
  onClick: () => void;
  buttonText: string;
  style?: any;
}

export const Button = ({ buttonText, isLoading = false, onClick, icon, ...props }: ButtonProps) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <SpinnerIcon icon={faSpinner} style={{ marginRight: Theme.spacing.s3 }} />
          <ButtonText>{buttonText}</ButtonText>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={icon} style={{ marginRight: Theme.spacing.s3 }} />
          <ButtonText>{buttonText}</ButtonText>
        </>
      )}
    </ButtonWrapper>
  );
};