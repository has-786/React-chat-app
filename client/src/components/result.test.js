import React from "react"
import Result from "./result"
import {shallow,configure,mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter:new Adapter()});

describe("Result comp",() =>{
    test("State testing now....",()=>{
        const wrapper= shallow(<Result/>);

        wrapper.instance().linkOneClick();

       expect(wrapper.state().show.type).not.toEqual("");
       expect(wrapper.state().show.link).not.toEqual("");

    });
});
