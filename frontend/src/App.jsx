import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './pages/landing/Landing';
import ReliefPage from './pages/relief/Relief';
import HomePage from './pages/home/Home';
import PostPage from './pages/post/Post';
import VolunteerList from './pages/volunteerlist/VolunteerList';
import VolunteerProfile from './pages/volunteerprofile/VolunteerProfile';
import NewRequest from './pages/newrequest/NewRequest';
import VolunteerRegister from './pages/volunteerRegister/VolunteerRegister';
import VolunteerApproval from './pages/volunteerApproval/VolunteerApproval';
import './App.css';
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
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
                <Route path="/admin/relief" element={<ReliefPage />} />
                <Route path="/admin/new-request" element={<NewRequest />} />
                <Route path="/register" element={<VolunteerRegister />} />
                <Route
                    path="/admin/volunteer-approval"
                    element={<VolunteerApproval />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
