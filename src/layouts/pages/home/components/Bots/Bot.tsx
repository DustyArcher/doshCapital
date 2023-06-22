const Bot = ({ title, subtitle, image }: { title: string; subtitle: string; image: string }) => {
  return (
    <div>
      <figure className="snip1584">
        <img src={image} />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption>
        <a href="#"></a>
      </figure>
    </div>
  );
};

export default Bot;
