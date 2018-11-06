import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test("Should setup removeExpense action object", () => {
  const result = removeExpense({id: 'abc123'});
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
})

test("Should setup editExpense action object", () => {
  const result = editExpense('abc123', {note: 'This is a new note'});
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: {
      note: 'This is a new note'
    }
  })
})

test("Should add a new expense with provided values", () => {
  const expenseValues = {
    description: 'This is a new expense', 
    amount: 10000, 
    createdAt: 1900,
    note: 'Rent'
  }
  const result = addExpense(expenseValues);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'This is a new expense', 
      amount: 10000, 
      createdAt: 1900,
      note: 'Rent'      
    }
  })
})