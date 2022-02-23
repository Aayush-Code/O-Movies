import Feature from './Feature';

/**
 * FeatureGrid Component-  Renders a section of movies. 
 * Ex. All movies under Now showing, New Releases etc heading
 * 
 * Child components:
 * Feature- Renders a single movie card with movie details and booking action
 * 
 */

const FeatureGrid = (props: any) => {
  const { subFeatureData } = props;

  return (
    <div className="feature-grid">
      {subFeatureData.map((subFeature: any) => (
        <Feature feature={subFeature} />
      ))}
    </div>
  );
}

export default FeatureGrid;
