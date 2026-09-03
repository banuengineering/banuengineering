"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "Stainless Steel Works";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Residential",
    service: serviceParam,
    requirements: "",
    contactMethod: "WhatsApp"
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otherService, setOtherService] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const selectedService = formData.service === "Other" ? otherService : formData.service;
    const payload = {
      ...formData,
      service: selectedService
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Form submission failed. Please check SMTP settings.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Form Submission Error:", err);
      setError(err.message || "Failed to submit quote request.");
    } finally {
      setLoading(false);
    }
  };

  const triggerWhatsAppRedirect = () => {
    const whatsappNo = "9159965923";
    const selectedService = formData.service === "Other" ? otherService : formData.service;
    const text = `Hello Banu Engineering, I'm requesting a quote via your website.
    
*Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Location: ${formData.location}
• Project Type: ${formData.projectType}
• Service: ${selectedService}
• Requirement: ${formData.requirements}
• Preferred Contact: ${formData.contactMethod}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNo}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  if (submitted) {
    return (
      <div className="quote-success">
        <div className="success-icon-wrapper">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
        <h3 className="success-title">Submission Successful</h3>
        <p className="success-msg">
          Thank you, <strong>{formData.name}</strong>. Your project specifications have been submitted successfully. Our marketing team will contact you shortly.
        </p>
        <div className="whatsapp-prompt">
          <p className="prompt-text">Send details directly via WhatsApp for a faster response.</p>
          <button onClick={triggerWhatsAppRedirect} className="btn-primary" style={{ width: '100%' }}>
            Enquire on WhatsApp
          </button>
        </div>
        <button onClick={() => { setSubmitted(false); setError(null); }} className="btn-back">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="quote-form">
      <div>
        <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>Direct Form</span>
        <h3 className="heading-medium" style={{ fontSize: '2rem' }}>Request Quote</h3>
      </div>

      <div className="form-grid">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name <span className="req">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="form-input"
          />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number <span className="req">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9159965923"
            className="form-input"
          />
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@gmail.com"
            className="form-input"
          />
        </div>

        {/* Project Location */}
        <div className="form-group">
          <label htmlFor="location">Project Location <span className="req">*</span></label>
          <input
            type="text"
            id="location"
            name="location"
            required
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Trichy, Madurai"
            className="form-input"
          />
        </div>

        {/* Project Type */}
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Residential">Residential (Home / Villa)</option>
            <option value="Commercial">Commercial (Office / Shop)</option>
            <option value="Contractor/Architect">Contractor / Architect</option>
          </select>
        </div>

        {/* Service Category */}
        <div className="form-group">
          <label htmlFor="service">Service Required</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-select"
          >
            <optgroup label="Stainless Steel Systems">
              <option value="Stainless Steel Handrails (Staircase & Balcony)">Stainless Steel Handrails (Staircase & Balcony)</option>
              <option value="SS & MS Spiral Steps">SS & MS Spiral Steps</option>
              <option value="Stainless Steel & Glass Staircases">Stainless Steel & Glass Staircases</option>
              <option value="SS Safety Gates & Compound Gates (HPL with CNC)">SS Safety Gates & Compound Gates (HPL with CNC)</option>
            </optgroup>
            <optgroup label="Toughened Glass Works">
              <option value="Toughen Glass Railings with Design">Toughened Glass Railings with Design</option>
              <option value="Spider Glass works">Spider Glass Works</option>
              <option value="Glass Canopies">Glass Canopies</option>
              <option value="Shower Enclosures">Shower Enclosures</option>
              <option value="Terracotta Jally with Tough glass">Terracotta Jally with Toughened Glass</option>
            </optgroup>
            <optgroup label="Roofings & Structural Sheds">
              <option value="Sloping Metal Roofings">Sloping Metal Roofings</option>
              <option value="Roofing Shed (JSW Metal, UPVC, Polycarbonate)">Roofing Shed (JSW Metal, UPVC, Polycarbonate)</option>
            </optgroup>
            <optgroup label="Interior & Custom Works">
              <option value="Modular Kitchen">Modular Kitchen</option>
              <option value="Lopt & Cupboard works">Loft & Cupboard Works</option>
              <option value="Custom SS & Glass Works">Custom SS & Glass Works</option>
              <option value="Combined Work">Combined Steel + Glass + Roofings</option>
              <option value="Other">Other (Specify below)</option>
            </optgroup>
          </select>
        </div>

        {formData.service === "Other" && (
          <div className="form-group">
            <label htmlFor="otherService">Specify Other Service <span className="req">*</span></label>
            <input
              type="text"
              id="otherService"
              name="otherService"
              required
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              placeholder="e.g. Spiral Stairs, Grills"
              className="form-input"
            />
          </div>
        )}

        {/* Details */}
        <div className="form-group full">
          <label htmlFor="requirements">Requirements & Specifications <span className="req">*</span></label>
          <textarea
            id="requirements"
            name="requirements"
            required
            rows={4}
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Provide dimensions, material details, and scope of work..."
            className="form-textarea"
          ></textarea>
        </div>

        {/* Preferred Contact Method */}
        <div className="form-group full contact-pref-group">
          <label>Preferred Contact Method</label>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="contactMethod"
                value="WhatsApp"
                checked={formData.contactMethod === "WhatsApp"}
                onChange={handleChange}
                style={{ cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.85rem' }}>WhatsApp</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="contactMethod"
                value="Call"
                checked={formData.contactMethod === "Call"}
                onChange={handleChange}
                style={{ cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.85rem' }}>Phone Call</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={formData.contactMethod === "Email"}
                onChange={handleChange}
                style={{ cursor: 'pointer' }}
              />
              <span style={{ fontSize: '0.85rem' }}>Email</span>
            </label>
          </div>
        </div>
      </div>

      {error && (
        <div style={{ color: "#ff6b6b", fontSize: "0.85rem", marginTop: "1rem", textAlign: "center", width: "100%", fontStyle: "italic" }}>
          Error: {error}
        </div>
      )}

      <button type="submit" disabled={loading} className="form-submit-btn">
        {loading ? "Submitting Request..." : "Submit Quotation Request"}
      </button>
    </form>
  );
}
