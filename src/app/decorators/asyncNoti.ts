import toatrs from '../components/toastr';


export default ({ successMsg, failMsg }) => function asyncNoti(t, k, d) {
  const fn = d.value;
  d.value = function(...args) {
    const promise = fn.bind(this)(...args);
    if (!(promise instanceof Promise)) {
      throw 'Promise should be returned for noti decorator';
    }
    return promise
      .then(result => {
        toatrs.success(successMsg);
        return result;
      })
      .catch(error => {
        toatrs.error(failMsg);
        throw error;
      });
  };

  return d;
}
