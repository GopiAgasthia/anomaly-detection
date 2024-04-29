
interface ButtonProps {
  onClick: () => void;
}

export const SubmitButton = ({ onClick }:ButtonProps) => {
  return <button className='button' onClick={onClick}>Submit</button>;
};

export const ModelButton = ({ onClick }:ButtonProps) => {
  return <button className='button' onClick={onClick}>Render 3D Model</button>;
};
