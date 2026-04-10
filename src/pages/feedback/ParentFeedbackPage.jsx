import { useState } from 'react';
import Hero from '../../components/shared/Hero';

const yesNo = ['YES', 'NO'];

const questions = [
  "Are you satisfied with the overall infrastructure of the college?",
  "Is the classroom environment clean and well maintained?",
  "Are the laboratory facilities adequate and functioning properly?",
  "Is the college library providing sufficient learning resources?",
  "Are you satisfied with the transport facilities provided by the college?",
  "Is the transport facility safe and punctual for your ward?",
  "Are the canteen facilities hygienic and well maintained?",
  "Is the food quality in the canteen satisfactory?",
  "Are you satisfied with the overall teaching quality in the college?",
  "Do teachers communicate clearly and effectively with students?",
  "Are teachers approachable for academic support?",
  "Does the college provide enough extracurricular activities?",
  "Are you satisfied with sports and cultural activities?",
  "Does the college encourage participation in competitions?",
  "Is the parent-teacher relationship positive?",
  "Are parent-teacher interactions sufficient?",
  "Does the college ensure safety and security?",
  "Are you satisfied with administrative support?",
  "Does the college address grievances promptly?",
  "Do you think improvements are needed?"
];

export default function ParentsFeedbackPage() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Form Submitted Successfully!");
  };

  const handleClear = () => {
    setFormData({});
  };

  return (
    <>
      <Hero
        title="Parent’s Feedback"
        subtitle="SSKV College of Arts & Science for Women"
        height="medium"
        breadcrumb="Feedback › Parent’s Feedback"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-6 text-yellow-900">
            Parent’s Feedback Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* BASIC DETAILS */}
            <input name="email" placeholder="Email" required className="input" onChange={handleChange} />
            <input name="studentName" placeholder="Name of your Daughter" required className="input" onChange={handleChange} />
            <input name="registerNumber" placeholder="Register Number" required className="input" onChange={handleChange} />
            <input type="date" name="dob" required className="input" onChange={handleChange} />
            <input type="date" name="date" className="input" onChange={handleChange} />
            <input name="department" placeholder="Department" required className="input" onChange={handleChange} />

            <select name="year" className="input" onChange={handleChange}>
              <option value="">Select Year</option>
              <option>I Year</option>
              <option>II Year</option>
              <option>III Year</option>
            </select>

            <select name="shift" className="input" onChange={handleChange}>
              <option value="">Select Shift</option>
              <option>Shift I</option>
              <option>Shift II</option>
            </select>

            <input name="studentMobile" placeholder="Student Mobile Number" required className="input" onChange={handleChange} />

            <select name="batch" className="input" onChange={handleChange}>
              <option value="">Select Batch</option>
              <option>2020-23</option>
              <option>2021-24</option>
              <option>2022-25</option>
            </select>

            <input name="parentName" placeholder="Parent Name" required className="input" onChange={handleChange} />
            <input name="parentMobile" placeholder="Parent Mobile Number" required className="input" onChange={handleChange} />

            {/* QUESTIONS */}
            {questions.map((q, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <p className="font-medium mb-2">
                  {index + 1}. {q}
                </p>

                <div className="flex gap-6">
                  {yesNo.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`q${index + 1}`}
                        value={opt}
                        onChange={handleChange}
                        required
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* SUGGESTIONS */}
            <textarea
              name="suggestions"
              placeholder="Your suggestions for improvement"
              className="input h-28"
              required
              onChange={handleChange}
            />

            {/* DECLARATION */}
            <div className="border p-4 rounded-lg">
              <p className="font-medium mb-2">
                22. I confirm that I have personally answered all questions
              </p>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="declaration"
                  value="YES"
                  required
                  onChange={handleChange}
                />
                YES
              </label>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-lg">
                Submit
              </button>

              <button type="button" onClick={handleClear} className="bg-gray-300 px-6 py-2 rounded-lg">
                Clear
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}