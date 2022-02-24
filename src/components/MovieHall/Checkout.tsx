/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import CountDownTimer from './Timer'

/**
 * Checkout Component- Renders movie name, Seats allocation grid, total tickets count
 * and checkout button
 * 
 * Child components:
 * CountDownTimer- timer after which the seats booked will expire
 */

const Checkout = () => {
    const location = useLocation();
    const history = useHistory();
    const { seatsBookedCheckout, bookingPriceCheckout, movieName }: any = location.state;
    const [timeOut, setTimeOut] = useState(false);

    const onBackClick = () => {
        if (timeOut) {
            history.push({
                pathname: `/bookingseats/${movieName}`,
                state: { seatsBookedCheckout: [], bookingPriceCheckout: 0 }
            });
            window.location.reload();
        }
        else {
            history.push({
                pathname: `/bookingseats/${movieName}`,
                state: { seatsBookedCheckout, bookingPriceCheckout }
            });
        }
    }
    
    const onPurchaseClick = () => {
        history.push({
            pathname: `/`
        });
        window.location.reload();
    }

    return (
        <section className="booking-layout" data-testid="checkout-summary" style={{ display: "block" }}>
            <section>
                <div className="container">
                    <header className="booking-header">
                        <div className="header-container">
                            <h2>
                                <div>
                                    <span className="movie-name"><a>{"Movie: "}{movieName}</a></span>
                                    <div className="event-components">
                                        <div className="no-of-tickets tickets-count-container">
                                            <div>
                                                <span id="intQty">{seatsBookedCheckout.length}</span>
                                                <span id="ticket-text">Tickets</span>
                                            </div>
                                        </div>
                                        <div className="checkout-button">
                                            <button data-testid="checkout-back-button" onClick={() => onBackClick()}>Go Back</button>
                                        </div>
                                    </div>
                                </div>
                            </h2>
                        </div>
                    </header>
                </div>
                <div className="booking-summary">
                    <div className="order-summary-container">
                        <div className="order-summary">
                            <h2>Booking Summary</h2>
                            <ul className="ticket-details">
                                <li>
                                    <div>
                                        <span>
                                            <span>
                                                {
                                                    seatsBookedCheckout.join(" , ")
                                                }
                                                <span>{` ${'( '}${seatsBookedCheckout.length} Ticket )`}</span></span>
                                            <br />
                                        </span>
                                    </div>
                                    <div><span>{`Rs. ${bookingPriceCheckout}`}</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className="toal-amount-container">
                            <div style={{ float: "left" }}>
                                Amount Payable
                            </div>
                            <div><span>{`Rs. ${bookingPriceCheckout}`}</span></div>
                        </div>
                    </div>
                    <div className="confirm-booking-button">
                        <button data-testid="checkout-back-button" onClick={() => onPurchaseClick()}>Purchase Tickets</button>
                    </div>
                </div>

            </section>
            <div className="__seat-action btn-bar _centered">
                <CountDownTimer hoursMinSecs={{ minutes: 5, seconds: 0 }} setTimeOut={setTimeOut} />
            </div>
        </section>
    )

}

export default Checkout;
