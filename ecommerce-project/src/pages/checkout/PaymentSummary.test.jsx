import { it, expect, describe, vi} from 'vitest';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router';
import { render, screen, within } from '@testing-library/react';
import { PaymentSummary } from './PaymentSummary';
import axios from 'axios';
vi.mock('axios')

describe('PaymentSummary component', () => {
    
    const paymentSummary = {
        "totalItems": 2,
        "productCostCents": 2698,
        "shippingCostCents": 0,
        "totalCostBeforeTaxCents": 2698,
        "taxCents": 270,
        "totalCostCents": 2968
    }
    const loadCart = vi.fn();
    it('checks doller amount', () =>{
        render(
            <MemoryRouter>
                <PaymentSummary paymentSummery={paymentSummary} loadCart={loadCart}/>
            </MemoryRouter>
        );
        const productCost = screen.getByTestId('product-cost');
        const shippingCost = screen.getByTestId('shipping-cost');
        const totalCostBeforeTax = screen.getByTestId('total-cost-before-tax');
        const tax = screen.getByTestId('tax');
        const totalCost = screen.getByTestId('total-cost');

        expect(within(productCost).getByText('$26.98')).toBeInTheDocument();
        //expect(within(shippingCost).getByText('$0.00')).toBeInTheDocument();
        //expect(within(totalCostBeforeTax).getByText('$26.98')).toBeInTheDocument();
        //expect(within(tax).getByText('$2.70')).toBeInTheDocument();
        //expect(within(totalCost).getByText('$29.68')).toBeInTheDocument();


        expect(productCost).toHaveTextContent('$26.98');
        expect(shippingCost).toHaveTextContent('$0.00');
        expect(totalCostBeforeTax).toHaveTextContent('$26.98');
        expect(tax).toHaveTextContent('$2.70');
        expect(totalCost).toHaveTextContent('$29.68');
    });

    it('checks the place order button', async() => {
        function Location(){
            const location = useLocation();
            return (
                <div data-testId="url-path">{location.pathname}</div>
            );
        }
        render(
            <MemoryRouter>
                <PaymentSummary paymentSummery={paymentSummary} loadCart={loadCart}/>
                <Location />
            </MemoryRouter>
        ); 
        const user = userEvent.setup();

        await user.click(screen.getByTestId('place-order-button'));

        expect(axios.post).toHaveBeenCalledWith('/api/orders');
        expect(loadCart).toHaveBeenCalled();
        expect(screen.getByTestId('url-path')).toHaveTextContent('/orders');


    })
});