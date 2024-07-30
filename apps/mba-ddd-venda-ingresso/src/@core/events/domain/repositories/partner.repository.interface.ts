import { IRepository } from "apps/mba-ddd-venda-ingresso/src/@core/common/domain/repository-interface";
import { Partner } from "../entities/partner.entity";

export interface IPartnerRepository extends IRepository<Partner> {}