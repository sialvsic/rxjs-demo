import { range, of } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));

of(1,2,3)
