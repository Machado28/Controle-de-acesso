import { Repository, EntityRepository } from 'typeorm';

import Entiti from '../app/models/Entity';

@EntityRepository(Entiti)
class EntitiRepository extends Repository<Entiti> {}

export default EntitiRepository;
