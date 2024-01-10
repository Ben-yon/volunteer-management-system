import { Routes, Route } from "react-router-dom";

import { UserRegistration } from "../components/UserRegistration";
import { ViewUserDetail  } from "../components/ViewUserDetail";
import { SuccessfulRegistration } from "../components/SuccessRegistration";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { AdminLandingPage } from "../components/admin/AdminLandingPage";
//import { LanguageSelect } from "../components/LanguageSelect";


export const AppRoutes = () => {
    return (
        <I18nextProvider i18n={i18next}>
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
            <Route
                path="admin/"
                element={<AdminLandingPage/>}
            />
        </Routes>
        </I18nextProvider>
    )
}