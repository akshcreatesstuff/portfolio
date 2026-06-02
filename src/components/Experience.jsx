import { useState } from "react";
import "./Experience.css";

const experienceItems = [
  {
    id: "deloitte",
    title: "Deloitte USI, India",
    role: "Senior Consultant @ Deloitte USI, India",
    period: "Nov 2021 - Present",
    details: [
      "Led a team of 7 QA Engineers to implement and test Salesforce Financial Service Cloud solutions for a major US bank, ensuring high-quality deliverables and client satisfaction.",
      "Represented the QA team by creating precise test plans and sharing them with stakeholders.",
      "Responsible for test effort estimation, test documentation, and test execution in Azure DevOps.",
      "Led ETL testing for 12 million records migrated to Salesforce FSC.",
      "Performed UI/UX testing of community pages.",
      "Collaborated with the business team and executed SIT and UAT validation.",
      "Coordinated UAT defect triage meetings and sent daily status reports.",
      "Created QA onboarding documentation and trained new joiners, reducing onboarding time by 30%.",
    ],
  },  
  {
    id: "nagarro",
    title: "Nagarro, India",
    role: "Senior Engineer @ Nagarro, India",
    period: "Feb 2021 - Nov 2021",
    details:[
      "Led and mentored a team of 7 members to create custom solutions for customer self-booking on Salesforce Community Cloud in the Shipping and logistics industry",
      "Performed Functional and API testing simultaneously on Salesforce Service and Community cloud for end-to-end product testing, resulting in a 15% reduction in post-release defects",
      "Developed and maintained comprehensive test plans, test cases, and test scripts for multiple sales and community cloud products, resulting in a 25% reduction in testing time",
      "Conducted thorough regression testing and detected and addressed critical issues, reducing production defects by 20% and improving overall product quality.",
    ]
  },
  {
    id: "keysight",
    title: "Keysight Technologies",
    role: "Business Process Analyst @ Keysight Technologies, India",
    period: "June 2018 - Feb 2021",
    details:[
      "Led a team of 5 members to implement and test Siebel decommissioning and adopt Salesforce Service Cloud for customer service support, resulting in a 40% reduction in case resolution time.",
      "Performed proof of concept on multiple test automation tools like Selenium, Katalon, and Provar, and shared analysis based on multiple factors with the stakeholders to make an informed decision.",
      "Analyzed the applications, identified testing goals, and determined the best possible automation testing tool and framework for the organization.",
      "Actively tracked and managed defects using industry-standard tools, maintaining a defect closure rate of 95%.",
      "Coached teams in Agile practices and provided necessary training to create a positive mindset for Agile methodologies",
      "Worked with cross-functional teams to validate the process of quote creation and order booking through Oracle",
      "Collaborated with developers to ensure timely bug fixes and enhancements, resulting in a 20% increase in project delivery efficiency.",
]
  },
  {
    id: "honda",
    title: "Honda, India",
    role: "Intern",
    period: "May 2017 -July 2017 and Jan 2018 - June 2018",
    details:
      [
        "5+ months Internship at Assembly Frame department at Honda Cars.",
        "Developed Automatic Wheel nut dispensing machine.",
      ]
  },
];

function Experience() {
  const [activeExperience, setActiveExperience] = useState(experienceItems[0].id);
  const selected = experienceItems.find((item) => item.id === activeExperience);

  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <h2> / experience</h2>
        <span className="experience-divider"></span>
      </div>
      
      <div className="experience-list">
        <ul>
          {experienceItems.map((item) => (
            <li
              key={item.id}
              className={item.id === activeExperience ? "active" : ""}
              onClick={() => setActiveExperience(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        {selected && (
            <div className="experience-details" key= {activeExperience}>
              <h3>{selected.role}</h3>
              <p className="experience-period">{selected.period}</p>
              {Array.isArray(selected.details) ? (
                <ul className="experience-details-list">
                  {selected.details.map((detail, index) => (
                    <li key={index}>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{selected.details}</p>
              )}
            </div>
        )}
        </div>
    </section>
  );
}

export default Experience;