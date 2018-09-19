import { connect } from 'react-redux';
import InputShow from 'src/components/Settings/InputShow';
import { savePseudo, setPseudo, toggleShowPseudo } from 'src/store/actions';

const mapStateToProps = state => ({
  pseudo: state.pseudo
});

const mapDispatchToProps = dispatch => ({
  toggleShowPseudo: (evt) => {
    evt.preventDefault();
    if (evt.target[0].value.trim() !== '') {
      // Lors du submit du form, changement du pseudo local
      dispatch(setPseudo(evt.target[0].value.trim()));
      // Hide de l'input
      dispatch(toggleShowPseudo());
      // Sauvegarde côté serveur
      dispatch(savePseudo());
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputShow);
