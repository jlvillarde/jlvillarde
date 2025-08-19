import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function ProjectLayout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}