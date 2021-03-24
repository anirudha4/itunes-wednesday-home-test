import {createStore, action, thunk} from 'easy-peasy';
import {create} from 'apisauce'

const api = create({
    baseURL: 'https://itunes.apple.com'                                                                                                                                                  
})

const store = createStore({
    searchTerm: "",
    results: [],
    isFetched: false,
    setTerm : action((state, payload) => {
        state.searchTerm = payload
    }),
    fetchArtists: thunk(async (actions, payload) => {
        console.log(payload);
        api.any({ method: 'GET',url: '/search', params: { term: payload, media: "music", limit: 10}})
        .then(data => actions.populateResults(data.data.results))
        .catch(err => actions.populateResults([])); 
      }),
      populateResults: action((state, payload) => {
          state.results = payload
          if(payload.length > 0){
            state.isFetched = true     
          }
      }),
})

export default store;