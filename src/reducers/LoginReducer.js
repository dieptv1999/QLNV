import { LOGIN } from '../actions/actionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const loginReducers = (times = 0, action) => {
    switch (action.type) {
        case LOGIN:
            return times - action.step;
        default:
            return times;
    }
}

export default loginReducers;