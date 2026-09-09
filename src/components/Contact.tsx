"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { services } from "@/lib/content";
import { Reveal, SectionHeading } from "./Reveal";

const initial: InquiryState = { ok: false };

export function ContactForm({
  heading = true,
  defaultService = "",
}: {
  heading?: boolean;
  defaultService?: string;
}) {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  return (
    <div>
      {heading ? (
        <Reveal>
          <SectionHeading
            kicker="Start a project"
            title="Tell us what you want to build."
            copy="Share the brief. We’ll come back with a clear path — product, AI, integration, or a full platform."
          />
        </Reveal>
      ) : null}

      <Reveal delay={heading ? 0.1 : 0}>
        <div className={`glass mx-auto max-w-2xl rounded-3xl p-5 sm:p-8 ${heading ? "mt-12" : ""}`}>
          {state.ok ? (
            <div className="flex flex-col items-center py-10 text-center">
              <CheckCircle2 className="mb-4 text-cyan-400" size={40} />
              <h3 className="text-2xl font-semibold text-white">Brief received.</h3>
              <p className="mt-2 max-w-md text-sm text-zinc-400">
                Thank you. A member of ExclusiveCodeX will review this and reply shortly.
              </p>
            </div>
          ) : (
            <form action={action} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Company" name="company" />
              <label className="grid gap-1.5 text-sm text-zinc-400">
                What do you need?
                <select
                  name="service"
                  defaultValue={defaultService}
                  className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-3 text-base text-white outline-none focus:border-cyan-400/50"
                >
                  <option value="">Select a capability</option>
                  {services.map((item) => (
                    <option key={item.slug} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm text-zinc-400">
                Brief
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What should exist that does not exist yet?"
                  className="min-h-[8rem] w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-base text-white outline-none placeholder:text-zinc-600 focus:border-cyan-400/50"
                />
              </label>
              {state.error ? (
                <p className="text-sm text-fuchsia-300">{state.error}</p>
              ) : null}
              <button
                type="submit"
                disabled={pending}
                className="btn-primary mt-2 h-12 w-full rounded-full text-sm disabled:opacity-60"
              >
                {pending ? "Sending…" : "Send the brief"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm text-zinc-400">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-xl border border-white/10 bg-black/40 px-3 text-base text-white outline-none focus:border-cyan-400/50"
      />
    </label>
  );
}
