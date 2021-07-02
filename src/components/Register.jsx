import { useFormik } from "formik"
import FormField from "./FormField"
import RegisterSchema from "./RegisterSchema"

const Register = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            birthday: '',
            email: '',
            phone: '',
            password: '',
            matchPassword: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: props.register
    })
    
    return (
        <div className='form-container'>
            <form className='form' onSubmit={formik.handleSubmit}>
                <FormField
                    formik={formik}
                    name='name'
                    id='name'
                    label='ФИО'
                />

                <FormField
                    formik={formik}
                    name='birthday'
                    id='birthday'
                    label='Дата рождения'
                    inputProps={{ type: 'date' }}
                />

                <FormField
                    formik={formik}
                    name='email'
                    id='email'
                    label='Email'
                />

                <FormField
                    formik={formik}
                    name='phone'
                    id='phone'
                    label='Номер телефона'
                    inputProps={{ type: 'tel' }}
                />

                <FormField
                    formik={formik}
                    name='password'
                    id='password'
                    label='Пароль'
                    inputProps={{ type: 'password' }}
                />

                <FormField
                    formik={formik}
                    name='matchPassword'
                    id='matchPassword'
                    label='Подтвердите пароль'
                    inputProps={{ type: 'password' }}
                />

                <button className='button' type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                    { formik.isSubmitting ? 'Регистрация...' : 'Зарегистрироваться' }    
                </button>
            </form>
        </div>
    )
}

export default Register
