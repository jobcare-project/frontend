import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import contentInitialValues from './initialValue';
import newContentBoxItem from './initialValue/initialConstants/contentItem';
import { newIconicContainerItem } from './initialValue/initialConstants/overviewItem';
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
            const { index, typeBlock, boxId } = action.payload;

            if (typeBlock === 'overview') {
                state.data.overview.container.splice(index + 1, 0, {
                    id: uuidv4(),
                    ...newIconicContainerItem,
                });
            } else {
                state.data.content.map((box) => {
                    if (box.id === boxId) {
                        box.data.splice(index, 0, {
                            id: uuidv4(),
                            ...newContentBoxItem,
                        });
                    }
                    return box;
                });
            }
        },
        addIconicContainerItemBefore(state, action) {
            const { index, typeBlock, boxId } = action.payload;
            if (typeBlock === 'overview') {
                state.data.overview.container.splice(index + 1, 0, {
                    id: uuidv4(),
                    ...newIconicContainerItem,
                });
            } else {
                state.data.content.map((box) => {
                    if (box.id === boxId) {
                        box.data.splice(index, 0, {
                            id: uuidv4(),
                            ...newContentBoxItem,
                        });
                    }
                    return box;
                });
            }
        },
        deleteBoxItem(state, action) {
            console.log('handleDeleteBoxItem-action:', action.payload);
            const { index, typeBlock, boxId } = action.payload;

            if (typeBlock === 'overview') {
                state.data.overview.container.filter((box) => box.id !== boxId);
            } else {
                state.data.content.map((box) => {
                    return box.data.filter((boxItem) => boxItem.id !== boxId);
                    // if(box.id === boxId) {
                    // }
                    // return box
                });
            }
        },
    },
});

export const {
    changeTheme,
    addIconicContainerItem,
    addIconicContainerItemBefore,
    deleteBoxItem,
} = cvSlice.reducer;
