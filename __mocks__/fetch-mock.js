// fetch manual
export const myMock = (url)=>{
  if (url === 'https://nodejs.org/es/'){
    return {
      then:(cb) =>{
        cb({
          status:200,
        })
      }
    }
  }
  else{
    return {
      then:(cb)=>{
        cb({
          status:400,
        })
      }
    }
  }
}