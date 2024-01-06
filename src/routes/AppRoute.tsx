import { Routes, Route } from "react-router-dom";

import { UserRegistration } from "../components/UserRegistration";
import { ViewUserDetail  } from "../components/ViewUserDetail";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<UserRegistration/>}
            />
            <Route
                path="view-user-details"
                element={<ViewUserDetail/>}
            />
        </Routes>
    )
}