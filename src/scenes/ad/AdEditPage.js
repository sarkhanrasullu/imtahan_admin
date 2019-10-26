import React, { Component } from 'react';
import { InputField, InputFieldType, SelectBox } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.name", "Reklamın adı"),
        ]
    },
    {
        items:[
            new SelectBox("target.userId.id","Reklamı verən şəxs", "/api/users","id","name"),
        ]
    },
    {
        items:[
            new InputField("target.leftSide","Solda reklam", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLink","Sol reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLinkIframe","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.leftSide2","Solda reklam 2", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLink2","Sol reklam 2 keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLinkIframe2","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.leftSide3","Solda reklam3 ", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLink3","Sol reklam 3 keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLinkIframe3","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.leftSide4","Solda reklam 4", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLink4","Sol reklam 4 keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.leftSideLinkIframe4","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.rightSide","Sağda reklam",InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.rightSideLink","Sağ reklam keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.rightSideLinkIframe","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.rightSide2","Sağda reklam 2",InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.rightSideLink2","Sağ reklam 2 keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.rightSideLinkIframe2","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.rightSide3","Sağda reklam 3",InputFieldType.IMAGE_BASE64),
            
        ]
    },
    {
        items:[
            new InputField("target.rightSideLink3","Sağ reklam 3 keçidi"),
            
        ]
    },
    {
        items:[
            new InputField("target.rightSideLinkIframe3","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.rightSide4","Sağda reklam 4",InputFieldType.IMAGE_BASE64),
             
        ]
    },
    {
        items:[
            new InputField("target.rightSideLink4","Sağ reklam 4 keçidi"),
             
        ]
    },
    {
        items:[
            new InputField("target.rightSideLinkIframe4","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.upSide","Yuxarıda reklam", InputFieldType.IMAGE_BASE64),
            
        ]
    },
    {
        items:[
            new InputField("target.upSideLink","Yuxarı reklam keçidi"),
            
        ]
    },
    {
        items:[
            new InputField("target.upSideLinkIframe","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.upSide2","Yuxarıda reklam 2", InputFieldType.IMAGE_BASE64),
            
        ]
    },
    {
        items:[
            new InputField("target.upSideLink2","Yuxarı reklam 2 keçidi"),
            
        ]
    },
    {
        items:[
            new InputField("target.upSideLinkIframe2","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.upSide3","Yuxarıda reklam 3", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.upSideLink3","Yuxarı reklam 3 keçidi"),
        ]
    },
    {
        items:[
            new InputField("target.upSideLinkIframe3","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.upSide4","Yuxarıda reklam 4", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.upSideLink4","Yuxarı reklam 4 keçidi"), 
        ]
    },
    {
        items:[
            new InputField("target.upSideLinkIframe4","Daxili pəncərə", InputFieldType.CHECK_BOX,true)
        ]
    },
    {
        items:[
            new InputField("target.downSide","Aşağıda reklam", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.downSideLink","Aşağı reklam keçidi"), 
        ]
    },
    {
        items:[
            new InputField("target.downSideLinkIframe","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.downSide2","Aşağıda reklam 2", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.downSideLink2","Aşağı reklam 2 keçidi"), 
        ]
    },
    {
        items:[
            new InputField("target.downSideLinkIframe2","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.downSide3","Aşağıda reklam 3", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.downSideLink3","Aşağı reklam 3keçidi"), 
        ]
    },
    {
        items:[
            new InputField("target.downSideLinkIframe3","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.downSide4","Aşağıda reklam 4", InputFieldType.IMAGE_BASE64),
        ]
    },
    {
        items:[
            new InputField("target.downSideLink4","Aşağı reklam 4keçidi"), 
        ]
    },
    {
        items:[
            new InputField("target.downSideLinkIframe4","Daxili pəncərə", InputFieldType.CHECK_BOX, true)
        ]
    },
    {
        items:[
            new InputField("target.endDate","Reklamın bitmə tarixi",InputFieldType.DATE),
        ]
    },
    {
        items:[
            new InputField("target.enabled","Aktiv"     ,InputFieldType.CHECK_BOX, true),
        ]
    }
];

export default class AdEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/ads/{id}?projection=adProjection"
                    endpoint_add_or_save="/api/ads"
                    formFields={rows}
                />
        )
    }
}