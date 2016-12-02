(function () {
'use strict';

var template$1 = (function () {
  return {
    data() {
      return { adjective: 'awesome' };
    }
  };
}());

let addedCss = false;
function addCss () {
	var style = document.createElement( 'style' );
	style.textContent = "                                                                           \n  h1[svelte-1310972675], [svelte-1310972675] h1 {\n    color: tomato;\n  }\n";
	document.head.appendChild( style );

	addedCss = true;
}

function renderMainFragment$1 ( root, component, target ) {
	var h1 = document.createElement( 'h1' );
	h1.setAttribute( 'svelte-1310972675', '' );
	
	var text = document.createTextNode( "Have you tried Svelte? It's " );
	h1.appendChild( text );
	
	var text1 = document.createTextNode( root.adjective );
	h1.appendChild( text1 );
	
	var text2 = document.createTextNode( "." );
	h1.appendChild( text2 );
	
	target.appendChild( h1 );

	return {
		update: function ( changed, root ) {
			text1.data = root.adjective;
		},

		teardown: function ( detach ) {
			if ( detach ) h1.parentNode.removeChild( h1 );
			
			text.parentNode.removeChild( text );
			
			text2.parentNode.removeChild( text2 );
		}
	};
}

function Test1 ( options ) {
	var component = this;
	var state = Object.assign( template$1.data(), options.data );

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( const key in group ) {
			if ( !( key in newState ) ) continue;

			const newValue = newState[ key ];
			const oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			const callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( let i = 0; i < callbacks.length; i += 1 ) {
				const callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return state[ key ];
	};

	this.set = function set ( newState ) {
		const oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this.observe = function ( key, callback, options = {} ) {
		const group = options.defer ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel () {
				const index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		const handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				const index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	if ( !addedCss ) addCss();
	
	var mainFragment = renderMainFragment$1( state, this, options.target );
}

var template$2 = (function () {
  return {
    data() {
      return { adjective: 'cool' };
    }
  };
}());

let addedCss$1 = false;
function addCss$1 () {
	var style = document.createElement( 'style' );
	style.textContent = "                                                            \n  h1[svelte-3917991238], [svelte-3917991238] h1 {\n    color: palevioletred;\n  }\n";
	document.head.appendChild( style );

	addedCss$1 = true;
}

function renderMainFragment$2 ( root, component, target ) {
	var h1 = document.createElement( 'h1' );
	h1.setAttribute( 'svelte-3917991238', '' );
	
	var text = document.createTextNode( "Svelte is so " );
	h1.appendChild( text );
	
	var text1 = document.createTextNode( root.adjective );
	h1.appendChild( text1 );
	
	var text2 = document.createTextNode( "." );
	h1.appendChild( text2 );
	
	target.appendChild( h1 );

	return {
		update: function ( changed, root ) {
			text1.data = root.adjective;
		},

		teardown: function ( detach ) {
			if ( detach ) h1.parentNode.removeChild( h1 );
			
			text.parentNode.removeChild( text );
			
			text2.parentNode.removeChild( text2 );
		}
	};
}

function Test2 ( options ) {
	var component = this;
	var state = Object.assign( template$2.data(), options.data );

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( const key in group ) {
			if ( !( key in newState ) ) continue;

			const newValue = newState[ key ];
			const oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			const callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( let i = 0; i < callbacks.length; i += 1 ) {
				const callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return state[ key ];
	};

	this.set = function set ( newState ) {
		const oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
	};

	this.observe = function ( key, callback, options = {} ) {
		const group = options.defer ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel () {
				const index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		const handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				const index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	if ( !addedCss$1 ) addCss$1();
	
	var mainFragment = renderMainFragment$2( state, this, options.target );
}

var template = (function () {
  return {
    components: {
      Test1,
      Test2
    }
  };
}());

function renderMainFragment ( root, component, target ) {
	var div = document.createElement( 'div' );
	
	var test1 = new template.components.Test1({
		target: div,
		parent: component
	});
	
	var text = document.createTextNode( "\n  " );
	div.appendChild( text );
	
	var test2 = new template.components.Test2({
		target: div,
		parent: component
	});
	
	target.appendChild( div );

	return {
		update: function ( changed, root ) {
			
		},

		teardown: function ( detach ) {
			if ( detach ) div.parentNode.removeChild( div );
			
			test1.teardown( false );
			
			text.parentNode.removeChild( text );
			
			test2.teardown( false );
		}
	};
}

function App ( options ) {
	var component = this;
	var state = options.data || {};

	var observers = {
		immediate: Object.create( null ),
		deferred: Object.create( null )
	};

	var callbacks = Object.create( null );

	function dispatchObservers ( group, newState, oldState ) {
		for ( const key in group ) {
			if ( !( key in newState ) ) continue;

			const newValue = newState[ key ];
			const oldValue = oldState[ key ];

			if ( newValue === oldValue && typeof newValue !== 'object' ) continue;

			const callbacks = group[ key ];
			if ( !callbacks ) continue;

			for ( let i = 0; i < callbacks.length; i += 1 ) {
				const callback = callbacks[i];
				if ( callback.__calling ) continue;

				callback.__calling = true;
				callback.call( component, newValue, oldValue );
				callback.__calling = false;
			}
		}
	}

	this.fire = function fire ( eventName, data ) {
		var handlers = eventName in callbacks && callbacks[ eventName ].slice();
		if ( !handlers ) return;

		for ( var i = 0; i < handlers.length; i += 1 ) {
			handlers[i].call( this, data );
		}
	};

	this.get = function get ( key ) {
		return state[ key ];
	};

	this.set = function set ( newState ) {
		const oldState = state;
		state = Object.assign( {}, oldState, newState );
		
		dispatchObservers( observers.immediate, newState, oldState );
		if ( mainFragment ) mainFragment.update( newState, state );
		dispatchObservers( observers.deferred, newState, oldState );
		
		while ( this.__renderHooks.length ) {
			var hook = this.__renderHooks.pop();
			hook.fn.call( hook.context );
		}
	};

	this.observe = function ( key, callback, options = {} ) {
		const group = options.defer ? observers.deferred : observers.immediate;

		( group[ key ] || ( group[ key ] = [] ) ).push( callback );

		if ( options.init !== false ) {
			callback.__calling = true;
			callback.call( component, state[ key ] );
			callback.__calling = false;
		}

		return {
			cancel () {
				const index = group[ key ].indexOf( callback );
				if ( ~index ) group[ key ].splice( index, 1 );
			}
		};
	};

	this.on = function on ( eventName, handler ) {
		const handlers = callbacks[ eventName ] || ( callbacks[ eventName ] = [] );
		handlers.push( handler );

		return {
			cancel: function () {
				const index = handlers.indexOf( handler );
				if ( ~index ) handlers.splice( index, 1 );
			}
		};
	};

	this.teardown = function teardown ( detach ) {
		this.fire( 'teardown' );

		mainFragment.teardown( detach !== false );
		mainFragment = null;

		state = {};
	};

	this.__renderHooks = [];
	
	var mainFragment = renderMainFragment( state, this, options.target );
	
	while ( this.__renderHooks.length ) {
		var hook = this.__renderHooks.pop();
		hook.fn.call( hook.context );
	}
}

var app = new App({
  target: document.querySelector('main')
});

}());
