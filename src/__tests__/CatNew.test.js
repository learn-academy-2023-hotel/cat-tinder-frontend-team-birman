import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatNew from "../pages/CatNew"

describe("<CatNew />", () => {

    const renderNew = () => {
        render(
            <BrowserRouter>
                <CatNew />
            </BrowserRouter>
        )
    }
    it("renders a new cat form", () => {
        renderNew()
        screen.logTestingPlaygroundURL()
        const nameInput = screen.getByRole("textbox", {
            name: /name/i
        })
        expect(nameInput).toBeInTheDocument()

        const ageInput = screen.getByRole("textbox", {
            name: /age/
        })
        expect(ageInput).toBeInTheDocument()

        const enjoysInput = screen.getByRole("textbox", {
            name: /enjoys/i
        })
        expect(enjoysInput).toBeInTheDocument()

        const imageInput = screen.getByRole("textbox", {
            name: /image/i
        })
        expect(imageInput).toBeInTheDocument()
    })

    it("has a form with entries for name, age, enjoys, image", () => {
        renderNew()
        const formName = screen.getByText(/name/i)
        expect(formName.getAttribute("For")).toEqual("name")
    })
})