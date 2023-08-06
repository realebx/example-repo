/* eslint-disable prettier/prettier */
import { Vector2, Input, VMouseKeys, EventsSDK, RendererSDK, Color } from "github.com/octarine-public/wrapper/index"

const InBounds = ( source: Vector2, position: Vector2, size: Vector2 ) => {
	return source.x >= position.x && source.x <= position.x + size.x && source.y >= position.y && source.y <= position.y + size.y;
}

class Draggable {
	position: Vector2;
	size: Vector2;

	isDragging: boolean = false;

	offset: Vector2 = new Vector2( );

	constructor( position: Vector2, size: Vector2 ) {
		this.position = position;
		this.size = size;
	}

	Update( ): void {
		const mousePos = Input.CursorOnScreen

		if ( Input.IsMouseKeyDown( VMouseKeys.MK_LBUTTON ) ) {
			if ( InBounds( mousePos, this.position, this.size ) || this.isDragging ) {
				if ( !this.isDragging ) {
					this.offset.x = mousePos.x - this.position.x;
					this.offset.y = mousePos.y - this.position.y;
					this.isDragging = true
				}

				this.position.x = mousePos.x - this.offset.x;
				this.position.y = mousePos.y - this.offset.y;
			}
		} else if ( this.isDragging ) {
			this.isDragging = false
		}
	}
}

const Drag = new Draggable( new Vector2( 100, 100 ), new Vector2( 200, 200 ) )
EventsSDK.on( "Draw", ( ) => {
	Drag.Update( )

	RendererSDK.Image( "panorama/images/spellicons/monkey_king_tree_dance_png.vtex_c", Drag.position, 0.0, Drag.size )
} )
