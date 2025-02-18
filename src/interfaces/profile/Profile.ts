export interface Profile {
  Response: Response
  ErrorCode: number
  ThrottleSeconds: number
  ErrorStatus: string
  Message: string
  MessageData: MessageData
}

export interface Response {
  profiles: Profile[]
  bnetMembership: BnetMembership
  profilesWithErrors: ProfilesWithError[]
}

export interface Profile {
  dateLastPlayed: string
  isOverridden: boolean
  isCrossSavePrimary: boolean
  platformSilver: PlatformSilver
  crossSaveOverride: number
  applicableMembershipTypes: number[]
  isPublic: boolean
  membershipType: number
  membershipId: string
  displayName: string
  bungieGlobalDisplayName: string
  bungieGlobalDisplayNameCode: number
}

export interface PlatformSilver {
  platformSilver: PlatformSilver2
}

export interface PlatformSilver2 {
  TigerPsn: TigerPsn
  TigerXbox: TigerXbox
  TigerBlizzard: TigerBlizzard
  TigerStadia: TigerStadia
  TigerSteam: TigerSteam
  BungieNext: BungieNext
  TigerEgs: TigerEgs
}

export interface TigerPsn {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface TigerXbox {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface TigerBlizzard {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface TigerStadia {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface TigerSteam {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface BungieNext {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface TigerEgs {
  itemHash: number
  quantity: number
  bindStatus: number
  location: number
  bucketHash: number
  transferStatus: number
  lockable: boolean
  state: number
  dismantlePermission: number
  isWrapper: boolean
}

export interface BnetMembership {
  supplementalDisplayName: string
  iconPath: string
  crossSaveOverride: number
  isPublic: boolean
  membershipType: number
  membershipId: string
  displayName: string
  bungieGlobalDisplayName: string
  bungieGlobalDisplayNameCode: number
}

export interface ProfilesWithError {
  errorCode: number
  infoCard: InfoCard
}

export interface InfoCard {
  crossSaveOverride: number
  applicableMembershipTypes: any[]
  isPublic: boolean
  membershipType: number
  membershipId: string
  displayName: string
  bungieGlobalDisplayName: string
  bungieGlobalDisplayNameCode: number
}

export interface MessageData {}
