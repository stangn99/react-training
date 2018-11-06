import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test("Should setup remove expense action object", () => {
  const action = removeExpense({id : '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})


test("Should setup edit expense action object", () => {
  const action = editExpense('123abc', {note: 'new note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE', 
    id: '123abc', 
    updates: {
      note: 'new note'
    }
  })
})


test("Show setup add expense action object with provided values", () => {
  const expenseData = {
    description: 'Rent',
    note: 'Last months rent', 
    amount: '109500', 
    createdAt: 10000
  }
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})


test("Show setup add expense action object with default values", () => {
  const defaultExpenseDate = {
    description: '',
    note: '', 
    amount: 0, 
    createdAt: 0
  }

  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...defaultExpenseDate
    }
  })
})


