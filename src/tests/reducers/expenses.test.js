import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Testing the default reducer state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE', 
    id: expenses[1].id
  }
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[2]])
})

test("Should NOT remove expense if ID is not found", () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual(expenses)
})


test("Should add a new expense", () => {
  const action = {
    type: 'ADD_EXPENSE', 
    expense: {
      id: '4', 
      description: 'Sugar',
      amount: 995,
      createdAt: 0,
      note:''
    }
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual([...expenses, action.expense])
})

