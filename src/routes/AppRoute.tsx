import { Routes, Route } from "react-router-dom";

import { UserRegistration } from "../components/UserRegistration";
import { ViewUserDetail  } from "../components/ViewUserDetail";
import { SuccessfulRegistration } from "../components/SuccessRegistration";
import { AdminLandingPage } from "../components/admin/AdminLandingPage";
import { AdminSignIn } from "../components/admin/AdminSignIn";
import { AdminRegistration } from "../components/admin/AdminRegistration";
import { AdminRegistrationConfirmation } from "../components/admin/AdminAccountConfirmation";
import { AdminPasswordReset } from "../components/admin/AdminPasswordReset";
import { AdminCheckEmail } from "../components/admin/AdminCheckEmail";
import { AdminCreateNewPassword } from "../components/admin/AdminCreateNewPassword";
import { AdminConfirmPasswordChange } from "../components/admin/AdminConfirmPasswordChange";
import { ProfileManagement } from "../components/profileManagment/ProfileManagement";
import { Volunteer } from "../components/profileManagment/Volunteers";
import { Notification } from "../components/profileManagment/Notification";
import { Events } from "../components/profileManagment/Events";
import { Home } from "../components/profileManagment/Home";
import { Networks } from "../components/profileManagment/Networks";
import { Giving } from "../components/profileManagment/Giving";
import { Programs } from "../components/profileManagment/Programs";
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
            <Route
                path="admin"
                element={<AdminLandingPage/>}
            />
            <Route
                path="/admin/sign-in"
                element={<AdminSignIn/>}
            />
            <Route
                path="/admin/sign-up"
                element={<AdminRegistration/>}
            />
            <Route
                path="/admin/register-confirm"
                element={<AdminRegistrationConfirmation/>}
            />
            <Route
                path="/admin/password-reset"
                element={<AdminPasswordReset/>}
            />
            <Route
                path="/admin/password-reset/check-email"
                element={<AdminCheckEmail/>}
            />
            <Route
                path="/admin/password-reset/new-password"
                element={<AdminCreateNewPassword/>}
            />
            <Route
                path="/admin/password-reset/confirm-password-change"
                element={<AdminConfirmPasswordChange/>}
            />
            <Route
                path="/profile-management/*"
                element={<ProfileManagement/>}
            />
        </Routes>
    )
}

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route
                path=""
                element={<Home/>}
            />
            <Route
                path="volunteers"
                element={<Volunteer/>}
            />
            <Route
                path="notification"
                element={<Notification/>}
            />
            <Route
                path="events"
                element={<Events/>}
            />
            <Route
                path="networks"
                element={<Networks/>}
            />
            <Route
                path="giving"
                element={<Giving/>}
            />
            <Route
                path="programs"
                element={<Programs/>}
            />
        </Routes>
    )
}