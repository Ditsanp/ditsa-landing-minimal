import { ScrollArea } from "@/components/ui/scroll-area";
import SectionWrapper from "@/components/wrappers/section-wrapper";

export default function Component() {
  return (
    <SectionWrapper>
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Effective Date: 2024/08/31</p>
      <p className="mb-6">
        Ditsa Technology Pvt. Ltd. ("Company", "we", "our", "us") is committed
        to protecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website
        www.ditsa.com.np or use our services. By using our website and services,
        you agree to the collection and use of information in accordance with
        this policy.
      </p>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>We may collect and process the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Personal Information:</strong> This includes your name,
              email address, phone number, and other contact details that you
              provide when you fill out forms on our website, subscribe to our
              newsletter, or communicate with us.
            </li>
            <li>
              <strong>Technical Data:</strong> We may collect information about
              your device, browser type, IP address, and browsing behavior when
              you visit our website. This information is collected using cookies
              and similar tracking technologies.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect information about how
              you use our website and services, such as the pages you visit, the
              time spent on those pages, and other related data.
            </li>
            <li>
              <strong>Payment Information:</strong> If you engage in a
              transaction with us, we may collect payment details necessary to
              process the payment, including billing information.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>To Provide Services:</strong> We use your personal
              information to provide the services you have requested, including
              processing transactions, delivering products, and offering
              customer support.
            </li>
            <li>
              <strong>To Improve Our Services:</strong> We analyze usage data to
              improve the functionality, design, and performance of our website
              and services.
            </li>
            <li>
              <strong>To Communicate with You:</strong> We may use your contact
              information to send you updates, marketing communications, and
              other information that may be of interest to you. You can opt out
              of marketing communications at any time.
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> We may use your
              information to comply with applicable laws, regulations, and legal
              processes.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            3. How We Share Your Information
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information in the following
            situations:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>With Service Providers:</strong> We may share your
              information with third-party service providers who assist us in
              providing and improving our services. These providers are
              contractually obligated to protect your information and use it
              only for the purposes for which it was shared.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your
              information if required by law, such as in response to a court
              order, or when we believe disclosure is necessary to protect our
              rights, investigate fraud, or comply with legal obligations.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of all or a portion of our assets, your
              information may be transferred as part of that transaction.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            4. Security of Your Information
          </h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or method of electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            5. Retention of Your Information
          </h2>
          <p>
            We will retain your personal information for as long as necessary to
            fulfill the purposes for which it was collected or as required by
            law. When your information is no longer needed, we will securely
            delete or anonymize it.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            6. Your Rights
          </h2>
          <p>
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <strong>Access:</strong> You have the right to request a copy of
              the personal information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> You have the right to request that we
              correct any inaccurate or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> You have the right to request that we
              delete your personal information, subject to certain legal
              obligations.
            </li>
            <li>
              <strong>Objection:</strong> You have the right to object to the
              processing of your personal information in certain circumstances.
            </li>
            <li>
              <strong>Opt-Out:</strong> You can opt out of receiving marketing
              communications from us at any time by following the unsubscribe
              link in our emails or contacting us directly.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            7. Cookies and Tracking Technologies
          </h2>
          <p>
            Our website uses cookies and similar tracking technologies to
            enhance your experience and collect information about your usage.
            You can manage your cookie preferences through your browser
            settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            8. International Data Transfers
          </h2>
          <p>
            As a company based in Nepal, we primarily process and store your
            information in Nepal. If you are accessing our services from outside
            Nepal, your information may be transferred to and processed in Nepal
            or other countries where our service providers are located. We
            ensure that appropriate safeguards are in place to protect your
            information during such transfers.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. We
            encourage you to review this policy periodically to stay informed
            about how we are protecting your information.
          </p>
        </section>
      </div>
    </SectionWrapper>
  );
}
