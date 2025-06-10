import { getData } from '../config/axiosConfig';

export const getSkips = async (postcode, area) => {
  return await getData('/skips/by-location', { postcode, area });
};
