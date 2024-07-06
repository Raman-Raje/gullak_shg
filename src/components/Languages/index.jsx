import React from 'react';

import { GridContainer, TileContainer } from './style';

const languages = [
  { name: 'marathi', nativeName: 'मराठी', iconName: 'म' },
  { name: 'hindi', nativeName: 'हिंदी', iconName: 'हिं' },
];

const Languages = () => {
  return (
    <GridContainer>
      {languages.map((language, index) => (
        <TileContainer key={index} name={language.name}>
          <div className="icon">{language.iconName}</div>
          <div className="native-name">{language.nativeName}</div>
        </TileContainer>
      ))}
    </GridContainer>
  );
};

export default Languages;
