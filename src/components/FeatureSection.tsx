import FeatureGrid from './FeatureGrid';

/**
 * FeatureSection Component- Renders a group of movies under commom heading. 
 * Ex. Now showing, New Releases etc
 * 
 * Child components:
 * FeatureGrid- Renders a section of movies
 * 
 */

const FeatureSection = (props: any) => {
    const { feature } = props;

    return (
        <div className="feature-section">
            <img src={feature.featureIcon} alt={feature.featureTitle} style={{ width: "70px" }} />
            <h2>{feature.featureTitle}</h2>
            <FeatureGrid subFeatureData={feature.subFeatures} />
        </div>
    );
}

export default FeatureSection;
