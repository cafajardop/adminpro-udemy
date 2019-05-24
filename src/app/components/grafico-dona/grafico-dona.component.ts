import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('ChartLabels') doughnutChartLabels: Label[] = [];
  @Input('ChartData') doughnutChartData: MultiDataSet = [];
  @Input('ChartType') doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
