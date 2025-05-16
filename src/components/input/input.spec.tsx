import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from ".";
import { faEye } from "@fortawesome/free-solid-svg-icons";

describe("@components/Input", () => {
    it("should render correctly with default setup", () => {
        render(<Input
            inputLabel="E-mail"
            placeholder="Enter email"
            value=""
            onChange={(_: any) => { }}
        />);

        const input = screen.getByPlaceholderText("Enter email");
        expect(input).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { asFragment } = render(<Input
            inputLabel="Senha"
            placeholder="****"
            value=""
            onChange={(_: any) => { }}
            icon={faEye}
            iconStyle={{ cursor: "pointer" }}
            onClickIcon={(_: any) => { }}
            error="Senha inválida"
            type={"password"}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});