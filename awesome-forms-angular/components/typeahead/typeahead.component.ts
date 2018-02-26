import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadSelectItemEvent} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subject} from 'rxjs/Subject';
import {prettifyKeys} from '../../_models/utils';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers: [NgbTypeahead,
    NgbTypeaheadConfig,] // add NgbTypeaheadConfig to the component providers
})
export class TypeaheadComponent implements OnInit {

  @Input() dataset: any[];
  @Input() metadata = {};
  @Input() model: any;
  @Output() typeaheadSelectedEvent:EventEmitter<any> = new EventEmitter();

  search: any;
  focus$: Subject<string> = new Subject<string>();
  click$: Subject<string> = new Subject<string>();

  constructor(public config: NgbTypeaheadConfig,
              public instance: NgbTypeahead,
              ) {
    config.focusFirst = true;
  }

  ngOnInit() {
    this.search = (text$: Observable<string>) =>
      text$
        .debounceTime(200)
        .distinctUntilChanged()
        .merge(this.focus$)
        .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
        .map(term => term.length < 1 ? this.dataset
          : this.filterUserInput(term, this.dataset));

    this.metadata['placeholder'] = this.metadata['placeholder'] || prettifyKeys(this.metadata['key'])
  }

  filterUserInput(val: string, dataSet, keepUserInput=true): string[] {
    //Allow user input to be used if no other choices available;
    let customOptions = dataSet.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) !== -1);

    if (keepUserInput){
      customOptions.push(val);
    }
    return customOptions;

  }

  optionSelected(event: NgbTypeaheadSelectItemEvent, item) {


    if (Array.isArray(this.model)){

      event.preventDefault();
      this.model.push(event.item);
      item.value = '';
    }
    else {
      event.preventDefault();
      this.model = event.item;
      item.value = this.model;
    }
    let eventData = {
      'event': event,
      'type': this.metadata['key']
    };
    this.typeaheadSelectedEvent.emit(eventData);
    this.instance.writeValue('');

  }
}
