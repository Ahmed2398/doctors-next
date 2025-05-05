'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook for managing state with localStorage
 * 
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value if key is not in localStorage
 * @returns {Array} [storedValue, setValue] - State value and setter function
 */
function useLocalStorage(key, initialValue) {
  // Create state based on value from localStorage or initialValue
  const [storedValue, setStoredValue] = useState(initialValue);
  
  // Initialize on mount
  useEffect(() => {
    try {
      // Get from local storage by key
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        // Parse stored json or return initialValue
        setStoredValue(item ? JSON.parse(item) : initialValue);
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);
  
  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };
  
  return [storedValue, setValue];
}

export default useLocalStorage;
