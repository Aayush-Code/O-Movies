import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Seat from './Seat';

describe('Seat Comopnent', () => {
	const initialProps = {
		handleSelectSeat: jest.fn(),
		id: "VIP-A-8",
		isBooked: false,
		isSeat: true,
		isSelected: false,
		seatName: "A8",
		seatPrice: 350

	}

	it('it should render seat as selected', () => {
		let props = { ...initialProps, isSelected: true }
		const { container } = render(<Seat {...props} />);

		expect(container.getElementsByClassName('_selected').length).toBe(1);
	});

	it('it should render seat as booked', () => {
		let props = { ...initialProps, isBooked: true }
		const { container } = render(<Seat {...props} />);

		expect(container.getElementsByClassName('_blocked').length).toBe(1);
	});

	it('it should render blank space', () => {
		let props = { ...initialProps, isSeat: false }
		const { getByTestId } = render(<Seat {...props} />);

		expect(getByTestId('type-blank')).toBeVisible();
	});

	it('it should render seat as available', () => {
		let props = { ...initialProps }
		const { container } = render(<Seat {...props} />);

		expect(container.getElementsByClassName('_available').length).toBe(1);
	});

	it('it should call onSeatClick function on seat selection', () => {
		let props = { ...initialProps }
		const { getByTestId } = render(<Seat {...props} />);

		const seat = getByTestId('type-seat');
		const onSeatClick = jest.fn();
		seat.onclick = onSeatClick;
		fireEvent.click(seat);
		expect(initialProps.handleSelectSeat).toBeCalled();
	});

	it('it should call onSeatClick function on seat selection', () => {
		let props = { ...initialProps, isBooked: true }
		const { getByTestId } = render(<Seat {...props} />);

		const seat = getByTestId('type-seat');
		const onSeatClick = jest.fn();
		seat.onclick = onSeatClick;
		fireEvent.click(seat);
		expect(initialProps.handleSelectSeat).not.toBeCalled();
	});

});