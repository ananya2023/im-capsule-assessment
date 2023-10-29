import axios from "axios";

// Get User Testimonials
export const getTestimonials = async () => {
  const res = await axios.get(
    `https://random-data-api.com/api/users/random_user?size=5)`
  );

  return res;
};
