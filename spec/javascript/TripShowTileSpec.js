import TripShowTile from '../../app/javascript/react/components/TripShowTile'

describe("TripShowTile", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <TripShowTile
        name = "Korea"
        startDay = "12 Oct 2018"
        endDay = "19 Oct 2018"
        firstName = "Amelia"
        lastName = "Kim"
      />
    )
  });

  it("should render an h3 tag", () => {
    expect(wrapper.find("h3")).toBePresent();
  });

  it("should render a h3 tag with the the text property value", () => {
  expect(wrapper.find("h3").text()).toBe("Location: Korea")
});

  it("should render an Link tag", () => {
    expect(wrapper.find("Link")).toBePresent();
  });

})
