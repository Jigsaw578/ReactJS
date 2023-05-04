import { useForm } from "react-hook-form";

export default function B15BT1() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(111, data);
    };

    return (
        <div
            style={{
                // textAlign: "center",
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Họ và tên:</label>
                <input {...register("name", { required: true })} />
                <br />

                <label htmlFor="address">Địa chỉ:</label>
                <input {...register("address", { required: true })} />
                <br />

                <label htmlFor="phone">Số điện thoại:</label>
                <input
                    {...register("phone", {
                        required: true,
                        pattern: /^0\d{9}$/i,
                    })}
                />
                <br />

                <label htmlFor="email">Email:</label>
                <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                <br />

                <label htmlFor="check">
                    Trong vòng 14 ngày qua, bạn có dấu hiệu triệu chứng như:
                </label>
                <br />

                <div>
                    <input type="checkbox" {...register("check.ho")} />
                    <label htmlFor="check.ho">Ho</label>
                </div>

                <div>
                    <input type="checkbox" {...register("check.sot")} />
                    <label htmlFor="check.sot">Sốt</label>
                </div>

                <div>
                    <input type="checkbox" {...register("check.tho")} />
                    <label htmlFor="check.tho">Khó thở</label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
