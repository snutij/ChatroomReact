import { connect } from 'react-redux';

import Users from 'src/components/Users';

const mapStateToProps = state => ({
  listUsers: state.listUsers
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
