import { Routes, Route } from "react-router-dom";

import { UserRegistration } from "../components/UserRegistration";
import { ViewUserDetail  } from "../components/ViewUserDetail";
import { SuccessfulRegistration } from "../components/SuccessRegistration";
//import { LanguageSelect } from "../components/LanguageSelect";


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
            <Route
                path="successful-registration"
                element={<SuccessfulRegistration/>}
            />
        </Routes>
    )
}