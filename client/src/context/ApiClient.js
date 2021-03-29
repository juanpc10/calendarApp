const BASE_URL = "http://localhost:3001/events/";

export default { 
  getAllEvents: () => {
    return fetchRequest();
  },
};

async function fetchRequest () {
  try {
    const res = await fetch(BASE_URL);
    const res_1 = res.status <= 400 ? res : Promise.reject(res);
    return await res_1.json();
  }
  catch (err) {
    console.log(err);
  }
};

