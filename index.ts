import { of, range } from 'rxjs'; 
import { map } from 'rxjs/operators';


const number$ = range(10,25)

const observer = {
  next: value => console.log(value),
  err: err => console.error(err),
  complete: () => console.log('complete!')
};

number$.subscribe(observer);
