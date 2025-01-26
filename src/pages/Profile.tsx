import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Profile</h1>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            alt="Profile"
            className="h-20 w-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-muted-foreground">Student</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value="john.doe@example.com"
              disabled
              className="mt-1 block w-full rounded-md border bg-muted px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value="John Doe"
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Bio</label>
            <textarea
              className="mt-1 block w-full rounded-md border px-3 py-2 h-24"
              placeholder="Tell us about yourself..."
            />
          </div>
        </div>

        <Button>Save Changes</Button>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              🏆
            </div>
            <h3 className="font-medium">First Course Completed</h3>
            <p className="text-sm text-muted-foreground">Earned on Jan 15, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}