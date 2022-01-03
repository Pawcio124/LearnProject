import { mount, shallow } from "enzyme";
import App from "../App";
import toJSON from "enzyme-to-json";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../../HomePage/HomePage";
import { Button, TextField } from "@material-ui/core";
import ToDoListS from "../../ToDosSlice/ToDoListS";
import NewToDoS from "../../ToDosSlice/NewToDoS";

describe("App", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should render Welcome", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(HomePage).text()).toEqual("Welcome");
  });

  it("should render toDo view", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/toDos"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(ToDoListS).find(Button).length).toEqual(0);
    wrapper
      .find(TextField)
      .find("input")
      .simulate("change", { target: { value: "test" } });
    wrapper.find(NewToDoS).find(Button).simulate("click");
    expect(wrapper.find(ToDoListS).find(Button).length).toEqual(1);
    wrapper.find(ToDoListS).find(Button).simulate("click");
    expect(wrapper.find(ToDoListS).find(Button).length).toEqual(0);
  });
});
