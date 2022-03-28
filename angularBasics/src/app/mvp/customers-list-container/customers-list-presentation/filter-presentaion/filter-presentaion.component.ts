import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterPresenterService } from '../filter-presenter/filter-presenter.service';

@Component({
  selector: 'app-filter-presentaion',
  templateUrl: './filter-presentaion.component.html',
  styleUrls: ['./filter-presentaion.component.scss'],
  viewProviders:[FilterPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterPresentaionComponent implements OnInit {

  public filterForm:FormGroup;

  constructor(
    private filterPresernterService : FilterPresenterService
    ) {

    this.filterForm = this.filterPresernterService.buildform();

   }

  ngOnInit(): void {
  }

}
