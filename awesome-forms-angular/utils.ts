
export function filterUserInput(val: string,DATASET: string[]): string[] {

    //Allow user input to be used if no other choices available;
  
      let customOptions = DATASET.filter(option =>
        option.toLowerCase().indexOf(val.toLowerCase()) !== -1);
    
        // Include user input if input is not in dataset
      customOptions.push(val);
      return customOptions;
  
  }

// Usage Example:

/*
options = formGroup.controls['eligible_programs'].valueChanges
    .pipe(
      startWith(''),
      map(val => filterUserInput(val,ELIGIBLE_PROGRAMS))
    );

*/