import TripIndexContainer from '../../app/javascript/react/containers/TripIndexContainer'
import TripIndexTile from '../../app/javascript/react/components/TripIndexTile'
import fetchMock from 'fetch-mock'

describe("TripIndexContainer", () => {
  let wrapper;
  let data;

  beforeEach(() => {
    jasmineEnzyme();

    data = {
      trips: {
        upcoming_trips: [
          {
          id: 1,
          name: "Greece",
          start_date: "2018-11-11",
          end_date: "2018-11-20",
          user_id: 1
          }
        ],
        past_trips: [
          {
          id: 2,
          name: "California",
          start_date: "2018-10-11",
          end_date: "2018-10-20",
          user_id: 1
          }
        ]
      }
    }

    fetchMock.get(`/api/v1/trips`, {
      status: 200,
      body: data
    });

    wrapper = mount(
      <TripIndexContainer
      />
    );
  });

  afterEach(fetchMock.restore);


  describe("TripIndexTile", () => {
    it("should render a TripIndexTile component", done => {
      setTimeout(() => {
        expect(wrapper.find(TripIndexTile)).toBePresent();
        done();
      }, 0);
    });
  });

  it('should have the specified initial state', () => {
  expect(wrapper.state()).toEqual({
      upcomingTrips: [],
      pastTrips: [],
      isHidden: true,
    });
  })
});
