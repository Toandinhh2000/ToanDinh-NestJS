
LocalStrategy
JwtStrategy
RefeshJwtStrategy
{
  provide:API_GUARD,
  useClass: jWTAuthGuard //@UseGuards(JwtAuthGuard) applied on all API endppints
},
{
  provide: APP_GUARD,
  useClass: RolesGuard
},

Export class AuthModule {}