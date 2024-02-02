const URL = {
  products: '/api/products', // OPTIONAL PARAMS  = [category_id, keyword]
  recommendedProducts: '/api/products/recommended', // OPTIONAL PARAMS  = [category_id]
  staffProducts: '/api/products/staff_picks', // OPTIONAL PARAMS  = [category_id]
  categories: '/api/categories',
};

const baseUrl = {
  api:
    process.env.REACT_APP_NODE_ENV === 'production'
      ? 'https://gumroad.replit.app/'
      : 'https://14daee96-be81-4417-8bb0-66e796dd588f-00-2xqfzqyvqmeu9.picard.replit.dev/',
};

const COMMON_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

/**
 * These config options can be passed to the api options
 * errMsg: Error message to be shown in case of error
 * hasFormData - to convert api data into form data
 * fullResponse - to get the actual axios api response (only data object in the apu response is returned)
 * hideDefaultError - to hide the default error message (use in case of custom conditional error message)
 * onProgressCallback - to get the progress of the upload (in put and post requests)
 */
const DEFAULT_INTERCEPTOR_CONFIG = {
  errMsg: '',
  hasFormData: false,
  fullResponse: false,
  hideDefaultError: false,
  onProgressCallback: null,
};

export { COMMON_HEADERS, DEFAULT_INTERCEPTOR_CONFIG, baseUrl };
export default URL;
