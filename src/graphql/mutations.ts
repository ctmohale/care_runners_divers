/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLawFirm = /* GraphQL */ `
  mutation CreateLawFirm(
    $input: CreateLawFirmInput!
    $condition: ModelLawFirmConditionInput
  ) {
    createLawFirm(input: $input, condition: $condition) {
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
export const updateLawFirm = /* GraphQL */ `
  mutation UpdateLawFirm(
    $input: UpdateLawFirmInput!
    $condition: ModelLawFirmConditionInput
  ) {
    updateLawFirm(input: $input, condition: $condition) {
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
export const deleteLawFirm = /* GraphQL */ `
  mutation DeleteLawFirm(
    $input: DeleteLawFirmInput!
    $condition: ModelLawFirmConditionInput
  ) {
    deleteLawFirm(input: $input, condition: $condition) {
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
export const createCaseFile = /* GraphQL */ `
  mutation CreateCaseFile(
    $input: CreateCaseFileInput!
    $condition: ModelCaseFileConditionInput
  ) {
    createCaseFile(input: $input, condition: $condition) {
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
export const updateCaseFile = /* GraphQL */ `
  mutation UpdateCaseFile(
    $input: UpdateCaseFileInput!
    $condition: ModelCaseFileConditionInput
  ) {
    updateCaseFile(input: $input, condition: $condition) {
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
export const deleteCaseFile = /* GraphQL */ `
  mutation DeleteCaseFile(
    $input: DeleteCaseFileInput!
    $condition: ModelCaseFileConditionInput
  ) {
    deleteCaseFile(input: $input, condition: $condition) {
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
export const createMembership = /* GraphQL */ `
  mutation CreateMembership(
    $input: CreateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    createMembership(input: $input, condition: $condition) {
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
export const updateMembership = /* GraphQL */ `
  mutation UpdateMembership(
    $input: UpdateMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    updateMembership(input: $input, condition: $condition) {
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
export const deleteMembership = /* GraphQL */ `
  mutation DeleteMembership(
    $input: DeleteMembershipInput!
    $condition: ModelMembershipConditionInput
  ) {
    deleteMembership(input: $input, condition: $condition) {
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
export const createMembershipAccess = /* GraphQL */ `
  mutation CreateMembershipAccess(
    $input: CreateMembershipAccessInput!
    $condition: ModelMembershipAccessConditionInput
  ) {
    createMembershipAccess(input: $input, condition: $condition) {
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
export const updateMembershipAccess = /* GraphQL */ `
  mutation UpdateMembershipAccess(
    $input: UpdateMembershipAccessInput!
    $condition: ModelMembershipAccessConditionInput
  ) {
    updateMembershipAccess(input: $input, condition: $condition) {
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
export const deleteMembershipAccess = /* GraphQL */ `
  mutation DeleteMembershipAccess(
    $input: DeleteMembershipAccessInput!
    $condition: ModelMembershipAccessConditionInput
  ) {
    deleteMembershipAccess(input: $input, condition: $condition) {
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
export const createPickUpRequest = /* GraphQL */ `
  mutation CreatePickUpRequest(
    $input: CreatePickUpRequestInput!
    $condition: ModelPickUpRequestConditionInput
  ) {
    createPickUpRequest(input: $input, condition: $condition) {
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
export const updatePickUpRequest = /* GraphQL */ `
  mutation UpdatePickUpRequest(
    $input: UpdatePickUpRequestInput!
    $condition: ModelPickUpRequestConditionInput
  ) {
    updatePickUpRequest(input: $input, condition: $condition) {
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
export const deletePickUpRequest = /* GraphQL */ `
  mutation DeletePickUpRequest(
    $input: DeletePickUpRequestInput!
    $condition: ModelPickUpRequestConditionInput
  ) {
    deletePickUpRequest(input: $input, condition: $condition) {
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
export const createBilling = /* GraphQL */ `
  mutation CreateBilling(
    $input: CreateBillingInput!
    $condition: ModelBillingConditionInput
  ) {
    createBilling(input: $input, condition: $condition) {
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
export const updateBilling = /* GraphQL */ `
  mutation UpdateBilling(
    $input: UpdateBillingInput!
    $condition: ModelBillingConditionInput
  ) {
    updateBilling(input: $input, condition: $condition) {
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
export const deleteBilling = /* GraphQL */ `
  mutation DeleteBilling(
    $input: DeleteBillingInput!
    $condition: ModelBillingConditionInput
  ) {
    deleteBilling(input: $input, condition: $condition) {
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
export const createPolices = /* GraphQL */ `
  mutation CreatePolices(
    $input: CreatePolicesInput!
    $condition: ModelPolicesConditionInput
  ) {
    createPolices(input: $input, condition: $condition) {
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
export const updatePolices = /* GraphQL */ `
  mutation UpdatePolices(
    $input: UpdatePolicesInput!
    $condition: ModelPolicesConditionInput
  ) {
    updatePolices(input: $input, condition: $condition) {
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
export const deletePolices = /* GraphQL */ `
  mutation DeletePolices(
    $input: DeletePolicesInput!
    $condition: ModelPolicesConditionInput
  ) {
    deletePolices(input: $input, condition: $condition) {
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
