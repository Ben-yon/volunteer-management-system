import { Routes, Route, Navigate } from "react-router-dom";

import { ViewUserDetail } from "../components/volunteers/ViewVolunteerDetail";
import { SuccessfulRegistration } from "../components/volunteers/SuccessRegistration";
import { AdminLandingPage } from "../components/admin/AdminLandingPage";
import { AdminSignIn } from "../components/admin/AdminSignIn";
import { AdminRegistration } from "../components/admin/AdminRegistration";
import { AdminRegistrationConfirmation } from "../components/admin/AdminAccountConfirmation";
import { AdminPasswordReset } from "../components/admin/AdminPasswordReset";
import { AdminCheckEmail } from "../components/admin/AdminCheckEmail";
import { AdminCreateNewPassword } from "../components/admin/AdminCreateNewPassword";
import { AdminConfirmPasswordChange } from "../components/admin/AdminConfirmPasswordChange";
import { Volunteer } from "../components/profileManagment/Volunteers";
import { Notification } from "../components/profileManagment/Notification";
import { Scheduling } from "../components/profileManagment/Scheduling";
import { Home } from "../components/profileManagment/Home";
import { Messages } from "../components/profileManagment/Messages";
import { Training } from "../components/profileManagment/Training";
import { Programs } from "../components/profileManagment/Programs";
import { Admins } from "../components/profileManagment/Admins";
import { Profile } from "../components/profileManagment/Profile";
import { Support } from "../components/profileManagment/Support";
import { Settings } from "../components/profileManagment/Settings";
import { Integrations } from "../components/profileManagment/Integration";
import { VolunteerDetails } from "../components/profileManagment/VolunteerDetails";
import { ProfileManagement } from "../components/profileManagment/ProfileManagement";
import { CreatePrograms } from "../components/profileManagment/CreatePrograms";
import { AddProgramImages } from "../components/profileManagment/AddProgramImages";
import { ProgramDetails } from "../components/profileManagment/ProgramDetails";
import { ViewProgram } from "../components/profileManagment/ViewProgram";
import { AdminUploadProfile } from "../components/admin/AdminUploadProfile";
import { VolunteerLandingPage } from "../components/volunteers/VolunteerLandingPage";
import { VolunteerRegistration } from "../components/volunteers/VolunteerRegistration";
import { VolunteerUploadProfile } from "../components/volunteers/VolunteerUploadProfile";
import { VolunteerRegisterOther } from "../components/volunteers/VolunteerRegisterOther";
import { ChangePassword } from "../components/profileManagment/ChangePassword";
import { PersonalInfo } from "../components/profileManagment/PersonalInfo";
import { AddAdmin } from "../components/admin/CreateAdmin";
import { AddSchedule } from "../components/profileManagment/AddSchedule";
//import { LanguageSelect } from "../components/LanguageSelect";

export const AppRoutes = () => {

  const token = localStorage.getItem('token')

  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<VolunteerLandingPage />} />
        <Route path="volunteer-upload-avatar" element={<VolunteerUploadProfile/>}/>
        <Route path="volunteer-registration" element={<VolunteerRegistration/>}/>
        <Route path="volunteer-registration-other-info" element={<VolunteerRegisterOther/>}/>
        <Route path="view-user-details" element={<ViewUserDetail />} />
        <Route
          path="successful-registration"
          element={<SuccessfulRegistration />}
        />
      </Route>
      <Route path="admin" element={<AdminLandingPage />} />
      <Route path="/admin/sign-in" element={<AdminSignIn />} />
      <Route path="/admin/sign-up" element={<AdminRegistration />} />
      <Route
        path="/admin/upload-profile-picture"
        element={<AdminUploadProfile />}
      />
      <Route
        path="/admin/register-confirm"
        element={<AdminRegistrationConfirmation />}
      />
      <Route path="/admin/password-reset" element={<AdminPasswordReset />} />
      <Route
        path="/admin/password-reset/check-email"
        element={<AdminCheckEmail />}
      />
      <Route
        path="/admin/password-reset/new-password"
        element={<AdminCreateNewPassword />}
      />
      <Route path="admins/add" element={<AddAdmin />} />
      <Route
        path="/admin/password-reset/confirm-password-change"
        element={<AdminConfirmPasswordChange />}
      />
      {token !== null ? (
        <Route path="/profile-management/*" element={<ProfileManagement />}>
          <Route path="" element={<Home />} />
          <Route path="volunteers" element={<Volunteer />} />
          <Route path="volunteers/details/:id" element={<VolunteerDetails />} />
          <Route path="notification" element={<Notification />} />
          <Route path="scheduling" element={<Scheduling />} />
          <Route path="add-schedule" element={<AddSchedule/>}/>
          <Route path="messages" element={<Messages />} />
          <Route path="training" element={<Training />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/create" element={<CreatePrograms />} />
          <Route path="programs/add-images" element={<AddProgramImages />} />
          <Route path="programs/details" element={<ProgramDetails />} />
          <Route path="programs/:id" element={<ViewProgram />} />
          <Route path="admins" element={<Admins />} />
          <Route path="profile/*" element={<Profile />}>
            <Route path="" element={<PersonalInfo/>}/>
            <Route path="change-password" element={<ChangePassword/>}/>
          </Route>
          <Route path="support" element={<Support />} />
          <Route path="settings" element={<Settings />} />
          <Route path="integrations" element={<Integrations />} />
        </Route>
      ) : (
        <Route path="/admin/sign-in" element={<AdminSignIn />} />
      )}
      <Route path="*" element={<Navigate to="/admin/sign-in" replace />} />
    </Routes>
  );
};


