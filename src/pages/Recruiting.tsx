import job_offerSVG from "/joa.svg";
import "./Recruiting.css";
import { Footer } from "../components/Footer";
export function Recruiting() {
  return (
    <>
      <div className="recruiting_grid  ">
        <div className="item r_item_1">
          <div className=" w-full h-full opacity-85"></div>
        </div>
        <div className="item r_item_2  flex-col ">
          <h3>Why Join Us?</h3>
          <p className="text-left">Impactful Work: Be part of a team that’s making a difference. Your contributions will shape the future of [industry/sector].

Growth Opportunities: We invest in our people. From training programs to mentorship, we help you grow both personally and professionally.

Inclusive Culture: Diversity and inclusion are at the heart of what we do. We celebrate unique perspectives and foster a collaborative environment.

Innovative Environment: Work with cutting-edge technology and tools to solve real-world challenges.

Work-Life Balance: We value your well-being and offer flexible work arrangements to help you thrive.</p>
        </div>
        <div className="item r_item_3">
          {" "}
          <object data={job_offerSVG} type="image/svg+xml">
            aa
          </object>
        </div>
      </div>
      <Footer />
    </>
  );
}
