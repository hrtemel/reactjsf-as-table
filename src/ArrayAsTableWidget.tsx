import React from 'react';
import { IArrayWidget } from "@reactjsf/core/WidgetTypes";
import { IObjectSchema } from '@reactjsf/core/fields/ObjectField';

const ArrayAsTableWidget =({ children,label,required,description,canAdd,onAddClick,disabled,readonly,schema,components,addButtonProps }:IArrayWidget) =>{
    // @ts-ignore: Object is possibly 'undefined'.
    
    if (!(schema.items!=undefined) || (schema.items as any).properties==undefined || Array.isArray((schema.items as any).properties))
        throw "Unsupported array schema";
    // @ts-ignore: Object is possibly 'undefined'.
    const titles=Object.keys((schema.items as any).properties).map(i=> ({
        // @ts-ignore: Object is possibly 'undefined'.
        title:(schema.items as IObjectSchema).properties[i].title||i,
        style:{
            border:"1px solid rgba(0,0,0,.2)",
            minWidth:120,
            paddingTop:4,
            paddingBottom:4,
            textAlign:"center",
            fontWeight:"bolder",
            // @ts-ignore: Object is possibly 'undefined'.
            ...((schema.items as any).properties[i]["ui:tdStyle"]||{})
        }
    }));
    return <div style={{width:"100%",overflowY:"auto"}}><table cellSpacing={0} style={{width:"100%"}}>
        {label?<thead>
            <tr>
                <td style={{fontWeight:"bolder"}}>
                    {required ? label + "*" : label}
                </td>
            </tr>
            {description?<tr>
                <td>
                    {description}
                </td>
            </tr>:undefined}
        </thead>:undefined}
        <tbody>
            <tr>
                <td>
                    <table style={{width:'100%'}} cellSpacing={0}>
                        <thead style={{backgroundColor:"rgb(222, 236, 249)"}}>
                            <tr>
                                {titles.map((i,ndx)=><td style={i.style} key={ndx}>
                                    {i.title}
                                </td>)}
                            </tr>
                        </thead>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </td>
            </tr>
            {canAdd &&
            <tr>
                <td>
                    {canAdd && !disabled && !readonly && <components.AddButton onClick={onAddClick} {...(addButtonProps||{})}/>}
                </td>
            </tr>}
        </tbody>
    </table>
    </div>;
}
export default  ArrayAsTableWidget;