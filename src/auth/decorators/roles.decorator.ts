import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/rol.enums";

export const ROLES_KEY = "roles";
//setMetadata sirve para crear decoradores 
export const Roles = (role: Role) => SetMetadata(ROLES_KEY, role);