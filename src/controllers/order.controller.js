import Order from "../models/Order";
import User from "../models/User"

// DELIVERY TASKS

export const listOrders = async (req, res) => {
  const orders = await Order.find().populate("user");
  return res.status(200).json(orders);
}

export const orderDetail = async (req, res) => {
  let id = req.params.id.slice(1)
  const order = await Order.findById(id);
  res.status(200).json(order);
}

export const createOrder = async (req, res) => {
  const newOrder = new Order({
    date: req.body.date,
    time: req.body.time,
    user: req.body.user,
	  status: req.body.status,
    length: req.body.length,
    width: req.body.width,
    height: req.body.height,
    weight: req.body.weight,
    city: req.body.city,
    address: req.body.address,
    dest_name: req.body.dest_name,
    dest_id: req.body.dest_id,
    dest_city: req.body.dest_city,
    dest_address: req.body.dest_address,
  });
  await newOrder.save();
  res.status(201).json({ message: "Envío programado con exito." });
};

export const updateOrder = async (req, res) => {
  const updateOrder = await Order.findById(req.body.id);
  updateOrder.date = req.body.date
  updateOrder.time = req.body.time
  updateOrder.status = req.body.status
  updateOrder.length = req.body.length
  updateOrder.width = req.body.width
  updateOrder.height = req.body.height
  updateOrder.weight = req.body.weight
  updateOrder.city = req.body.city
  updateOrder.address = req.body.address
  updateOrder.dest_name = req.body.dest_name
  updateOrder.dest_id = req.body.dest_id
  updateOrder.dest_city = req.body.dest_city
  updateOrder.dest_address = req.body.dest_address
  await updateOrder.save()
  res.status(200).json({ message: "Actualizado con éxito." });
}