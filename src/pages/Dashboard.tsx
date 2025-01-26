import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award } from "lucide-react";

export default function Dashboard() {
  // Placeholder enrolled courses data
  const enrolledCourses = [
    {
      id: "1",
      title: "Introduction to Web Development",
      progress: 60,
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "2",
      title: "Advanced React Patterns",
      progress: 25,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>Resume Learning</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Enrolled Courses</h3>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Hours Learned</h3>
              <p className="text-2xl font-bold">12.5</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center space-x-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Certificates</h3>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="rounded-lg border bg-card overflow-hidden">
              <div className="aspect-video">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{course.title}</h3>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {course.progress}% complete
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}