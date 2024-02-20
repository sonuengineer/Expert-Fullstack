
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PinCode() {
  const [pin, setPin] = useState('');
  const [result, setResult] = useState(null);

useEffect(()=>{
    fetchAddress()
},[pin])

  async function fetchAddress() {
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
      const data = response.data[0].PostOffice;
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult(null);
    }
  }

  return (
    <>
      <div>
        <label>Enter your pincode number </label>
        <input
          type="number"
          value={pin}
          placeholder="pincode"
          onChange={(e) => setPin(e.target.value)}
        />
      

        {result ? (
          <div>
           
            <ul>
              {result.map((a) => (
                <li key={a.Pincode}>
                  <p>Name: {a.Name}</p>
                  <p>State: {a.State}</p>
                  <p>Region: {a.Region}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </>
  );
}

export default PinCode;
