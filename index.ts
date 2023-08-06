/* eslint-disable prettier/prettier */
import { Vector2, Input, VMouseKeys, EventsSDK, RendererSDK, Color } from "github.com/octarine-public/wrapper/index"

const InBounds = ( source: Vector2, position: Vector2, size: Vector2 ) => {
	return source.x >= position.x && source.x <= position.x + size.x && source.y >= position.y && source.y <= position.y + size.y;
}

class Draggable {
	startPosition: Vector2;
	size: Vector2;

	isDragging: boolean = false;

	constructor( startPosition: Vector2, size: Vector2 ) {
		this.startPosition = startPosition;
		this.size = size;
	}

	Update( ): void {
		if ( !Input.IsMouseKeyDown( VMouseKeys.MK_LBUTTON ) )
			this.isDragging = false;
	}
}

EventsSDK.on( "Draw", ( ) => {
	const mousePos: Vector2 = Input.CursorOnScreen;
	const color = InBounds( mousePos, new Vector2( 200, 200 ), new Vector2( 100, 100 ) ) ? new Color( 0, 255, 0, 255 ) : new Color( 255, 255, 255, 255 )
	RendererSDK.FilledRect( new Vector2( 200, 200 ), new Vector2( 100, 100 ), color )
} )
