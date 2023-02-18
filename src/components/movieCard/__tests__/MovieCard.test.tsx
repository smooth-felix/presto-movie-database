import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import MovieCard, { MovieCardProps } from "../MovieCard";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Movie Card", () => {
  const props: MovieCardProps = {
    title: "Fall",
    imgSrc: "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
    overview: "Fall overview",
    releaseDate: new Date("2022-08-11"),
    id: 1,
  };

  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
  });

  it("Renders all the elements of the components properly ", () => {
    render(<MovieCard {...props} />);

    expect(screen.getByTestId("movie-title")).toHaveTextContent(props.title);
    expect(screen.getByTestId("released-year")).toHaveTextContent(
      new Date(props.releaseDate).getFullYear().toString()
    );
    expect(screen.getByTestId("movie-overview")).toHaveTextContent(
      props.overview
    );
    expect(screen.getByTestId("more-button")).toHaveTextContent("More...");
  });

  it("displays 'No description is given.' when no overview is provided", () => {
    render(<MovieCard {...props} overview="" />);
    expect(screen.getByTestId("movie-overview")).toHaveTextContent(
      "No description is given."
    );
  });

  it("navigates to the movie details page when the 'More...' button is clicked", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    render(<MovieCard {...props} />);
    fireEvent.click(screen.getByText("More..."));
    expect(navigate).toHaveBeenCalledWith(`/movie/${props.id}`);
  });
});
