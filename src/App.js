import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { waitForReact } from 'cypress-react-selector';

describe('My React app', () => {
  before(() => {
    cy.visit('/');
    waitForReact('#root'); // pass the root selector here
  });

  it('should have rendered the App component', () => {
    cy.get('h1').should('contain', 'My App');
  });
});


function NumberInput() {
  const [number, setNumber] = useState('');
  const isValidNumber = useMemo(() => /^-?\d*\.?\d+$/.test(number), [number]);

  function handleInputChange(event) {
    setNumber(event.target.value);
  }

  return (
    <div>
      <input type="text" value={number} onChange={handleInputChange} />
      {isValidNumber ? (
        <FontAwesomeIcon icon={faCheck} className="valid-icon" />
      ) : null}
    </div>
  );
}
