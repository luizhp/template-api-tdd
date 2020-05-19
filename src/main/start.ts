import 'module-alias/register'
import { DITeste } from '@/data/usecases/DITeste'
import { Teste } from '@/teste/teste'

const meuDITeste = new DITeste()
const meuTeste = new Teste(meuDITeste)
const isWorking: string = meuTeste.get('working') ? 'Working 😊' : 'Not Working 😔'
console.log(`is working? ${isWorking}`)
