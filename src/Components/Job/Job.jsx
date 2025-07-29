import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={logo} alt="Shoes" className="w-16 h-16 object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
            {job_type}
          </button>
        </div>
        <div className="flex gap-5 mt-4">
          <h2 className="flex items-center gap-2">
            <SlLocationPin className="text-2xl"></SlLocationPin>
            {location}
          </h2>
          <h2 className="flex items-center gap-2">
            <CiDollar className="text-2xl"></CiDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions mt-2">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};
export default Job;
