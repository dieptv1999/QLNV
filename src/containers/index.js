import { connect } from 'react-redux';

//Actions
import { loginAction } from '../actions';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        times: state.loginReducers ? state.loginReducers : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (step) => {
            dispatch(loginAction(step));
        }
    };
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;