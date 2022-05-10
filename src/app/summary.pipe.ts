import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        // throw new Error("Method not implemented.");

        if (!value)
            return null;

        let actualLimit = limit || 50;
        return value.substr(0, actualLimit) + '...';
    }

}