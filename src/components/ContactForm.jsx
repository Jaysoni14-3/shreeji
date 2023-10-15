import { useState } from "react";

const ContactForm = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    // Send the values to firebase
  };

  return (
    <div className="form-container rounded-md  w-full">
      <form onSubmit={() => sendEmail()} className="flex flex-col gap-2">
        <div className="email ">
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-neutral-900"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="block p-3 w-full text-sm text-neutral-900 bg-gray-50 rounded-lg border  shadow-sm focus:ring-primary-color focus:border-primary-color "
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="block p-2.5 w-full text-sm text-neutral-900 bg-gray-50 rounded-lg shadow-sm border focus:ring-primary-color focus:border-primary-color"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="primary-btn  mt-1 hover:ring-2 hover:ring-blue-200 focus:ring-2 focus:outline-none focus:ring-blue-200"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
