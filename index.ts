/* eslint-disable prettier/prettier */
import { Vector2, Input, VMouseKeys, EventsSDK, RendererSDK, Color } from "github.com/octarine-public/wrapper/index"

const InBounds = ( source: Vector2, start: Vector2, end: Vector2 ) => {
	return source.x >= start.x && source.x <= end.x && source.y >= start.y && source.y <= end.y;
}

class Draggable {
	startPosition: Vector2;
	endPosition: Vector2;

	isDragging: boolean = false;

	constructor( startPosition: Vector2, endPosition: Vector2 ) {
		this.startPosition = startPosition;
		this.endPosition = endPosition;
	}

	Update( ): void {
		if ( !Input.IsMouseKeyDown( VMouseKeys.MK_LBUTTON ) )
			this.isDragging = false;
		
	}
}

EventsSDK.on( "Draw", ( ) => {
	RendererSDK.FilledRect( new Vector2( 200, 200 ), new Vector2( 100, 100 ), new Color( 255,255,255,255 ) )
} )
