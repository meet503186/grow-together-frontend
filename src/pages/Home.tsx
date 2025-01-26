import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  BookOpen,
  Users,
  Star,
  Play,
  Award,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  // Featured courses data
  const featuredCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      students: 15430,
      price: 89.99,
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      category: "Web Development",
    },
    {
      id: "2",
      title: "Advanced Machine Learning Specialization",
      instructor: "Dr. Michael Chen",
      rating: 4.9,
      students: 8920,
      price: 129.99,
      thumbnail:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      category: "Data Science",
    },
    {
      id: "3",
      title: "UI/UX Design Masterclass",
      instructor: "Emily Parker",
      rating: 4.7,
      students: 12350,
      price: 79.99,
      thumbnail:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
      category: "Design",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Transform your life through education
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn the latest skills from industry experts and take your career
              to the next level.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/courses">Explore Courses</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/signup">Join for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">45K+</div>
            <div className="text-muted-foreground">Active Students</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">800+</div>
            <div className="text-muted-foreground">Expert Instructors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1.2K+</div>
            <div className="text-muted-foreground">Online Courses</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <Button asChild variant="ghost">
            <Link to="/courses" className="flex items-center gap-2">
              View All <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group block overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="p-5">
                <div className="text-sm text-muted-foreground mb-2">
                  {course.category}
                </div>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {course.instructor}
                </p>
                <div className="flex items-center gap-1 text-amber-400 mb-2">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="font-bold">${course.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BookOpen, name: "Development", count: 425 },
            { icon: Award, name: "Business", count: 320 },
            { icon: Users, name: "Marketing", count: 290 },
            { icon: GraduationCap, name: "Design", count: 275 },
          ].map((category) => (
            <Link
              key={category.name}
              to={`/courses?category=${category.name.toLowerCase()}`}
              className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="p-3 rounded-full bg-primary/10">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-medium">{category.name}</div>
                <div className="text-sm text-muted-foreground">
                  {category.count} courses
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join millions of learners from around the world
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
