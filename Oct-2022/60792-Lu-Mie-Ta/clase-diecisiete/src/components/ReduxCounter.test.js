import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ReduxCounter from "./ReduxCounter";
import store from '../store/store';


test("Redux Counter: test Incrementar ",()=>{
 //   let component = render("<Provider store={store} children={<ReduxCounter />} />");
 //   console.log(component.getByText(/C/));
    /*expect(component.queryByText(/0/i)).toBeTruthy();
    fireEvent .click(component.getByText(/\+/i))
    expect(component.queryByText(/1/i)).toBeTruthy();*/
});


test("Redux Counter: test Decrementar ",()=>{
    //let component = render(()=>(<Provider store={store}><ReduxCounter/></Provider>));
    /*expect(component.queryByText(/0/i)).toBeTruthy();
    fireEvent .click(component.getByText(/\-/i))
    expect(component.queryByText(/-1/i)).toBeTruthy();*/
});