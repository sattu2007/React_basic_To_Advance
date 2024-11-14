import { fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
it("Should render Header component with a login button", ()=>{
    
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    
    const loginButton = screen.getByRole("button");
    
    
    expect(loginButton).toBeInTheDocument();

});

it("Should render Header component with a Cart Items 0", ()=>{
    
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    
    const cart = screen.getByText(/Cart/);
    
    
    expect(cart).toBeInTheDocument();

});

it("Should change Login Button to Logout on click", ()=>{
    
    render(
        <BrowserRouter>
        <Provider store ={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    
    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    
    
    expect(logoutButton).toBeInTheDocument();

}); 