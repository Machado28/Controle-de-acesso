import { Repository, EntityRepository } from 'typeorm';

import Contact from '../app/models/Contact';

@EntityRepository(Contact)
class ContactRepository extends Repository<Contact> {}

export default ContactRepository;
