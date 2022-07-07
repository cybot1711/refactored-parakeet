export interface Amount {
  amount: number
  currency: string
}

export interface Type {
  code: string
  details?: {
    catDesc: string
  }
}

export interface AccountOverviewLimit {
  amount: number
  currency: string
}

export interface AccountOverviewBalance {
  amount: number
  currency: string
}

export interface AccountOverview {
  lastUpdated: string
  utilization?: number
  balance: AccountOverviewBalance
  frequency: string
  limit?: AccountOverviewLimit
  accountOpened: string
}

export interface AccountAddress {
  buildingName: string
  format: string
  postcode: string
  street: string
  town: string
}

export interface Payment {
  month: number
  paymentStatus: string
  year: number
}

export interface Account {
  accountCategory: string
  accountNumber: string
  address: AccountAddress
  contentKey: string
  displayName: string
  key: string
  name: string
  overview: AccountOverview
  paymentHistory: Payment[]
  status: string
  supplierName: string
}

export interface ElectoralRole {
  address: AccountAddress
  contextKey: string
  current: boolean
  endDateString: string
  name: string
  startDateString: string
  supplied: string
}

export interface CourtAndInsolvencies {
  name: string
  dob: string
  courtName: string
  contextKey: string
  dischargeDate?: string
  caseReference: string
  amount: Amount
  address: AccountAddress
  type: Type
  startDate: string
}

export interface PublicInfo {
  courtAndInsolvencies: CourtAndInsolvencies[]
}

export interface Personal {
  electoralRoll: ElectoralRole[]
  publicInfo: PublicInfo
}

export interface Report {
  accounts: Account[]
  personal: Personal
}
