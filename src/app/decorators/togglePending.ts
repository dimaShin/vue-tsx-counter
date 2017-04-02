export default ({ key } = {key: 'pending'}) => function togglePending(t, k, d) {
  const fn = d.value;
  d.value = function(...args) {
    const promise = fn.bind(this)(...args);
    if (!(promise instanceof Promise)) {
      throw 'Promise should be returned for togglePending decorator';
    }
    this[key] = true;
    return promise
      .then(result => {
        this[key] = false;
        return result;
      })
      .catch(err => {
        this[key] = false;
        throw err;
      });
  };

  return d;
}
