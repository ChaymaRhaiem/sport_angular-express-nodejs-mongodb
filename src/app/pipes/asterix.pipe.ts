import { Pipe, PipeTransform } from '@angular/core';
import { $ } from 'protractor';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:String): any {
    let i,j:number;
    let voy=['a','i','e','o','u','y'];
    let res : String ='';
for(i=0;i<ch.length;i++){
  for(j=0;voy.length;j++){
    let temp:string;

  if(ch[i] == voy[j]){
    temp+= '*';
  }else {
    temp+= ch[i];
  }
  res+= temp;
}
}
return res;
  }


  }
