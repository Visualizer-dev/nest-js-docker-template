import { Logger, Module, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
class AppModule { }

(async () => {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: "*",
      optionsSuccessStatus: 204,
    },
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('NestJS Starter Template')
    .setDescription('NestJS Starter Template')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  Logger.log(`API Listen on http://localhost:${port}`, "Bootstrap");
})();
