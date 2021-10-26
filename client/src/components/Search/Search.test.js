import { render, fireEvent } from '@testing-library/react';
import Search from './Search.jsx';

it("renders correctly", () => {
    const {queryByPlaceholderText}= render(<Search/>);
    expect(queryByPlaceholderText("Country")).toBeTruthy();
})