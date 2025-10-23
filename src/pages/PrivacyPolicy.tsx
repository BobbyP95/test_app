
import "./termsAndPolicies.css";
import { Footer } from "../components/Footer";
export function PrivacyPolicy(){
     window.scroll(0, 0);
    return(
        <div className="min-h-screen">
        <section className="main-topic-sec ">
        <div>
            <h1>TERMS AND POLICIES</h1>
        </div>
        </section>
        <section id="privacy_policy" className="privacy-policy-sec text-left font-normal " >
            <h1 className=" font-sans text-4xl text-wrap pb-3"> <b>Privacy Policy for GBD Recruit Firm</b></h1>
            <h2 className="">Last Updated: 25/08/2025</h2>
            <h2>Your Privacy Rights</h2>
            <p>GBD Recruit Firm ("we," "us," "our") is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://gbdrecruit.com/">https://gbdrecruit.com/</a> or use our recruitment services. Please read this policy carefully.</p>
            <ul className="main_list list-decimal pl-4 mt-9 ">
                <li id="information_collected" className="" > <strong className="text-xl  ">Information We Collect</strong>
                    <p className="pb-3">We collect information that you provide directly to us and automatically when you use our site.</p>
                    <h3><strong>A. Information from Candidates (Job Seekers):</strong> </h3>
                    <ul className="list-disc pl-6 pb-3">
                        <li ><strong>Contact Information</strong> Your name, email address, phone number, and home address.</li>
                        <li><strong>Professional Information:</strong> Your resume/CV, work history, education, skills, qualifications, certifications, references, salary expectations, and right-to-work status.</li>
                        <li><strong>Contact Information:</strong>  Information you choose to provide that may reveal racial or ethnic origin, religious beliefs, or health information. We only process this with your explicit consent.</li>
                    </ul>
                    <h3><strong>B. Information from Clients (Employers/Recruiters):</strong> </h3>
                    <ul className="list-disc pl-6 pb-3">
                        <li><strong>Business Contact Information:</strong> Your name, company name, email address, phone number, and job title.</li>
                        <li><strong>Company Needs:</strong> Information about job openings, company culture, and hiring requirements.</li>
                        
                    </ul>
                    <h3><strong>C. Information Collected Automatically</strong> </h3>
                    <ul className="list-disc pl-6 pb-3">
                        <li><strong>Usage Data:</strong> Your IP address, browser type, operating system, pages you visit on our site, time spent on those pages, and other diagnostic data.</li>
                        <li><strong>Cookies: </strong> Our website uses cookies to enhance your experience. You can control cookies through your browser settings.</li>
                       
                    </ul>
                </li>

                <li id="information_used" className="" > <strong className="text-xl  ">How We Use Your Information</strong>
                    <p className="pb-3">We use your information for the following purposes:</p>
                    <ul className="list-disc pl-6 pb-3">
                        <li ><strong>For Candidates:</strong> To assess your skills and qualifications for potential job opportunities, to submit your application to potential employers, to conduct reference checks, and to communicate with you about the recruitment process. </li>
                        <li><strong>For Clients:</strong> To understand your hiring needs, to present qualified candidate profiles, and to manage our business relationship.</li>
                        <li><strong>For Everyone:</strong>  To operate, maintain, and improve our website and services, to send administrative emails, and to comply with legal obligations.</li>
                    </ul>
                    
                </li>

                <li className="" > <strong className="text-xl  ">How We Share Your Information</strong>
                    <p className="pb-3">We will never sell your personal data to third parties.</p>
                    <ul className="list-disc pl-6 pb-3">
                        <li ><strong>With Clients:</strong> We share candidate profiles and applications with potential employers for the purpose of evaluating your suitability for a job opening.</li>
                        <li><strong>With Service Providers:</strong>  We share information with trusted third-party vendors who provide services on our behalf, such as cloud hosting, email delivery, and analytics. These partners are bound by confidentiality obligations.</li>
                        <li><strong>Legal Requirements:</strong>   We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                    </ul>
                    
                </li>

                <li className="" > <strong className="text-xl  ">Data Retention</strong>
                    <p className="pb-3">We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. For candidates, we typically retain your profile for 24 months after our last interaction to consider you for future opportunities. You may request deletion of your data at any time.</p>
                </li>

                <li id="rights" className="" > <strong className="text-xl  ">Your Rights</strong>
                    <p className="pb-3">Depending on your location, you may have the right to:</p>
                    <ul className="list-disc pl-6 pb-3">
                        <li>Access and receive a copy of your personal data.</li>
                        <li>Correct inaccurate or incomplete data.</li>
                        <li>Request deletion of your personal data.</li>
                        <li>Object to or restrict our processing of your data.</li>
                        <li>Withdraw your consent at any time.</li>
                    </ul>
                </li>

                <li className="" > <strong className="text-xl  ">Data Security</strong>
                    <p className="pb-3">We implement appropriate technical and organizational security measures designed to protect your personal data from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
                </li>
                <li id="changes" className="" > <strong className="text-xl  ">Changes to This Policy</strong>
                    <p className="pb-3">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.</p>
                </li>

                 {/* <li className="" > <strong className="text-xl  "> Contact Us</strong>
                    <p className="pb-3">If you have any questions about this Privacy Policy, please contact us at:</p>
                    <p><strong>GBD Recruit Firm</strong></p>
                    <p>
                        19 OGUNSHOLA, IFELODUN JOGBODILE IFO, Sango Otta, Ogun, Nigeria 112104
                    </p>
                    <p>
                       <strong>Email:</strong> info@gbdrecruit.com
                    </p>
                    <p>
                       <strong>Phone:</strong> +2347026285552
                    </p>
                </li> */}
            </ul>
        </section>
        
        
     
<Footer />
        </div>
        
    )
}