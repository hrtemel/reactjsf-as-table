import React, { CSSProperties } from 'react';
import { IItemWidget } from "@reactjsf/core/WidgetTypes";


const ItemWidget=({
  hasMoveDown,hasMoveUp,hasRemove,index,children,readonly,
  disabled,onReorderClick,onDropIndexClick,moveUpButtonProps,moveDownButtonProps,removeButtonProps,
  components:{MoveUpButton,MoveDownButton,RemoveButton}
}:IItemWidget&{components:any}/*Fix This*/) =>
(hasMoveUp || hasMoveDown ||hasRemove) ?
  <div key={index} style={{ display:'flex' }}>
      <div style={{ flex: 1 }}>
          {children}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", margin:"0 4px 4px 4px" }}>
        {(hasMoveUp || hasMoveDown) && (
          <MoveUpButton 
            disabled={disabled || readonly || !hasMoveUp}
            onClick={onReorderClick(index, index - 1)}
            {...(moveUpButtonProps||{})}
          />
        )}

        {(hasMoveUp || hasMoveDown) && <MoveDownButton
            disabled={ disabled || readonly || !hasMoveDown }
            onClick={onReorderClick(index, index + 1)}
            {...(moveDownButtonProps||{})}
          />
        }
        {hasRemove && <RemoveButton 
          disabled={disabled || readonly} 
          onClick={onDropIndexClick(index)} 
          {...(removeButtonProps||{})}
        />
        }
      </div>
  </div>
:children;

export default ItemWidget;