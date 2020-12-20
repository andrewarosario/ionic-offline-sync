import { BehaviorSubject, Observable } from 'rxjs';

export class State<T> {

    private state: BehaviorSubject<T>;

    constructor(initialValue: T = null) {
        this.state = new BehaviorSubject(initialValue);
    }

    public getValue(): T {
        return this.state.getValue();
    }

    public get value$(): Observable<T> {
        return this.state.asObservable();
    }

    public setValue(value: T): void {
        this.state.next(value);
    }
}
