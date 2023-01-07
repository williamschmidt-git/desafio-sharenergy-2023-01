import { Customer } from '../entities/customer';

export abstract class CustomerRepository {
  abstract create(customer: Customer): Promise<void>;
  abstract findAll(): Promise<Customer[]>;
  abstract findByEmail(email: string): Promise<Customer>;
  abstract delete(id: string): void;
}
