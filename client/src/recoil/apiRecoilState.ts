import { atom } from 'recoil';
import { categoryListTypes, categoryMappedProductListTypes } from './apiRecoilState.types';

export const categoryRecoilState = atom({
    key: 'categoryList',
    default: [] as categoryListTypes[],
});

export const categoryMappedProductState = atom({
    key: 'categoryMappedProductState',
    default: {} as categoryMappedProductListTypes,
});
