export enum InputFieldType {
     TEXT,
     PASSWORD,
     DATE,
     DATE_TIME,
     CHECK_BOX,
     TEXT_AREA,
     SELECT_BOX,
     IMAGE,
     IMAGE_PICKER,
     IMAGE_PICKER_BASE64,
     IMAGE_PICKER_MULTIPLE
}

class AbstractInputField {
    label: string;
    name: string;
    type: InputFieldType;
    optional: boolean;
    
    constructor(  name: string, label: string, type:InputFieldType, optional=false){
        this.label = label===null || label===undefined?name:label;
        this.name = name;
        this.type = type;
        this.optional = optional;
    }
}

export class InputField extends AbstractInputField {
    constructor(name: string, label: string, type:InputFieldType = InputFieldType.TEXT, optional=false){
        super(name, label, type, optional);
    }
}

export class SelectBox extends AbstractInputField {
    
    endPoint: string;
    valueParam:string;
    displayParam: string;

    constructor(  name: string, label: string = name, endpoint:string, valueParam:string, displayParam:string, optional=false){
        super(name, label, InputFieldType.SELECT_BOX, optional);
        this.endPoint = endpoint;
        this.valueParam = valueParam;
        this.displayParam = displayParam;
    }

}

export enum TableColumnType {
    TEXT,
    IMAGE,
    DATE,
    DATE_TIME,
}

export class TableColumn { 
    
    name: string;
    label: string;
    type: TableColumnType;

    constructor(name: string, label: string = name, columnType: TableColumnType = TableColumnType.TEXT){
        this.label = label;
        this.name = name;
        this.type = columnType;
    }

}