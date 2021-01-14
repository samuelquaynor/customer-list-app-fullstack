import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') 
    private readonly customerModel: Model<Customer>){}
    async getAllCustomer(): Promise<Customer[]>{
        const customers = await this.customerModel.find().exec();
        return customers;
    }

    async getCustomer(customerID): Promise<Customer> {
        const customer = await this.customerModel.findById(customerID).exec();
        return customer;
    }

    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const newCustomer = await new this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }

    async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const updatedCustomer = await this.customerModel.findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
        return updatedCustomer;
    }

    async deleteCustomer(customerID): Promise<any> {
        const deletedCustomer = await this.customerModel.findByIdAndRemove(customerID);
        return deletedCustomer;
    }
}
