import { makeAutoObservable } from 'mobx';

class AuthStore {
    logged = false;

    constructor(rootStore) {
        makeAutoObservable(this)
    }

    getTest = async () => {
        console.log('hello world')
    }

}

export default AuthStore