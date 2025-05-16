import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LinkButton } from '.';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../styles';

describe('@components/LinkButton', () => {
    it('matches snapshot without icon', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <LinkButton linkButtonText="Click me" />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });

    it('matches snapshot with icon', () => {
        const { container } = render(
            <ThemeProvider theme={Theme}>
                <LinkButton linkButtonText="With Icon" icon={faCoffee} />
            </ThemeProvider>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
