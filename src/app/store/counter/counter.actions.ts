
export const counterConsts = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export const counterMutations =  {
  [counterConsts.INCREMENT] (state) {
    if (state.count < state.MAX) {
      state.count++;
    }

  },
  [counterConsts.DECREMENT] (state) {
    if (state.count > state.MIN) {
      state.count--;
    }
  }
};

export const counterActions = {
  [counterConsts.INCREMENT]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(counterConsts.INCREMENT);
        resolve()
      }, 1000)
    })
  },
  [counterConsts.DECREMENT]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(counterConsts.DECREMENT);
        resolve()
      }, 1000)
    })
  }
};
