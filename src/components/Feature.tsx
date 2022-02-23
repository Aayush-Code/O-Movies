import '../styles/styles.scss';
import { useHistory } from 'react-router-dom';

/**
 * Feature Component- Renders a single movie card with movie details and booking action
 * 
 * Child components: None 
 * 
 */

const Feature = (props: any) => {
    const { feature } = props;
    const history = useHistory();

    const onBookNowClick = (movieName: string) => {
        history.push({
            pathname: `/bookingseats/${movieName}`,
            state: { seatsBookedCheckout: [], bookingPriceCheckout: 0 }
        });
    }

    return (
        <div className='card'>
            <div className='card_left'>
                <img src={feature.featureImg} />
            </div>
            <div className='card_right'>
                <h1>{feature.featureTitle}</h1>
                <div className='card_right__details'>
                    <ul>
                        <li>2003</li>
                        <li>111 min</li>
                        <li>Action</li>
                    </ul>
                    <div className='card_right__review'>
                        <p>{feature.featureDesc}</p>
                        <div className="booking-button-container">
                            <button onClick={() => onBookNowClick(feature.featureTitle)}>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
