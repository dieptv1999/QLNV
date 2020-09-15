import { LOGIN } from './actionTypes';

export const loginAction = (step) => {
    return {
        type: LOGIN,
        step: step
    }
}