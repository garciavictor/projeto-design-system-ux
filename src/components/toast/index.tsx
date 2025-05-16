import styled, { keyframes, css } from 'styled-components';
import {
    faCheck,
    faTimes,
    faExclamation,
    faInfo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Theme } from '../../styles';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-${Theme.spacing.s9}px);
  } to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ToastWrapper = styled.div<{ variant: ToastVariant }>`
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: ${Theme.border_radius.r3};
  background: ${Theme.colors.neutrals.black[100]};
  color: ${Theme.colors.neutrals.white[100]};
  font-size: ${Theme.typography.small.size};
  font-weight: ${Theme.typography.small.weight};
  line-height: ${Theme.typography.small.height};
  padding-right: ${Theme.spacing.s5}px;
  padding-left: ${Theme.spacing.s5}px;

  border: 1px solid ${Theme.colors.neutrals.black[25]};

  animation: ${slideIn} 0.3s ease-out;

  ${({ variant }) => {
        switch (variant) {
            case 'success':
                return css`svg { color: ${Theme.colors.success.regular}; }`;
            case 'error':
                return css`svg { color: ${Theme.colors.error.regular}; }`;
            case 'warning':
                return css`svg { color: #${Theme.colors.warning.regular}; }`;
            case 'info':
                return css`svg { color: ${Theme.colors.info.regular}; }`;
            default:
                return '';
        }
    }}
`;

const getIcon = (variant: ToastVariant) => {
    switch (variant) {
        case 'success':
            return faCheck;
        case 'error':
            return faTimes;
        case 'warning':
            return faExclamation;
        case 'info':
            return faInfo;
        default:
            return null;
    }
};

type ToastVariant = "success" | "error" | "warning" | "info"

interface ToastProps {
    toastText: string;
    variant: ToastVariant
}

export const Toast = ({ toastText, variant = 'info' }: ToastProps) => {
    return (
        <ToastWrapper variant={variant}>
            <FontAwesomeIcon icon={getIcon(variant) as any} style={{ marginRight: Theme.spacing.s5 }} />
            {toastText}
        </ToastWrapper>
    );
};

const ToastContainer = styled.div`
  position: fixed;
  top: 46px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
`;

let addToast: any;
export const ToastManager = () => {
    const [toasts, setToasts] = useState<any>([]);

    const removeToast = useCallback((id: any) => {
        setToasts((toasts: any) => toasts.filter((t: any) => t.id !== id));
    }, []);

    useEffect(() => {
        addToast = ({ text, variant }: any) => {
            const id = new Date();
            setToasts((prev: any) => [...prev, { id, text, variant }]);

            setTimeout(() => removeToast(id), 3000);
        };
    }, [removeToast]);

    return createPortal(
        <ToastContainer>
            {toasts.map((toast: any) => (
                <Toast key={toast.id} toastText={toast.text} variant={toast.variant} />
            ))}
        </ToastContainer>,
        document.body
    );
};

export const showToast = ({ text, variant = 'info' }: any) => {
    if (addToast) {
        addToast({ text, variant });
    } else {
        console.warn('ToastManager is not mounted yet.');
    }
};