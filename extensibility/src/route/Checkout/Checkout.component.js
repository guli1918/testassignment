import { Checkout as sourceCheckout } from 'SourceRoute/Checkout/Checkout.component';

import './Checkout.extension.style.scss';

class Checkout extends sourceCheckout {
	renderTitle() {
		const { checkoutStep } = this.props;
		const { title = '' } = this.stepMap[checkoutStep];

		return (
			<>
				<div className='Checkout-extension'>
					<br />
					{Object.values(this.stepMap).map((step, key) => {
						return (
							<div key={key} className='Checkout-extension-progress'>
								<div
									className={
										this.stepMap[checkoutStep].title.value.split(' ')[0] ===
										step.title.value.split(' ')[0]
											? 'Checkout-progress-extension-bar-active'
											: 'Checkout-progress-extension-bar'
									}
								></div>
								{console.log(this.stepMap[checkoutStep])}
								<div
									className={
										this.stepMap[checkoutStep].title.value.split(' ')[0] ===
										step.title.value.split(' ')[0]
											? 'Checkout-progress-circle-active'
											: 'Checkout-progress-circle'
									}
								>
									<h3>{key}</h3>
									<p>
										{step.title.value.split(' ')[0] === 'Thank' ? (
											'Complete'
										) : (
											<span className='Checkout-progress-text-active'>
												{step.title.value.split(' ')[0]}
											</span>
										)}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<h2 block='Checkout' elem='Title'>
					<div className='progress'></div>
					{title}
				</h2>
				<div className='Checkout-empty-box'></div>
			</>
		);
	}
}

export default Checkout;
