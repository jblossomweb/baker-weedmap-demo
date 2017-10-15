const proxy = 'https://cors-anywhere.herokuapp.com/';

export default {
  get: url => fetch(proxy + url, { method: 'GET' })
    .then(response => response.json())
    .then(data => data),
};
