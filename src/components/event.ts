import get from 'get-value';

export class Event {
    public name: string;
    public type: string;
    public value: any;
    public context: object;

    constructor(event: any) {
        this.name = get(event, 'name', 'Pageview');
        this.type = get(event, 'type', 'pageview');
        this.value = get(event, 'value', {
            default: null,
        });
        this.context = get(event, 'context', {
            default: {},
        });
    }

    public toObject() {
        return {
            context: this.context,
            name: this.name,
            type: this.type,
            value: this.value,
        };
    }

    public toJson() {
        return JSON.stringify(this.toObject());
    }
}

export default Event;
