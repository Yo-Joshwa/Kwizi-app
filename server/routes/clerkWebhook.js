
import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/clerk-webhook", async (req, res) => {
  try {
    const event = req.body;


    if (event.type === "user.created") {
      const { id, email_addresses, first_name, last_name } = event.data;

      await User.create({
        userId: id,
        email: email_addresses[0]?.email_address,
        firstName: first_name,
        lastName: last_name,
      });
    }

    res.status(200).send("Webhook received");
  } catch (err) {
    console.error(err);
    res.status(500).send("Webhook error");
  }
});

export default router;
