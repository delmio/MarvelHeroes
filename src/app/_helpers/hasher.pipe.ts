import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'hasher'
})
export class HasherPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  md5Hasher(publicKey:any){
    var md5 = new Md5();

    return md5.appendStr(environment.privateKey+publicKey).end();
  }

}
