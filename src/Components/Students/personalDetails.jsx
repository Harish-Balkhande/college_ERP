import { useState } from 'react';
import '../../styles/student/admissionForm.css';

// Utility: Converts camelCase to Title Case
const formatPlaceholder = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

export default function PersonalDetails() {
  const [isHavingDisability, setIsHavingDisability] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    email: '',
    dob: '',
    maritalStatus: '',
    bloodGroup: '',
    gender: '',
    occupation: '',
    birthPlace: '',
    nationality: '',
    religion: '',
    castCategory: '',
    fatherName: '',
    motherName: '',
    differentlyAbled: '',
    disabilityType: '',
  });

  const [fatherInfo, setFatherInfo] = useState({
    title: '',
    firstName: 'Kamlakar',
    lastName: 'Petkar',
    email: '',
    mobile: '8380850505',
    designation: '',
    occupation: 'Farmer',
    organizationName: '',
    annualIncome: '₹ 45,000.00',
  });

  const [motherInfo, setMotherInfo] = useState({
    title: '',
    firstName: 'Snehal',
    lastName: 'Petkar',
    email: '',
    mobile: '8380850505',
    designation: '',
    occupation: 'Housewife',
    organizationName: '',
    annualIncome: '',
  });

  const [guardianInfo, setGuardianInfo] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    designation: '',
    occupation: '',
    organizationName: '',
    annualIncome: '',
    familyIncome: '',
    relationshipWithStudent: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container">
      <form>
        <div className="form first">
          <div className="details personal">
            <span className="title">Personal Details</span>

            <div className="fields">
              <div className="input-field">
                <select name="title" value={formData.title} onChange={handleChange}>
                  {['select', 'Mr.', 'Mrs', 'Miss'].map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              {['firstName', 'middleName', 'lastName', 'mobile', 'email', 'dob', 'birthPlace', 'nationality', 'religion', 'castCategory', 'occupation'].map((key) => (
                <div className="input-field" key={key}>
                  <input
                    type={key === 'dob' ? 'date' : 'text'}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}

              <div className="input-field">
                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                  <option disabled value="">
                    Marital Status
                  </option>
                  {['Single', 'Married', 'Unmarried', 'Widow', 'Divorced'].map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-field">
                <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                  <option disabled value="">
                    Blood Group
                  </option>
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-', 'Golden blood'].map((bg) => (
                    <option key={bg} value={bg}>
                      {bg}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-field">
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option disabled value="">
                    Gender
                  </option>
                  {['Male', 'Female', 'Other'].map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>

              <div className="input-field">
                <select value={isHavingDisability} onChange={(e) => {
                  setIsHavingDisability(e.target.value);
                  setFormData((prev) => ({ ...prev, differentlyAbled: e.target.value }));
                }}>
                  <option disabled value="">
                    Differently Abled
                  </option>
                  {['Yes', 'No'].map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              {isHavingDisability === 'Yes' && (
                <div className="input-field">
                  <input
                    type="text"
                    name="disabilityType"
                    value={formData.disabilityType}
                    onChange={handleChange}
                    placeholder="Mention Disability type"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Father's Details */}
          <div className="details parents">
            <span className="title">Father's Information</span>
            <div className="fields">
              {Object.entries(fatherInfo).map(([key, val]) => (
                <div className="input-field" key={key}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleNestedChange(setFatherInfo)}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mother's Details */}
          <div className="details parents">
            <span className="title">Mother's Information</span>
            <div className="fields">
              {Object.entries(motherInfo).map(([key, val]) => (
                <div className="input-field" key={key}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleNestedChange(setMotherInfo)}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Local Guardian Details */}
          <div className="details parents">
            <span className="title">Local Guardian Information</span>
            <div className="fields">
              {Object.entries(guardianInfo).map(([key, val]) => (
                <div className="input-field" key={key}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleNestedChange(setGuardianInfo)}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
