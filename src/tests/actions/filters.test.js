import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
//,  sortByDate sortByAmount

test("Should generate setStartDate action object", () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
});

test("Should gerenate setEndDate action object", () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
});

test("Should set a text filter", () => {
  const result = setTextFilter("beer");
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER', 
    text: 'beer'
  })
})

test("Should test text filter when no value is provided", () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER', 
    text: ''
  })
})

test("Should generate action object for sortByDate", () => {
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'})
});

test("Should generate action object for sortByAmount", () => {
  expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT'})
});


