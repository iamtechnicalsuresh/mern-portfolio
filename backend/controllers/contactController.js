import CustomAppError from "../middlewares/customAppError.js";
import Contact from "../models/contactModel.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createContact = asyncHandler(async (req, res, next) => {
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

export const getAllContacts = asyncHandler(async (req, res, next) => {
  const contacts = await Contact.find();

  res.status(200).json({
    status: "success",
    contacts,
  });
});

export const getContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.find(req.params.id);

  if (!contact) {
    return next(
      new CustomAppError("Contact not found please search correct details", 400)
    );
  }

  res.status(200).json({
    status: "success",
    contact,
  });
});
