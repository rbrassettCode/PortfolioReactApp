/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createToDo = /* GraphQL */ `
  mutation CreateToDo(
    $input: CreateToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    createToDo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateToDo = /* GraphQL */ `
  mutation UpdateToDo(
    $input: UpdateToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    updateToDo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteToDo = /* GraphQL */ `
  mutation DeleteToDo(
    $input: DeleteToDoInput!
    $condition: ModelToDoConditionInput
  ) {
    deleteToDo(input: $input, condition: $condition) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      status
      description
      start_date
      expected_end_date
      end_date
      priority
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      status
      description
      start_date
      expected_end_date
      end_date
      priority
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      status
      description
      start_date
      expected_end_date
      end_date
      priority
      createdAt
      updatedAt
      __typename
    }
  }
`;
