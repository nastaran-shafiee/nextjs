import { describe, it, expect, test } from "@jest/globals";
import { Button } from "./button";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });
  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>click here </Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct css class for different button variants", () => {
    render(<Button variant="secondary">click here</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-secondary");
  });

  test("applies the correct css class when isLink prop is true", () => {
    render(<Button isLink={true}>click here</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("btn-link"); // Check if the button has the 'btn-link' class
  });
  test("sets the correct type attribute", () => {
    render(<Button type="submit">click here</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit"); // Check if the button has the type 'submit'
  });
});
