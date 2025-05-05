/**
 * Application route constants
 */

// Public routes
export const HOME = '/';
export const ABOUT = '/about';
export const CONTACT = '/contact';
export const TERMS = '/terms';
export const PRIVACY = '/privacy';

// Auth routes
export const LOGIN = '/login';
export const REGISTER = '/register';
export const FORGOT_PASSWORD = '/forgot-password';
export const RESET_PASSWORD = '/reset-password';

// Doctor routes
export const DASHBOARD = '/dashboard';
export const APPOINTMENTS = '/appointments';
export const PATIENTS = '/patients';
export const PROFILE = '/profile';
export const SETTINGS = '/settings';

// Patient routes
export const BOOK_APPOINTMENT = '/book-appointment';
export const MEDICAL_RECORDS = '/medical-records';

// Admin routes
export const ADMIN_DASHBOARD = '/admin/dashboard';
export const ADMIN_DOCTORS = '/admin/doctors';
export const ADMIN_PATIENTS = '/admin/patients';

/**
 * Route builder with dynamic parameters
 * @param {string} route - Base route path
 * @param {Object} params - URL parameters
 * @returns {string} Route with parameters
 */
export const buildRoute = (route, params = {}) => {
  let path = route;
  
  Object.entries(params).forEach(([key, value]) => {
    path = path.replace(`:${key}`, value);
  });
  
  return path;
};
