import { Logger, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Module({
	imports: [],
	controllers: [],
	providers: [],
})
class AppModule {}

(async () => {
	const port = process.env.PORT || 3000;
	const app = await NestFactory.create(AppModule);
	await app.listen(port);
	Logger.log(`API Listen on http://localhost:${port}`, "Bootstrap");
})();
