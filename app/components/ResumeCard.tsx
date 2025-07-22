import React from "react";
import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000 m-4"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="!text-black font-bold break-words">
            {resume.companyName}
          </h2>
          <h3 className="text-lg words-break text-gray-500">
            {resume.jobTitle}
          </h3>
        </div>
        <div className="flex-shrink-0">
          <ScoreCircle score={resume.feedback.overallScore} />
        </div>
      </div>



      <div className="resume-image-container overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <div className="w-full h-full bg-gray-50 flex items-center justify-center">
            <img 
              src={resume.imagePath} 
              alt={`${resume.companyName} - ${resume.jobTitle} resume`} 
              className="w-full h-[350px] max-sm:h-[200px] object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              style={{
                imageRendering: 'crisp-edges',
                objectPosition: 'top'
              }}
            />
        </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
