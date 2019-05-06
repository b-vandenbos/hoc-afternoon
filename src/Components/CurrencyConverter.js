import React, {Component} from 'react';
import CurrencyDisplay from './CurrencyDisplay';

const withCurrency = (BaseComponent) => (
    class Currency extends Component {
        state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        };

        handleAmountIncrease = () => {
            this.setState({amount: this.state.amount + 1});
        }

        handleAmountDecrease = () => {
            this.setState({amount: this.state.amount - 1});
        }

        handleOptionSelect = (event) => {
            this.setState({selectedCurrency: event.target.value, currencyChosen: event.target.value === 'Select Currency' ? false : true});
        }

        render() {
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
                { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
            ]
            
            return (
                <>
                <select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
                    <option value='Select Currency'>Select Currency</option>
                    {currencyData.map((currency,index) => {
                        return <option key={index} value={index}>{currency.name}</option>
                    })}
                </select>
                    <button onClick={this.handleAmountDecrease}>-</button>
                    <button onClick={this.handleAmountIncrease}>+</button>
                    {
                        this.state.currencyChosen ? 
                            <BaseComponent currency={currencyData[this.state.selectedCurrency]} amount={this.state.amount}/>
                        :
                            <p>Please Select Currency</p>
                    }
                </>
            )
        }
    }
)

const ExchangedCurrency = withCurrency(CurrencyDisplay);

export default ExchangedCurrency;