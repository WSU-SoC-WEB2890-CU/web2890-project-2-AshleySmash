import React, { useState } from "react"
import "../styles/ContactUs.scss"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })

    // Clear the error for the specific field being typed in
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors }
      delete updatedErrors[id]
      return updatedErrors
    })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid."
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required."
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
      console.log("Form submitted successfully:", formData)
      // Clear the form after successful submission
      setFormData({ name: "", email: "", message: "" })
      // Remove the success message after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000)
    }
  }

  return (
    <div className="contact my-5 mx-3 mx-lg-auto" id="contact">
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">Stay up to date for the latest news, events, and model updates.</p>

      {isSubmitted && (
        <div className="alert alert-success text-center" role="alert">
          Your message has been sent successfully!
        </div>
      )}

      <form className="text-start" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="mb-2 fw-bold fs-5">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="mb-2 fw-bold fs-5">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message" className="mb-2 fw-bold fs-5">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUs
