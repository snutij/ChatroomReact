import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { sendMessage, imTyping } from 'src/store/actions';

const mapStateToProps = state => ({
  pseudoWritting: state.pseudoWritting
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (evt) => {
    evt.preventDefault();
    dispatch(sendMessage(evt.target[0].value));
    evt.target[0].value = '';
  },
  imTyping: (evt) => {
    if (evt.keyCode !== 13) {
      const message = evt.target.value;
      message.length > 0 ? dispatch(imTyping()) : dispatch(imTyping('message_deleted'));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
