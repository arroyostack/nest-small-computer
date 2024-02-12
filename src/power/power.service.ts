import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower( watts: number ) {
        console.log( `Suplplying ${watts} watts of power from Power Service` );
    }
}
