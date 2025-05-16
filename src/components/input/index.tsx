import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../../styles';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  line-height: ${Theme.typography.input.label.height};
  font-weight: ${Theme.typography.input.label.weight};
  font-size: ${Theme.typography.input.label.size};
  color: ${Theme.colors.neutrals.white[100]};
  text-align: left;
`;

interface InputContainerProps {
  hasError: boolean;
  isFocused: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  padding: ${Theme.spacing.s2}px;
  border: none;
  border-radius: ${Theme.border_radius.r3};
  background-color: ${Theme.colors.neutrals.white[50]};

  ${({ hasError }) => hasError && css`
    outline: 1px solid ${Theme.colors.error.regular};
    outline-offset: -1px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  `}
`;

const StyledInput = styled.input<any>`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  line-height: ${Theme.typography.input.text.height};
  font-weight: ${Theme.typography.input.text.weight};
  font-size: ${Theme.typography.input.text.size};
  color: ${Theme.colors.neutrals.black[100]};
  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder {
  color: ${Theme.colors.neutrals.black[75]};
  }
`;

interface InputIconProps {
  hasError: boolean;
}
export const InputIcon = styled.div<InputIconProps>`
  color: ${({ hasError }) => (hasError ? Theme.colors.error.regular : Theme.colors.neutrals.black[75])};
  width: 18px;
  height: 18px;
  display: contents;
`;

export const InputDescription = styled.span`
  font-size: ${Theme.typography.input.description.size};
  line-height: ${Theme.typography.input.description.height};
  font-weight: ${Theme.typography.input.description.weight};
  color: ${Theme.colors.error.regular};
  text-align: left;
`;

interface InputProps {
  inputLabel: string;
  placeholder: string;
  value: string;
  onChange: (event: any) => void;
  error?: string;
  icon?: IconDefinition;
  onClickIcon?: (event: any) => void;
  iconStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  type?: "text" | "password"
}

export const Input = ({
  inputLabel,
  placeholder: placeholderText,
  value,
  onChange,
  error: errorMessage,
  icon,
  onClickIcon,
  iconStyle,
  type = "text",
  style,
  ...props }: InputProps) => {
  const hasError = Boolean(errorMessage);
  const hasInputLabel = Boolean(inputLabel)

  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputWrapper style={style}>
      {hasInputLabel && <InputLabel>{inputLabel}</InputLabel>}
      <InputContainer hasError={hasError} isFocused={isFocused}>
        <StyledInput
          placeholder={placeholderText}
          value={value}
          type={type}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        <InputIcon hasError={hasError} onClick={onClickIcon}>
          {icon && <FontAwesomeIcon icon={icon} style={iconStyle} />}
        </InputIcon>
      </InputContainer>
      {errorMessage && <InputDescription>{errorMessage}</InputDescription>}
    </InputWrapper>
  );
};
