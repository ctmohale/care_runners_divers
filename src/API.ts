/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  surname?: string | null,
  cell_no?: string | null,
  email?: string | null,
  access?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  cell_no?: ModelStringInput | null,
  email?: ModelStringInput | null,
  access?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  surname?: string | null,
  cell_no?: string | null,
  email?: string | null,
  access?: string | null,
  lawfirm?: ModelLawFirmConnection | null,
  polices?: ModelPolicesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLawFirmConnection = {
  __typename: "ModelLawFirmConnection",
  items:  Array<LawFirm | null >,
  nextToken?: string | null,
};

export type LawFirm = {
  __typename: "LawFirm",
  id: string,
  user_id: string,
  company_name?: string | null,
  company_email?: string | null,
  company_registartion?: string | null,
  address?: string | null,
  postal_code?: string | null,
  cell_no?: string | null,
  casefile?: ModelCaseFileConnection | null,
  membershipaccess?: MembershipAccess | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCaseFileConnection = {
  __typename: "ModelCaseFileConnection",
  items:  Array<CaseFile | null >,
  nextToken?: string | null,
};

export type CaseFile = {
  __typename: "CaseFile",
  id: string,
  case_file_name?: string | null,
  case_file_type?: string | null,
  law_firm_id: string,
  file_size?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type MembershipAccess = {
  __typename: "MembershipAccess",
  id: string,
  access_type?: string | null,
  membership_price?: string | null,
  law_firm_id?: string | null,
  membership_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPolicesConnection = {
  __typename: "ModelPolicesConnection",
  items:  Array<Polices | null >,
  nextToken?: string | null,
};

export type Polices = {
  __typename: "Polices",
  id: string,
  polices_title?: string | null,
  polices_status?: string | null,
  user_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  surname?: string | null,
  cell_no?: string | null,
  email?: string | null,
  access?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateLawFirmInput = {
  id?: string | null,
  user_id: string,
  company_name?: string | null,
  company_email?: string | null,
  company_registartion?: string | null,
  address?: string | null,
  postal_code?: string | null,
  cell_no?: string | null,
};

export type ModelLawFirmConditionInput = {
  user_id?: ModelIDInput | null,
  company_name?: ModelStringInput | null,
  company_email?: ModelStringInput | null,
  company_registartion?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  cell_no?: ModelStringInput | null,
  and?: Array< ModelLawFirmConditionInput | null > | null,
  or?: Array< ModelLawFirmConditionInput | null > | null,
  not?: ModelLawFirmConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLawFirmInput = {
  id: string,
  user_id?: string | null,
  company_name?: string | null,
  company_email?: string | null,
  company_registartion?: string | null,
  address?: string | null,
  postal_code?: string | null,
  cell_no?: string | null,
};

export type DeleteLawFirmInput = {
  id: string,
};

export type CreateCaseFileInput = {
  id?: string | null,
  case_file_name?: string | null,
  case_file_type?: string | null,
  law_firm_id: string,
  file_size?: string | null,
};

export type ModelCaseFileConditionInput = {
  case_file_name?: ModelStringInput | null,
  case_file_type?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  file_size?: ModelStringInput | null,
  and?: Array< ModelCaseFileConditionInput | null > | null,
  or?: Array< ModelCaseFileConditionInput | null > | null,
  not?: ModelCaseFileConditionInput | null,
};

export type UpdateCaseFileInput = {
  id: string,
  case_file_name?: string | null,
  case_file_type?: string | null,
  law_firm_id?: string | null,
  file_size?: string | null,
};

export type DeleteCaseFileInput = {
  id: string,
};

export type CreateMembershipInput = {
  id?: string | null,
  membership_type?: string | null,
  membership_price?: string | null,
  membership_data?: string | null,
};

export type ModelMembershipConditionInput = {
  membership_type?: ModelStringInput | null,
  membership_price?: ModelStringInput | null,
  membership_data?: ModelStringInput | null,
  and?: Array< ModelMembershipConditionInput | null > | null,
  or?: Array< ModelMembershipConditionInput | null > | null,
  not?: ModelMembershipConditionInput | null,
};

export type Membership = {
  __typename: "Membership",
  id: string,
  membership_type?: string | null,
  membership_price?: string | null,
  membership_data?: string | null,
  membershipaccess?: MembershipAccess | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMembershipInput = {
  id: string,
  membership_type?: string | null,
  membership_price?: string | null,
  membership_data?: string | null,
};

export type DeleteMembershipInput = {
  id: string,
};

export type CreateMembershipAccessInput = {
  id?: string | null,
  access_type?: string | null,
  membership_price?: string | null,
  law_firm_id?: string | null,
  membership_id?: string | null,
};

export type ModelMembershipAccessConditionInput = {
  access_type?: ModelStringInput | null,
  membership_price?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  membership_id?: ModelIDInput | null,
  and?: Array< ModelMembershipAccessConditionInput | null > | null,
  or?: Array< ModelMembershipAccessConditionInput | null > | null,
  not?: ModelMembershipAccessConditionInput | null,
};

export type UpdateMembershipAccessInput = {
  id: string,
  access_type?: string | null,
  membership_price?: string | null,
  law_firm_id?: string | null,
  membership_id?: string | null,
};

export type DeleteMembershipAccessInput = {
  id: string,
};

export type CreatePickUpRequestInput = {
  id?: string | null,
  request_type?: string | null,
  request_delivery_state?: string | null,
  law_firm_id: string,
  recipient_full_names?: string | null,
  recipient_cell_no?: string | null,
  destination_address?: string | null,
  request_status?: string | null,
  lat?: string | null,
  lng?: string | null,
};

export type ModelPickUpRequestConditionInput = {
  request_type?: ModelStringInput | null,
  request_delivery_state?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  recipient_full_names?: ModelStringInput | null,
  recipient_cell_no?: ModelStringInput | null,
  destination_address?: ModelStringInput | null,
  request_status?: ModelStringInput | null,
  lat?: ModelStringInput | null,
  lng?: ModelStringInput | null,
  and?: Array< ModelPickUpRequestConditionInput | null > | null,
  or?: Array< ModelPickUpRequestConditionInput | null > | null,
  not?: ModelPickUpRequestConditionInput | null,
};

export type PickUpRequest = {
  __typename: "PickUpRequest",
  id: string,
  request_type?: string | null,
  request_delivery_state?: string | null,
  law_firm_id: string,
  recipient_full_names?: string | null,
  recipient_cell_no?: string | null,
  destination_address?: string | null,
  request_status?: string | null,
  lat?: string | null,
  lng?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePickUpRequestInput = {
  id: string,
  request_type?: string | null,
  request_delivery_state?: string | null,
  law_firm_id?: string | null,
  recipient_full_names?: string | null,
  recipient_cell_no?: string | null,
  destination_address?: string | null,
  request_status?: string | null,
  lat?: string | null,
  lng?: string | null,
};

export type DeletePickUpRequestInput = {
  id: string,
};

export type CreateBillingInput = {
  id?: string | null,
  amount?: string | null,
  month_of_billing?: string | null,
  law_firm_id: string,
};

export type ModelBillingConditionInput = {
  amount?: ModelStringInput | null,
  month_of_billing?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  and?: Array< ModelBillingConditionInput | null > | null,
  or?: Array< ModelBillingConditionInput | null > | null,
  not?: ModelBillingConditionInput | null,
};

export type Billing = {
  __typename: "Billing",
  id: string,
  amount?: string | null,
  month_of_billing?: string | null,
  law_firm_id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBillingInput = {
  id: string,
  amount?: string | null,
  month_of_billing?: string | null,
  law_firm_id?: string | null,
};

export type DeleteBillingInput = {
  id: string,
};

export type CreatePolicesInput = {
  id?: string | null,
  polices_title?: string | null,
  polices_status?: string | null,
  user_id: string,
};

export type ModelPolicesConditionInput = {
  polices_title?: ModelStringInput | null,
  polices_status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelPolicesConditionInput | null > | null,
  or?: Array< ModelPolicesConditionInput | null > | null,
  not?: ModelPolicesConditionInput | null,
};

export type UpdatePolicesInput = {
  id: string,
  polices_title?: string | null,
  polices_status?: string | null,
  user_id?: string | null,
};

export type DeletePolicesInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  surname?: ModelStringInput | null,
  cell_no?: ModelStringInput | null,
  email?: ModelStringInput | null,
  access?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelLawFirmFilterInput = {
  id?: ModelIDInput | null,
  user_id?: ModelIDInput | null,
  company_name?: ModelStringInput | null,
  company_email?: ModelStringInput | null,
  company_registartion?: ModelStringInput | null,
  address?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  cell_no?: ModelStringInput | null,
  and?: Array< ModelLawFirmFilterInput | null > | null,
  or?: Array< ModelLawFirmFilterInput | null > | null,
  not?: ModelLawFirmFilterInput | null,
};

export type ModelCaseFileFilterInput = {
  id?: ModelIDInput | null,
  case_file_name?: ModelStringInput | null,
  case_file_type?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  file_size?: ModelStringInput | null,
  and?: Array< ModelCaseFileFilterInput | null > | null,
  or?: Array< ModelCaseFileFilterInput | null > | null,
  not?: ModelCaseFileFilterInput | null,
};

export type ModelMembershipFilterInput = {
  id?: ModelIDInput | null,
  membership_type?: ModelStringInput | null,
  membership_price?: ModelStringInput | null,
  membership_data?: ModelStringInput | null,
  and?: Array< ModelMembershipFilterInput | null > | null,
  or?: Array< ModelMembershipFilterInput | null > | null,
  not?: ModelMembershipFilterInput | null,
};

export type ModelMembershipConnection = {
  __typename: "ModelMembershipConnection",
  items:  Array<Membership | null >,
  nextToken?: string | null,
};

export type ModelMembershipAccessFilterInput = {
  id?: ModelIDInput | null,
  access_type?: ModelStringInput | null,
  membership_price?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  membership_id?: ModelIDInput | null,
  and?: Array< ModelMembershipAccessFilterInput | null > | null,
  or?: Array< ModelMembershipAccessFilterInput | null > | null,
  not?: ModelMembershipAccessFilterInput | null,
};

export type ModelMembershipAccessConnection = {
  __typename: "ModelMembershipAccessConnection",
  items:  Array<MembershipAccess | null >,
  nextToken?: string | null,
};

export type ModelPickUpRequestFilterInput = {
  id?: ModelIDInput | null,
  request_type?: ModelStringInput | null,
  request_delivery_state?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  recipient_full_names?: ModelStringInput | null,
  recipient_cell_no?: ModelStringInput | null,
  destination_address?: ModelStringInput | null,
  request_status?: ModelStringInput | null,
  lat?: ModelStringInput | null,
  lng?: ModelStringInput | null,
  and?: Array< ModelPickUpRequestFilterInput | null > | null,
  or?: Array< ModelPickUpRequestFilterInput | null > | null,
  not?: ModelPickUpRequestFilterInput | null,
};

export type ModelPickUpRequestConnection = {
  __typename: "ModelPickUpRequestConnection",
  items:  Array<PickUpRequest | null >,
  nextToken?: string | null,
};

export type ModelBillingFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelStringInput | null,
  month_of_billing?: ModelStringInput | null,
  law_firm_id?: ModelIDInput | null,
  and?: Array< ModelBillingFilterInput | null > | null,
  or?: Array< ModelBillingFilterInput | null > | null,
  not?: ModelBillingFilterInput | null,
};

export type ModelBillingConnection = {
  __typename: "ModelBillingConnection",
  items:  Array<Billing | null >,
  nextToken?: string | null,
};

export type ModelPolicesFilterInput = {
  id?: ModelIDInput | null,
  polices_title?: ModelStringInput | null,
  polices_status?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  and?: Array< ModelPolicesFilterInput | null > | null,
  or?: Array< ModelPolicesFilterInput | null > | null,
  not?: ModelPolicesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  surname?: ModelSubscriptionStringInput | null,
  cell_no?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  access?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLawFirmFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  company_name?: ModelSubscriptionStringInput | null,
  company_email?: ModelSubscriptionStringInput | null,
  company_registartion?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  postal_code?: ModelSubscriptionStringInput | null,
  cell_no?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLawFirmFilterInput | null > | null,
  or?: Array< ModelSubscriptionLawFirmFilterInput | null > | null,
};

export type ModelSubscriptionCaseFileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  case_file_name?: ModelSubscriptionStringInput | null,
  case_file_type?: ModelSubscriptionStringInput | null,
  law_firm_id?: ModelSubscriptionIDInput | null,
  file_size?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCaseFileFilterInput | null > | null,
  or?: Array< ModelSubscriptionCaseFileFilterInput | null > | null,
};

export type ModelSubscriptionMembershipFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  membership_type?: ModelSubscriptionStringInput | null,
  membership_price?: ModelSubscriptionStringInput | null,
  membership_data?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMembershipFilterInput | null > | null,
  or?: Array< ModelSubscriptionMembershipFilterInput | null > | null,
};

export type ModelSubscriptionMembershipAccessFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  access_type?: ModelSubscriptionStringInput | null,
  membership_price?: ModelSubscriptionStringInput | null,
  law_firm_id?: ModelSubscriptionIDInput | null,
  membership_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionMembershipAccessFilterInput | null > | null,
  or?: Array< ModelSubscriptionMembershipAccessFilterInput | null > | null,
};

export type ModelSubscriptionPickUpRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  request_type?: ModelSubscriptionStringInput | null,
  request_delivery_state?: ModelSubscriptionStringInput | null,
  law_firm_id?: ModelSubscriptionIDInput | null,
  recipient_full_names?: ModelSubscriptionStringInput | null,
  recipient_cell_no?: ModelSubscriptionStringInput | null,
  destination_address?: ModelSubscriptionStringInput | null,
  request_status?: ModelSubscriptionStringInput | null,
  lat?: ModelSubscriptionStringInput | null,
  lng?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPickUpRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionPickUpRequestFilterInput | null > | null,
};

export type ModelSubscriptionBillingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionStringInput | null,
  month_of_billing?: ModelSubscriptionStringInput | null,
  law_firm_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBillingFilterInput | null > | null,
  or?: Array< ModelSubscriptionBillingFilterInput | null > | null,
};

export type ModelSubscriptionPolicesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  polices_title?: ModelSubscriptionStringInput | null,
  polices_status?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPolicesFilterInput | null > | null,
  or?: Array< ModelSubscriptionPolicesFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLawFirmMutationVariables = {
  input: CreateLawFirmInput,
  condition?: ModelLawFirmConditionInput | null,
};

export type CreateLawFirmMutation = {
  createLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLawFirmMutationVariables = {
  input: UpdateLawFirmInput,
  condition?: ModelLawFirmConditionInput | null,
};

export type UpdateLawFirmMutation = {
  updateLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLawFirmMutationVariables = {
  input: DeleteLawFirmInput,
  condition?: ModelLawFirmConditionInput | null,
};

export type DeleteLawFirmMutation = {
  deleteLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCaseFileMutationVariables = {
  input: CreateCaseFileInput,
  condition?: ModelCaseFileConditionInput | null,
};

export type CreateCaseFileMutation = {
  createCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCaseFileMutationVariables = {
  input: UpdateCaseFileInput,
  condition?: ModelCaseFileConditionInput | null,
};

export type UpdateCaseFileMutation = {
  updateCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCaseFileMutationVariables = {
  input: DeleteCaseFileInput,
  condition?: ModelCaseFileConditionInput | null,
};

export type DeleteCaseFileMutation = {
  deleteCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMembershipMutationVariables = {
  input: CreateMembershipInput,
  condition?: ModelMembershipConditionInput | null,
};

export type CreateMembershipMutation = {
  createMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembershipMutationVariables = {
  input: UpdateMembershipInput,
  condition?: ModelMembershipConditionInput | null,
};

export type UpdateMembershipMutation = {
  updateMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembershipMutationVariables = {
  input: DeleteMembershipInput,
  condition?: ModelMembershipConditionInput | null,
};

export type DeleteMembershipMutation = {
  deleteMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMembershipAccessMutationVariables = {
  input: CreateMembershipAccessInput,
  condition?: ModelMembershipAccessConditionInput | null,
};

export type CreateMembershipAccessMutation = {
  createMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMembershipAccessMutationVariables = {
  input: UpdateMembershipAccessInput,
  condition?: ModelMembershipAccessConditionInput | null,
};

export type UpdateMembershipAccessMutation = {
  updateMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMembershipAccessMutationVariables = {
  input: DeleteMembershipAccessInput,
  condition?: ModelMembershipAccessConditionInput | null,
};

export type DeleteMembershipAccessMutation = {
  deleteMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePickUpRequestMutationVariables = {
  input: CreatePickUpRequestInput,
  condition?: ModelPickUpRequestConditionInput | null,
};

export type CreatePickUpRequestMutation = {
  createPickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePickUpRequestMutationVariables = {
  input: UpdatePickUpRequestInput,
  condition?: ModelPickUpRequestConditionInput | null,
};

export type UpdatePickUpRequestMutation = {
  updatePickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePickUpRequestMutationVariables = {
  input: DeletePickUpRequestInput,
  condition?: ModelPickUpRequestConditionInput | null,
};

export type DeletePickUpRequestMutation = {
  deletePickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBillingMutationVariables = {
  input: CreateBillingInput,
  condition?: ModelBillingConditionInput | null,
};

export type CreateBillingMutation = {
  createBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBillingMutationVariables = {
  input: UpdateBillingInput,
  condition?: ModelBillingConditionInput | null,
};

export type UpdateBillingMutation = {
  updateBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBillingMutationVariables = {
  input: DeleteBillingInput,
  condition?: ModelBillingConditionInput | null,
};

export type DeleteBillingMutation = {
  deleteBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePolicesMutationVariables = {
  input: CreatePolicesInput,
  condition?: ModelPolicesConditionInput | null,
};

export type CreatePolicesMutation = {
  createPolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePolicesMutationVariables = {
  input: UpdatePolicesInput,
  condition?: ModelPolicesConditionInput | null,
};

export type UpdatePolicesMutation = {
  updatePolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePolicesMutationVariables = {
  input: DeletePolicesInput,
  condition?: ModelPolicesConditionInput | null,
};

export type DeletePolicesMutation = {
  deletePolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      surname?: string | null,
      cell_no?: string | null,
      email?: string | null,
      access?: string | null,
      lawfirm?:  {
        __typename: "ModelLawFirmConnection",
        nextToken?: string | null,
      } | null,
      polices?:  {
        __typename: "ModelPolicesConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLawFirmQueryVariables = {
  id: string,
};

export type GetLawFirmQuery = {
  getLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLawFirmsQueryVariables = {
  filter?: ModelLawFirmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLawFirmsQuery = {
  listLawFirms?:  {
    __typename: "ModelLawFirmConnection",
    items:  Array< {
      __typename: "LawFirm",
      id: string,
      user_id: string,
      company_name?: string | null,
      company_email?: string | null,
      company_registartion?: string | null,
      address?: string | null,
      postal_code?: string | null,
      cell_no?: string | null,
      casefile?:  {
        __typename: "ModelCaseFileConnection",
        nextToken?: string | null,
      } | null,
      membershipaccess?:  {
        __typename: "MembershipAccess",
        id: string,
        access_type?: string | null,
        membership_price?: string | null,
        law_firm_id?: string | null,
        membership_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCaseFileQueryVariables = {
  id: string,
};

export type GetCaseFileQuery = {
  getCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCaseFilesQueryVariables = {
  filter?: ModelCaseFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCaseFilesQuery = {
  listCaseFiles?:  {
    __typename: "ModelCaseFileConnection",
    items:  Array< {
      __typename: "CaseFile",
      id: string,
      case_file_name?: string | null,
      case_file_type?: string | null,
      law_firm_id: string,
      file_size?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMembershipQueryVariables = {
  id: string,
};

export type GetMembershipQuery = {
  getMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembershipsQueryVariables = {
  filter?: ModelMembershipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembershipsQuery = {
  listMemberships?:  {
    __typename: "ModelMembershipConnection",
    items:  Array< {
      __typename: "Membership",
      id: string,
      membership_type?: string | null,
      membership_price?: string | null,
      membership_data?: string | null,
      membershipaccess?:  {
        __typename: "MembershipAccess",
        id: string,
        access_type?: string | null,
        membership_price?: string | null,
        law_firm_id?: string | null,
        membership_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMembershipAccessQueryVariables = {
  id: string,
};

export type GetMembershipAccessQuery = {
  getMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMembershipAccessesQueryVariables = {
  filter?: ModelMembershipAccessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMembershipAccessesQuery = {
  listMembershipAccesses?:  {
    __typename: "ModelMembershipAccessConnection",
    items:  Array< {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPickUpRequestQueryVariables = {
  id: string,
};

export type GetPickUpRequestQuery = {
  getPickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPickUpRequestsQueryVariables = {
  filter?: ModelPickUpRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPickUpRequestsQuery = {
  listPickUpRequests?:  {
    __typename: "ModelPickUpRequestConnection",
    items:  Array< {
      __typename: "PickUpRequest",
      id: string,
      request_type?: string | null,
      request_delivery_state?: string | null,
      law_firm_id: string,
      recipient_full_names?: string | null,
      recipient_cell_no?: string | null,
      destination_address?: string | null,
      request_status?: string | null,
      lat?: string | null,
      lng?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBillingQueryVariables = {
  id: string,
};

export type GetBillingQuery = {
  getBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBillingsQueryVariables = {
  filter?: ModelBillingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBillingsQuery = {
  listBillings?:  {
    __typename: "ModelBillingConnection",
    items:  Array< {
      __typename: "Billing",
      id: string,
      amount?: string | null,
      month_of_billing?: string | null,
      law_firm_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPolicesQueryVariables = {
  id: string,
};

export type GetPolicesQuery = {
  getPolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPolicesQueryVariables = {
  filter?: ModelPolicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPolicesQuery = {
  listPolices?:  {
    __typename: "ModelPolicesConnection",
    items:  Array< {
      __typename: "Polices",
      id: string,
      polices_title?: string | null,
      polices_status?: string | null,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LawFirmsByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLawFirmFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LawFirmsByUser_idQuery = {
  lawFirmsByUser_id?:  {
    __typename: "ModelLawFirmConnection",
    items:  Array< {
      __typename: "LawFirm",
      id: string,
      user_id: string,
      company_name?: string | null,
      company_email?: string | null,
      company_registartion?: string | null,
      address?: string | null,
      postal_code?: string | null,
      cell_no?: string | null,
      casefile?:  {
        __typename: "ModelCaseFileConnection",
        nextToken?: string | null,
      } | null,
      membershipaccess?:  {
        __typename: "MembershipAccess",
        id: string,
        access_type?: string | null,
        membership_price?: string | null,
        law_firm_id?: string | null,
        membership_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CaseFilesByLaw_firm_idQueryVariables = {
  law_firm_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCaseFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CaseFilesByLaw_firm_idQuery = {
  caseFilesByLaw_firm_id?:  {
    __typename: "ModelCaseFileConnection",
    items:  Array< {
      __typename: "CaseFile",
      id: string,
      case_file_name?: string | null,
      case_file_type?: string | null,
      law_firm_id: string,
      file_size?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PickUpRequestsByLaw_firm_idQueryVariables = {
  law_firm_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPickUpRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PickUpRequestsByLaw_firm_idQuery = {
  pickUpRequestsByLaw_firm_id?:  {
    __typename: "ModelPickUpRequestConnection",
    items:  Array< {
      __typename: "PickUpRequest",
      id: string,
      request_type?: string | null,
      request_delivery_state?: string | null,
      law_firm_id: string,
      recipient_full_names?: string | null,
      recipient_cell_no?: string | null,
      destination_address?: string | null,
      request_status?: string | null,
      lat?: string | null,
      lng?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type BillingsByLaw_firm_idQueryVariables = {
  law_firm_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBillingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BillingsByLaw_firm_idQuery = {
  billingsByLaw_firm_id?:  {
    __typename: "ModelBillingConnection",
    items:  Array< {
      __typename: "Billing",
      id: string,
      amount?: string | null,
      month_of_billing?: string | null,
      law_firm_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PolicesByUser_idQueryVariables = {
  user_id: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPolicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PolicesByUser_idQuery = {
  policesByUser_id?:  {
    __typename: "ModelPolicesConnection",
    items:  Array< {
      __typename: "Polices",
      id: string,
      polices_title?: string | null,
      polices_status?: string | null,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    surname?: string | null,
    cell_no?: string | null,
    email?: string | null,
    access?: string | null,
    lawfirm?:  {
      __typename: "ModelLawFirmConnection",
      items:  Array< {
        __typename: "LawFirm",
        id: string,
        user_id: string,
        company_name?: string | null,
        company_email?: string | null,
        company_registartion?: string | null,
        address?: string | null,
        postal_code?: string | null,
        cell_no?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    polices?:  {
      __typename: "ModelPolicesConnection",
      items:  Array< {
        __typename: "Polices",
        id: string,
        polices_title?: string | null,
        polices_status?: string | null,
        user_id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLawFirmSubscriptionVariables = {
  filter?: ModelSubscriptionLawFirmFilterInput | null,
};

export type OnCreateLawFirmSubscription = {
  onCreateLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLawFirmSubscriptionVariables = {
  filter?: ModelSubscriptionLawFirmFilterInput | null,
};

export type OnUpdateLawFirmSubscription = {
  onUpdateLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLawFirmSubscriptionVariables = {
  filter?: ModelSubscriptionLawFirmFilterInput | null,
};

export type OnDeleteLawFirmSubscription = {
  onDeleteLawFirm?:  {
    __typename: "LawFirm",
    id: string,
    user_id: string,
    company_name?: string | null,
    company_email?: string | null,
    company_registartion?: string | null,
    address?: string | null,
    postal_code?: string | null,
    cell_no?: string | null,
    casefile?:  {
      __typename: "ModelCaseFileConnection",
      items:  Array< {
        __typename: "CaseFile",
        id: string,
        case_file_name?: string | null,
        case_file_type?: string | null,
        law_firm_id: string,
        file_size?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCaseFileSubscriptionVariables = {
  filter?: ModelSubscriptionCaseFileFilterInput | null,
};

export type OnCreateCaseFileSubscription = {
  onCreateCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCaseFileSubscriptionVariables = {
  filter?: ModelSubscriptionCaseFileFilterInput | null,
};

export type OnUpdateCaseFileSubscription = {
  onUpdateCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCaseFileSubscriptionVariables = {
  filter?: ModelSubscriptionCaseFileFilterInput | null,
};

export type OnDeleteCaseFileSubscription = {
  onDeleteCaseFile?:  {
    __typename: "CaseFile",
    id: string,
    case_file_name?: string | null,
    case_file_type?: string | null,
    law_firm_id: string,
    file_size?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipFilterInput | null,
};

export type OnCreateMembershipSubscription = {
  onCreateMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipFilterInput | null,
};

export type OnUpdateMembershipSubscription = {
  onUpdateMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembershipSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipFilterInput | null,
};

export type OnDeleteMembershipSubscription = {
  onDeleteMembership?:  {
    __typename: "Membership",
    id: string,
    membership_type?: string | null,
    membership_price?: string | null,
    membership_data?: string | null,
    membershipaccess?:  {
      __typename: "MembershipAccess",
      id: string,
      access_type?: string | null,
      membership_price?: string | null,
      law_firm_id?: string | null,
      membership_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMembershipAccessSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipAccessFilterInput | null,
};

export type OnCreateMembershipAccessSubscription = {
  onCreateMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMembershipAccessSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipAccessFilterInput | null,
};

export type OnUpdateMembershipAccessSubscription = {
  onUpdateMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMembershipAccessSubscriptionVariables = {
  filter?: ModelSubscriptionMembershipAccessFilterInput | null,
};

export type OnDeleteMembershipAccessSubscription = {
  onDeleteMembershipAccess?:  {
    __typename: "MembershipAccess",
    id: string,
    access_type?: string | null,
    membership_price?: string | null,
    law_firm_id?: string | null,
    membership_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePickUpRequestSubscriptionVariables = {
  filter?: ModelSubscriptionPickUpRequestFilterInput | null,
};

export type OnCreatePickUpRequestSubscription = {
  onCreatePickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePickUpRequestSubscriptionVariables = {
  filter?: ModelSubscriptionPickUpRequestFilterInput | null,
};

export type OnUpdatePickUpRequestSubscription = {
  onUpdatePickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePickUpRequestSubscriptionVariables = {
  filter?: ModelSubscriptionPickUpRequestFilterInput | null,
};

export type OnDeletePickUpRequestSubscription = {
  onDeletePickUpRequest?:  {
    __typename: "PickUpRequest",
    id: string,
    request_type?: string | null,
    request_delivery_state?: string | null,
    law_firm_id: string,
    recipient_full_names?: string | null,
    recipient_cell_no?: string | null,
    destination_address?: string | null,
    request_status?: string | null,
    lat?: string | null,
    lng?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBillingSubscriptionVariables = {
  filter?: ModelSubscriptionBillingFilterInput | null,
};

export type OnCreateBillingSubscription = {
  onCreateBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBillingSubscriptionVariables = {
  filter?: ModelSubscriptionBillingFilterInput | null,
};

export type OnUpdateBillingSubscription = {
  onUpdateBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBillingSubscriptionVariables = {
  filter?: ModelSubscriptionBillingFilterInput | null,
};

export type OnDeleteBillingSubscription = {
  onDeleteBilling?:  {
    __typename: "Billing",
    id: string,
    amount?: string | null,
    month_of_billing?: string | null,
    law_firm_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePolicesSubscriptionVariables = {
  filter?: ModelSubscriptionPolicesFilterInput | null,
};

export type OnCreatePolicesSubscription = {
  onCreatePolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePolicesSubscriptionVariables = {
  filter?: ModelSubscriptionPolicesFilterInput | null,
};

export type OnUpdatePolicesSubscription = {
  onUpdatePolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePolicesSubscriptionVariables = {
  filter?: ModelSubscriptionPolicesFilterInput | null,
};

export type OnDeletePolicesSubscription = {
  onDeletePolices?:  {
    __typename: "Polices",
    id: string,
    polices_title?: string | null,
    polices_status?: string | null,
    user_id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
