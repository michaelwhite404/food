import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization: `Bearer B-UpOo4iKJu-7cSCqd8HG55ZyhQk04XuTlt9svM3PpzQIzbu2HDdBUom9r0Ag1vmA9pfflAY5B2NLGo0jWGV5FdJowcPu9ZX3r6KRQQrqBwIH0hbioLliPk7rsxUYnYx`,
  },
});
