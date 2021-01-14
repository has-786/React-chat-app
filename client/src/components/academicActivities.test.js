import React from "react"
import AcademicActivities from "./academicActivities"
import {shallow,configure,mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter:new Adapter()});

describe("Academic Activities comp",() =>{
    test("State testing now....",()=>{

      const wrapper= shallow(<AcademicActivities/>);

      const deptLen=wrapper.state().deptsData.length;
      const guestLen=wrapper.state().guestsData.length;
      const otherLen=wrapper.state().otherData.length;


       wrapper.instance().deptClick();
      expect(wrapper.state().show.deptsData.length).toEqual(deptLen);
      expect(wrapper.state().show.guestsData.length).toEqual(1);
      expect(wrapper.state().show.guestsData[0].name).toEqual(null);
      expect(wrapper.state().show.guestsData[0].events.length).toEqual(0);
      expect(wrapper.state().show.otherData.length).toEqual(0);

      wrapper.instance().guestClick();
      expect(wrapper.state().show.guestsData.length).toEqual(guestLen);
      expect(wrapper.state().show.deptsData.length).toEqual(1);
      expect(wrapper.state().show.deptsData[0].name).toEqual(null);
      expect(wrapper.state().show.deptsData[0].events.length).toEqual(0);
      expect(wrapper.state().show.otherData.length).toEqual(0);


      wrapper.instance().otherClick();

      expect(wrapper.state().show.deptsData.length).toEqual(1);
      expect(wrapper.state().show.guestsData.length).toEqual(1);
      expect(wrapper.state().show.deptsData[0].name).toEqual(null);
      expect(wrapper.state().show.deptsData[0].events.length).toEqual(0);
      expect(wrapper.state().show.guestsData[0].name).toEqual(null);
      expect(wrapper.state().show.guestsData[0].events.length).toEqual(0);


      wrapper.instance().allClick();

      expect(wrapper.state().show.deptsData.length).toEqual(deptLen);
      expect(wrapper.state().show.guestsData.length).toEqual(guestLen);
      expect(wrapper.state().show.otherData.length).toEqual(otherLen);

    });
});
