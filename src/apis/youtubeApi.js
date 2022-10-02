import axios from "axios";
console.log(process.env.REACT_APP_YOUTUBE_API_KEY)

const baseApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // headers: {
  //   Authorization: `Bearer ${process.env.REACT_APP_YOUTUBE_API_KEY}`
  // },
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    part: 'snippet',
    maxResult: 5,
  }
})

export const getPlaylistItems = (playlistId = 'RDCLAK5uy_mOmfogvkugBD9vd5EbejT2y82WidC6as0', options = {}) => {
  return baseApi.get('/playlistItems', {
    params: {
      playlistId,

    }
  })
}

export const searchVideo = (q = '', options = {}) => {
  return baseApi.get('/search', {
    params: {
      type: 'video',
      q,
    }
  })
}