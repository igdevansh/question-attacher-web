import { Header } from "@/components/Header";
import { LectureSection } from "@/components/LectureSection";
import { WelcomeNotice } from "@/components/WelcomeNotice";
import { useCourseData } from "@/hooks/useCourseData";

const Index = () => {
  const {
    courseData,
    toggleProblemStatus,
    toggleStar,
    updateNote,
    addAttachment,
    removeAttachment
  } = useCourseData();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Header />
        <WelcomeNotice />
        
        <div className="space-y-4">
          {courseData.map((section, index) => (
            <LectureSection
              key={section.id}
              title={section.title}
              progress={section.progress}
              problems={section.problems}
              isExpanded={index === 2} // Expand the third section (Hashing) by default
              onToggleStatus={toggleProblemStatus}
              onToggleStar={toggleStar}
              onUpdateNote={updateNote}
              onAddAttachment={addAttachment}
              onRemoveAttachment={removeAttachment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
