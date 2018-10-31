import TripIndexTile from '../../app/javascript/react/components/TripIndexTile'

describe("TripIndexTile", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TripIndexTile
        name = "Korea"
        owner = "Amelia Kim"
        startDay = "12 Oct 2018"
        endDay = "19 Oct 2018"
      />
    )
  });

  it("should render an Link tag", () => {
    expect(wrapper.find("Link")).toBePresent();
  });

  it("should render an h4 tag", () => {
    expect(wrapper.find("h4")).toBePresent();
  });

  it("should render a h4 tag with the the text property value", () => {
  expect(wrapper.find("h4").text()).toBe("Korea")
  });

  it("should render an p tag", () => {
    expect(wrapper.find("p")).toBePresent();
  });

  it("should render a p tag with the the text property value", () => {
  expect(wrapper.find("p").text()).toBe("From 12 Oct 2018 to 19 Oct 2018")
  });
})
