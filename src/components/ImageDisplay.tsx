
interface ImageDisplayProps {
  images: string[];
  option: string;
}

const ImageDisplay = ({ images, option }:ImageDisplayProps) => {
  let dir: string;
  if (option==='Kidney1') dir = "assets/kidney1";
  else if (option==='Kidney2') dir = "assets/kidney2"
  return (
    <div className='image-container'>
      {images.map((image, index) => (
        <><img key={index} src={`src/${dir}/images/${image}`} alt={`Image ${image}`} /><img key={index} src={`src/${dir}/label/${image}`} alt={`Mask ${image}`} /></>
      ))}
    </div>
  );
};

export default ImageDisplay;
