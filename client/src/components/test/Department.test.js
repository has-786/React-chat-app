import React from "react"
import Department from "../Department.js"
import renderer from 'react-test-renderer';
import {shallow,configure,mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter:new Adapter()});

//Test 1
jest.mock('../Header',()=>'header')
jest.mock('../Navbar',()=>'navbar')
it('Snapshot test to check if renders correctly', () => {
  const component = renderer.create(<Department/>).toJSON();
  expect(component).toMatchSnapshot();
});

//Test 2
describe("Dept comp",() =>{
    test("Checking count of pdfs....",()=>{
        const wrapper= shallow(<Department/>);
       
      
       console.log("value of disp"+wrapper.state().info.name);
       
        expect(wrapper.state().info).toHaveLength(29);
    });
});


//Test 3
describe("Dept comp",() =>{
    test("Verify content of state....",()=>{
        const wrapper= shallow(<Department/>);
       wrapper.instance().handleClick('anatomy');
        expect(wrapper.state().info).toEqual(expect.arrayContaining([expect.objectContaining({name:"anatomy",link:"http://www.bjmcpune.org/ANATOMY.pdf"})]))    
        
    });
});
