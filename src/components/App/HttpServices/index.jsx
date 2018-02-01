import axios from 'axios';

const url = 'http://localhost:3000/subjects/';

export function post(element) {
  axios.post(url, element)
    .then(() => {
      console.log('POST ok');
    })
    .catch((error) => {
      console.log('POST error: ', error);
    });
}

export function put(id, element) {
  axios.put(url + id, element)
    .then(() => {
      console.log('PUT ok');
    })
    .catch((error) => {
      console.log('PUT error', error);
    });
}
