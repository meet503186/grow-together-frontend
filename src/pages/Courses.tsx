import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  // Expanded courses data
  const courses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      description: "Learn web development from scratch. Master HTML, CSS, JavaScript, React, and Node.js",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      instructor: "Sarah Johnson",
      price: 89.99,
      duration: "32.5 hours",
      level: "Beginner",
      rating: 4.8,
      students: 15430,
      category: "Web Development",
      lastUpdated: "January 2024"
    },
    {
      id: "2",
      title: "Advanced Machine Learning Specialization",
      description: "Master machine learning algorithms and deep learning fundamentals with Python",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      instructor: "Dr. Michael Chen",
      price: 129.99,
      duration: "45 hours",
      level: "Advanced",
      rating: 4.9,
      students: 8920,
      category: "Data Science",
      lastUpdated: "February 2024"
    },
    {
      id: "3",
      title: "UI/UX Design Masterclass",
      description: "Learn modern UI/UX design principles and create stunning user interfaces",
      thumbnail: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
      instructor: "Emily Parker",
      price: 79.99,
      duration: "28 hours",
      level: "Intermediate",
      rating: 4.7,
      students: 12350,
      category: "Design",
      lastUpdated: "March 2024"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filters
            </h3>
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <label className="text-sm font-medium">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-1 block w-full rounded-md border py-2 pl-3 pr-10"
                >
                  <option value="all">All Categories</option>
                  <option value="web-development">Web Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="design">Design</option>
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="text-sm font-medium">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="mt-1 block w-full rounded-md border py-2 pl-3 pr-10"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="text-sm font-medium">Price</label>
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="mt-1 block w-full rounded-md border py-2 pl-3 pr-10"
                >
                  <option value="all">All Prices</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
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
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {course.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">${course.price}</span>
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}