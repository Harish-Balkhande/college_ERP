// import React, { useState } from 'react';
// import axios from 'axios';
// import '../../styles/student/admissionForm.css';
// import { useSelector } from 'react-redux';

// const formatLabel = (key) => {
//   switch (key) {
//     case 'addressLine':
//       return 'Address Line';
//     case 'cityTaluka':
//       return 'City / Taluka';
//     case 'district':
//       return 'District';
//     case 'state':
//       return 'State';
//     case 'country':
//       return 'Country';
//     case 'pinCode':
//       return 'Pin Code';
//     default:
//       return key;
//   }
// };

// export default function AddressForm() {
//   const { accessToken } = useSelector(state => state.auth);

//   const initialAddress = {
//     addressLine: 'At Post Sindhi(rly), Taluka Selu, Wardha',
//     cityTaluka: 'Sindhi',
//     district: 'Wardha',
//     state: 'Maharashtra',
//     country: 'India',
//     pinCode: '442105',
//   };

//   const emptyAddress = {
//     addressLine: '',
//     cityTaluka: '',
//     district: '',
//     state: '',
//     country: '',
//     pinCode: '',
//   };

//   const [localAddress, setLocalAddress] = useState(initialAddress);
//   const [permanentAddress, setPermanentAddress] = useState(emptyAddress);
//   const [isSameAddress, setIsSameAddress] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleLocalChange = (e) => {
//     const { name, value } = e.target;
//     const updated = { ...localAddress, [name]: value };
//     setLocalAddress(updated);
//     if (isSameAddress) setPermanentAddress(updated);
//   };

//   const handlePermanentChange = (e) => {
//     const { name, value } = e.target;
//     setPermanentAddress((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSameAddressToggle = (e) => {
//     const checked = e.target.checked;
//     setIsSameAddress(checked);
//     if (checked) {
//       setPermanentAddress(localAddress);
//     } else {
//       setPermanentAddress(emptyAddress);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage('');

//     try {
//       let payload;

//       if (isSameAddress) {
//         payload = {
//           isSameAddress: true,
//           address: { ...localAddress },
//         };
//       } else {
//         payload = {
//           isSameAddress: false,
//           localAddress: { ...localAddress },
//           permanentAddress: { ...permanentAddress },
//         };
//       }

//       const response = await axios.post(
//         `${process.env.REACT_APP_ROOT_URL}/api/students/save-student-address`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${accessToken}`
//           }
//         }
//       );

//       // console.log(response);
//       setResponseMessage('Address saved successfully!');
//     } catch (error) {
//       // console.error('Error saving address:', error);
//       setResponseMessage('Failed to save address. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="form">

//           {/* Local Address */}
//           <div className="details address">
//             <span className="title">Local Address</span>
//             <div className="fields">
//               {Object.entries(localAddress).map(([key, val]) => (
//                 <div className="input-field" key={`local-${key}`}>
//                   <label htmlFor={`local-${key}`} style={{ fontSize: '0.85rem', marginBottom: '4px', display: 'block' }}>
//                     {formatLabel(key)}
//                   </label>
//                   <input
//                     type="text"
//                     id={`local-${key}`}
//                     name={key}
//                     value={val}
//                     onChange={handleLocalChange}
//                     placeholder={formatLabel(key)}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Checkbox */}
//           <div className="address-checkbox" style={{ margin: '1rem 0' }}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={isSameAddress}
//                 onChange={handleSameAddressToggle}
//               />
//               <span style={{ marginLeft: '8px' }}>
//                 Permanent address is same as local address
//               </span>
//             </label>
//           </div>

//           {/* Permanent Address */}
//           <div className="details address">
//             <span className="title">Permanent Address</span>
//             <div className="fields">
//               {Object.entries(permanentAddress).map(([key, val]) => (
//                 <div className="input-field" key={`perm-${key}`}>
//                   <label htmlFor={`perm-${key}`} style={{ fontSize: '0.85rem', marginBottom: '4px', display: 'block' }}>
//                     {formatLabel(key)}
//                   </label>
//                   <input
//                     type="text"
//                     id={`perm-${key}`}
//                     name={key}
//                     value={val}
//                     onChange={handlePermanentChange}
//                     placeholder={formatLabel(key)}
//                     disabled={isSameAddress}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div style={{ marginTop: '1.5rem' }}>
//             <button type="submit" disabled={loading}>
//               {loading ? 'Saving...' : 'Save Address'}
//             </button>
//           </div>

//           {/* Response Message */}
//           {responseMessage && (
//             <div style={{ marginTop: '1rem', color: loading ? 'black' : 'green' }}>
//               {responseMessage}
//             </div>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/student/admissionForm.css';
import { useSelector } from 'react-redux';

