import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { Toast, ToastManager, showToast } from '.';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles';

describe('@components/Toast', () => {
    it('matches snapshot for info variant', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <Toast toastText="Info message" variant="info" />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for success variant', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <Toast toastText="Success!" variant="success" />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for error variant', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <Toast toastText="Error occurred!" variant="error" />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot for warning variant', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <Toast toastText="Warning issued!" variant="warning" />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('@components/Toast/ToastManager', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it('renders and displays a toast using showToast()', async () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <ToastManager />
            </ThemeProvider>
        );

        act(() => {
            showToast({ text: 'Test Toast', variant: 'info' });
        });

        expect(container).toMatchSnapshot('Toast rendered after showToast');

        act(() => {
            vi.advanceTimersByTime(3000);
        });

        expect(container).toMatchSnapshot('Toast removed after timeout');
    });
});
