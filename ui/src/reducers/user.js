const initialState = {
  email: null
};

export default function language(state = initialState, action) {
    switch (action.type) {
        case null:
            return {
                email: null
            };
        default:
          return state;
    }
}