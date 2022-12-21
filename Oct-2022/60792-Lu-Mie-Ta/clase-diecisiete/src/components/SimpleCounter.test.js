import { render, fireEvent, screen } from '@testing-library/react';
import SimpleCounter from "./SimpleCounter";

test("Simple Counter: test Incrementar ",()=>{
    let component = render(<SimpleCounter initialValue={5} />);
    expect(component.queryByText(/5/i)).toBeTruthy();
    fireEvent .click(component.getByText(/\+/i))
    expect(component.queryByText(/6/i)).toBeTruthy();
});


test("Simple Counter: test Decrementar ",()=>{
    let component = render(<SimpleCounter initialValue={5} />);
    expect(component.queryByText(/5/i)).toBeTruthy();
    fireEvent .click(component.getByText(/\-/i))
    expect(component.queryByText(/4/i)).toBeTruthy();
});