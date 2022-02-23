import React, { useState } from 'react';
import '../styles/styles.scss';
import FeatureSection from './FeatureSection';
import Banner from './Banner';
import Modal from './Modal';

/**
 * MovieLounge Component- Contains head banner and list of movies currently screening
 * 
 * Child components:
 * Banner- Contains informationa and action button
 * FeatureSection- Renders a group of movies under commom heading. Ex. Now showing, New Releases etc
 * Modal- Information collection for action button
 * 
 */

const MovieLounge = (props: any) => {
    const { featuresPageData, featuresBannerData } = props;
    const { footerBanner, headerBanner } = featuresBannerData;

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Banner
                title={headerBanner.title}
                description={headerBanner.description}
                buttonText={headerBanner.buttonText}
                bannerType={"headerBanner"}
                buttonClick={setOpen}
            />
            <div className="main">
                {featuresPageData.map((feature: any, index: any) => (
                    <section className="feature-container" key={index}>
                        <FeatureSection feature={feature} />
                    </section>
                ))}
            </div>
            <Banner
                title={footerBanner.title}
                description={footerBanner.description}
                buttonText={footerBanner.buttonText}
                bannerType={"footerBanner"}
                buttonClick={setOpen}
            />
            <Modal open={open} handleClose={handleClose} />
        </React.Fragment>
    );
}


export default MovieLounge;
