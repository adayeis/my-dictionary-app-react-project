import "./DisplayImages.css";

export default function DisplayImages(props) {
  if (props.image) {
    if (props.image.length > 0) {
      return (
        <section className="DisplayImages">
          {props.image.map(function (image, index) {
            return (
              <a
                key={index}
                href={image.src.original}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image.src.landscape} alt={image.keyword} />
              </a>
            );
          })}
        </section>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}
