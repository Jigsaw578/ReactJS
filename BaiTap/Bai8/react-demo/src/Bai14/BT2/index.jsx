import { useEffect, useState } from 'react';
import { Redirect, RouterProvider, useNavigate, createBrowserRouter, Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';

function Welcome({ isLoggedIn }) {
    const navigate = useNavigate();
    console.log(11, isLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/homepage')
        } else {
            navigate('/login')
        }
    }, [isLoggedIn])

    return (
        <>
            <h2>Header layout</h2>
            <Outlet />
        </>
    )
}

function HomePage({ setLogin }) {

    return (
        <div>
            <h2>Xin chào user</h2>
            <button onClick={() => setLogin(false)}>Đăng xuất</button>
        </div>
    );
}

function LoginPage({ setLogin }) {

    return (
        <div>
            <button onClick={() => setLogin(true)}>Xin mời đăng nhập</button>
        </div>
    );
}

export default function B14BT2() {
    const [isLoggedIn, setLogin] = useState(false)


    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Welcome isLoggedIn={isLoggedIn} />}>
                    <Route
                        path="homepage"
                        element={<HomePage setLogin={setLogin} />}
                    />
                    <Route path="login" element={<LoginPage setLogin={setLogin} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
