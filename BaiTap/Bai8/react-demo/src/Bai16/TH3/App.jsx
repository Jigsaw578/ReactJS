import { addProduct } from './ProductSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import productSlice from './ProductSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        product: productSlice,
    },
})

function B16TH3() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product?.products);
    const [product, setProduct] = useState();

    const onChangeInput = (ev) => {
        setProduct(prev => ({ ...prev, [ev.target.name]: ev.target.value }));
    };

    const onAddProduct = () => {
        setProduct({});
        dispatch(addProduct(product));
    };
    console.log(products, 111);

    return (
        <Provider store={store}>
            <div className='container'>
                <div>
                    <div className='title'>Thêm sản phẩm</div>
                    <div>Tên</div>
                    <input className='input' value={product?.name || ''} name='name' onChange={onChangeInput} />
                    <div>Giá</div>
                    <input className='input' value={product?.price || ''} name='price' onChange={onChangeInput} />
                    <div>Màu</div>
                    <select className='input' name='color' value={product?.color || ''} onChange={onChangeInput}>
                        <option value="green">Xanh</option>
                        <option value="red">Đỏ</option>
                        <option value="yellow">Vàng</option>
                        <option value="pink">Hồng</option>
                    </select>
                    <div>Mô tả</div>
                    <textarea rows="4" className='input' value={product?.description || ''} name='description' onChange={onChangeInput} />
                    <button className='btnSubmit' onClick={onAddProduct}>Thêm</button>
                </div>

                <div className='product-list'>
                    <div className='title'>List sản phẩm</div>
                    {products?.map((e, i) => (
                        <div key={i} className='item'>
                            <div> {e?.name} - {e?.price} -{e?.color}</div>
                            <div>{e?.description}</div>
                        </div>
                    ))}
                </div>
                {/* <h3>Djt me vinh</h3> */}
            </div>
        </Provider>

    );
}

export default B16TH3;