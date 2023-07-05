import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import  UserManagement  from "./components/user-management/UserManagement";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
    },
    {
    path: '/user-management',
    element: <UserManagement />
    },
    {
    path: '/counter',
    element: <Counter />
    },
    {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
    },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
