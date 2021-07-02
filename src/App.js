import { useStoreon } from 'storeon/react'
import Register from './components/Register'
import Main from './components/Main'
import './App.css'

const App = () => {
    const { dispatch, profileData, isAuth } = useStoreon('profileData', 'isAuth')

    const registerHandler = (formData) => new Promise(resolve => {
        setTimeout(() => {
            dispatch('register', formData)
            resolve()
        }, 3000)
    })

    return (
        <div className="App">
            {
                isAuth
                    ? <Main profile={profileData} />
                    : <Register register={registerHandler} />
            }
        </div>
    )
}

export default App
