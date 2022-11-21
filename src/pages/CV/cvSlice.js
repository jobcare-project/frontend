import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { newIconicContainerItem } from '~/constants/cvConstant';
import contentInitialValues from './initialValue';
import overviewInitialValues from './initialValue/overview';
import { arrThemes } from './themes';
import { DefaultTheme } from './themes/themeList';

export const cvSlice = createSlice({
    name: 'cv',
    initialState: {
        loading: false,
        theme: DefaultTheme,
        data: {
            overview: overviewInitialValues,
            content: contentInitialValues,
        },
    },
    reducers: {
        changeTheme(state, action) {
            const themeCorrect = arrThemes.find(
                (theme) => theme.data.color === action.payload,
            );
            state.theme = themeCorrect.data;
        },
        addIconicContainerItem(state, action) {
            const { index } = action.payload;
            state.data.overview.container.splice(index + 1, 0, {
                id: uuidv4(),
                ...newIconicContainerItem,
            });
        },
        addIconicContainerItemBefore(state, action) {
            const { index } = action.payload;
            state.data.overview.container.splice(index, 0, {
                id: uuidv4(),
                ...newIconicContainerItem,
            });
        },
    },
});

export const {
    changeTheme,
    addIconicContainerItem,
    addIconicContainerItemBefore,
} = cvSlice.reducer;
