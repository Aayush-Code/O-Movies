import React from "react"
import Checkout from "./Checkout"
import { render, fireEvent } from '@testing-library/react';

const mockUseHistory = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "/Batman/checkout",
        state: { seatsBookedCheckout: ["VIP-A-4, VIP-A-6, VIP-A-7,VIP-A-8"], bookingPriceCheckout: 920, movieName: "Batman" }
    })
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockUseHistory
    }),
}));

describe("<Checkout />", () => {
    it("should render Checkout", () => {
        const { container, getByTestId } = render(<Checkout />);

        expect(getByTestId("checkout-summary")).toBeVisible();
        expect(container.getElementsByClassName('no-of-tickets tickets-count-container').length).toBe(1);
    });

    it("should render booking summary", () => {
        const { container, getByTestId } = render(<Checkout />);

        expect(getByTestId("checkout-summary")).toBeVisible();
        expect(container.getElementsByClassName('no-of-tickets tickets-count-container').length).toBe(1);
        expect(container.getElementsByClassName('order-summary-container').length).toBe(1);
    });

    it.only("should render seats layout on back click", () => {
        const { container, getByTestId } = render(<Checkout />);
        // const history = createMemoryHistory()
        // const route = '/some-route'
        // history.push(route)
        // render(
        //   <Router history={history}>
        //     <LocationDisplay />
        //   </Router>,
        // )
        const backButton = getByTestId('checkout-back-button');
        const onBackClick = jest.fn();
        backButton.onclick = onBackClick;
        fireEvent.click(backButton);
        expect(mockUseHistory).toBeCalled();

        expect(getByTestId("seat-layout")).toBeVisible();
        expect(getByTestId("intQty")).toBeVisible();
        const totalTickets = getByTestId('intQty');
        totalTickets.toBe(920);
    });
});