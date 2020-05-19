import { ITeste } from '@/domain/usecases/ITeste'
import { IDITeste } from '@/domain/usecases/IDITeste'

export class Teste implements ITeste {
  constructor (private readonly diteste: IDITeste) {}
  get (data: string): boolean {
    const retorno = this.diteste.do(data)
    return retorno
  }
}
