


import React from "react"
import Admission from "./admission"
import {shallow,configure,mount} from "enzyme";
//import Adapter from "enzyme-adapter-react-16";
//configure({adapter:new Adapter()});

describe("Dept comp",() =>{
    test("State testing now....",()=>{
        const wrapper= shallow(<Department/>);
       // console.log(wrapper.state());

       wrapper.instance().handleClick('anatomy');

       console.log("value of disp"+wrapper.state('display'));
        expect(wrapper.state('display')).toEqual("http://www.bjmcpune.org/ANATOMY.pdf");

    });
});





/*import renderer from "react-test-renderer"
test("State Testing",()=>{
    let component = renderer.create(<Department/>).getInstance();
    component.handleClick('anatomy');
    expect(component.state.display).toBe("http://www.bjmcpune.org/ANATOMY.pdf");
})*/
