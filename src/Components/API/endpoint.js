// const createGame = async () => {
//   fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
//     method: 'POST',
//     body: JSON.stringify(),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// };

// const key = createGame();
// console.log(key);

const APP_ID = 'bQNG6t2a1ZnMfb9jJ3pP';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}`;
const FETCH_URL = `${BASE_URL}/books`;

// export { createGame };

export default FETCH_URL;
