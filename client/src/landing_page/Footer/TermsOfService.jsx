
import React from 'react';

const TermsOfService = () => (
  <div className="container mx-auto px-4 py-10" style={{marginTop:"1%",marginBottom:"3%"}}>
    <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-2">Effective: June 2025</p>
    <p className="mb-2">
      By using Kwizi, you agree to these terms and our privacy policy. Accounts must contain accurate
      info, and users must maintain the confidentiality of their credentials.
    </p>
    <ul className="list-disc ml-6 mb-2">
      <li>Do not upload harmful, offensive, or illegal content.</li>
      <li>All platform content is our IP, except user submissions (licensed to us).</li>
      <li>No warranties are provided; use is at your own risk.</li>
      <li>We may change features or suspend services at any time.</li>
      <li>These terms are governed by the laws of your local jurisdiction.</li>
    </ul>
    <p>Contact us at legal@Kwizi.com for any questions.</p>
  </div>
);

export default TermsOfService;