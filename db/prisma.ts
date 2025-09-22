import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product: any) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product: any) {
          return product.rating.toString();
        },
      },
    },
  },
});;



// model Product {
//   id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
//   name        String
//   slug        String   @unique(map: "product_slud_idx")
//   category    String
//   images      String[]
//   brand       String
//   description String
//   stock       Int
//   price       Decimal  @default(0) @db.Decimal(12, 2)
//   rating      Decimal  @default(0) @db.Decimal(3, 2)
//   numReviews  Int      @default(0)
//   isFeatured  Boolean  @default(false)
//   banner      String?
//   createdAt   DateTime @default(now()) @db.Timestamp(6)
// }
