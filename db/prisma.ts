import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
    cart: {
      itemsPrice: {
        needs: {itemsPrice: true},
        compute(cart){
          return cart.itemsPrice.toString()
        }
      },
      shippingPrice: {
        needs: {shippingPrice: true},
        compute(cart){
          return cart.shippingPrice.toString()
        }
      },
      taxPrice: {
        needs: {taxPrice: true},
        compute(cart){
          return cart.taxPrice.toString()
        }
      },
      totalPrice: {
        needs: {totalPrice: true},
        compute(cart){
          return cart.totalPrice.toString()
        }
      }
    },
    order: {
      itemsPrice: {
        needs: {itemsPrice: true},
        compute(cart){
          return cart.itemsPrice.toString();
        }
      },
      shippingPrice: {
        needs: {shippingPrice: true},
        compute(cart){
          return cart.shippingPrice.toString()
        }
      },
      taxPrice: {
        needs: {taxPrice: true},
        compute(cart){
          return cart.taxPrice.toString()
        }
      },
      totalPrice: {
        needs: {totalPrice: true},
        compute(cart){
          return cart.totalPrice.toString()
        }
      }
    },
    orderItem: {
      price: {
        compute(cart){
          return cart.price.toString()
        }
      }
    }
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
