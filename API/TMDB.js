const API_TOKEN="af1ec855a0ca0ca54ea8c946b4d86cdb";
export function getFilms(text){
   const url='https://api.themoviedb.org/3/movie/550?api_key=af1ec855a0ca0ca54ea8c946b4d86cdb' + '&language=fr&query=' + text
   return fetch(url)
   .then((response)=>response.json(),
   console.log('hani fil api')
   )
   .catch((error)=>console.log(error))
   
}