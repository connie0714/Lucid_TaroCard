import { Suspense, lazy } from 'react';
import ErrorPage from '../component/ErrorPage';
import Spinner from '../loading';
const { createBrowserRouter } = require('react-router-dom');

const Loading = <Spinner />
const Index = lazy(() => import('../component/index'));
const Mainpage = lazy(() => import('../component/mainpage'));

const Test = lazy(() => import('../component/test'));


const root = createBrowserRouter([
    {
        path: '',
        element: <Suspense fallback={Loading}><Index /></Suspense>
    },
    {
        path: 'main',
        element: <Suspense fallback={Loading}><Mainpage /></Suspense>
    },
    {
        path: 'test',
        element: <Suspense fallback={Loading}><Test /></Suspense>
    },
    {
        path: '/*',
        element: <Suspense fallback={Loading}><ErrorPage /></Suspense>
    },
    
]);

export default root;