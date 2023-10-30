/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlantStatus = /* GraphQL */ `
  subscription OnCreatePlantStatus(
    $filter: ModelSubscriptionPlantStatusFilterInput
  ) {
    onCreatePlantStatus(filter: $filter) {
      id
      moisture
      temperature
      time
      watered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePlantStatus = /* GraphQL */ `
  subscription OnUpdatePlantStatus(
    $filter: ModelSubscriptionPlantStatusFilterInput
  ) {
    onUpdatePlantStatus(filter: $filter) {
      id
      moisture
      temperature
      time
      watered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePlantStatus = /* GraphQL */ `
  subscription OnDeletePlantStatus(
    $filter: ModelSubscriptionPlantStatusFilterInput
  ) {
    onDeletePlantStatus(filter: $filter) {
      id
      moisture
      temperature
      time
      watered
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateToDo = /* GraphQL */ `
  subscription OnCreateToDo($filter: ModelSubscriptionToDoFilterInput) {
    onCreateToDo(filter: $filter) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateToDo = /* GraphQL */ `
  subscription OnUpdateToDo($filter: ModelSubscriptionToDoFilterInput) {
    onUpdateToDo(filter: $filter) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteToDo = /* GraphQL */ `
  subscription OnDeleteToDo($filter: ModelSubscriptionToDoFilterInput) {
    onDeleteToDo(filter: $filter) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
