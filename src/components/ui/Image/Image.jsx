import './Image.styles.scss';

function Image(props) {
  const { src, className } = props;

  return (
    <div className={`Image ${className}`}>
      <img src={src} />
    </div>
  )
}

export default Image;
