/**
 * Shared validation utility functions for form validation
 */

/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} - True if email is valid, false otherwise
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates a password
 * @param {string} password - The password to validate
 * @param {Object} options - Options for password validation
 * @param {number} [options.minLength=8] - Minimum length required
 * @param {boolean} [options.requireUppercase=false] - Require at least one uppercase letter
 * @param {boolean} [options.requireLowercase=false] - Require at least one lowercase letter
 * @param {boolean} [options.requireNumber=false] - Require at least one number
 * @param {boolean} [options.requireSpecial=false] - Require at least one special character
 * @returns {boolean} - True if password is valid, false otherwise
 */
export const isValidPassword = (password, options = {}) => {
  const {
    minLength = 8,
    requireUppercase = false,
    requireLowercase = false,
    requireNumber = false,
    requireSpecial = false
  } = options;
  
  if (!password || password.length < minLength) {
    return false;
  }
  
  if (requireUppercase && !/[A-Z]/.test(password)) {
    return false;
  }
  
  if (requireLowercase && !/[a-z]/.test(password)) {
    return false;
  }
  
  if (requireNumber && !/[0-9]/.test(password)) {
    return false;
  }
  
  if (requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return false;
  }
  
  return true;
};

/**
 * Validates a phone number
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if phone is valid, false otherwise
 */
export const isValidPhone = (phone) => {
  const regex = /^\+?[0-9]{8,15}$/; // Basic international phone number format
  return regex.test(phone.replace(/\s+/g, ''));
};

/**
 * Validates that a string is not empty (after trimming)
 * @param {string} value - The string to validate
 * @returns {boolean} - True if string is not empty, false otherwise
 */
export const isNotEmpty = (value) => {
  return typeof value === 'string' && value.trim().length > 0;
};

/**
 * Validates that two values match
 * @param {*} value1 - The first value
 * @param {*} value2 - The second value to compare
 * @returns {boolean} - True if values match, false otherwise
 */
export const valuesMatch = (value1, value2) => {
  return value1 === value2;
};

/**
 * Creates validation errors for a form
 * @param {Object} data - The form data to validate
 * @param {Object} validations - Validation rules for each field
 * @returns {Object} - Object with error messages for invalid fields
 * 
 * Example:
 * const errors = validateForm({
 *   email: 'test@example.com',
 *   password: 'pass123'
 * }, {
 *   email: {
 *     required: true,
 *     validator: isValidEmail,
 *     message: 'Please enter a valid email address'
 *   },
 *   password: {
 *     required: true,
 *     validator: (value) => isValidPassword(value, { minLength: 8 }),
 *     message: 'Password must be at least 8 characters'
 *   }
 * });
 */
export const validateForm = (data, validations) => {
  const errors = {};
  
  Object.entries(validations).forEach(([field, rules]) => {
    const value = data[field];
    
    // Check required fields
    if (rules.required && !isNotEmpty(value)) {
      errors[field] = rules.requiredMessage || `${field} is required`;
      return;
    }
    
    // Skip validation if field is empty and not required
    if (!rules.required && !isNotEmpty(value)) {
      return;
    }
    
    // Run custom validator
    if (rules.validator && typeof rules.validator === 'function') {
      const isValid = rules.validator(value, data);
      if (!isValid) {
        errors[field] = rules.message || `${field} is invalid`;
      }
    }
  });
  
  return errors;
};

/**
 * Common validation rules for auth forms
 */
export const validationRules = {
  email: {
    required: true,
    validator: isValidEmail,
    requiredMessage: 'Email is required',
    message: 'Please enter a valid email address'
  },
  password: {
    required: true,
    validator: (value) => isValidPassword(value, { minLength: 8 }),
    requiredMessage: 'Password is required',
    message: 'Password must be at least 8 characters'
  },
  confirmPassword: {
    required: true,
    validator: (value, data) => valuesMatch(value, data.password),
    requiredMessage: 'Please confirm your password',
    message: 'Passwords do not match'
  },
  firstName: {
    required: true,
    validator: isNotEmpty,
    requiredMessage: 'First name is required'
  },
  lastName: {
    required: true,
    validator: isNotEmpty,
    requiredMessage: 'Last name is required'
  },
  phone: {
    required: true,
    validator: isValidPhone,
    requiredMessage: 'Phone number is required',
    message: 'Please enter a valid phone number'
  },
  agreeTerms: {
    required: true,
    validator: (value) => value === true,
    requiredMessage: 'You must agree to the terms and conditions'
  }
};
