import { v4 as uuidv4 } from 'uuid';

import educationInitial from './education';
import experienceInitial from './experience';
import introduceInitial from './introduce';
import skillsInitial from './skills';

const contentInitialValues = [
    {
        id: uuidv4(),
        ...introduceInitial,
    },
    {
        id: uuidv4(),
        ...educationInitial,
    },
    {
        id: uuidv4(),
        ...skillsInitial,
    },
    {
        id: uuidv4(),
        ...experienceInitial,
    },
];

export default contentInitialValues;
