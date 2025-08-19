import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Evoting from "./pages/Evoting"
import BudgetTracker from "./pages/BudgetTracker"
import ProjectLayout from "./layouts/ProjectLayout"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="projects" element={<ProjectLayout />}>
            <Route path="e-voting" element={<Evoting />} />
            <Route path="budget-tracker" element={<BudgetTracker />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
