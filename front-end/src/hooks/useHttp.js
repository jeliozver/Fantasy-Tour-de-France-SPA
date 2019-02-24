import { useState, useEffect } from 'react';

/**
 * Hook to send HTTP requests
 * 
 * @param {String} url
 * @param {Function} fetchFunc
 * @param {Object} helper
 * @param {Array} dependancies 
 * @returns {Array}
 */
export const useHttp = (url, fetchFunc, helper, dependancies) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    fetchFunc(url)
      .then(res => setFetchedData(res))
      .catch(err => helper.notify('error', err));
  }, dependancies);

  return [fetchedData];
};