// import React, { useState } from 'react';
// import '../../styles/student/admissionForm.css';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// export default function ParentDetails() {
//   const { accessToken } = useSelector(state => state.auth);

//   const [father, setFather] = useState({
//     fatherTitle: '',
//     fatherFirstName: 'Kamlakar',
//     fatherLastName: 'Petkar',
//     fatherEmail: '',
//     fatherMobile: '8380850505',
//     fatherDesignation: '',
//     fatherOccupation: 'Farmer',
//     fatherOrganization: '',
//     fatherAnnualIncome: '₹ 45,000.00',
//   });

//   const [mother, setMother] = useState({
//     motherTitle: '',
//     motherFirstName: 'Snehal',
//     motherLastName: 'Petkar',
//     motherEmail: '',
//     motherMobile: '8380850505',
//     motherDesignation: '',
//     motherOccupation: 'Housewife',
//     motherOrganization: '',
//     motherAnnualIncome: '',
//   });

//   const [guardian, setGuardian] = useState({
//     gurdianTitle: '',
//     gurdianFirstName: '',
//     gurdianLastName: '',
//     gurdianEmail: '',
//     gurdianMobile: '',
//     gurdianDesignation: '',
//     gurdianOccupation: '',
//     gurdianOrganization: '',
//     gurdianAnnualIncome: '',
//     gurdianRelationshipWithStudent: '',
//   });

//   const [showGuardian, setShowGuardian] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');

//   // Convert camelCase field name to readable label
//  const formatLabel = (key) => {
//   // Remove known prefixes
//   const cleanedKey = key
//     .replace(/^(father|mother|gurdian)/i, '') // remove prefix (case-insensitive)
//     .replace(/^_/, '')                        // remove underscore if present after prefix
//     .replace(/([A-Z])/g, ' $1')               // add space before capital letters
//     .replace(/_/g, ' ')                       // replace underscores with spaces
//     .trim();

//   return cleanedKey.charAt(0).toUpperCase() + cleanedKey.slice(1); // capitalize first letter
// };


//   const handleChange = (e, setter) => {
//     const { name, value } = e.target;
//     setter(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage('');

//     const payload = {
//       ...father,
//       ...mother,
//       ...(showGuardian ? guardian : {})
//     };

//     try {
//       await axios.post(
//         `${process.env.REACT_APP_ROOT_URL}/api/students/save-parent-details`,
//         payload,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`,
//           },
//         }
//       );
//       setResponseMessage('Parent details saved successfully!');
//     } catch (error) {
//       console.error('Error saving parent details:', error);
//       setResponseMessage('Failed to save parent details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderFields = (data, setter, prefix) =>
//     Object.entries(data).map(([key, val]) => (
//       <div className="input-field" key={`${prefix}-${key}`}>
//         <label htmlFor={`${prefix}-${key}`}>
//           {formatLabel(key)}
//         </label>
//         <input
//           type="text"
//           id={`${prefix}-${key}`}
//           name={key}
//           value={val}
//           onChange={(e) => handleChange(e, setter)}
//           placeholder={formatLabel(key)}
//         />
//       </div>
//     ));

//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         {/* Father's Information */}
//         <div className="details address">
//           <span className="title">Father's Information</span>
//           <div className="fields">
//             {renderFields(father, setFather, 'father')}
//           </div>
//         </div>

//         {/* Mother's Information */}
//         <div className="details address">
//           <span className="title">Mother's Information</span>
//           <div className="fields">
//             {renderFields(mother, setMother, 'mother')}
//           </div>
//         </div>

//         {/* Guardian Checkbox */}
//         <div className="input-field">
//           <label htmlFor="showGuardian">
//             <input
//               type="checkbox"
//               id="showGuardian"
//               checked={showGuardian}
//               onChange={() => setShowGuardian(prev => !prev)}
//               style={{ marginRight: '0.5rem' }}
//             />
//             Do you have a local guardian (e.g., staying in PG)?
//           </label>
//         </div>

//         {/* Guardian Information */}
//         {showGuardian && (
//           <div className="details address">
//             <span className="title">Local Guardian Information</span>
//             <div className="fields">
//               {renderFields(guardian, setGuardian, 'guardian')}
//             </div>
//           </div>
//         )}

//         {/* Submit Button */}
//         <div style={{ marginTop: '1.5rem' }}>
//           <button type="submit" disabled={loading}>
//             {loading ? 'Saving...' : 'Save Parent Details'}
//           </button>
//         </div>

