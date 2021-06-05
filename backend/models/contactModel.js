import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    purpose: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
