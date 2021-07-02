const FormField = props => {
    const { formik, name, id, inputProps, label  } = props

    return (
        <div className='form__input-container'>
            <label className='form__label' htmlFor={id} >
                {label}
            </label>
            <input
                className='form__input'
                id={id}
                {...inputProps}
                {...formik.getFieldProps(name)}
            />
            <p className='error'>
                {
                    formik.touched[name] && formik.errors[name]
                        ? formik.errors[name]
                        : null
                }
            </p>
        </div>
    )
}

export default FormField
