export interface Warehouse {
  BicycleParking: string
  CanGetMoneyTransfer: string
  CategoryOfWarehouse: string
  CityDescription: string
  CityDescriptionRu: string
  CityRef: string
  Delivery: {
    Friday: string
    Monday: string
    Saturday: string
    Sunday: string
    Thursday: string
    Tuesday: string
    Wednesday: string
  }
  DenyToSelec: string
  Description: string
  DescriptionRu: string
  Direct: string
  DistrictCode: string
  GeneratorEnabled: string
  InternationalShipping: string
  Latitude: string
  Longitude: string
  MaxDeclaredCost: string
  Number: string
  OnlyReceivingParcel: string
  POSTerminal: string
  PaymentAccess: string
  Phone: string
  PlaceMaxWeightAllowed: string
  PostFinance: string
  PostMachineType: string
  PostalCodeUA: string
  ReceivingLimitationsOnDimensions: {
    Width: number
    Height: number
    Length: number
  }
  Reception: {
    Friday: string
    Monday: string
    Saturday: string
    Sunday: string
    Thursday: string
    Tuesday: string
    Wednesday: string
  }
  Ref: string
  RegionCity: string
  Schedule: {
    Friday: string
    Monday: string
    Saturday: string
    Sunday: string
    Thursday: string
    Tuesday: string
    Wednesday: string
  }
  SelfServiceWorkplacesCount: string
  SendingLimitationsOnDimensions: {
    Width: number
    Height: number
    Length: number
  }
  SettlementAreaDescription: string
  SettlementDescription: string
  SettlementRef: string
  SettlementRegionsDescription: string
  SettlementTypeDescription: string
  SettlementTypeDescriptionRu: string
  ShortAddress: string
  ShortAddressRu: string
  SiteKey: string
  TotalMaxWeightAllowed: string
  TypeOfWarehouse: string
  WarehouseForAgent: string
  WarehouseIndex: string
  WarehouseStatus: string
  WarehouseStatusDate: string
  WorkInMobileAwis: string
}

export enum WarehouseHeader {
  postType = 'Відділення / Поштомат',
  address = 'Адреса',
  scheduler = 'Графік роботи',
  weight = 'Вага до'
}

export interface WarehousesState {
  warehouses: Warehouse[]
  limit: number
  page: number
  isLoading: boolean
  error: string | null
}
