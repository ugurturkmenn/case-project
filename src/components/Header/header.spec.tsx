import { render, screen } from "@testing-library/react";
import { Header } from ".";

test("take a snapshot", () => {
  const container = render(<Header />);

  expect(container).toMatchSnapshot();
});

test("Header component renders correctly", () => {
  render(<Header />);

  const welcomeText = screen.getByText(/Nesine!/i);
  expect(welcomeText).toBeInTheDocument();

  const notificationIcon = screen.getByTestId("notification-icon");
  expect(notificationIcon).toBeInTheDocument();
});
