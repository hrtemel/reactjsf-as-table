import React from 'react';
import { IObjectWidget } from "@reactjsf/core/WidgetTypes";

const ObjectInTableRowWidget=({children,readonly}:IObjectWidget) =><>
    {React.Children.map(children,child=>
        <td style={{
            border:readonly?"1px solid rgba(0,0,0,.2)":undefined,
            verticalAlign:"top",width:(100/children.length).toFixed(2)+"%"
        }}>
            {child}
        </td>
    )}
</>;

export default ObjectInTableRowWidget;