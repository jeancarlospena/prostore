import { getOrderById } from "@/lib/actions/order.actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import { ShippingAddress } from "@/types";
import OrderDetailsTable from "./order-details-table";
import { ShippingAddress } from "@/types";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();

  const session = await auth();

  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      isAdmin={session?.user?.role === "admin" || false}
    />
  );
};

export default OrderDetailsPage;

// '{ shippingAddress: ShippingAddress; user: { name: string; email: string | null; }; orderitems: { name: string; slug: string; productId: string; qty: number; image: string; orderId: string; price: string; }[]; ... 12 more ...; taxPrice: string; }'
// '{ id: string; createdAt: Date; isPaid: Boolean; paidAt: Date | null; isDelivered: Boolean; deliveredAt: Date | null; orderitems: { productId: string; ... 4 more ...; qty: number; }[]; user: { ...; }; }'.
//     The types of 'user.email' are incompatible between these types.
//       Type 'string | null' is not assignable to type 'string'.
//         Type 'null' is not assignable to type 'string'.ts(2322)
