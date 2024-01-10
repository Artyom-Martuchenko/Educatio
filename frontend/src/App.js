import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import {registrationAction} from './components/Registration'
import StudentsPage, {Studentsloader as StudentsListLoader} from './pages/StudentsPage';
import TestsPage, {Testsloader} from './pages/TestsPage';
import AutorizationPage, {Studentsloader} from './pages/AutorizationPage';
import RegistrationPage from './pages/RegistrationPage';
import ExecutingTestPage, {Testloader} from './pages/ExecutingTestPage';
import NewTestPage from './pages/NewTestPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      { 
        index: true,  
        element: <AutorizationPage />,
        loader: Studentsloader, 
      },
      {
        path:'RegistrationPage',
        element:<RegistrationPage/>,
        action: registrationAction
      },
      {
        path: 'Profile',
        element: <ProfilePage />,
      },
      {
        path: 'ListStudents',
        element: <StudentsPage />,
        loader: StudentsListLoader
      },
      {
        path: 'ListTests',
        element: <TestsPage />,
        loader: Testsloader
      },
      {
        path: 'ListTests/:testId',
        id: 'test-detail',
        children: [
          {
            index: true,
            element: <ExecutingTestPage/>,
            loader: Testloader,
            // action: deleteEventAction,
          },
          {
            path: 'new',
            element: <NewTestPage />,
            // action: manipulateEventAction,
          },
        ],
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
