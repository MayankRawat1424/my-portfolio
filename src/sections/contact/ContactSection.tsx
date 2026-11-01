import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import Button from "@/components/ui/Button";
import { PHOTOS, SITE } from "@/data/site";

const FIELD_CLASS =
  "w-full rounded-md border border-line bg-bg/60 px-3 py-2.5 placeholder:text-muted/70 focus:outline-none focus:border-fg transition-colors duration-300";
const LABEL_CLASS = "block font-semibold mb-2";

export default function ContactSection() {
  return (
    <SectionShell id="contact" title="Contact">
      <div className="col-span-1 md:col-span-3 max-w-2xl">
        <p className="text-xl mb-3 text-muted">Thanks for visiting!</p>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg leading-relaxed text-muted mb-10">
          Have a project, a question, or just want to say hi? Messages go
          straight to my inbox, and I&apos;ll get back to you as soon as I can.
        </p>

        <form
          action={SITE.contactFormAction}
          method="POST"
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className={LABEL_CLASS}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className={FIELD_CLASS}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className={LABEL_CLASS}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className={FIELD_CLASS}
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className={LABEL_CLASS}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={FIELD_CLASS}
              placeholder="Write your message here..."
              required
            />
          </div>

          <Button type="submit" className="mt-3">
            Send Message
          </Button>
        </form>
      </div>
      <div className="hidden md:block col-span-1">
        <Image
          src={PHOTOS.contact.src}
          alt={PHOTOS.contact.alt}
          width={PHOTOS.contact.width}
          height={PHOTOS.contact.height}
          sizes="240px"
          className="w-full aspect-[4/5] object-cover rounded-lg border border-line shadow-xl md:sticky md:top-28"
        />
      </div>
    </SectionShell>
  );
}
