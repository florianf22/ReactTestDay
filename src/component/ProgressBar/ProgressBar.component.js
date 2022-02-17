import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ProgressBar.style.scss';

export class CheckoutBilling extends PureComponent {
  state = {
    completed: false,
  };

  static propTypes = {
    progressSteps: PropTypes.arrayOf(PropTypes.string),
    activeProgressStep: PropTypes.string,
    minHeight: PropTypes.number,
  };

  renderProgressLines(i, active) {
    switch (i) {
      case 0:
        return (
          <div
            className={`ProgressBar__line ${
              active ? 'ProgressBar__line--seen' : ''
            }`}
          />
        );
      case this.props.progressSteps.length - 1:
        return (
          <>
            <div
              className={`
              ProgressBar__line ProgressBar__line--full 
              ${active ? 'ProgressBar__line--seen' : ''}
            `}
            />
            <div className="ProgressBar__line ProgressBar__line--right" />
          </>
        );

      default:
        return (
          <div
            className={`ProgressBar__line ProgressBar__line--full ${
              active ? 'ProgressBar__line--seen' : ''
            }`}
          />
        );
    }
  }

  renderPoints() {
    const { progressSteps, activeProgressStep } = this.props;

    const activeIndex = progressSteps.indexOf(activeProgressStep);

    if (activeIndex === progressSteps.length - 1) {
      this.setState({ completed: true });
    }

    return progressSteps.map((step, i) => (
      <div className="ProgressBar__innerStepWrapper">
        {this.renderProgressLines(i, activeIndex >= i)}

        <div
          key={step}
          className={`${
            this.state.completed ? 'ProgressBar__step--success' : ''
          } ProgressBar__step`}
        >
          {i + 1}
        </div>
        <h4 className="ProgressBar__heading">{step}</h4>
      </div>
    ));
  }

  render() {
    return (
      <div
        block="ProgressBar"
        style={{
          minHeight: this.props.minHeight,
        }}
      >
        {this.renderPoints()}
        <div
          className={`ProgressBar__completed ${
            this.state.completed ? 'ProgressBar__completed--show' : ''
          }`}
        />
      </div>
    );
  }
}

export default CheckoutBilling;
