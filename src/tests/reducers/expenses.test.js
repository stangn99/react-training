import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Test the default reducer state (default redux state)
test('Testing the default reducer state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

// Test removing an expense when ID matches
test('Should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE', 
    id: expenses[1].id
  }
  const result = expensesReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[2]])
})

// Test removing and expense with unknown ID
test("Should NOT remove expense if ID is not found", () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 4
  }
  const result = expensesReducer(expenses, action)
  expect(result).toEqual(expenses)
})

// Test adding a new expense
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

// Test editing a new expense that has a matching ID
test("Should edit an expense if the ID is found", () => {
  const action = {
    type: 'EDIT_EXPENSE', 
    id: expenses[0].id, 
    updates: {
      description: 'Starburst Candy'
    }
  }
  const result = expensesReducer(expenses, action);
  expect(result[0].description).toBe('Starburst Candy');
})


// Test editing a new expense that does not have a matching ID
test("Should edit an expense if the ID is found", () => {
  const action = {
    type: 'EDIT_EXPENSE', 
    id: 6, 
    updates: {
      description: 'Starburst Candy'
    }
  }
  const result = expensesReducer(expenses, action);
  expect(result).toEqual(expenses)
})