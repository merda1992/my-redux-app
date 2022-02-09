//создание акшен-криетора
const inc = () => {
    return {
      type: 'INC'
    }
  };
  
  const dec = () => {
    return {
      type: 'DEC'
    }
  };
  
  const rnd = (numb) => {
    return {
      type: 'RND',
      payload: numb
    }
  };

  export {inc, dec, rnd};