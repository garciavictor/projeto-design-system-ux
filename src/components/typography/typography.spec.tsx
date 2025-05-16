import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { H1, H2, H3, Paragraph } from '.';

describe('@components/Typography', () => {
    it('renders H1 correctly', () => {
        const { container } = render(<H1>Heading 1</H1>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders H2 correctly', () => {
        const { container } = render(<H2>Heading 2</H2>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders H3 correctly', () => {
        const { container } = render(<H3>Heading 3</H3>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders Paragraph with default variant correctly', () => {
        const { container } = render(<Paragraph variant="default">Default text</Paragraph>);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders Paragraph with small variant correctly', () => {
        const { container } = render(<Paragraph variant="small">Small text</Paragraph>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
