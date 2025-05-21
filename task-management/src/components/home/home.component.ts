import { Component, inject } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [TaskItemComponent, CommonModule, FormsModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks: any[] = [
    {
      _id: '661394a4f5e8b15b9c4f1d01',
      title: 'Design Landing Page',
      description: 'Create a responsive landing page for the website.',
      status: 'In Progress',
      priority: 'High',
      assignedTo: 'Aarav Patel',
      dueDate: '2025-04-10T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d02',
      title: 'Backend API Integration',
      description: 'Connect frontend with backend API for authentication.',
      status: 'Pending',
      priority: 'Medium',
      assignedTo: 'Riya Sharma',
      dueDate: '2025-04-12T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d03',
      title: 'Database Schema Design',
      description: 'Design MongoDB schema for task and user management.',
      status: 'Completed',
      priority: 'High',
      assignedTo: 'Vikram Mehta',
      dueDate: '2025-03-30T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d04',
      title: 'Unit Testing',
      description: 'Write Jest test cases for authentication module.',
      status: 'In Progress',
      priority: 'Low',
      assignedTo: 'Neha Singh',
      dueDate: '2025-04-15T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d05',
      title: 'UI Enhancements',
      description: 'Improve the UI/UX of the dashboard page.',
      status: 'Pending',
      priority: 'Medium',
      assignedTo: 'Anjali Verma',
      dueDate: '2025-04-18T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d06',
      title: 'Bug Fixing',
      description: 'Fix reported bugs in task filtering feature.',
      status: 'In Progress',
      priority: 'High',
      assignedTo: 'Rajesh Kumar',
      dueDate: '2025-04-08T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d07',
      title: 'Deployment Setup',
      description: 'Set up CI/CD pipeline for automated deployment.',
      status: 'Pending',
      priority: 'High',
      assignedTo: 'Megha Tiwari',
      dueDate: '2025-04-20T23:59:59.999Z',
    },
    {
      _id: '661394a4f5e8b15b9c4f1d08',
      title: 'Write Documentation',
      description: 'Create a README file with setup and usage instructions.',
      status: 'Pending',
      priority: 'Low',
      assignedTo: 'Aman Gupta',
      dueDate: '2025-04-25T23:59:59.999Z',
    },
  ];

  priorityOrder: any = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  title: any;
  desc: any;
  status: any;
  priority: any;
  assignTo: any;
  dueDate: any;
  filteredTasks: any = this.tasks;
  currentTask: any;
  isUpdate: Boolean = false;
  isShowAll: Boolean = true;
  isShowCompleted: Boolean = false;
  isShowPending: Boolean = false;
  isShowInProgress: Boolean = false;
  isFilterClicked: Boolean = false;
  isHighSelected: Boolean = false;
  isLowSelected: Boolean = false;
  isMediumSelected: Boolean = false;

  translate: TranslateService = inject(TranslateService);

  updateTask(task: any) {
    this.isUpdate = true;
    this.currentTask = task;
    this.title = this.currentTask?.title;
    this.desc = this.currentTask?.description;
    this.assignTo = this.currentTask?.assignedTo;
    this.dueDate = this.currentTask?.dueDate;
    this.status = this.currentTask?.status;
    this.priority = this.currentTask?.priority;
  }

  updateSubmit() {
    const index = this.tasks.findIndex(
      (task) => task._id === this.currentTask._id
    );

    this.currentTask.title = this.title;
    this.currentTask.description = this.desc;
    this.currentTask.status = this.status;
    this.currentTask.priority = this.priority;
    this.currentTask.assignedTo = this.assignTo;
    this.currentTask.dueDate = this.dueDate;

    if (index !== -1) {
      this.tasks[index] = { ...this.currentTask };
      alert('Task updated successfully:');
      this.isUpdate = false;
    }
  }

  closeUpdate() {
    this.isUpdate = false;
  }

  showAll() {
    this.filteredTasks = [...this.tasks];
    this.isShowAll = true;
    this.isShowCompleted = false;
    this.isShowPending = false;
    this.isShowInProgress = false;
  }

  showCompleted() {
    this.filteredTasks = this.tasks.filter(
      (task) => task.status === 'Completed'
    );
    this.isShowAll = false;
    this.isShowCompleted = true;
    this.isShowPending = false;
    this.isShowInProgress = false;
  }

  showInProgress() {
    this.filteredTasks = this.tasks.filter(
      (task) => task.status === 'In Progress'
    );
    this.isShowAll = false;
    this.isShowCompleted = false;
    this.isShowPending = false;
    this.isShowInProgress = true;
  }

  showPending() {
    this.filteredTasks = this.tasks.filter((task) => task.status === 'Pending');
    this.isShowAll = false;
    this.isShowCompleted = false;
    this.isShowPending = true;
    this.isShowInProgress = false;
  }

  deleteTask(task: any) {
    this.filteredTasks = this.filteredTasks.filter(
      (item: any) => item._id !== task._id
    );
    console.log('delete task');

    alert('Task Deleted Successfully..');
  }

  filterClicked() {
    this.isFilterClicked = !this.isFilterClicked;
  }

  sortHighToLow() {
    this.filteredTasks = [...this.filteredTasks].sort((a, b) => {
      return this.priorityOrder[b.priority] - this.priorityOrder[a.priority];
    });
    this.isFilterClicked = false;
  }

  sortLowToHigh() {
    this.filteredTasks = [...this.filteredTasks].sort((a, b) => {
      return this.priorityOrder[a.priority] - this.priorityOrder[b.priority];
    });
    this.isFilterClicked = false;
  }

  translateLang(lang: string) {
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  handleKeyDownFilter(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.filterClicked();
    }
  }

  handleKeyDownhtl(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.sortHighToLow();
    }
  }

  handleKeyDownlth(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.sortLowToHigh();
    }
  }

  handleKeyDown(event: KeyboardEvent, action: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      switch (action) {
        case 'all':
          this.showAll();
          break;
        case 'complete':
          this.showCompleted();
          break;
        case 'progress':
          this.showInProgress();
          break;
        case 'pending':
          this.showPending();
          break;
      }
    }
  }
}
