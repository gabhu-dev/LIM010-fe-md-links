import cli from '../src/cli.js'
const path = require('path');
describe('funcion cli ',()=>{
  it('deberia de validar',()=>{
    cli(path.join(process.cwd(),'pruebas','pruebaREADME.md'),{validate : true})
    .then(res => console.log(res))
  })
})