import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoreHorizontal, Calendar, User, Flag } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  dueDate: string;
  project: string;
}

interface TaskListProps {
  isCompact?: boolean;
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create wireframes and mockups for the new homepage',
    status: 'in-progress',
    priority: 'high',
    assignee: 'John Doe',
    dueDate: '2024-01-15',
    project: 'Website Redesign'
  },
  {
    id: '2',
    title: 'Implement user authentication',
    description: 'Set up login and registration functionality',
    status: 'todo',
    priority: 'medium',
    assignee: 'Jane Smith',
    dueDate: '2024-01-20',
    project: 'API Development'
  },
  {
    id: '3',
    title: 'Write API documentation',
    description: 'Document all endpoints and response formats',
    status: 'completed',
    priority: 'low',
    assignee: 'Mike Johnson',
    dueDate: '2024-01-10',
    project: 'API Development'
  },
  {
    id: '4',
    title: 'Mobile app testing',
    description: 'Test the app on different devices and screen sizes',
    status: 'in-progress',
    priority: 'high',
    assignee: 'Sarah Wilson',
    dueDate: '2024-01-18',
    project: 'Mobile App'
  }
];

export function TaskList({ isCompact = false }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'in-progress':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      default:
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      default:
        return 'text-green-500';
    }
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, status: task.status === 'completed' ? 'todo' : 'completed' }
        : task
    ));
  };

  const displayTasks = isCompact ? tasks.slice(0, 5) : tasks;

  return (
    <div className="space-y-4">
      {displayTasks.map((task) => (
        <Card key={task.id} className="transition-all hover:shadow-md">
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Checkbox
                checked={task.status === 'completed'}
                onCheckedChange={() => toggleTaskStatus(task.id)}
                className="mt-1"
              />
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className={`font-medium ${task.status === 'completed' ? 'line-through text-muted-foreground' : ''}`}>
                    {task.title}
                  </h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                {!isCompact && (
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                )}
                
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className={getStatusColor(task.status)}>
                    {task.status.replace('-', ' ')}
                  </Badge>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Flag className={`h-3 w-3 ${getPriorityColor(task.priority)}`} />
                    {task.priority}
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <User className="h-3 w-3" />
                    {task.assignee}
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(task.dueDate).toLocaleDateString()}
                  </div>
                  
                  <Badge variant="secondary">{task.project}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}