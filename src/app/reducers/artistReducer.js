export default function reducer(state={
  current_artist_id:'',
  info: {},
  albums: [],
  top_tracks: [],
  related_artists: [],
}, action){
  switch(action.type){
    case 'SET_CURRENT_ARTIST':{
      return { ...state, current_artist_id: action.id };
      break;
    }
    case 'GET_ARTIST_ALBUMS_FULFILLED': {
      return { ...state, albums: action.payload.data.items };
      break;
    }
    case 'GET_ARTIST_INFO_FULFILLED': {
      return { ...state, info: action.payload.data };
      break;
    }
    case 'GET_RELATED_ARTISTS_FULFILLED':{
      return { ...state, related_artists: action.payload.data.artists }
    }
    case 'GET_ARTIST_TOP_TRACKS_FULFILLED': {
      return { ...state, top_tracks: action.payload.data.tracks };
      break;
    }
  }
  return state;
}