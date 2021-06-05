import Contact from "../models/contactModel.js";
import asyncHandler from "../utils/asyncHandler.js";

const createContact = asyncHandler(async (req, res, next) => {
  const { fullname, email, mobile, purpose, message } = req.body;
  const contact = await Contact.create({
    fullname,
    email,
    mobile,
    purpose,
    message,
  });

  res.status(201).json({
    status: "success",
    contact,
  });
});

export { createContact };
