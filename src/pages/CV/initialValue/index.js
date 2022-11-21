import { v4 as uuidv4 } from 'uuid';
import introduceInitial from './introduce';

const contentInitialValues = [{ id: uuidv4(), ...introduceInitial }];

export default contentInitialValues;
