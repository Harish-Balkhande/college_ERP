import React, { useState } from 'react';
import axios from 'axios';
import '../styles/signup.css';
import { registerNewUser } from '../api/services/authService';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
    setApiError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const data = {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }
        const response = await registerNewUser(data);

        if (response.status === 201 || response.status === 200) {
          setSubmitted(true);
          console.log('Signup successful:', response.data);
        }
      } catch (error) {
        console.error(error);
        setApiError(
          error.response?.data?.message || 'Something went wrong. Please try again.'
        );
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>

        {submitted ? (
          <div className="success-message">🎉 Registration successful!</div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {apiError && <div className="error">{apiError}</div>}

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder='first middle last'
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Username/Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email id'
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter password(at least 6 characteer long)'
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Re-enter your password'
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className='push-button'>Sign Up</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupForm;




// import React, { useState } from 'react';
// import '../styles/signup.css';

// const SignupForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false);



//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//         setErrors(prev => ({ ...prev, [name]: '' }));
//     };

//     const validate = () => {
//         const newErrors = {};
//         if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
//         if (!formData.email) newErrors.email = 'Email is required';
//         else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
//         if (!formData.password) newErrors.password = 'Password is required';
//         if (formData.password !== formData.confirmPassword)
//             newErrors.confirmPassword = 'Passwords do not match';
//         return newErrors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validate();
//         if (Object.keys(validationErrors).length === 0) {
//             setSubmitted(true);
//             console.log('Form submitted:', formData);
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     return (
//         <div className="signup-wrapper">
//             <div className="signup-card">
//                 <h2 className="signup-title">Create Account</h2>
//                 {submitted ? (
//                     <div className="success-message">🎉 Registration successful!</div>
//                 ) : (
//                     <form onSubmit={handleSubmit} noValidate>
//                         <div className="form-group">
//                             <label>Full Name</label>
//                             <input
//                                 type="text"
//                                 name="fullName"
//                                 value={formData.fullName}
//                                 onChange={handleChange}
//                             />
//                             {errors.fullName && <span className="error">{errors.fullName}</span>}
//                         </div>

//                         <div className="form-group">
//                             <label>Email Address</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                             />
//                             {errors.email && <span className="error">{errors.email}</span>}
//                         </div>

//                         <div className="form-group">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                             {errors.password && <span className="error">{errors.password}</span>}
//                         </div>

//                         <div className="form-group">
//                             <label>Confirm Password</label>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                             />
//                             {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//                         </div>

//                         <button className='push-button' type="submit" >Sign Up</button>
//                     </form>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SignupForm;
