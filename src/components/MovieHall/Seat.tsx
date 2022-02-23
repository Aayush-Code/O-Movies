/* eslint-disable jsx-a11y/anchor-is-valid */

import '../../styles/styles.scss';
import React from 'react';

/**
 * Seat Component- Renders a single seat in different states. 
 * Seat can be not present, available, blocked, newly selected
 * 
 * Child components: None
 */

const Seat = (props: any) => {
    const { id, isSeat, seatName, isSelected, isBooked, handleSelectSeat, seatPrice } = props;

    const seatType = () => {
        if (isSelected) {
            return '_selected';
        }
        if (isBooked) {
            return '_blocked';
        }
        return '_available';
    };

    const onSeatClick = () => {
        !isBooked && handleSelectSeat(id, seatPrice);
    }

    return (
        <React.Fragment>
            {
                isSeat ?
                    <div className="seatI">
                        <a
                            className={seatType()}
                            id={id}
                            data-testid="type-seat"
                            onClick={() => onSeatClick()}>
                            {seatName}
                        </a>
                    </div>
                    :
                    <div className="seatI" data-testid="type-blank">&nbsp;</div>
            }
        </React.Fragment>
    );
}

export default Seat;