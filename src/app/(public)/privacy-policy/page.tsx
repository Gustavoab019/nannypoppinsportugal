import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Nanny Poppins",
  description: "Privacy Policy for Nanny Poppins Portugal - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last updated July 14, 2023</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <p className="lead text-lg text-gray-600 mb-8">
            This privacy notice for Nanny Poppins Portugal unipessoal lda (&apos;we&apos;, &apos;us&apos;, or &apos;our&apos;), describes how and why we might collect, store, use, and/or share (&apos;process&apos;) your information when you use our services (&apos;Services&apos;).
          </p>

          <div className="bg-[#F4FAF9] border border-[#E8F5F3] rounded-2xl p-6 mb-8">
            <p className="text-gray-700 mb-0">
              <strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at{" "}
              <a href="mailto:emma@nannypoppins.pt" className="text-[#5BA8A2] hover:underline">
                emma@nannypoppins.pt
              </a>
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Summary of Key Points</h2>
          <ul className="space-y-3 text-gray-600">
            <li><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
            <li><strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</li>
            <li><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</li>
            <li><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. What Information Do We Collect?</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal information you disclose to us</h3>
          <p className="text-gray-600">
            We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p className="text-gray-600 mt-4">
            <strong>Personal Information Provided by You.</strong> The personal information that we collect may include:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Mailing addresses</li>
            <li>Job titles</li>
            <li>Contact preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How Do We Process Your Information?</h2>
          <p className="text-gray-600">
            We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
            <li>To facilitate account creation and authentication and otherwise manage user accounts</li>
            <li>To deliver and facilitate delivery of services to the user</li>
            <li>To respond to user inquiries/offer support to users</li>
            <li>To send administrative information to you</li>
            <li>To fulfil and manage your orders</li>
            <li>To enable user-to-user communications</li>
            <li>To save or protect an individual&apos;s vital interest</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Legal Bases for Processing</h2>
          <p className="text-gray-600">
            If you are located in the EU or UK, we may rely on the following legal bases to process your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
            <li><strong>Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose.</li>
            <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfil our contractual obligations to you.</li>
            <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
            <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. When and With Whom Do We Share Your Personal Information?</h2>
          <p className="text-gray-600">
            We may need to share your personal information in the following situations:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. How Long Do We Keep Your Information?</h2>
          <p className="text-gray-600">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Information from Minors</h2>
          <p className="text-gray-600">
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent&apos;s use of the Services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Your Privacy Rights</h2>
          <p className="text-gray-600">
            In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mt-4">
            <li>To request access and obtain a copy of your personal information</li>
            <li>To request rectification or erasure</li>
            <li>To restrict the processing of your personal information</li>
            <li>If applicable, to data portability</li>
            <li>To object to the processing of your personal information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Updates to This Notice</h2>
          <p className="text-gray-600">
            We may update this privacy notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date and the updated version will be effective as soon as it is accessible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
          <p className="text-gray-600">
            If you have questions or comments about this notice, you may email us at{" "}
            <a href="mailto:emma@nannypoppins.pt" className="text-[#5BA8A2] hover:underline">
              emma@nannypoppins.pt
            </a>{" "}
            or contact us by post at:
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mt-4">
            <p className="text-gray-700 font-medium">Nanny Poppins Portugal unipessoal lda</p>
            <p className="text-gray-600">Rua Cabo Joaquim Rebelo</p>
            <p className="text-gray-600">Cascais 2750-394</p>
            <p className="text-gray-600">Portugal</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-600">
                <strong>Phone:</strong>{" "}
                <a href="tel:+351916592174" className="text-[#5BA8A2] hover:underline">
                  +351 916 592 174
                </a>
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a href="mailto:emma@nannypoppins.pt" className="text-[#5BA8A2] hover:underline">
                  emma@nannypoppins.pt
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-[#1A1A1A] rounded-2xl text-center">
            <p className="text-white/80 italic mb-2">
              &ldquo;Happy and secure children are ready to take on the next new stage of life&rdquo;
            </p>
            <p className="text-[#A8D5D1] text-sm">— Nanny Poppins</p>
          </div>
        </div>
      </div>
    </main>
  );
}
