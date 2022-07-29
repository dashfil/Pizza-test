export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      return {
        ...state, pizzas: [...state.pizzas,action.payload]
      }
      case "REMOVE_PIZZA":
       return {
        ...state,
        pizzas: [...state.pizzas.filter((el,id) => id !== +action.payload)],
      };
          default:
            return state
  }
}
