import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espace'
})
export class EspacePipe implements PipeTransform {

  transform(ch:String): any {
    let i:number;
    let temp : String ='';
        for(i=0;i<ch.length;i++){
      if (ch[i]===' ') {
        temp+= '_';
      }else {
        temp+= ch[i];
      }
    }

return temp;
  }

}
