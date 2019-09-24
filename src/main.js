// se unen todas las funciones
import { existRoute ,isAbsoluteOrRelative,isFileOrDirectory,extensions} from './path-directory.js'

const mdLinks = (route, options) => {
  if(existRoute(route)=== true){
      if(isAbsoluteOrRelative(route)=== true){
          if(isFileOrDirectory(route)=== true){
              if(extensions(route)=== true){

              }
          }
      }  }
}
console.log(process.argv[2]);