/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/styles.scss';
import Seat from "./Seat";
import GoToTop from '../../goToTop';
import { useHistory, useLocation } from 'react-router-dom';

/**
 * Theater Component- Renders movie name, Seats allocation grid, total tickets count
 * and checkout button
 * 
 * Child components:
 * Seat- Renders a single seat in different states. 
 * Seat can be not present, available, blocked, newly selected
 * 
 */

const Theater = (props: any) => {
    const { movieHallConfig } = props;
    const history = useHistory();
    const location = useLocation();
    const { seatsBookedCheckout, bookingPriceCheckout }: any = location.state ? location.state : [];

    const [bookingData, setBookingData] = useState(movieHallConfig);
    const [seatsBooked, setSeatsBooked] = useState<string[]>(seatsBookedCheckout ? seatsBookedCheckout : []);
    const [bookingPrice, setBookingPrice] = useState(bookingPriceCheckout ? bookingPriceCheckout : 0);
    const { moviename }: any = useParams();

    const handleSelectSeat = (data: any, seatPrice: number) => {
        const id = data.split('-');
        bookingData.map((section: any) => {
            if (section.sectionNameLabel === id[0]) {
                return section.sectionSeatArrangement.map((row: any) => {
                    if (row.rowName === id[1]) {
                        const value = row.rowSeats[parseInt(id[2])].isSelected;
                        if (!value) {
                            setSeatsBooked([...seatsBooked, data]);
                            setBookingPrice(bookingPrice + seatPrice);
                        }
                        else {
                            const updatedSeats = seatsBooked.filter((seat) => {
                                if (seat === data) {
                                    return false;
                                }

                                return true;
                            })
                            setBookingPrice(bookingPrice - seatPrice);
                            setSeatsBooked([...updatedSeats]);
                        }
                        row.rowSeats[parseInt(id[2])].isSelected = !value;
                    }
                    return row;
                })
            }
            return section;
        });
        setBookingData([...bookingData]);
    }

    const handleCheckoutClick = () => {
        history.push({
            pathname: `/bookingseats/${moviename}/checkout`,
            state: { seatsBookedCheckout: seatsBooked, bookingPriceCheckout: bookingPrice, movieName: moviename }
        });
    }

    const onBackClick = () => {
        history.push({
            pathname: `/`
        });
        window.location.reload();
    }

    return (
        <section className="booking-layout" data-testid="seat-layout" style={{ display: "block" }}>
            <div className="container">
                <header className="booking-header">
                    <div className="header-container">
                        <h2>
                            <div>
                                <span className="movie-name"><a>{"Movie: "}{moviename}</a></span>
                                <div className="event-components">
                                    <div className="tickets-count-container">
                                        <div>
                                            <span data-testid="intQty">{seatsBooked.length}</span>
                                            <span data-testid="ticket-text">Tickets</span>
                                        </div>
                                    </div>
                                    <div className="checkout-button">
                                        <button onClick={() => { handleCheckoutClick() }} disabled={seatsBooked.length === 0}>Checkout</button>
                                        <button onClick={() => { onBackClick() }}>Go Back</button>
                                    </div>
                                </div>
                            </div>
                        </h2>
                    </div>
                </header>
                <section className="booking-container _seat" style={{ display: "block" }}>
                    <div className="seat-container">
                        <div className="seats">
                            <div className="seats-block">
                                <div style={{ width: "1106px" }}>
                                    <table cellSpacing="0" cellPadding="0">
                                        <tbody>
                                            {
                                                bookingData.map((section: any) => (
                                                    <React.Fragment>
                                                        <tr>
                                                            <td>
                                                                <div className="sectionPrice">{section.sectionNameLabel}- {section.sectionPriceLabel}</div>
                                                            </td>
                                                        </tr>
                                                        {
                                                            section.sectionSeatArrangement.map((row: any, index: any) => (
                                                                <tr key={row.rowName + index}>
                                                                    <td>
                                                                        <div className="rowName">{row.rowName}</div>
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            row.rowSeats.map((seat: any, index: any) => (
                                                                                <Seat
                                                                                    id={`${section.sectionNameLabel}-${row.rowName}-${index}`}
                                                                                    seatPrice={section.sectionPrice}
                                                                                    seatName={`${row.rowName}${index}`}
                                                                                    isSeat={seat.isSeat}
                                                                                    isSelected={seat.isSelected}
                                                                                    isBooked={seat.isBooked}
                                                                                    handleSelectSeat={handleSelectSeat}
                                                                                />
                                                                            ))
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        <tr>
                                                            <td colSpan={2}>&nbsp;</td>
                                                        </tr>
                                                    </React.Fragment>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
            <GoToTop />
        </section >
    )
};

export default Theater;
