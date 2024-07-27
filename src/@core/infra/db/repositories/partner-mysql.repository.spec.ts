import { MikroORM, MySqlDriver } from "@mikro-orm/mysql"
import { PartnerSchema } from "./schemas"
import e from "express"
import { PartnerMysqlRepository } from "./partner-mysql.repository"

test('partner repository', async () => {
  const orm = await MikroORM.init<MySqlDriver>({
    entities: [PartnerSchema],
    dbName: 'events',
    user: 'root',
    password: 'root',
    host:'localhost',
    port: 3306,
    driver: MySqlDriver,
    forceEntityConstructor: true
  })
  await orm.schema.refreshDatabase()
  const em = orm.em.fork()

  const partnerRepository = new PartnerMysqlRepository(em)

  const partner = Partner.create({name: 'Partner 1'})
  await partnerRepository.add(partner)
  await em.flush()
  await em.clear()

  let partnerFound = await partnerRepository.findById(partner.id)
  expect(partnerFound.id.equals(partner.id)).toBeTruthy()
  expect(partnerFound.name).toBe(partner.name)

  partner.changeName('Partner 2')
  await partnerRepository.add(partner)
  await em.flush()
  await em.clear()

  partnerFound = await partnerRepository.findById(partner.id)
  expect(partnerFound.id.equals(partner.id)).toBeTruthy()
  expect(partnerFound.name).toBe(partner.name)

  await orm.close()
})