// src/app/actions/contact.ts
"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    message: formData.get("message") as string,
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  // When Resend is configured, uncomment this block:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "website@yoursite.com",
  //   to: process.env.CONTACT_EMAIL!,
  //   subject: `New enquiry from ${result.data.name} — ${result.data.service}`,
  //   html: `<p><b>Name:</b> ${result.data.name}</p>
  //          <p><b>Email:</b> ${result.data.email}</p>
  //          <p><b>Phone:</b> ${result.data.phone}</p>
  //          <p><b>Service:</b> ${result.data.service}</p>
  //          <p><b>Message:</b> ${result.data.message}</p>`,
  // });

  console.log("Contact form submission:", result.data);

  return {
    success: true,
    message: "Thank you! We'll get back to you within 2 hours.",
  };
}
