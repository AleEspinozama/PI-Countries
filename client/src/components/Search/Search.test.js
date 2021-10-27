import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent, cleanup } from '@testing-library/react';
import thunk from "redux-thunk";
import reducer from '../../reducers/index';
import Search from './Search.jsx';

afterEach(cleanup);

function renderWithRedux(
    component,
    {store = createStore( reducer,
        compose( applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (args) => args, )) } = {}
    ) {
        return {
            ...render(<Provider store= {store}>{component}</Provider>)
        }
    }

it("renders with redux", () => {
    const {getByPlaceholderText, getByTestId} = renderWithRedux(<Search/>);
    expect(getByPlaceholderText("Country")).toBeInTheDocument();
    expect(getByTestId("boton-test")).toBeInTheDocument();
})

describe("Input value", () => {
    it("updates on change", () => {
        const {queryByPlaceholderText} =renderWithRedux(<Search/>);
        const searchInput = queryByPlaceholderText("Country");
        fireEvent.change(searchInput, {target: {value:"test"}});
        expect(searchInput.value).toBe("test") 
    })
})

describe("Search button", ()=> {
        it("trigger dispatch function and clears input value", () => {
            const {queryByPlaceholderText, getByTestId} = renderWithRedux(<Search/>);
            const searchInput = queryByPlaceholderText("Country");
            fireEvent.change(searchInput, {target: {value:"test"}});
            fireEvent.click(getByTestId("boton-test"));
            expect(searchInput.value).toBe("")
        })
})
