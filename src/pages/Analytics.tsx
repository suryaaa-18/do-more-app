import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TaskChart } from '@/components/TaskChart';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function Analytics() {
  const metrics = [
    {
      title: 'Completion Rate',
      value: '87%',
      change: '+5%',
      trend: 'up',
      icon: CheckCircle,
    },
    {
      title: 'Average Task Time',
      value: '2.5 days',
      change: '-0.3 days',
      trend: 'down',
      icon: Clock,
    },
    {
      title: 'Overdue Tasks',
      value: '3',
      change: '-2',
      trend: 'down',
      icon: AlertCircle,
    },
    {
      title: 'Tasks This Month',
      value: '45',
      change: '+12',
      trend: 'up',
      icon: Calendar,
    },
  ];

  const projectStats = [
    { name: 'Website Redesign', completed: 12, total: 16, percentage: 75 },
    { name: 'Mobile App', completed: 8, total: 18, percentage: 44 },
    { name: 'API Development', completed: 15, total: 17, percentage: 88 },
    { name: 'Marketing Campaign', completed: 6, total: 10, percentage: 60 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Insights into your team's productivity</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {metric.change}
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Completion Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Task Completion</CardTitle>
            <CardDescription>Tasks completed vs pending over the week</CardDescription>
          </CardHeader>
          <CardContent>
            <TaskChart />
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Project Progress</CardTitle>
            <CardDescription>Current status of active projects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {projectStats.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{project.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {project.completed}/{project.total}
                    </span>
                    <Badge variant="secondary">{project.percentage}%</Badge>
                  </div>
                </div>
                <Progress value={project.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Task Priority Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">High Priority</span>
              <Badge variant="destructive">35%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Medium Priority</span>
              <Badge variant="secondary">45%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Low Priority</span>
              <Badge variant="outline">20%</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">John Doe</span>
              <Badge>92% completion</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Jane Smith</span>
              <Badge>88% completion</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Mike Johnson</span>
              <Badge>95% completion</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm">
              <p className="font-medium">Task completed</p>
              <p className="text-muted-foreground">2 minutes ago</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">New task assigned</p>
              <p className="text-muted-foreground">15 minutes ago</p>
            </div>
            <div className="text-sm">
              <p className="font-medium">Project milestone reached</p>
              <p className="text-muted-foreground">1 hour ago</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}