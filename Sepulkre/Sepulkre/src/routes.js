import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import AboutusPage from './pages/AboutusPage';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import {DocumentPage, Automobile, Box, Household, Business}  from './sections/detailoforderpage';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'ordernow', element: <ProductsPage /> },
        { path: 'ordernow/DOCUMENT STORAGE', element: <DocumentPage /> },
        { path: 'ordernow/AUTOMOBILE STORAGE', element: <Automobile /> },
        { path: 'ordernow/HOUSEHOLD STORAGE', element: <Household /> },
        { path: 'ordernow/BOX STORAGE', element: <Box /> },
        { path: 'ordernow/BUSINESS STORAGE', element: <Business /> },
        { path: 'blog', element: <BlogPage /> },
        { path: '404', element: <Page404 /> },
        { path: 'aboutus', element: <AboutusPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },

  ]);

  return routes;
}
