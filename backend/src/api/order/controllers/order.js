("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          console.log("this is item------->", item);
          console.log("this is product------->", product);

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.name,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["IN"] },
        payment_method_types: ["google_pay", "card"],
        mode: "payment",
        success_url: `https://melody-shoes-1sa9jwxnl-abdulqadir8604.vercel.app` + `/success`,
        cancel_url: process.env.CLIENT_URL + "/failed",
        line_items: lineItems,
        phone_number_collection: {
          enabled: true,
        },
        invoice_creation: {
          enabled: true,
        },
        invoice_settings: {
          footer: "Thank you for your purchase.",
        },
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));