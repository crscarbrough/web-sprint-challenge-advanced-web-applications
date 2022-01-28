import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";

const testArticle = {
  id: "7h2lu",
  headline: "Bear invades local Coding Bootcamp 😲",
  createdOn: "2022-28-01T12:00:21-0500",
  summary:
    "It was just an alumni in a very realistic bear suit, everyone is okay",
  body: "The stress has gotten too real",
};

test("renders component without errors", () => {
  render(<Article />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={testArticle} />);

  const headline = screen.queryByTestId("headline");
  const author = screen.queryByTestId("author");

  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticle} />);
  const author = screen.queryByTestId("author");
  expect(author).toHaveTextContent(/Associated Press/i);
});

test("executes handleDelete when the delete button is pressed", () => {
  const handleDelete = jest.fn();
  render(<Article article={testArticle} handleDelete={handleDelete} />);
  const deleteBtn = screen.queryByTestId("deleteButton");
  userEvent.click(deleteBtn);
  expect(handleDelete).toHaveBeenCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.
