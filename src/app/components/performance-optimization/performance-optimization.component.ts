import { Component, OnInit } from '@angular/core';
import { PerformanceOptimizationService } from '../../services/performance-optimization.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-performance-optimization',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule ],
  providers: [PerformanceOptimizationService],
  templateUrl: './performance-optimization.component.html',
  styleUrl: './performance-optimization.component.css'
})
export class PerformanceOptimizationComponent implements OnInit {
  slowQueries: any[] = [];
  sqlId: string = '';
  tuningRecommendations: any;

  constructor(private performanceService: PerformanceOptimizationService) {}

  ngOnInit(): void {
    this.performanceService.getSlowQueries().subscribe((data) => {
      this.slowQueries = data;
    });
  }

  fetchTuningRecommendations(): void {
    if (!this.sqlId.trim()) {
      alert('Please enter a valid SQL ID');
      return;
    }

    this.performanceService.getTuningRecommendations(this.sqlId).subscribe(
      (data) => {
        this.tuningRecommendations = data;
      },
      (error) => {
        alert('Failed to fetch recommendations: ' + error.message);
      }
    );
  }

  gatherStats(schemaName: string, tableName: string): void {
    if (!schemaName.trim() || !tableName.trim()) {
      alert('Schema Name and Table Name are required');
      return;
    }

    this.performanceService.gatherTableStats(schemaName, tableName).subscribe(
      () => {
        alert('Statistics gathered successfully');
      },
      (error) => {
        alert('Failed to gather stats: ' + error.message);
      }
    );
  }

  scheduleStats(schemaName: string): void {
    if (!schemaName.trim()) {
      alert('Schema Name is required');
      return;
    }

    this.performanceService.scheduleStatsGathering(schemaName).subscribe(
      () => {
        alert('Statistics gathering scheduled successfully');
      },
      (error) => {
        alert('Failed to schedule stats gathering: ' + error.message);
      }
    );
  }
}