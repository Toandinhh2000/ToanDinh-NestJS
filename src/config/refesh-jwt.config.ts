import { registerAs } from '@nestjs/config';
import { JwtModuleOptions, JwtOptions from '@nestjs/jwt';}

export default registerAs(
'Jwt'
(): JwtSignOptions => ({
    secret: process.env._JWT_SECRET.

    expiresIn: process.env.JWT_EXPIRE_IN,
}),
),