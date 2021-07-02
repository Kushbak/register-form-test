const Main = (props) => {
    return (
        <div className='welcome-container'>
            <h2>Вы успешно зарегистрировались!</h2>
            <p>Добро пожаловать, <span className='username'>{props.profile?.name}</span>!</p>
        </div>
    )
}

export default Main
