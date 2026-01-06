import { Resend } from "resend";
import { SENDER_EMAIL, APP_NAME } from "@/lib/constants";
import { Order } from "@/types";
import PurchaseReceiptEmail from "./purchase-receipt";
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY as string);

export const sendPurchasedReceipt = async ({ order }: { order: Order }) => {
  await resend.emails.send({
    from: `${APP_NAME} <${SENDER_EMAIL}>`,
    to: order.user.email,
    subject: `Order Confirmation ${order.id}`,
    react: <PurchaseReceiptEmail order={order} />,
  });
};

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'jcpacc6@outlook.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
