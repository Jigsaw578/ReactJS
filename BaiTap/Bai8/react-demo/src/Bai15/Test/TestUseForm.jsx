import { Controller, useForm } from "react-hook-form";

export default function TestForm() {
    const { control, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
        }
    });

    const sendData = value => {
        console.log(22, value);
    }
    const showError = (type) => {
        switch (type) {
            case 'required':
                return <small> the name is req</small>;
            case 'maxLength':
                return <small> the name is too short</small>;
            default:
                <small> the name is too short</small>
        }
    }

    console.log(11, errors);
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(sendData)}>

            <label htmlFor='name' >Name:</label>
            <Controller name="name" control={control}
                rules={{ required: true, maxLength: 5 }}
                render={({ field }) => <input id='name' {...field} />
                }></Controller>
            {errors['name'] && showError(errors['name'].type)}

            <label htmlFor='email'>Email:</label>
            <Controller name="email" control={control} render={({ field }) => <input id='email' {...field} />
            }></Controller>


            <input type="submit" />
        </form>
    );
}