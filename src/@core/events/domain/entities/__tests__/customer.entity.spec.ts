import Cpf from '../../../../common/domain/value-objects/cpf.vo'
import { Customer, CustomerId } from '../customer.entity'

test('deve criar um cliente', () => {
    Customer.create({
        name: 'João',
        cpf: '993.464.838-50'
    })
})