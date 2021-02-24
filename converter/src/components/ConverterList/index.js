import React, { useState } from 'react';
import Modal from '../Modal';

const ConverterList = ({ category }) => {

  const [converters] = useState([
    {
      name: 'Base Converter',
      category: 'base',
      description: 'A converter that can provide Binary, Decimal, and Hexadecimal versions of the same number'
    },
    {
      name: 'Color Converter',
      category: 'color',
      description: 'A converter that can provide RGB, Hexadecimal, HSL, and HSV versions of the same color code'
    },
  ]);

  const currentConverters = converters.filter((converter) => converter.category === category);
  const [currentConverter, setCurrentConverter] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    setCurrentConverter({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal currentConverter={currentConverter} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentConverters.map((image, i) => (
          <img
            src={require(`../../assets/img/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ConverterList;