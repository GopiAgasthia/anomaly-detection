import score from "../assets/kidney1/similarity/score.json";
import score2 from "../assets/kidney2/similarity/score.json"


interface DamageDetectionProps {
  option: string
}

const DamageDetection = ({option}: DamageDetectionProps) => {

  const similarity: number = option==='Kidney1'?score.chamfer:option==='Kidney2'?score2.chamfer:0;
  
  return (
    <div className='damage-detection'>
      <h2>Damage Detection</h2>
      {'Similarity Score: ' + similarity}
    </div>
  );
};

export default DamageDetection;
