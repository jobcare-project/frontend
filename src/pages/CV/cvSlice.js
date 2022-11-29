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
            const { index, typeBlock, groupId } = action.payload;

            if (typeBlock === 'overview') {
                state.data.overview.container.splice(index + 1, 0, {
                    id: uuidv4(),
                    ...newIconicContainerItem,
                });
            } else {
                state.data.content.forEach((group) => {
                    if (group.id === groupId) {
                        group.data.splice(index + 1, 0, {
                            id: uuidv4(),
                            ...newContentBoxItem,
                        });
                    }
                });
            }
        },
        addIconicContainerItemBefore(state, action) {
            const { index, typeBlock, groupId } = action.payload;
            if (typeBlock === 'overview') {
                state.data.overview.container.splice(index, 0, {
                    id: uuidv4(),
                    ...newIconicContainerItem,
                });
            } else {
                state.data.content.forEach((group) => {
                    if (group.id === groupId) {
                        group.data.splice(index, 0, {
                            id: uuidv4(),
                            ...newContentBoxItem,
                        });
                    }
                });
            }
        },
        deleteBoxItem(state, action) {
            console.log('deleteBoxItem:::::', action.payload);
            const { typeBlock, boxId, groupId } = action.payload;

            if (typeBlock === 'overview') {
                state.data.overview.container =
                    state.data.overview.container.filter(
                        (box) => box.id !== boxId,
                    );
            } else {
                state.data.content = state.data.content.map((group) => {
                    if (group.id === groupId) {
                        return group.data.filter(
                            (boxItem) => boxItem.id !== boxId,
                        );
                    }
                    return group;
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
