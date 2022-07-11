export = DataModelSection;
declare class DataModelSection {
    constructor(data: any);
    type: string;
    title: any;
    subtitle: any;
    metric_value: any;
    comparison_indicator: any;
    series_configuration: {
        line_series: {
            lines_data: any;
            domain_axis: any;
            measure_axis: any;
        };
    };
}
