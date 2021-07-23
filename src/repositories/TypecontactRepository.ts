import { Repository, EntityRepository } from 'typeorm';

import Typecontact from '../app/models/Typecontact';

@EntityRepository(Typecontact)
class TypecontactRepository extends Repository<Typecontact> {}

export default TypecontactRepository;
