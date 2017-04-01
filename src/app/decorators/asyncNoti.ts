import toatrs from '../components/toastr';


export default ({ successMsg, failMsg }) => function asyncNoti(t, k, d) {
  const fn = d.value;
  d.value = function(...args) {
    const promise = fn.bind(this)(...args);
    if (!(promise instanceof Promise)) {
      throw 'Promise should be returned for noti decorator';
    }
    return promise
      .then(() => toatrs.success(successMsg))
      .catch(() => toatrs.error(failMsg));
  };

  return d;
}
