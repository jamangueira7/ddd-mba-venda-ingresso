import Cpf from '../../../../common/domain/value-objects/cpf.vo'
import { Customer, CustomerId } from '../customer.entity'

test('deve criar um cliente', () => {
    let customer = Customer.create({
        name: 'João',
        cpf: '439.562.180-51'
    })

    expect(customer).toBeInstanceOf(Customer)
    expect(customer.id).toBeDefined()
    expect(customer.id).toBeInstanceOf(CustomerId)
    expect(customer.name).toBe('João')
    expect(customer.cpf.value).toBe('43956218051')

    let customer2 = new Customer({
        id: new CustomerId(customer.id.value),
        name: 'João xpto',
        cpf: new Cpf('527.337.550-99')
    })

    expect(customer.id.value).toBe(customer2.id.value)
})