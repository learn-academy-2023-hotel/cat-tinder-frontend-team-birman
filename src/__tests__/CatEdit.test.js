import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats"
import CatEdit from "../pages/CatEdit"

describe("<CatEdit />", () => {

    const renderEdit = () => {
        render (
            <MemoryRouter initialEntries={['/catedit/1']}>
                <Routes>
                    <Route path="/catedit/:id" element={<CatEdit cats={mockCats} />} />
                </Routes>
            </MemoryRouter>
        )
    }

    it("renders without crashing", () => {
        renderEdit()
    })

    it("renders a cat edit form", () => {
        renderEdit()
        
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
        renderEdit()

        const formName = screen.getByText(/name/i)
        expect(formName.getAttribute("For")).toEqual("name")

        const formAge = screen.getByText("Age")
        expect(formAge.getAttribute("For")).toEqual("age")

        const formEnjoys = screen.getByText(/enjoys/i)
        expect(formEnjoys.getAttribute("For")).toEqual("enjoys")

        const formImage = screen.getByText(/image/i)
        expect(formImage.getAttribute("For")).toEqual("image")
    })

})