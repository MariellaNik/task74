import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
