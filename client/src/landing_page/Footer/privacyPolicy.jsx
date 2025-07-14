import React from 'react';

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-10" style={{marginTop:"1%",marginBottom:"2%"}}>
    <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-2">Last updated: June 2025</p>
    <p className="mb-2">
      Kwizi is committed to protecting your privacy. This policy outlines what data we collect, how we
      use it, and your rights.
    </p>
    <ul className="list-disc ml-6 mb-2">
      <li>User-provided: name, email, password, optional profile info</li>
      <li>Automatically collected: IP, device/browser data</li>
      <li>Cookies used for session and analytics</li>
    </ul>
    <p className="mb-2">We use data to personalize your experience, improve features, and for legal compliance.</p>
    <p className="mb-2">
      Data is shared only with consent, third-party services, or if required by law. Security measures are in
      place but 100% protection isn't guaranteed.
    </p>
    <p className="mb-2">You can request access, correction, or deletion of your data. Email: privacy@Kwizi.com</p>
  </div>
);

export default PrivacyPolicy;