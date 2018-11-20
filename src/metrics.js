const metrics = {
  success: 0,
  fail: 0
};

const incrementSuccess = () => {
  metrics.success += 1;
};

const incrementFail = () => {
  metrics.fail -= 1;
};

const get = () => ({ planet: metrics });

module.exports = {
  get,
  incrementSuccess,
  incrementFail
};
