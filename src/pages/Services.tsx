
import "./termsAndPolicies.css";
import { Footer } from "../components/Footer";
export function Services(){
     window.scroll(0, 0);
    return(
        <div className="min-h-screen">
        <section className="main-topic-sec ">
        <div>
            <h1>TERMS AND POLICIES</h1>
        </div>
        </section>

        <section className="services text-left font-normal pb-10">
            <h1 className="font-sans text-3xl text-wrap text-center font-bold p-10">Services</h1>
        

    
            <ul className="main_list list-decimal pl-4 mt-9 ">
                <li className="" > <strong className="text-xl  "> Introduction</strong>
                    <p className="pb-3">GBD Recruit Firm provides recruitment services. This policy outlines the circumstances under which we may offer refunds to our Clients. Please note that this policy does not apply to Candidates, for whom our services are typically free.</p>
            
                </li>

            

                <li className="" > <strong className="text-xl  ">Service Agreement</strong>
                    <p className="pb-3">All services are outlined in a separate contract or service agreement between GBD Recruit Firm and the Client. Refund eligibility is subject to the terms specified in that agreement..</p>
                   
                    
                </li>

                <li className="" > <strong className="text-xl  ">General Refund Principle</strong>
                    <p className="pb-3">Due to the nature of our services, which involve dedicated time and resources to source and vet candidates, refunds are generally not provided once work has commenced on a search. Refunds are considered only in exceptional circumstances, at the sole discretion of GBD Recruit Firm management.</p>
                </li>

            
                <li className="" > <strong className="text-xl  ">Guarantee Period (If Applicable)</strong>
                    <p className="pb-3">If your service agreement includes a guarantee period for a placed candidate, the terms for a replacement or partial refund will be explicitly stated in that agreement. Please refer to your signed contract for details.</p>
                </li>
                <li className="" > <strong className="text-xl  ">How to Request a Refund</strong>
                    <p className="pb-3">To request a refund, the Client must contact their dedicated account manager or email info@gbdrecruit.com with their company name, invoice number, and a detailed reason for the request..</p>
                </li>

                <li className="" > <strong className="text-xl  "> Processing Refunds</strong>
                    <p className="pb-3">If a refund is approved, it will be processed within 21 working days of approval and will be credited back to the original method of payment.</p>
                </li>


                <li className="" > <strong className="text-xl  "> Changes to This Refund Policy</strong>
                    <p className="pb-3">We may update our Refund Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
                </li>

                {/* <li className="" > <strong className="text-xl  ">Contact Information</strong>
                    <p className="pb-3">Questions about these Terms should be sent to us at info@gbdrecruit.com.
3. Refund Policy for GBD Recruit Firm</p>
                </li> */}
            </ul>
        </section>

<Footer />
        </div>
        
    )
}