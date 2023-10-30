/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlantStatus = /* GraphQL */ `
  query GetPlantStatus($id: ID!) {
    getPlantStatus(id: $id) {
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
export const listPlantStatuses = /* GraphQL */ `
  query ListPlantStatuses(
    $filter: ModelPlantStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moisture
        temperature
        time
        watered
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getToDo = /* GraphQL */ `
  query GetToDo($id: ID!) {
    getToDo(id: $id) {
      id
      title
      completed
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listToDos = /* GraphQL */ `
  query ListToDos(
    $filter: ModelToDoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listToDos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        completed
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
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
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
