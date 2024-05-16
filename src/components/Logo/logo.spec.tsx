import { render, screen } from "@testing-library/react";
import { Logo } from ".";

test("Logo component renders correctly", () => {
  const container = render(<Logo />);

  expect(container).toMatchSnapshot();
});
