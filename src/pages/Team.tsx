import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, Mail, Phone, MapPin } from 'lucide-react';

const teamMembers = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Frontend Developer',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    avatar: '/avatars/john.jpg',
    tasksCompleted: 24,
    tasksTotal: 30,
    status: 'active',
    skills: ['React', 'TypeScript', 'CSS']
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Backend Developer',
    email: 'jane.smith@company.com',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    avatar: '/avatars/jane.jpg',
    tasksCompleted: 18,
    tasksTotal: 22,
    status: 'active',
    skills: ['Node.js', 'MongoDB', 'Python']
  },
  {
    id: '3',
    name: 'Mike Johnson',
    role: 'UI/UX Designer',
    email: 'mike.johnson@company.com',
    phone: '+1 (555) 345-6789',
    location: 'Austin, TX',
    avatar: '/avatars/mike.jpg',
    tasksCompleted: 15,
    tasksTotal: 18,
    status: 'busy',
    skills: ['Figma', 'Adobe XD', 'Prototyping']
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    role: 'Project Manager',
    email: 'sarah.wilson@company.com',
    phone: '+1 (555) 456-7890',
    location: 'Chicago, IL',
    avatar: '/avatars/sarah.jpg',
    tasksCompleted: 12,
    tasksTotal: 15,
    status: 'active',
    skills: ['Project Management', 'Agile', 'Scrum']
  }
];

export default function Team() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'busy':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'away':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team</h1>
          <p className="text-muted-foreground">Manage your team members and their tasks</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <p className="text-xs text-muted-foreground">83% availability</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Avg. Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </div>
                <Badge variant="outline" className={getStatusColor(member.status)}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {member.email}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {member.phone}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {member.location}
                </div>
              </div>

              {/* Task Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Task Progress</span>
                  <span>{member.tasksCompleted}/{member.tasksTotal}</span>
                </div>
                <Progress 
                  value={(member.tasksCompleted / member.tasksTotal) * 100} 
                  className="h-2" 
                />
              </div>

              {/* Skills */}
              <div className="space-y-2">
                <span className="text-sm font-medium">Skills</span>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}