/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      surname
      cell_no
      email
      access
      lawfirm {
        items {
          id
          user_id
          company_name
          company_email
          company_registartion
          address
          postal_code
          cell_no
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      polices {
        items {
          id
          polices_title
          polices_status
          user_id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        surname
        cell_no
        email
        access
        lawfirm {
          nextToken
          __typename
        }
        polices {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLawFirm = /* GraphQL */ `
  query GetLawFirm($id: ID!) {
    getLawFirm(id: $id) {
      id
      user_id
      company_name
      company_email
      company_registartion
      address
      postal_code
      cell_no
      casefile {
        items {
          id
          case_file_name
          case_file_type
          law_firm_id
          file_size
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      membershipaccess {
        id
        access_type
        membership_price
        law_firm_id
        membership_id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listLawFirms = /* GraphQL */ `
  query ListLawFirms(
    $filter: ModelLawFirmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLawFirms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        company_name
        company_email
        company_registartion
        address
        postal_code
        cell_no
        casefile {
          nextToken
          __typename
        }
        membershipaccess {
          id
          access_type
          membership_price
          law_firm_id
          membership_id
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCaseFile = /* GraphQL */ `
  query GetCaseFile($id: ID!) {
    getCaseFile(id: $id) {
      id
      case_file_name
      case_file_type
      law_firm_id
      file_size
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCaseFiles = /* GraphQL */ `
  query ListCaseFiles(
    $filter: ModelCaseFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaseFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        case_file_name
        case_file_type
        law_firm_id
        file_size
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembership = /* GraphQL */ `
  query GetMembership($id: ID!) {
    getMembership(id: $id) {
      id
      membership_type
      membership_price
      membership_data
      membershipaccess {
        id
        access_type
        membership_price
        law_firm_id
        membership_id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMemberships = /* GraphQL */ `
  query ListMemberships(
    $filter: ModelMembershipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberships(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        membership_type
        membership_price
        membership_data
        membershipaccess {
          id
          access_type
          membership_price
          law_firm_id
          membership_id
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMembershipAccess = /* GraphQL */ `
  query GetMembershipAccess($id: ID!) {
    getMembershipAccess(id: $id) {
      id
      access_type
      membership_price
      law_firm_id
      membership_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMembershipAccesses = /* GraphQL */ `
  query ListMembershipAccesses(
    $filter: ModelMembershipAccessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembershipAccesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        access_type
        membership_price
        law_firm_id
        membership_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPickUpRequest = /* GraphQL */ `
  query GetPickUpRequest($id: ID!) {
    getPickUpRequest(id: $id) {
      id
      request_type
      request_delivery_state
      law_firm_id
      recipient_full_names
      recipient_cell_no
      destination_address
      request_status
      lat
      lng
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPickUpRequests = /* GraphQL */ `
  query ListPickUpRequests(
    $filter: ModelPickUpRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPickUpRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        request_type
        request_delivery_state
        law_firm_id
        recipient_full_names
        recipient_cell_no
        destination_address
        request_status
        lat
        lng
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBilling = /* GraphQL */ `
  query GetBilling($id: ID!) {
    getBilling(id: $id) {
      id
      amount
      month_of_billing
      law_firm_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBillings = /* GraphQL */ `
  query ListBillings(
    $filter: ModelBillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBillings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        month_of_billing
        law_firm_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPolices = /* GraphQL */ `
  query GetPolices($id: ID!) {
    getPolices(id: $id) {
      id
      polices_title
      polices_status
      user_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPolices = /* GraphQL */ `
  query ListPolices(
    $filter: ModelPolicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPolices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        polices_title
        polices_status
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const lawFirmsByUser_id = /* GraphQL */ `
  query LawFirmsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLawFirmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lawFirmsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user_id
        company_name
        company_email
        company_registartion
        address
        postal_code
        cell_no
        casefile {
          nextToken
          __typename
        }
        membershipaccess {
          id
          access_type
          membership_price
          law_firm_id
          membership_id
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const caseFilesByLaw_firm_id = /* GraphQL */ `
  query CaseFilesByLaw_firm_id(
    $law_firm_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaseFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caseFilesByLaw_firm_id(
      law_firm_id: $law_firm_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        case_file_name
        case_file_type
        law_firm_id
        file_size
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const pickUpRequestsByLaw_firm_id = /* GraphQL */ `
  query PickUpRequestsByLaw_firm_id(
    $law_firm_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPickUpRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pickUpRequestsByLaw_firm_id(
      law_firm_id: $law_firm_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        request_type
        request_delivery_state
        law_firm_id
        recipient_full_names
        recipient_cell_no
        destination_address
        request_status
        lat
        lng
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const billingsByLaw_firm_id = /* GraphQL */ `
  query BillingsByLaw_firm_id(
    $law_firm_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBillingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    billingsByLaw_firm_id(
      law_firm_id: $law_firm_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        amount
        month_of_billing
        law_firm_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const policesByUser_id = /* GraphQL */ `
  query PolicesByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPolicesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    policesByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        polices_title
        polices_status
        user_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
