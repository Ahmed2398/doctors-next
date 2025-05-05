/**
 * API client with configuration and helper methods
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

/**
 * Fetch wrapper with common configuration
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @returns {Promise<any>} Response data
 */
export const fetchAPI = async (endpoint, options = {}) => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_URL}${endpoint}`;
  
  // Default headers
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  
  // Get auth token if available
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }
  
  // Merge options
  const fetchOptions = {
    ...options,
    headers,
  };
  
  try {
    const response = await fetch(url, fetchOptions);
    
    // Handle HTTP errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw {
        status: response.status,
        message: errorData.message || response.statusText,
        data: errorData,
      };
    }
    
    // Parse JSON if the response has content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return await response.text();
  } catch (error) {
    console.error(`API error for ${endpoint}:`, error);
    throw error;
  }
};

/**
 * Common HTTP methods with predefined configurations
 */
export const api = {
  /**
   * GET request
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  get: (endpoint, options = {}) => 
    fetchAPI(endpoint, { method: 'GET', ...options }),
  
  /**
   * POST request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  post: (endpoint, data, options = {}) => 
    fetchAPI(endpoint, { 
      method: 'POST',
      body: JSON.stringify(data),
      ...options 
    }),
  
  /**
   * PUT request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  put: (endpoint, data, options = {}) => 
    fetchAPI(endpoint, { 
      method: 'PUT',
      body: JSON.stringify(data),
      ...options 
    }),
  
  /**
   * PATCH request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request body data
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  patch: (endpoint, data, options = {}) => 
    fetchAPI(endpoint, { 
      method: 'PATCH',
      body: JSON.stringify(data),
      ...options 
    }),
  
  /**
   * DELETE request
   * @param {string} endpoint - API endpoint
   * @param {Object} options - Additional fetch options
   * @returns {Promise<any>} Response data
   */
  delete: (endpoint, options = {}) => 
    fetchAPI(endpoint, { method: 'DELETE', ...options }),
};