//         {/* Response Message */}
//         {responseMessage && (
//           <div style={{ marginTop: '1rem', color: loading ? 'black' : 'green' }}>
//             {responseMessage}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import '../../styles/student/admissionForm.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function ParentDetails() {
  const { accessToken } = useSelector(state => state.auth);

  const defaultFather = {
    fatherTitle: '',
    fatherFirstName: '',
    fatherLastName: '',
    fatherEmail: '',
    fatherMobile: '',
    fatherDesignation: '',
    fatherOccupation: '',
    fatherOrganization: '',
    fatherAnnualIncome: '',
  };

  const defaultMother = {
    motherTitle: '',
    motherFirstName: '',
    motherLastName: '',
    motherEmail: '',
    motherMobile: '',
    motherDesignation: '',
    motherOccupation: '',
    motherOrganization: '',
    motherAnnualIncome: '',
  };

  const defaultGuardian = {
    gurdianTitle: '',
    gurdianFirstName: '',
    gurdianLastName: '',
    gurdianEmail: '',
    gurdianMobile: '',
    gurdianDesignation: '',
    gurdianOccupation: '',
    gurdianOrganization: '',
    gurdianAnnualIncome: '',
    gurdianRelationshipWithStudent: '',
  };

  const [father, setFather] = useState(defaultFather);
  const [mother, setMother] = useState(defaultMother);
  const [guardian, setGuardian] = useState(defaultGuardian);
  const [showGuardian, setShowGuardian] = useState(false);

  const [isExisting, setIsExisting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', success: false });

  // Label formatting
  const formatLabel = (key) => {
    const cleaned = key.replace(/^(father|mother|gurdian)/i, '')
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .trim();
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_ROOT_URL}/api/students/get-parent-details`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(res => {
        if (res.data && Object.keys(res.data).length) {
          const data = res.data;
          setFather(Object.fromEntries(Object.entries(data).filter(([k]) => k.startsWith('father'))));
          setMother(Object.fromEntries(Object.entries(data).filter(([k]) => k.startsWith('mother'))));
          const guardianData = Object.fromEntries(Object.entries(data).filter(([k]) => k.startsWith('gurdian')));
          setGuardian(guardianData);
          setShowGuardian(Object.values(guardianData).some(v => v));
          setIsExisting(true);
          setIsEditing(false);
        } else {
          setIsEditing(true);
        }
      })
      .catch(err => {
        console.error(err);
        setIsEditing(true);
      });
  }, [accessToken]);

  const handleChange = (e, setter) => {
    const { name, value } = e.target;
    setter(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage({ message: '', success: false });

    const payload = {
      ...father,
      ...mother,
      ...(showGuardian ? guardian : {})
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_ROOT_URL}/api/students/save-parent-details`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
        }
      );
      setResponseMessage({ message: res.data.message || 'Details saved!', success: true });
      setIsExisting(true);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving parent details:', error);
      setResponseMessage({ message: 'Failed to save parent details.', success: false });
    } finally {
      setLoading(false);
    }
  };

  const renderFields = (data, setter, prefix) =>
    Object.entries(data).map(([key, val]) => (
      <div className="input-field" key={`${prefix}-${key}`}>
        <label htmlFor={`${prefix}-${key}`}>{formatLabel(key)}</label>
        <input
          type="text"
          id={`${prefix}-${key}`}
          name={key}
          value={val}
          onChange={(e) => handleChange(e, setter)}
          placeholder={formatLabel(key)}
        />
      </div>
    ));

  const renderViewFields = (data, prefix) =>
    Object.entries(data).map(([key, val]) => (
      <p key={`${prefix}-${key}`}>
        <strong>{formatLabel(key)}:</strong> {val || '--'}
      </p>
    ));

  if (isExisting && !isEditing) {
    return (
      <div className="container">
        <div className="form-section">
          <h2>Parent Details</h2>
          <h3>Father's Information</h3>
          {renderViewFields(father, 'father')}
          <h3>Mother's Information</h3>
          {renderViewFields(mother, 'mother')}
          {showGuardian && (
            <>
              <h3>Guardian's Information</h3>
              {renderViewFields(guardian, 'guardian')}
            </>
          )}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Parent Details</h2>

        <div className="details">
          <span className="title">Father's Information</span>
          <div className="fields">
            {renderFields(father, setFather, 'father')}
          </div>
        </div>

        <div className="details">
          <span className="title">Mother's Information</span>
          <div className="fields">
            {renderFields(mother, setMother, 'mother')}
          </div>
        </div>

        <div className="input-field">
          <label htmlFor="showGuardian">
            <input
              type="checkbox"
              id="showGuardian"
              checked={showGuardian}
              onChange={() => setShowGuardian(prev => !prev)}
              style={{ marginRight: '0.5rem' }}
            />
            Do you have a local guardian (e.g., staying in PG)?
          </label>
        </div>

        {showGuardian && (
          <div className="details">
            <span className="title">Guardian Information</span>
            <div className="fields">
              {renderFields(guardian, setGuardian, 'guardian')}
            </div>
          </div>
        )}

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {isExisting ? 'Update' : 'Save'}
          </button>
        </div>

        {responseMessage.message && (
          <div style={{
            marginTop: '1rem',
            color: responseMessage.success ? 'green' : 'red'
          }}>
            {responseMessage.message}
          </div>
        )}
      </form>
    </div>
  );
}

