import React from 'react';
import '../css/evaluationForm.css';
import PropTypes from 'prop-types';
import { getLocalState, setLocalState } from '../services/localStorageServices';
import RateCheckbox from '../components/RateCheckbox';

class EvaluationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rate: '',
      textArea: '',
      backEvaluations: [],
    };
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  submitButton = () => {
    const { id } = this.props;
    const { email, rate, textArea } = this.state;

    const backEvaluations = getLocalState('backEvaluations');
    const newEvaluation = { id, email, rate, textArea };

    if (backEvaluations && backEvaluations.length !== 0) {
      const allEvaluation = [...backEvaluations, newEvaluation];
      setLocalState('backEvaluations', allEvaluation);
    } else {
      setLocalState('backEvaluations', [newEvaluation]);
    }
  }

  getBackEvaluations = () => {
    const getBackEvaluations = getLocalState('backEvaluations');

    if (getBackEvaluations) {
      this.setState({ backEvaluations: getBackEvaluations });
    }
  }

  componentDidMount = () => {
    this.getBackEvaluations();
  }

  render() {
    const { id } = this.props;
    const { email, rate, textArea, backEvaluations } = this.state;
    const filteredEvaluations = backEvaluations.filter((ev) => ev.id === id);

    return (
      <main>
        <h3>Avaliações</h3>
        <form>
          <div className="email-message-button-container">
            <div className="email-rate-container">
              <input
                type="email"
                placeholder="Insira seu email"
                name="email"
                value={ email }
                onChange={ this.onChange }
              />
              <RateCheckbox rate={ rate } onChange={ this.onChange } />
            </div>
            <div className="message-container">
              <textarea
                data-testid="product-detail-evaluation"
                name="textArea"
                value={ textArea }
                onChange={ this.onChange }
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                onClick={ this.submitButton }
              >
                Avaliar
              </button>
            </div>
          </div>
        </form>
        <section className="section-backEvaluations-container">
          {
            filteredEvaluations.map(({ email: em, rate: ra, textArea: te }) => (
              <section key={ `${em}${ra}${te}` }>
                <div className="email-rate-container">
                  <div className="email-container">{ em }</div>
                  <div className="rate-container">{ '⭐ '.repeat(ra) }</div>
                </div>
                <div className="backMessage-container">{ te }</div>
              </section>
            ))
          }
        </section>
      </main>
    );
  }
}

EvaluationForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EvaluationForm;
