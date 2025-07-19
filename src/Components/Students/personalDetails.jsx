import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../styles/student/admissionForm.css';

const formatPlaceholder = key =>
  key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

const isRequired = key => ![
  'identityMark',
  'registrationNumber',
  'universityNumber',
  'applicationNumber',
  'rollNumber',
  'alternateMobile',
  'instituteEmail'
].includes(key);

export default function PersonalDetails() {
  const { fullName, email, accessToken } = useSelector(state => state.auth);

  const initialForm = {
    maritalStatus: '',
    instituteEmail: '',
    mobile: '',
    alternateMobile: '',
    fatherName: '',
    motherName: '',
    nationality: '',
    religion: '',
    caste: '',
    casteCategory: '',
    abcId: '',
    antiRaggingId: '',
    registrationNumber: '',
    universityNumber: '',
    applicationNumber: '',
    rollNumber: '',
    birthPlace: '',
    birthState: '',
    differentlyAbled: '',
    disabilityDetails: '',
    bloodGroup: '',
    identityMark: '',
    domicileCountry: '',
    domicileState: '',
    motherTongue: '',
    citizenshipCategory: '',
  };

  const [formData, setFormData] = useState(initialForm);
  const [isExisting, setIsExisting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', success: false });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_ROOT_URL}/api/students/get-basic-information`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
      .then(res => {
        if (res.data && Object.keys(res.data).length) {
          setFormData(res.data);
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

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = isExisting
      ? `${process.env.REACT_APP_ROOT_URL}/api/students/update-basic-information`
      : `${process.env.REACT_APP_ROOT_URL}/api/students/save-basic-information`;
    const method = isExisting ? 'put' : 'post';

    try {
      const res = await axios[method](url, formData, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` }
      });
      setResponseMessage({ message: res.data.message, success: res.data.successStatus });
      setIsExisting(true);
      setIsEditing(false);
    } catch {
      setResponseMessage({ message: 'Failed to save information.', success: false });
    }
  };

  const Section = ({ title, fields }) => (
    <section className="section">
      <h2>{title}</h2>
      <div className="fields">
        {fields.map(key => (
          <div className="input-field" key={key}>
            <label>
              {formatPlaceholder(key)} {isRequired(key) && <span className="required-star">*</span>}
            </label>
            {key === 'maritalStatus' || key === 'differentlyAbled' ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required={isRequired(key)}
              >
                <option value="">Select</option>
                {(key === 'maritalStatus'
                  ? ['Single', 'Married', 'Divorced', 'Widowed', 'Separated']
                  : ['Yes', 'No']
                ).map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

            ) : (
              <input
                type={key.includes('email') ? 'email' : 'text'}
                name={key}
                value={formData[key]}
                disabled={key === 'registrationNumber'}
                required={isRequired(key)}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );

  if (isExisting && !isEditing) {
    return (
      <div className="container">
        <div className="form-section">
          <h2>Personal Details</h2>
          <p><strong>Name:</strong> {fullName}</p>
          <p><strong>Email:</strong> {email}</p>
          {Object.entries(formData).map(([k, v]) => (
            <p key={k}><strong>{formatPlaceholder(k)}:</strong> {v || '--'}</p>
          ))}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Personal Details</h2>
        <p><strong>Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>

        <Section title="Basic Information" fields={[
          'maritalStatus', 'instituteEmail', 'mobile', 'alternateMobile', 'fatherName', 'motherName'
        ]} />

        <Section title="Other Information" fields={[
          'nationality', 'religion', 'caste', 'casteCategory', 'abcId', 'antiRaggingId'
        ]} />

        <Section title="Admin Information" fields={[
          'registrationNumber', 'universityNumber', 'applicationNumber', 'rollNumber'
        ]} />

        <Section title="Personal Info" fields={[
          'birthPlace', 'birthState', 'differentlyAbled', 'disabilityDetails', 'bloodGroup',
          'identityMark', 'domicileCountry', 'domicileState', 'motherTongue', 'citizenshipCategory'
        ]} />

        <div className="form-actions">
          <button type="submit">{isExisting ? 'Update' : 'Save'}</button>
        </div>

        {responseMessage.message && (
          <div style={{
            color: responseMessage.success ? 'green' : 'red',
            marginTop: '1rem'
          }}>
            {responseMessage.message}
          </div>
        )}
      </form>
    </div>
  );
}
