import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: (<div>
            <h2>Header layout</h2>
            <Outlet />
        </div>),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:productId",
                element: <ProductDetail></ProductDetail>
            },
            {
                path: "/admin",
                element: <AdminPage></AdminPage>
            }
        ]
    }
])


function Home() {
    const navigate = useNavigate();

    function handleClick1() {
        navigate('/product/123');
    }

    function handleClick2() {
        navigate('/admin');
    }

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <button onClick={handleClick1}>Xem chi tiết sản phẩm</button>
            <button onClick={handleClick2}>Admin</button>
        </div>
    );
}

function ProductDetail() {
    const { productId } = useParams();
    console.log(11, productId);
    return (
        <div>
            <h1>Product ID: {productId}</h1>
        </div>
    );
}

function AdminPage() {
    const isAdmin = false;
    const navigate = useNavigate();

    if (!isAdmin) {
        alert('Bạn không có quyền truy cập vào trang Admin!');
        setTimeout(() => {
            navigate('/');
        }, 3000);
    }

    return (
        <>
            {isAdmin ? (
                <div>
                    <h1>Xin chào admin</h1>

                </div>


            ) : (
                <Navigate to="/" replace />
            )}
        </>
    );
}


export default function B14BT1() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}