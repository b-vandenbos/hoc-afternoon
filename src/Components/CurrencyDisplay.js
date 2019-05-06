import React from 'react';

const CurrencyDisplay = ({currency, amount}) => (
    <div>
        <p>
            ${amount} - {currency.name}
            {currency.symbol}
            {(amount * currency.rate)}
        </p>
    </div>
)

export default CurrencyDisplay;