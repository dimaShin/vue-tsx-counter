export default ({ key } = {key: 'pending'}) => function togglePending(t, k, d) {
  const fn = d.value;
  d.value = function(...args) {
    const promise = fn.bind(this)(...args);
    if (!(promise instanceof Promise)) {
      throw 'Promise should be returned for togglePending decorator';
    }
    this[key] = true;
    return promise
      .then(() => this[key] = false)
      .catch(() => this[key] = false);
  };

  return d;
}
