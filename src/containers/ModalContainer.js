import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {setIsLoading} from '../actions';

function mapStateToProps(state) {
    return {
        isLoading:state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setIsLoading:function(isLoading) {
            let action = setIsLoading(isLoading);
            dispatch(action);
        }
    }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);
export default ModalContainer;