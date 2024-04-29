
interface ModelDisplayProps {
  option: string;
}

const ModelDisplay = ({ option }:ModelDisplayProps) => {
  // Your logic to render the 3D model based on the selectedOption
  const dir: string = option==='Kidney1'?"assets/kidney1":option==='Kidney2'?"assets/kidney2":"";
  return (
    <div className='image-container model-display'>
        <><img key={1} src={`src/${dir}/model/2Dseg.jpg`} alt={`Model ${1}`} /><img key={2} src={`src/${dir}/model/3Dmodel.png`} alt={`Segmented 2`} /></>
    </div>
  );
};

export default ModelDisplay;
