import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainView from './view/HomeView';
import VideoView from './view/VideoView';
import ChannelView from './view/ChannelView';
import SearchView from './view/SearchView';

import HeaderSection from './components/section/HeaderSection';
import MainSection from './components/section/MainSection';
import FooterSection from './components/section/FooterSection';

const App = () => {
  <BrowserRouter>
    <HeaderSection />
    <MainSection>
      <Routes>
        <Route path="/" element={< MainView />} />
        <Route path="/video/:videold" element={<VideoView />} />
        <Route path="/channel/:channelld" element={<ChannelView />} />
        <Route path="/search/:searchld" element={<SearchView />} />
      </Routes>
    </MainSection>
    <FooterSection />
  </BrowserRouter>
};

export default App