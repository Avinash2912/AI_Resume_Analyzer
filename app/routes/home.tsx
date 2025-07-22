import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome to Resumind!,Smart feedback for your dreamjob." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">


    <Navbar />
    <section className="main-section  ">
      <div className="page-heading py-16">
        <h1>Track your applications & Resume ratings </h1>
        <h2>Review your submissions and check AI powered feedback.</h2>
      </div>


       {resumes.length>0 && (
      <div className="resume-section flex h-full">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume}  />
        ))}
      </div>
    )}
    </section>


   


  


  </main>;
}
