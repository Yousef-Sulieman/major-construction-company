
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import ProjectDetailsPage from './pages/project-details';
import ServicesPage from './pages/services';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="project/:id" element={<ProjectDetailsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
