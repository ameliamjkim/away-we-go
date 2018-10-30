import TripShowContainer from '../../app/javascript/react/containers/TripShowContainer'
import TripShowTile from '../../app/javascript/react/components/TripShowTile'
import fetchMock from 'fetch-mock'

describe("TripShowContainer", () => {
  let wrapper;
  let data;

  beforeEach(() => {
    jasmineEnzyme();

    data = {
      id: 1,
      name: "Greece",
      start_date: "2018-11-11",
      end_date: "2018-11-20",
      user_id: 1
      }

    fetchMock.get(`/api/v1/trips/${data.id}`, {
      status: 200,
      body: data
    });

    wrapper = mount(
      <TripShowContainer
        params={ { id: 1 } }
      />
    );
  });

  afterEach(fetchMock.restore);

  describe("TripShowTile", () => {
    it("should render a TripShowTile component", done => {
      setTimeout(() => {
        expect(wrapper.find(TripShowTile)).toBePresent();
        done();
      }, 0);
    });
  });

});
