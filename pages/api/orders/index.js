import dbConnect from "../../../util/mongo";
import Order from "../../../models/Order";
import Customer from "../../../models/Customer";
import Payment from "../../../models/Payment";
import Delivery from "../../../models/Delivery";
import Customization from "../../../models/Customization";
import Order_Details from "../../../models/Order_Details";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "POST") {
    try {
      const newCustomer = new Customer({
        customer_id: req.body.customer_id,
        customer_name: req.body.customer,
        customer_address: req.body.address,
        customer_email: req.body.customer_email,
      });

      const newpayment = new Payment({
        payment_id: req.body.payment_id,
        order_id: newCustomer._id,
        payment_type: req.body.method ? "Paypal" : "Cash",
        payment_status: "Success",
      });

      const newDelivery = new Delivery({
        delivery_id: newCustomer._id,
        order_id: newCustomer._id,
        order_staus: "On the Way",
        delivery_address: req.body.address,
        payment_type: req.body.method ? "Paypal" : "Cash",
      });

      const newCustomization = new Customization({
        customization_id: req.body.customization_id,
        customization_type: "Sauces & Appetizers",
        customization_price: req.body.customization_price,
      });

      const newOrderDetails = new Order_Details({
        order_details_id: newCustomer._id,
        order_id: req.body.customer_id,
        customization_id: req.body.customization_id,
        pizza_id: newCustomization._id,
        quantity: req.body.quantity,
        customization_price: req.body.customization_price,
      });

      const savedCustomer = await newCustomer.save();
      const savedpayment = await newpayment.save();

      const savedDelivery = await newDelivery.save();

      const savedOrderDetails = await newOrderDetails.save();

      const savedCustomization = await newCustomization.save();
      if (savedCustomer) {
        const order = await Order.create(req.body);
        res.status(201).json(order);
      } else {
        res.status(500).json({ error: "Unable to save customer" });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

export default handler;
