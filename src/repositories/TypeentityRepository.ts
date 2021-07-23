import { Repository, EntityRepository } from 'typeorm';

import Typeentity from '../app/models/Typeentity';

@EntityRepository(Typeentity)
class TypeentityRepository extends Repository<Typeentity> {}

export default TypeentityRepository;
