import { render } from '@testing-library/react';
import Form from './Form';
import { it } from 'vitest';
import { verify_input, not_empty, not_include_special_char, length_of_input, verify_input_img, verify_input_radio } from '../../tests/helper.js';

describe('SOAL PRIORITAS 1', () => {
    it('PRODUCT NAME', () => {
        render(<Form />);

        verify_input('Product Name', 'Baju Tidur', 'Baju Tidur');
    }),
    it('PRODUCT CATEGORY', () => {
        render(<Form />);

        verify_input('Category Product', 'Clothes', 'Clothes');
    }),
    it('PRODUCT IMAGE', () => {
        render(<Form />);

        verify_input_img('Image of Product', 'test.jgp', 'image/jpg');
    }),
    it('PRODUCT FRESHNESS', () => {
        render(<Form />);

        verify_input_radio('Product Freshness', 'BrandNew');
    }),
    it('PRODUCT PRICE', () => {
        render(<Form />);

        verify_input('Product Price', '100000', '100000' );
    })
});

describe('SOAL PRIORITAS 2', () => {
    const product_name = 'hihi';
    it('PRODUCT NAME NOT EMPTY', () => {
        render(<Form />);

        not_empty('Product Name', product_name);
    }),
    it('PRODUCT NAME NOT INCLUDE SPECIAL CHAR', () => {
        render(<Form />);

        not_include_special_char('Product Name', product_name);
    }),
    it('LENGTH OF PRODUCT NAME IS NOT GREATER THAN EQUALS 25', () => {
        render(<Form />);

        length_of_input('Product Name', product_name);
    })
    // LANJUTIN SENDIRI
});