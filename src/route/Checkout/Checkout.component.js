import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import ContentWrapper from 'SourceComponent/ContentWrapper/ContentWrapper.component';
import ProgressBar from '../../component/ProgressBar/ProgressBar.component';

import './Checkout.extension.style.scss';

class Checkout extends SourceCheckout {
  renderProgressBar() {
    return (
      <ProgressBar
        progressSteps={Object.values(this.stepMap).map(
          step => step.title.value,
        )}
        activeProgressStep={this.stepMap[this.props.checkoutStep].title.value}
      />
    );
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderProgressBar()}
        <ContentWrapper
          wrapperMix={{ block: 'Checkout', elem: 'Wrapper' }}
          label={__('Checkout page')}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default Checkout;
