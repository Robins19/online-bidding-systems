import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IBidChallenge } from '../../interface';


@Injectable()
export class DataTransferService {
    private subjectAddChallengeData = new Subject<any>();
    private subjectBidItemStatus = new Subject<any>();
    private subjectDrawerClosedStatus = new Subject<any>();

    public sendAddChallengeData(bidData: IBidChallenge): void {
        this.subjectAddChallengeData.next({ bidData: bidData });
    }

    public getAddChallengeData(): Observable<any> {
        return this.subjectAddChallengeData.asObservable();
    }

    public sendBidItemStatus(itemStatus: number): void {
        this.subjectBidItemStatus.next({ itemStatus: itemStatus });
    }

    public getBidItemStatus(): Observable<any> {
        return this.subjectBidItemStatus.asObservable();
    }


    public sendDrawerClosedStatus(status: boolean): void {
        this.subjectDrawerClosedStatus.next({ status: status });
    }

    public getDrawerClosedStatus(): Observable<any> {
        return this.subjectDrawerClosedStatus.asObservable();
    }
}
