/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateLawFirm = /* GraphQL */ `
  subscription OnCreateLawFirm($filter: ModelSubscriptionLawFirmFilterInput) {
    onCreateLawFirm(filter: $filter) {
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
export const onUpdateLawFirm = /* GraphQL */ `
  subscription OnUpdateLawFirm($filter: ModelSubscriptionLawFirmFilterInput) {
    onUpdateLawFirm(filter: $filter) {
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
export const onDeleteLawFirm = /* GraphQL */ `
  subscription OnDeleteLawFirm($filter: ModelSubscriptionLawFirmFilterInput) {
    onDeleteLawFirm(filter: $filter) {
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
export const onCreateCaseFile = /* GraphQL */ `
  subscription OnCreateCaseFile($filter: ModelSubscriptionCaseFileFilterInput) {
    onCreateCaseFile(filter: $filter) {
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
export const onUpdateCaseFile = /* GraphQL */ `
  subscription OnUpdateCaseFile($filter: ModelSubscriptionCaseFileFilterInput) {
    onUpdateCaseFile(filter: $filter) {
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
export const onDeleteCaseFile = /* GraphQL */ `
  subscription OnDeleteCaseFile($filter: ModelSubscriptionCaseFileFilterInput) {
    onDeleteCaseFile(filter: $filter) {
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
export const onCreateMembership = /* GraphQL */ `
  subscription OnCreateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onCreateMembership(filter: $filter) {
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
export const onUpdateMembership = /* GraphQL */ `
  subscription OnUpdateMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onUpdateMembership(filter: $filter) {
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
export const onDeleteMembership = /* GraphQL */ `
  subscription OnDeleteMembership(
    $filter: ModelSubscriptionMembershipFilterInput
  ) {
    onDeleteMembership(filter: $filter) {
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
export const onCreateMembershipAccess = /* GraphQL */ `
  subscription OnCreateMembershipAccess(
    $filter: ModelSubscriptionMembershipAccessFilterInput
  ) {
    onCreateMembershipAccess(filter: $filter) {
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
export const onUpdateMembershipAccess = /* GraphQL */ `
  subscription OnUpdateMembershipAccess(
    $filter: ModelSubscriptionMembershipAccessFilterInput
  ) {
    onUpdateMembershipAccess(filter: $filter) {
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
export const onDeleteMembershipAccess = /* GraphQL */ `
  subscription OnDeleteMembershipAccess(
    $filter: ModelSubscriptionMembershipAccessFilterInput
  ) {
    onDeleteMembershipAccess(filter: $filter) {
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
export const onCreatePickUpRequest = /* GraphQL */ `
  subscription OnCreatePickUpRequest(
    $filter: ModelSubscriptionPickUpRequestFilterInput
  ) {
    onCreatePickUpRequest(filter: $filter) {
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
export const onUpdatePickUpRequest = /* GraphQL */ `
  subscription OnUpdatePickUpRequest(
    $filter: ModelSubscriptionPickUpRequestFilterInput
  ) {
    onUpdatePickUpRequest(filter: $filter) {
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
export const onDeletePickUpRequest = /* GraphQL */ `
  subscription OnDeletePickUpRequest(
    $filter: ModelSubscriptionPickUpRequestFilterInput
  ) {
    onDeletePickUpRequest(filter: $filter) {
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
export const onCreateBilling = /* GraphQL */ `
  subscription OnCreateBilling($filter: ModelSubscriptionBillingFilterInput) {
    onCreateBilling(filter: $filter) {
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
export const onUpdateBilling = /* GraphQL */ `
  subscription OnUpdateBilling($filter: ModelSubscriptionBillingFilterInput) {
    onUpdateBilling(filter: $filter) {
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
export const onDeleteBilling = /* GraphQL */ `
  subscription OnDeleteBilling($filter: ModelSubscriptionBillingFilterInput) {
    onDeleteBilling(filter: $filter) {
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
export const onCreatePolices = /* GraphQL */ `
  subscription OnCreatePolices($filter: ModelSubscriptionPolicesFilterInput) {
    onCreatePolices(filter: $filter) {
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
export const onUpdatePolices = /* GraphQL */ `
  subscription OnUpdatePolices($filter: ModelSubscriptionPolicesFilterInput) {
    onUpdatePolices(filter: $filter) {
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
export const onDeletePolices = /* GraphQL */ `
  subscription OnDeletePolices($filter: ModelSubscriptionPolicesFilterInput) {
    onDeletePolices(filter: $filter) {
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
