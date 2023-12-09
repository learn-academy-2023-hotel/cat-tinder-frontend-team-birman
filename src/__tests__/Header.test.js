import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../components/Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    it("renders a logo with a src and alt", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "OhMyCatLogo.png")
        expect(logo).toHaveAttribute("alt", "Cat Tinder logo with outline of cat")
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByRole("img"))
        expect(screen.getByRole("img")).toBeInTheDocument
        userEvent.click(screen.getByText("Pics of Cats"))
        expect(screen.getByText("Pics of Cats")).toBeInTheDocument
        userEvent.click(screen.getByText("Purr Show"))
        expect(screen.getByText("Purr Show")).toBeInTheDocument
    })
})