import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("it displays information of the repository", () => {
  let repository = {
    stargazers_count: 20,
    open_issues: 2,
    forks: 29,
    language: "javascript",
  };
  render(<RepositoriesSummary repository={repository} />);

  for (let key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(`\\b${value}\\b`));
    expect(element).toBeInTheDocument();
  }
});
