import axios from "axios";

export const getAboutBandData = async () => {
  try {
    const results = await axios.get('/about-band')
    return results;
  } catch(error) {
    return error
  }
}