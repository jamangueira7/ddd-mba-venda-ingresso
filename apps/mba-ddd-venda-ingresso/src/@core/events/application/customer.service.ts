import {ICustomerRepository} from "../domain/repositories/customer-repository.interface";
import {Customer} from "../domain/entities/customer.entity";
import {IUnitOfWork} from "../../common/application/unit-of-work.interface";

export class CustomerService {
  constructor(
    private customerRepo: ICustomerRepository,
    private uow: IUnitOfWork,
  ) {}

  list() {
    return this.customerRepo.findAll();
  }

  async register(input: { name: string; cpf: string }) {
    const customer = Customer.create(input);
    this.customerRepo.add(customer);
    await this.uow.commit();
    return customer;
  }

  async update(id: string, input: { name?: string }) {
    const customer = await this.customerRepo.findById(id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    input.name && customer.changeName(input.name);

    this.customerRepo.add(customer);
    await this.uow.commit();

    return customer;
  }
}