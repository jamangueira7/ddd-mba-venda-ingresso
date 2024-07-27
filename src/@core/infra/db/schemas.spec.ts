import { MikroORM, MySqlDriver } from "@mikro-orm/mysql"
import { PartnerSchema } from "./schemas"
import e from "express"
import { Partner } from "src/@core/events/domain/entities/partner.entity"

test('deve criar um partner', async () => {
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

  const partner = Partner.create({name: 'Partner 1'})
  em.persist(partner)
  await em.flush()
  await em.clear()

  const partnerFound = await em.findOne(Partner, { id: partner.id })
  console.log(partnerFound)

  await orm.close()
})