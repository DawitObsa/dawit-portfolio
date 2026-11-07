import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile – Dawit Obsa Kenea" },
      {
        name: "description",
        content: "Profile page for Dawit Obsa Kenea, software engineer and full-stack developer.",
      },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Back home
        </Link>
      </div>

      <div className="overflow-hidden rounded-[0px] border border-[#d7d7d7] bg-[#e7e7e7] shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
        <div className="grid lg:grid-cols-[300px_1fr]">
          <aside className="bg-[#2d3a4b] p-7 text-white lg:p-8">
            <div className="mx-auto mb-8 flex w-[210px] justify-center overflow-hidden rounded-full border-[4px] border-white bg-[#dfe9ee] p-2">
              <img
                src={profilePhoto}
                alt="Dawit Obsa portrait"
                className="h-[180px] w-[180px] rounded-full object-cover object-top"
              />
            </div>

            <h3 className="mb-6 text-3xl font-bold uppercase tracking-wide text-white">Contact</h3>

            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-base">☎</span>
                <span>0910824429</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-base">✉</span>
                <a href="mailto:devaobsa@gmail.com" className="hover:text-white">devaobsa@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-base">⌂</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 items-center justify-center text-base">G</span>
                <a href="https://github.com/DawitObsa" target="_blank" rel="noreferrer" className="hover:text-white">github.com/DawitObsa</a>
              </div>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <h3 className="mb-4 text-3xl font-bold uppercase tracking-wide text-white">Skills</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Programming Languages: Java, JavaScript, TypeScript, Python, SQL</li>
                <li>• Web Technologies: HTML5, CSS3, React, Next.js, Node.js</li>
                <li>• Mobile Development: Android, Java, XML, SQLite</li>
                <li>• Databases: MongoDB, MySQL, SQLite, SQL</li>
                <li>• Tools: Git, GitHub, REST APIs, Postman, VS Code</li>
              </ul>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <h3 className="mb-4 text-3xl font-bold uppercase tracking-wide text-white">Languages</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>• Afaan Oromo (Native)</li>
                <li>• Amharic (Fluent)</li>
                <li>• English (Fluent)</li>
              </ul>
            </div>

            <div className="mt-10 border-t border-white/20 pt-6">
              <h3 className="mb-4 text-3xl font-bold uppercase tracking-wide text-white">Reference</h3>
              <p className="text-base font-bold text-white">Mihiretu Kebede (M.Sc.)</p>
              <p className="mt-2 text-sm text-white/80">Lecturer, Head of Software Engineering Department</p>
              <p className="mt-3 text-sm text-white/80">Email: mihiretu@bhu.edu.et</p>
              <p className="mt-2 text-sm text-white/80">Bule Hora University</p>
            </div>
          </aside>

          <main className="bg-[#f2f2f2] p-7 text-[#1f2b36] lg:p-9">
            <div className="mb-8">
              <h1 className="text-4xl font-black uppercase tracking-tight text-[#1c2430] sm:text-[3.2rem]">Dawit Obsa Kenea</h1>
              <p className="mt-3 text-xl font-bold uppercase tracking-[0.16em] text-[#2f3b4b]">Software Engineer</p>
            </div>

            <div className="space-y-8">
              <section>
                <div className="mb-3 flex items-center gap-3 border-b border-[#c8c8c8] pb-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2d3a4b] bg-[#2d3a4b] text-[10px] text-white">◉</span>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-[#1d2631]">Profile</h2>
                </div>
                <p className="text-[15px] leading-7 text-[#46515d]">
                  Motivated Software Engineering graduate from Bule Hora University who successfully passed the National Exit Examination,
                  with practical experience in full-stack software development, database management, and web application development.
                  Skilled in problem-solving, teamwork, and building innovative technology solutions, with a strong passion for continuous learning and professional growth.
                </p>
              </section>

              <section>
                <div className="mb-3 flex items-center gap-3 border-b border-[#c8c8c8] pb-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2d3a4b] bg-[#2d3a4b] text-[10px] text-white">◉</span>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-[#1d2631]">Experience</h2>
                </div>

                <div className="mb-4">
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-[#1f2b36]">Software Engineering Intern</h3>
                    <span className="text-xs font-bold uppercase tracking-wide text-[#46515d]">Jun 2025 - Oct 2025</span>
                  </div>
                  <p className="text-[15px] font-semibold text-[#2d3a47]">Ministry of Innovation and Technology (MiNT), Ethiopia</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-7 text-[#46515d]">
                    <li>Developed a Recruitment and Employee Self-Service System (RESS) using Next.js, Node.js, and MongoDB.</li>
                    <li>Designed and implemented RESTful APIs for recruitment and employee management functionalities.</li>
                    <li>Collaborated on system design, testing, and deployment throughout the software development lifecycle.</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="mb-3 flex items-center gap-3 border-b border-[#c8c8c8] pb-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2d3a4b] bg-[#2d3a4b] text-[10px] text-white">◉</span>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-[#1d2631]">Education</h2>
                </div>
                <p className="text-[17px] font-bold text-[#1d2631]">Bachelor of science in Software engineering</p>
                <p className="mt-1 text-[15px] leading-7 text-[#46515d]">
                  College of Computing And Informatics<br />
                  Bule Hora University
                </p>
                <p className="mt-2 text-[15px] leading-7 text-[#46515d]">
                  CGPA: 3.62/4<br />
                  Exit Exam result: 67.5%
                </p>
              </section>

              <section>
                <div className="mb-3 flex items-center gap-3 border-b border-[#c8c8c8] pb-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2d3a4b] bg-[#2d3a4b] text-[10px] text-white">◉</span>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-[#1d2631]">Projects</h2>
                </div>

                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-[#1f2b36]">Final Year Project</h3>
                  <span className="text-xs font-bold uppercase tracking-wide text-[#46515d]">Feb. 2026 - May 2026</span>
                </div>
                <p className="text-[15px] font-semibold text-[#2d3a47]">Bule Hora University, Bule Hora, Ethiopia</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-7 text-[#46515d]">
                  <li>Developed a BHU Link using Next.js, Node.js, and MongoDB.</li>
                  <li>Designed and implemented RESTful APIs for social media and learning management functionalities.</li>
                  <li>Collaborated on system design, testing, and deployment throughout the software development lifecycle.</li>
                </ul>
              </section>

              <section>
                <div className="mb-3 flex items-center gap-3 border-b border-[#c8c8c8] pb-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2d3a4b] bg-[#2d3a4b] text-[10px] text-white">◉</span>
                  <h2 className="text-2xl font-black uppercase tracking-wide text-[#1d2631]">Hobbies and Interests</h2>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-[15px] leading-7 text-[#46515d]">
                  <li>Software Development and Coding</li>
                  <li>Learning New Technologies</li>
                  <li>Problem Solving and Competitive Programming</li>
                  <li>Reading Technology Articles and Research Papers</li>
                  <li>Contributing to Open-Source Projects</li>
                  <li>Team Collaboration and Knowledge Sharing</li>
                </ul>
              </section>

              <div className="pt-2">
                <Button asChild variant="hero">
                  <a href="mailto:devaobsa@gmail.com">
                    <Mail className="size-4" /> Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </article>
  );
}
