/**
 * Banner Component- Contains and title, description and action button
 * 
 * Child components: None
 * 
 */


const Banner = (props: any) => {
  const { title, description, buttonText, bannerType, buttonClick } = props;

  return (
    <section className={bannerType}>
      <div className="banner-container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="central-div">
          <button onClick={() => buttonClick(true)}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
