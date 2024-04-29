import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import ImageDisplay from './components/ImageDisplay';
import { SubmitButton, ModelButton } from './components/Buttons';
import ModelDisplay from './components/ModelDisplay';
import DamageDetection from './components/DamageDetection';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [showModel, setShowModel] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmitButtonClick = () => {
    // Simulate fetching images based on selectedOption
    const fetchedImages = fetchImages(selectedOption);
    console.log(fetchedImages);
    setImages(fetchedImages);
  };

  const handleModelButtonClick = () => {
    setShowModel(true);
  };

  // Mock function to fetch images based on selected option
  const fetchImages = (option: string): string[] => {
    // Logic to fetch images based on the selected option
    // This could be an API call or data retrieval from a database
    // For demonstration purposes, I'll return some mock image URLs
    if (option === 'Kidney1') {
      return ['0075.png', '0087.png', '0123.png', '0135.png', '0423.png', '0435.png', '0519.png', '0531.png', '0675.png', '0687.png', ];
    } else if (option === 'Kidney2') {
      return ['0219.png', '0231.png', '0399.png', '0411.png', '0507.png', '0519.png', '0639.png', '0651.png', '0822.png', '0835.png', ];
    } else {
      return [];
    }
  };

  return (
    <div className='container'>
      <Dropdown options={['select', 'Kidney1', 'Kidney2']} onSelect={handleOptionSelect} />
      <SubmitButton onClick={handleSubmitButtonClick} />
      <ImageDisplay images={images} option={selectedOption}/>
      {images.length > 0 && <ModelButton onClick={handleModelButtonClick} />}
      {showModel && <ModelDisplay option={selectedOption} />}
      {showModel && <DamageDetection option={selectedOption}/>}
    </div>
  );
};

export default App;
