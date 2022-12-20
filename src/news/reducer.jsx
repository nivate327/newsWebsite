const reducer = (state, action) => {
    switch (action.type) {
        case "GET_STORIES":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter((id) => {
                    return id.objectID !== action.payload;
                })
            }

        case "SEARCH_POST":
            {
                return {
                    ...state,
                    query: action.payload
                }
            }

        case "GET_PREV":
            {
                let prev = state.page - 1;

                if (prev <= 0) {
                    prev = 0;
                }

                return {
                    ...state,
                    page: prev
                }
            }

        case "GET_NEXT":
            {
                let next = state.page + 1;

                if (next >= state.nbPages) {
                    next = 0;
                }

                return {
                    ...state,
                    page: next
                }
            }
    }
}

export default reducer;