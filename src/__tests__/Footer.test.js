import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "../components/Footer"

describe("<Footer />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
    })
    it("renders a logo with a src and alt", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        const logo = screen.getByRole("img")
        expect(logo).toHaveAttribute("src", "OhMyCatLogoText.png")
        expect(logo).toHaveAttribute("alt", "Cat Tinder logo")
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        )
        userEvent.click(screen.getByRole("img"))
        expect(screen.getByRole("img")).toBeInTheDocument
        userEvent.click(screen.getByText("Alex Nguyen"))
        expect(screen.getByText("Alex Nguyen")).toBeInTheDocument
        userEvent.click(screen.getByText("Justin Pinkard"))
        expect(screen.getByText("Justin Pinkard")).toBeInTheDocument
    })
})