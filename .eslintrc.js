module.exports = {
	"env": {
		"browser": true,
		"es2020": true,
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly",
		"ClipboardItem": "readonly",

		// libraries
		"$": "readonly",
		"jQuery": "readonly",
		"libtess": "readonly",
		"firebase": "readonly",
		"GIF": "readonly",
		"saveAs": "readonly",
		"Konami": "readonly",
		"YT": "readonly",
		"FontDetective": "readonly",
		"AnyPalette": "readonly",
		"ImageTracer": "readonly",

		/*
		// const
		"MENU_DIVIDER": "readonly",
		"TAU": "writable",
		"is_pride_month": "writable",
		"default_tool": "writable",
		"default_canvas_width": "writable",
		"default_canvas_height": "writable",
		"default_magnification": "writable",
		"TOOL_FREE_FORM_SELECT": "writable",
		"TOOL_SELECT": "writable",
		"TOOL_ERASER": "writable",
		"TOOL_FILL": "writable",
		"TOOL_PICK_COLOR": "writable",
		"TOOL_MAGNIFIER": "writable",
		"TOOL_PENCIL": "writable",
		"TOOL_BRUSH": "writable",
		"TOOL_AIRBRUSH": "writable",
		"TOOL_TEXT": "writable",
		"TOOL_LINE": "writable",
		"TOOL_CURVE": "writable",
		"TOOL_RECTANGLE": "writable",
		"TOOL_POLYGON": "writable",
		"TOOL_ELLIPSE": "writable",
		"TOOL_ROUNDED_RECTANGLE": "writable",

		// global state: options
		"brush_shape": "writable",
		"brush_size": "writable",
		"pencil_size": "writable",
		"eraser_size": "writable",
		"airbrush_size": "writable",
		"stroke_size": "writable",
		"stroke_color": "writable",
		"fill_color": "writable",
		"fill_color_k": "writable",
		"stroke_color_k": "writable",
		"tool_transparent_mode": "writable",
		"magnification": "writable",
		"transparency": "writable",
		"aliasing": "writable",
		"monochrome": "writable",
		"selected_colors": "writable",
		"palette": "writable",
		"polychrome_palette": "writable",
		"monochrome_palette": "writable",
		// global state: history
		"undos": "writable",
		"redos": "writable",
		"current_history_node": "writable",
		"root_history_node": "writable",
		"history_node_to_cancel_to": "writable",
		// global state
		"selection": "writable",
		"textbox": "writable",
		"pointer": "writable", // bad
		"pointer_start": "writable",
		"pointer_previous": "writable",
		"pointers": "writable",
		"saved": "writable",
		"file_name": "writable",
		"file_format": "writable",
		"system_file_handle": "writable",
		"selected_tool": "writable",
		"selected_tools": "writable",
		"default_tool": "writable",
		"shift": "writable",
		"ctrl": "writable",
		"my_canvas_width": "writable",
		"my_canvas_height": "writable",
		"pointer": "writable",
		// references that may contain state in some ways
		"main_canvas": "writable",
		"main_ctx": "writable",
		"helper_layer": "writable",
		"menus": "writable",
		"tools": "writable",
		"extra_tools": "writable",
		"$G": "writable",
		"$canvas": "writable",
		"$canvas_area": "writable",
		"$top": "writable",
		"$bottom": "writable",
		"$left": "writable",
		"$right": "writable",
		"$toolbox": "writable",
		"$colorbox": "writable",
		"MenuBar": "writable",
		"$ToolBox": "writable",
		"$ColorBox": "writable",
		"$Window": "writable",
		"$ToolWindow": "writable",
		"$DialogWindow": "writable",
		"Handles": "writable",
		"$ChooseShapeStyle": "writable",
		"OnCanvasSelection": "writable",
		"OnCanvasTextBox": "writable",
		
		// functions
		"E": "writable",
		"get_rgba_from_color": "writable",
		"make_canvas": "writable",
		"debounce": "writable",
		"memoize_synchronous_function": "writable",
		"invert_rgb": "off",
		"get_theme": "writable",
		"get_tool_by_id": "writable",
		"redo": "writable",
		"undo": "writable",
		"undoable": "writable",
		"cancel": "writable",
		"deselect": "writable",
		"update_helper_layer": "writable",
		"show_error_message": "writable",
		"to_canvas_coords": "writable",
		"update_title": "writable",
		"get_help_folder_icon": "writable",
		"get_icon_for_tool": "writable",
		"draw_polygon": "writable",
		"draw_line": "writable",
		"draw_line_strip": "writable",
		"draw_bezier_curve": "writable",
		"draw_quadratic_curve": "writable",
		"draw_ellipse": "writable",
		"draw_rounded_rectangle": "writable",
		"draw_fill": "writable",
		"draw_noncontiguous_fill": "writable",
		"localize": "writable",
		"set_language": "writable",
		"get_language": "writable",
		"get_iso_language_name": "writable",
		"set_magnification": "writable",
		"make_css_cursor": "writable",
		"select_tool": "writable",
		"change_url_param": "writable",
		"set_theme": "writable",
		*/
	},
	"rules": {
		"no-undef": 0, // FOR NOW OKAY? there are just tons of globals at the moment
		"no-unused-vars": 0, // ditto

		// "eqeqeq": "error",
		// "class-methods-use-this": "error",
		"no-alert": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-invalid-this": "error",
		"no-new-func": "error",
		"no-eval": "error",
		"no-new-wrappers": "error",
		"no-proto": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		// "no-unused-expressions": "error", // a && a() used a lot, could switch to a?.() etc. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
		"no-useless-concat": "error",
		"prefer-promise-reject-errors": "error",
		"radix": "error",
		"require-await": "error",
		// "vars-on-top": "error",
		"wrap-iife": "error",
		"no-label-var": "error",
		// "no-shadow": "error",
		// "no-use-before-define": "error",

		// To target specific variables to rename or otherwise address:
		"no-restricted-globals": ["error", "event", "canvas", "ctx", "colors", "i", "j", "k", "x", "y", "z", "width", "height", "w", "h"],

		// Stylistic:
		// @TODO: https://eslint.org/docs/rules/#stylistic-issues
		// I want to see if I can merge some branches, maybe PRs first.
		// "array-bracket-spacing": "error",
		// "block-spacing": "error",
	},
	"overrides": [
		{
			files: ["src/theme.js"],
			parserOptions: { sourceType: "module" },
		}
	]
};