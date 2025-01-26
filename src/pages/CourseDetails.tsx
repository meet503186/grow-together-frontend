import { Button } from "@/components/ui/button";
import {
  Clock,
  BookOpen,
  BarChart,
  Star,
  Play,
  Globe,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function CourseDetails() {
  // Enhanced course data
  const course = {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description:
      "Learn web development from scratch with this comprehensive bootcamp. Master HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and gain practical experience in modern web development.",
    thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1600",
    price: 89.99,
    duration: "32.5 hours",
    level: "Beginner",
    category: "Web Development",
    rating: 4.8,
    students: 15430,
    lastUpdated: "January 2024",
    language: "English",
    instructor: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      title: "Senior Web Developer",
      courses: 12,
      students: 45000,
      rating: 4.9,
    },
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { title: "Course Introduction", duration: "5:00" },
          {
            title: "Setting Up Your Development Environment",
            duration: "15:00",
          },
          { title: "Web Development Basics", duration: "20:00" },
        ],
      },
      {
        title: "HTML & CSS Fundamentals",
        lessons: [
          { title: "HTML5 Structure", duration: "25:00" },
          { title: "CSS Styling Basics", duration: "30:00" },
          { title: "Responsive Design", duration: "45:00" },
        ],
      },
    ],
    features: [
      "Lifetime access",
      "15 coding exercises",
      "5 real-world projects",
      "Certificate of completion",
      "Downloadable resources",
      "Mobile and TV access",
    ],
  };

  return (
    <div>
      {/* Course Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{course.title}</h1>
                <p className="text-lg text-gray-300">{course.description}</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-400">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>{course.language}</span>
                  </div>
                  <div className="text-gray-400">
                    Last updated {course.lastUpdated}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    <span>{course.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="lg:col-span-1">
              {/* <div className="sticky top-6 rounded-lg border bg-card p-6"> */}
              <div className="aspect-video overflow-hidden rounded-lg mb-6 relative">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* What you'll learn */}
          <section>
            <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span>
                    Learn modern web development best practices and tools
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Course Content */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="border rounded-lg divide-y">
              {course.curriculum.map((section, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{section.title}</h3>
                    <Button variant="ghost" size="sm">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {section.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lessonIndex}
                        className="flex items-center justify-between text-sm pl-4"
                      >
                        <div className="flex items-center gap-2">
                          <Play className="h-4 w-4" />
                          <span>{lesson.title}</span>
                        </div>
                        <span className="text-muted-foreground">
                          {lesson.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Instructor */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Instructor</h2>
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h3 className="font-medium text-lg text-center">
                  {course.instructor.name}
                </h3>
                <p className="text-muted-foreground text-center">
                  {course.instructor.title}
                </p>
              </div>
              <div className="flex gap-8 mt-4">
                <div className="text-center">
                  <div className="font-medium">{course.instructor.rating}</div>
                  <div className="text-sm text-muted-foreground">
                    Instructor Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-medium">{course.instructor.courses}</div>
                  <div className="text-sm text-muted-foreground">Courses</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">
                    {course.instructor.students.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
