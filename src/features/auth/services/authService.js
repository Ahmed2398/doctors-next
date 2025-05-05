// Authentication service for API calls related to user authentication

/**
 * Log in a user with email and password
 * @param {Object} credentials - User credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<Object>} User data
 */
export const login = async ({ email, password }) => {
  try {
    // In a real app, this would be an API call
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // });
    // const data = await response.json();
    
    // For demo purposes, we'll simulate a successful login
    const user = { id: '1', name: 'Doctor User', email, role: 'doctor' };
    
    // Store user in localStorage or cookies
    localStorage.setItem('user', JSON.stringify(user));
    
    return user;
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Failed to log in');
  }
};

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} Created user data
 */
export const register = async (userData) => {
  try {
    // In a real app, this would be an API call
    // const response = await fetch('/api/auth/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userData),
    // });
    // const data = await response.json();
    
    // For demo purposes
    const user = { id: '1', ...userData };
    
    // Store user in localStorage or cookies
    localStorage.setItem('user', JSON.stringify(user));
    
    return user;
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error('Failed to register');
  }
};

/**
 * Log out the current user
 * @returns {Promise<void>}
 */
export const logout = async () => {
  try {
    // In a real app, this might be an API call to invalidate the token
    // await fetch('/api/auth/logout', { method: 'POST' });
    
    // Remove user from localStorage or cookies
    localStorage.removeItem('user');
  } catch (error) {
    console.error('Logout error:', error);
    throw new Error('Failed to log out');
  }
};

/**
 * Get the current logged-in user
 * @returns {Promise<Object|null>} User data or null if not logged in
 */
export const getCurrentUser = async () => {
  try {
    // Get user from localStorage or cookies
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};
