import "@testing-library/jest-dom";
import { Button } from ".";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

describe("@components/Button", () => {
    it("should render correctly with default setup", () => {
        render(<Button buttonText="Click Me" onClick={() => { }} />);

        const button = screen.getByText("Click Me");
        expect(button).toBeInTheDocument();
    });

    it("should call onClick when clicked", () => {
        const onClick = vi.fn();
        render(<Button buttonText="Click Me" onClick={onClick} />);

        fireEvent.click(screen.getByRole("button"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should match snapshot", () => {
        const { asFragment } = render(<Button buttonText="Click Me" icon={faGoogle} onClick={() => { }} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
