import React from "react";
import ConverterList from '../ConverterList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Converters({currentCategory}) {
  const {name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <ConverterList category={currentCategory.name} />
    </section>
  );
}
export default Converters;