import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Search } from ".";

test("SearchInput component updates search text correctly", async () => {
  const setSearchTextMock = jest.fn();

  render(<Search setSearchText={setSearchTextMock} />);

  const inputElement = screen.getByPlaceholderText(
    /ara.../i
  ) as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: "example query" } });

  await waitFor(() =>
    expect(setSearchTextMock).toHaveBeenCalledWith("example query")
  );

  expect(setSearchTextMock).toHaveBeenCalledTimes(1);

  expect(inputElement.value).toBe("example query");
});
