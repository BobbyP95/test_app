
import "./termsAndPolicies.css";
import { Footer } from "../components/Footer";
export function Terms(){
     window.scroll(0, 0);
    return(
        <div className="min-h-screen">
        <section className="main-topic-sec ">
        <div>
            <h1>TERMS AND POLICIES</h1>
        </div>
        </section>
        
        <section id="terms_conditions" className="terms_conditions text-left font-normal pb-10">
            <h1 className="font-sans text-3xl text-wrap text-center font-bold p-10">Terms and Conditions</h1>
        

    
            <ul className="main_list list-decimal pl-4 mt-9 ">
                <li className="" > <strong className="text-xl  "> Agreement to Terms</strong>
                    <p className="pb-3">By accessing or using the GBD Recruit Firm website ("the Site"), you agree to be bound by these Terms and Conditions. If you do not agree, you may not access the Site or use our services.</p>
            
                </li>

                <li className="" > <strong className="text-xl  "> Definitions</strong>
                
                    <ul className="list-disc pl-6 pb-3">
                        <li>"Candidate" refers to an individual seeking employment through our services.</li>
                        <li>"Client" refers to a company or individual seeking recruitment services.</li>
                        <li>
                            "Content" refers to text, images, logos, and other materials on the Site.
                        </li>
                    </ul>
                    
                </li>

                <li className="" > <strong className="text-xl  "> Intellectual Property</strong>
                    <p className="pb-3">The Site and its original content, features, and functionality are owned by GBD Recruit Firm and are protected by international copyright and intellectual property laws. You may not copy, reproduce, or use our logos or content without express written permission.</p>
                   
                    
                </li>

                <li className="" > <strong className="text-xl  ">User Accounts</strong>
                    <p className="pb-3">If you create an account on our Site, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
                </li>

                <li className="" > <strong className="text-xl  ">Acceptable Use</strong>
                    <p className="pb-3">You agree not to use the Site:</p>
                    <ul className="list-disc pl-6 pb-3">
                        <li>For any unlawful purpose.</li>
                        <li>To submit false, misleading, or fraudulent information.</li>
                        <li>To harass, abuse, or harm another person.</li>
                        <li>To impersonate someone else.</li>
                        <li>To interfere with or disrupt the Site's security or functionality.</li>
                    </ul>
                </li>

                <li className="" > <strong className="text-xl  ">Disclaimer</strong>
                    <p className="pb-3">GBD Recruit Firm provides a service to connect Candidates and Clients. We do not guarantee employment to Candidates or successful hiring to Clients. We are not a party to any employment agreement between a Candidate and a Client and are not responsible for employment decisions, wages, or working conditions.</p>
                </li>
                <li className="" > <strong className="text-xl  "> Limitation of Liability</strong>
                    <p className="pb-3">GBD Recruit Firm shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Site or our services.</p>
                </li>

                <li className="" > <strong className="text-xl  ">Governing Law</strong>
                    <p className="pb-3">These Terms shall be governed by the laws of [US, Ghana, Nigeria], without regard to its conflict of law provisions.</p>
                </li>


                <li className="" > <strong className="text-xl  ">Changes to Terms</strong>
                    <p className="pb-3">We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the Site.</p>
                </li>

                {/* <li className="" > <strong className="text-xl  ">Contact Information</strong>
                    <p className="pb-3">Questions about these Terms should be sent to us at info@gbdrecruit.com.
3. Refund Policy for GBD Recruit Firm</p>
                </li> */}

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