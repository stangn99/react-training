import filterReducer from '../../reducers/filters';
import moment from 'moment';

const state = {

}

test("Test should setup default filter values", () => {
  const state = filterReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})


test("Test the case for the SORT BY AMOUNT filter", () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount')
})


test("Test should setSortBy to date", () => {
  const currentState = {
    text: '', 
    startDate: undefined, 
    endDate: undefined, 
    sortBy: 'amount'
  }
  const state = filterReducer(currentState, {type: 'SORT_BY_DATE'}); 
  expect(state.sortBy).toBe('date')
})

test("Test the SET TEXT FILTER reducer", () => {
  const text = "Hello";
  const action = {
    type: 'SET_TEXT_FILTER', 
    text
  }
  const result = filterReducer(undefined, action);
  expect(result.text).toBe(text)
})

test("Test should set start date filter", () => { 
  const startDate = moment().valueOf();
  const action = {
    type: 'SET_START_DATE', 
    startDate
  }
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate)
})

test("Test should set end date filter", () => { 
  const endDate = moment().subtract(8, 'days').valueOf();
  const action = {
    type: 'SET_END_DATE', 
    endDate
  }
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate)
})