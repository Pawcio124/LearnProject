import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
  });
});
