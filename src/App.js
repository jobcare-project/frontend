import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import config from '~/config';

// --- ROUTES ---
import {
    adminPrivateRoutes,
    privateRoutes,
    publicRoutes,
    recruiterPrivateRoutes,
} from '~/routers';
import ProtectedRoute from './routers/ProtectedRoute';
import { fetchUser } from './pages/Accounts/accountsSlice';
import { renderRoutes } from './utils/route.utils';
import Home from './pages/Home';
import {
    accountsDataSelector,
    isAuthSelector,
} from '~/redux/Selectors/authSelector';
import DefaultLayout from './Layouts/DefaultLayout';
import Loading from './components/Loading/Loading';

function App() {
    const dispatch = useDispatch();
    const isAuth = useSelector(isAuthSelector);
    const user = useSelector(accountsDataSelector);

    useEffect(() => {
        dispatch(fetchUser());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (typeof isAuth === 'undefined') {
        return <Loading></Loading>;
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* PUBLIC ROUTES */}
                    {renderRoutes(publicRoutes)}

                    {/* PRIVATE ROUTES */}
                    {/* For ALL */}
                    <Route
                        element={
                            <ProtectedRoute
                                redirectPath={config.routes.accounts}
                                isAllowed={isAuth}
                            />
                        }
                    >
                        {renderRoutes(privateRoutes)}
                    </Route>

                    {/* For Recruiter */}
                    <Route
                        element={
                            <ProtectedRoute
                                redirectPath={config.routes.home}
                                isAllowed={
                                    isAuth && user?.data?.role === 'recruiter'
                                }
                            ></ProtectedRoute>
                        }
                    >
                        {renderRoutes(recruiterPrivateRoutes)}
                    </Route>
                    {/* For Admin */}
                    <Route
                        element={
                            <ProtectedRoute
                                redirectPath={config.routes.home}
                                isAllowed={
                                    isAuth && user?.data?.role === 'admin'
                                }
                            ></ProtectedRoute>
                        }
                    >
                        {renderRoutes(adminPrivateRoutes)}
                    </Route>

                    {/* NOTE FOUND */}
                    <Route
                        path="*"
                        element={
                            <DefaultLayout>
                                <Home />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
