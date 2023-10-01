import { screen, fireEvent } from '@testing-library/react';
import { expect } from 'vitest';

export function verify_input(label, input, result) {
    const productName = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.change(productName, { target: { value: input } });

    // EXCPECTED RESULT
    expect(productName.value).toBe(result);

    // DISPLAY
    const displayedText = screen.getByLabelText(label);
    expect(displayedText).toBeInTheDocument();
}

export function verify_input_img(label, file, result) {
    const productName = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.change(productName, { target: { files: [file] } });

    // DISPLAY

    const displayed_img = screen.getByLabelText(label);
    expect(displayed_img).toBeInTheDocument();
}

export function verify_input_radio(label, input) {
    const radiobutton = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.click(radiobutton);

    // EXCPECTED RESULT
    expect(radiobutton.value).toBeChecked();

    // DISPLAY
    if (input !== undefined){
        expect(radiobutton.value).toBe(input);
    }
    expect(radiobutton).toBeInTheDocument();
}

export function not_empty(label, input) {
    const productName = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.change(productName, { target: { value: input } });

    const displayedText = screen.getByLabelText(label);

    expect(displayedText).not.toHaveValue("");
}

export function not_include_special_char(label, input) {
    const productName = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.change(productName, { target: { value: input } });

    const displayedText = screen.getByLabelText(label);

    const containsSpecialChars = !/[@#{}]/.test(displayedText.value);

    if (containsSpecialChars === true){
        expect(displayedText.value).toBe(input);
    } else {
        expect(displayedText.value).not.toBe(input);
    }
}

export function length_of_input(label, input) {
    const productName = screen.getByLabelText(label);

    // INPUT VALUE TO FIELD
    fireEvent.change(productName, { target: { value: input } });

    const displayedText = screen.getByLabelText(label);

    const length_input = displayedText.value.length;

    if ((length_input > 0) || (length_input <= 25)) {
        expect(displayedText.value).toBe(input);
    } else {
        expect(displayedText.value).not.toBe(input);
    }
}