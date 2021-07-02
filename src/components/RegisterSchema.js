import * as Yup from 'yup'

const years100 = new Date(new Date().setFullYear(new Date().getFullYear() - 100))
const years18 = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
// Regexp for СНГ country phone numbers
const phoneNumbersPattern = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/

export default Yup.object({
    name: Yup.string()
        .matches(/^[А-Яа-яёЁ\s]+$/, 'Только кириллица')
        .max(36, 'Поле должно содержать максимум 36 символов')
        .required('Это поле обязательно'),
    birthday: Yup.date()
        .max(years18, 'Разрешено лицам старше 18 лет')
        .min(years100, 'Введена некорректная дата рождения')
        .required('Это поле обязательно'),
    email: Yup.string()
        .email('Некорректно введен email')
        .required('Это поле обязательно'),
    phone: Yup.string()
        .matches(phoneNumbersPattern, 'Введен некорректный номер телефона')
        .required('Это поле обязательно'),
    password: Yup.string()
        .min(8, 'Пароль должен быть больше 8 символов')
        .required('Это поле обязательно'),
    matchPassword: Yup.string()
        .min(8, 'Пароль должен быть больше 8 символов')
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
        .required('Это поле обязательно'),
})