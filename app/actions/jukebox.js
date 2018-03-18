// @flow
type actionType = {
    +type: string
  };
  
  export const PLAYLIST_REQUEST = 'PLAYLIST_REQUEST';
  export const PLAYLIST_REQUEST_SUCCESS = 'PLAYLIST_REQUEST_SUCCESS';
  export const SONG_REQUEST = 'SONG_REQUEST';
  export const SONG_REQUEST_SUCCESS = 'SONG_REQUEST_SUCCESS';
  
  
  export function playlistRequest() {
    return {
      type: PLAYLIST_REQUEST,
    };
  }
  
  export function playlistRequestSuccess(playlist) {
    return {
      type: PLAYLIST_REQUEST_SUCCESS,
      payload: {
        playlist,
      }
    };
  }

  export function songRequest(url) {
    return {
      type: SONG_REQUEST,
      payload: {
        url,
      }
    };
  }

  export function songRequestSucces(song) {
    return {
      type: SONG_REQUEST_SUCCESS,
      payload: {
        song,
      }
    };
  }
  