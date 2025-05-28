import React, { useState } from 'react';
import '../../styles/student/admissionForm.css';

const formatPlaceholder = (key) =>
  key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());

export default function AddressForm() {
  const initialAddress = {
    addressLine: 'At Post Sindhi(rly), Taluka Selu, Wardha',
    cityTaluka: 'Sindhi',
    district: 'Wardha',
    state: 'Maharashtra',
    country: 'India',
    pinCode: '442105',
  };

  const emptyAddress = {
    addressLine: '',
    cityTaluka: '',
    district: '',
    state: '',
    country: '',
    pinCode: '',
  };

  const [localAddress, setLocalAddress] = useState(initialAddress);
  const [permanentAddress, setPermanentAddress] = useState(emptyAddress);
  const [isSameAddress, setIsSameAddress] = useState(false);

  const handleLocalChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...localAddress, [name]: value };
    setLocalAddress(updated);

    // Update permanent address if checkbox is selected
    if (isSameAddress) setPermanentAddress(updated);
  };

  const handlePermanentChange = (e) => {
    const { name, value } = e.target;
    setPermanentAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSameAddressToggle = (e) => {
    const checked = e.target.checked;
    setIsSameAddress(checked);
    if (checked) {
      setPermanentAddress(localAddress);
    } else {
      setPermanentAddress(emptyAddress);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form">
          {/* Local Address */}
          <div className="details address">
            <span className="title">Local Address</span>
            <div className="fields">
              {Object.entries(localAddress).map(([key, val]) => (
                <div className="input-field" key={`local-${key}`}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handleLocalChange}
                    placeholder={formatPlaceholder(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Checkbox for Address Match */}
          <div className="address-checkbox" style={{ margin: '1rem 0' }}>
            <label>
              <input
                type="checkbox"
                checked={isSameAddress}
                onChange={handleSameAddressToggle}
              />
              <span style={{ marginLeft: '8px' }}>
                Permanent address is same as local address
              </span>
            </label>
          </div>

          {/* Permanent Address */}
          <div className="details address">
            <span className="title">Permanent Address</span>
            <div className="fields">
              {Object.entries(permanentAddress).map(([key, val]) => (
                <div className="input-field" key={`perm-${key}`}>
                  <input
                    type="text"
                    name={key}
                    value={val}
                    onChange={handlePermanentChange}
                    placeholder={formatPlaceholder(key)}
                    disabled={isSameAddress}
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