const formatLabel = key => {
  const labels = {
    addressLine: 'Address Line',
    cityTaluka: 'City / Taluka',
    district: 'District',
    state: 'State',
    country: 'Country',
    pinCode: 'Pin Code',
  };
  return labels[key] || key;
};

export default function AddressForm() {
  const { accessToken } = useSelector(state => state.auth);

  const emptyAddress = {
    addressLine: '',
    cityTaluka: '',
    district: '',
    state: '',
    country: '',
    pinCode: '',
  };

  const [localAddress, setLocalAddress] = useState(emptyAddress);
  const [permanentAddress, setPermanentAddress] = useState(emptyAddress);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isExisting, setIsExisting] = useState(false);

  // Fetch address on mount
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_ROOT_URL}/api/students/get-student-address`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const data = res.data;

        if (Array.isArray(data) && data.length) {
          const local = data.find(a => a.type === 'LOCAL');
          const permanent = data.find(a => a.type === 'PERMANENT');

          if (local) setLocalAddress(local);
          if (permanent) setPermanentAddress(permanent);

          // Assuming both addresses have same `sameAddress` field
          const same = local?.sameAddress || permanent?.sameAddress || false;
          setIsSameAddress(same);

          setIsExisting(true);
          setIsEditing(false);
        } else {
          setIsEditing(true);
        }
      } catch (err) {
        console.error('Failed to fetch address:', err);
        setIsEditing(true);
      }
    };

    fetchAddress();
  }, [accessToken]);


  const handleLocalChange = e => {
    const { name, value } = e.target;
    const updated = { ...localAddress, [name]: value };
    setLocalAddress(updated);
    if (isSameAddress) setPermanentAddress(updated);
  };

  const handlePermanentChange = e => {
    const { name, value } = e.target;
    setPermanentAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSameAddressToggle = e => {
    const checked = e.target.checked;
    setIsSameAddress(checked);
    if (checked) {
      setPermanentAddress(localAddress);
    } else {
      setPermanentAddress(emptyAddress);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    const payload = isSameAddress
      ? [
        { ...localAddress, type: 'LOCAL', sameAddress: true },
        { ...localAddress, type: 'PERMANENT', sameAddress: true }
      ]
      : [
        { ...localAddress, type: 'LOCAL', sameAddress: false },
        { ...permanentAddress, type: 'PERMANENT', sameAddress: false }
      ];

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ROOT_URL}/api/students/save-student-address`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      setResponseMessage('Address saved successfully!');
      setIsExisting(true);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving address:', error);
      setResponseMessage('Failed to save address. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // VIEW MODE
  if (isExisting && !isEditing) {
    return (
      <div className="container">
        <div className="form-section">
          <h2>Address Information</h2>

          <h3>Local Address</h3>
          {Object.entries(localAddress).map(([key, val]) => (
            <p key={`local-${key}`}><strong>{formatLabel(key)}:</strong> {val || '--'}</p>
          ))}

          <h3>Permanent Address</h3>
          {Object.entries(permanentAddress).map(([key, val]) => (
            <p key={`perm-${key}`}><strong>{formatLabel(key)}:</strong> {val || '--'}</p>
          ))}

          <p><strong>Same as Local Address:</strong> {isSameAddress ? 'Yes' : 'No'}</p>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      </div>
    );
  }

  // EDIT MODE
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form">

          {/* Local Address */}
          <div className="details address">
            <span className="title">Local Address</span>
            <div className="fields">
              {Object.entries(localAddress).map(([key, val]) => (
                <div className="input-field" key={`local-${key}`}>
                  <label htmlFor={`local-${key}`}>{formatLabel(key)}</label>
                  <input
                    type="text"
                    id={`local-${key}`}
                    name={key}
                    value={val}
                    onChange={handleLocalChange}
                    placeholder={formatLabel(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Checkbox */}
          <div className="address-checkbox">
            <label>
              <input
                type="checkbox"
                checked={isSameAddress}
                onChange={handleSameAddressToggle}
              />
              <span>Permanent address is same as local address</span>
            </label>
          </div>

          {/* Permanent Address */}
          <div className="details address">
            <span className="title">Permanent Address</span>
            <div className="fields">
              {Object.entries(permanentAddress).map(([key, val]) => (
                <div className="input-field" key={`perm-${key}`}>
                  <label htmlFor={`perm-${key}`}>{formatLabel(key)}</label>
                  <input
                    type="text"
                    id={`perm-${key}`}
                    name={key}
                    value={val}
                    onChange={handlePermanentChange}
                    placeholder={formatLabel(key)}
                    disabled={isSameAddress}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" disabled={loading}>
              {loading ? 'Saving...' : isExisting ? 'Update Address' : 'Save Address'}
            </button>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <div style={{ marginTop: '1rem', color: loading ? 'black' : 'green' }}>
              {responseMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
