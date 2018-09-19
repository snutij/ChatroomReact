import { connect } from 'react-redux';

import Settings from 'src/components/Settings';
import { toggleShowPseudo } from 'src/store/actions';

const mapStateToProps = state => ({
  showPseudo: state.showPseudo
});

const mapDispatchToProps = dispatch => ({
  toggleShowPseudo: () => {
    dispatch(toggleShowPseudo());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
