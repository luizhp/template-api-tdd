import { IDITeste } from '@/domain/usecases/IDITeste'

export class DITeste implements IDITeste {
  do (data: string): boolean {
    if (data) {
      return true
    }
    return false
  }
}
