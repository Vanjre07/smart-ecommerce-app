# ---------- Build stage ----------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copy ROOT pom and all modules
COPY pom.xml .
COPY backend ./backend

# Build this service AND its dependencies (common-lib)
RUN mvn -pl backend/api-gateway -am clean package -DskipTests

# ---------- Runtime stage ----------
FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /app/backend/inventory-service/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
