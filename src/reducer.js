const initialState = {counter: 0};

//чистая функция редьюсер - не должно быть никаких чисел рандомов и прочей хуйни (т.е. при одинаковых входных данных = одинаковый результат и никаких побочный эффектов типо вывода в консоль, запросы на сервер, работы с дом-деревом, изменение файловой системы, изменение входных данных)
const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'INC':
      return {
        ...state, counter: state.counter + 1
      };
    case 'DEC':
      return {
        ...state, counter: state.counter - 1
      };
    case 'RND':
      return {
        ...state, counter: state.counter * payload
      };
    default:
      return state;
  }
};

export default reducer;