const apiFetch = (path, options = {}) => fetch(path, options)
  .then(res => res.json())
  .catch(err => console.log(err));

export default apiFetch;
