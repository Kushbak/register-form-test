import { createStoreon } from "storeon"

const profile = store => {
    store.on('@init', () => ({
        isAuth: false,
        profileData: null,
        count: 1
    }))
    store.on('register', (state, registerData) => ({
            isAuth: true,
            profileData: registerData,
    }))
}

export const store = createStoreon([profile])