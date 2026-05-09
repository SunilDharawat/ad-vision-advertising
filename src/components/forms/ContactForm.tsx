// src/components/forms/ContactForm.tsx
"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "../../app/actions/contact";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { services } from "../../lib/config";

const initialState: ContactState = { success: false, message: "" };

export default function ContactForm() {
  const [state, action, isPending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.success) {
    return (
      <div className="bg-brand-charcoal border border-green-500/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-400" />
        </div>
        <h3 className="font-display text-3xl text-white mb-2">MESSAGE SENT!</h3>
        <p className="text-white/60">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state.message && !state.success && (
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
          <AlertCircle size={16} className="text-red-400 shrink-0" />
          <p className="text-red-400 text-sm">{state.message}</p>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
            Full Name *
          </label>
          <input
            name="name"
            type="text"
            placeholder="Rahul Sharma"
            required
            className="w-full bg-brand-gray border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
          />
          {state.errors?.name && (
            <p className="text-red-400 text-xs mt-1">{state.errors.name[0]}</p>
          )}
        </div>
        <div>
          <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
            Phone Number *
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
            className="w-full bg-brand-gray border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
          />
          {state.errors?.phone && (
            <p className="text-red-400 text-xs mt-1">{state.errors.phone[0]}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
          Email Address *
        </label>
        <input
          name="email"
          type="email"
          placeholder="rahul@business.com"
          required
          className="w-full bg-brand-gray border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        />
        {state.errors?.email && (
          <p className="text-red-400 text-xs mt-1">{state.errors.email[0]}</p>
        )}
      </div>

      {/* Service */}
      <div>
        <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
          Service Needed *
        </label>
        <select
          name="service"
          required
          className="w-full bg-brand-gray border border-white/10 focus:border-brand-orange text-white rounded-xl px-4 py-3 text-sm outline-none transition-colors"
        >
          <option value="" className="bg-brand-dark">
            Select a service...
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title} className="bg-brand-dark">
              {s.title}
            </option>
          ))}
          <option value="Other" className="bg-brand-dark">
            Other / Not Sure
          </option>
        </select>
        {state.errors?.service && (
          <p className="text-red-400 text-xs mt-1">{state.errors.service[0]}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
          Tell Us About Your Project *
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="e.g. I need 3 flex banners for my shop front, size 10x4 feet, needed by this Friday..."
          required
          className="w-full bg-brand-gray border border-white/10 focus:border-brand-orange text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
        />
        {state.errors?.message && (
          <p className="text-red-400 text-xs mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all text-sm"
      >
        {isPending ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send Enquiry
          </>
        )}
      </button>

      <p className="text-white/20 text-xs text-center">
        We respond within 2 hours during business hours (9am–8pm, Mon–Sat)
      </p>
    </form>
  );
}
