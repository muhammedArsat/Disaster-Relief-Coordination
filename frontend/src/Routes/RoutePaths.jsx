import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../pages/landing/Landing';
import ReliefPage from '../pages/relief/Relief';
import HomePage from '../pages/home/Home';
import PostPage from '../pages/post/Post';
import VolunteerList from '../pages/volunteerlist/VolunteerList';
import VolunteerProfile from '../pages/volunteerprofile/VolunteerProfile';
import NewRequest from '../pages/newrequest/NewRequest';
import VolunteerRegister from '../pages/volunteerRegister/VolunteerRegister';
import VolunteerApproval from '../pages/volunteerApproval/VolunteerApproval';
import Login from '../pages/login/Login';
import NotFound from '../pages/notFound/NotFound';
import NoSideBarLayout from '../layouts/NoSideBarLayout';
import SideBarLayout from '../layouts/SideBarLayout';
import Test from "../Test.jsx";
import VolunteerHome from "../volunteerPages/volunteerHome/VolunteerHome.jsx";
import VolunteerProfilePage from "../volunteerPages/volunteerProfile/VolunteerProfilePage.jsx";

const RoutePaths = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*No Side Bar Pages*/}
                <Route element={<NoSideBarLayout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<VolunteerRegister />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Side Bar Pages*/}
                <Route element={<SideBarLayout />}>
                    <Route path="/admin/home" element={<HomePage />} />
                    <Route path="/admin/post" element={<PostPage />} />
                    <Route
                        path="/admin/volunteer-list"
                        element={<VolunteerList />}
                    />
                    <Route
                        path="/admin/volunteer-profile"
                        element={<VolunteerProfile />}
                    />
                    <Route path="/relief" element={<ReliefPage />} />
                    <Route path="/admin/new-request" element={<NewRequest />} />
                    <Route
                        path="/admin/volunteer-approval"
                        element={<VolunteerApproval />}
                    />
                    <Route path='/volunteer/home' element={<VolunteerHome/>}/>
                    <Route path="/volunteer/profile" element={<VolunteerProfilePage/>}/>
                   
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
};

export default RoutePaths;
