import React from "react"
import Admission from "./admission"
import {shallow,configure,mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter:new Adapter()});

describe("Admission comp",() =>{
    test("State testing now....",()=>{
        const wrapper= shallow(<Admission/>);

        const ugtypeLen=wrapper.state().ug.type.length;
        const pgtypeLen=wrapper.state().pg.type.length;
        const ugotherLen=wrapper.state().ug.other.length;
        const pgotherLen=wrapper.state().pg.other.length;

       wrapper.instance().ugClick();
      expect(wrapper.state().show.pg.type.length).toEqual(0);
      expect(wrapper.state().show.pg.other.length).toEqual(0);

      wrapper.instance().pgClick();
     expect(wrapper.state().show.ug.type.length).toEqual(0);
     expect(wrapper.state().show.ug.other.length).toEqual(0);

    });
});
