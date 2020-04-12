import React from 'react';
import { IItemWidget } from "@reactjsf/core/WidgetTypes";

export default function ItemAsTableRowWidget({
  hasMoveDown,hasMoveUp,hasRemove,index,children,readonly,
  disabled,onReorderClick,onDropIndexClick,moveUpButtonProps,moveDownButtonProps,removeButtonProps,
  components:{MoveUpButton,MoveDownButton,RemoveButton}
  }:IItemWidget&{components:any/*Fix this*/}) {
    return <tr>
      {children}
      {!readonly && <td style={{verticalAlign:"arrow-top",whiteSpace:"nowrap",width:0}}>
          { (hasMoveUp || hasMoveDown) && (
            <MoveUpButton 
              disabled={disabled || readonly || !hasMoveUp}
              onClick={onReorderClick(index, index - 1)}
              {...(moveUpButtonProps||{})}
          />
          )}
          {(hasMoveUp || hasMoveDown) && 
            <MoveDownButton
              disabled={ disabled || readonly || !hasMoveDown }
              onClick={onReorderClick(index, index + 1)}
              {...(moveDownButtonProps||{})}
          />
          }
          {hasRemove && 
          <RemoveButton 
          disabled={disabled || readonly} 
          onClick={onDropIndexClick(index)} 
          {...(removeButtonProps||{})}
        />}
        </td>}
    </tr>;
  }