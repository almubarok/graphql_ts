import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Device: Prisma.Device
  Data: Prisma.Data
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'username' | 'password' | 'created_at' | 'updated_at' | 'Device'
      ordering: 'id' | 'name' | 'username' | 'password' | 'created_at' | 'updated_at' | 'Device'
    }
    devices: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'pos_lat' | 'pos_lon' | 'created_at' | 'updated_at' | 'owner' | 'owner_id' | 'Data'
      ordering: 'id' | 'code' | 'name' | 'pos_lat' | 'pos_lon' | 'created_at' | 'updated_at' | 'owner' | 'owner_id' | 'Data'
    }
    data: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'batery' | 'o2' | 'co2' | 'no2' | 'created_at' | 'device' | 'device_id'
      ordering: 'id' | 'batery' | 'o2' | 'co2' | 'no2' | 'created_at' | 'device' | 'device_id'
    }
  },
  User: {
    Device: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'code' | 'name' | 'pos_lat' | 'pos_lon' | 'created_at' | 'updated_at' | 'owner' | 'owner_id' | 'Data'
      ordering: 'id' | 'code' | 'name' | 'pos_lat' | 'pos_lon' | 'created_at' | 'updated_at' | 'owner' | 'owner_id' | 'Data'
    }
  }
  Device: {
    Data: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'batery' | 'o2' | 'co2' | 'no2' | 'created_at' | 'device' | 'device_id'
      ordering: 'id' | 'batery' | 'o2' | 'co2' | 'no2' | 'created_at' | 'device' | 'device_id'
    }
  }
  Data: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    device: 'Device'
    devices: 'Device'
    data: 'Data'
    data: 'Data'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneDevice: 'Device'
    updateOneDevice: 'Device'
    updateManyDevice: 'AffectedRowsOutput'
    deleteOneDevice: 'Device'
    deleteManyDevice: 'AffectedRowsOutput'
    upsertOneDevice: 'Device'
    createOneData: 'Data'
    updateOneData: 'Data'
    updateManyData: 'AffectedRowsOutput'
    deleteOneData: 'Data'
    deleteManyData: 'AffectedRowsOutput'
    upsertOneData: 'Data'
  },
  User: {
    id: 'Int'
    name: 'String'
    username: 'String'
    password: 'String'
    created_at: 'DateTime'
    updated_at: 'DateTime'
    Device: 'Device'
  }
  Device: {
    id: 'Int'
    code: 'String'
    name: 'String'
    pos_lat: 'String'
    pos_lon: 'String'
    created_at: 'DateTime'
    updated_at: 'DateTime'
    owner: 'User'
    owner_id: 'Int'
    Data: 'Data'
  }
  Data: {
    id: 'Int'
    batery: 'Int'
    o2: 'Int'
    co2: 'Int'
    no2: 'Int'
    created_at: 'DateTime'
    device: 'Device'
    device_id: 'Int'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Device: Typegen.NexusPrismaFields<'Device'>
  Data: Typegen.NexusPrismaFields<'Data'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  