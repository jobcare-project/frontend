import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { newIconicContainerItem } from '~/constants/cvConstant';
import { arrThemes } from './themes';
import { DefaultTheme } from './themes/themeList';

export const cvSlice = createSlice({
    name: 'cv',
    initialState: {
        loading: false,
        theme: DefaultTheme,
        data: {
            overview: {
                iconic: {
                    name: {
                        blocks: [
                            {
                                key: 'jdsk2',
                                text: 'Nguyen Van A',
                                type: 'unstyled',
                                depth: 0,
                                inlineStyleRanges: [],
                                entityRanges: [],
                                data: {},
                            },
                        ],
                        entityMap: {},
                    },
                    position: {
                        blocks: [
                            {
                                key: 'asve5',
                                text: 'Fullstack Developer',
                                type: 'unstyled',
                                depth: 0,
                                inlineStyleRanges: [],
                                entityRanges: [],
                                data: {},
                            },
                        ],
                        entityMap: {},
                    },
                },
                container: [
                    {
                        id: uuidv4(),
                        title: {
                            blocks: [
                                {
                                    key: 'ekrg0',
                                    text: 'Họ tên',
                                    type: 'unstyled',
                                    depth: 0,
                                    inlineStyleRanges: [],
                                    entityRanges: [],
                                    data: {},
                                },
                            ],
                            entityMap: {},
                        },
                        value: {
                            blocks: [
                                {
                                    key: '8ga22',
                                    text: 'Nguyễn Văn A',
                                    type: 'unstyled',
                                    depth: 0,
                                    inlineStyleRanges: [],
                                    entityRanges: [],
                                    data: {},
                                },
                            ],
                            entityMap: {},
                        },
                    },
                    {
                        id: uuidv4(),
                        title: {
                            blocks: [
                                {
                                    key: 'colgd',
                                    text: 'Ngày sinh',
                                    type: 'unstyled',
                                    depth: 0,
                                    inlineStyleRanges: [],
                                    entityRanges: [],
                                    data: {},
                                },
                            ],
                            entityMap: {},
                        },
                        value: {
                            blocks: [
                                {
                                    key: 'gnc1',
                                    text: '20/04/2000',
                                    type: 'unstyled',
                                    depth: 0,
                                    inlineStyleRanges: [],
                                    entityRanges: [],
                                    data: {},
                                },
                            ],
                            entityMap: {},
                        },
                    },
                    {
                        id: uuidv4(),
                        title: {
                            blocks: [
                                {
                                    key: '34fbc',
                                    text: 'Địa chỉ',
                                    type: 'unstyled',
                                    depth: 0,
                                    inlineStyleRanges: [],
                                    entityRanges: [],
                                    data: {},
                                },
                            ],
                            entityMap: {},
                        },
                        value: {
                            blocks: [
                                {
                                    key: '9qsm1',
                                    text: '03 TNV - Đà Nẵng',
                                    type: 'unstyled',
                                    depth: 0,
                                    inlineStyleRanges: [],
                                    entityRanges: [],
                                    data: {},
                                },
                            ],
                            entityMap: {},
                        },
                    },
                ],
            },
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
