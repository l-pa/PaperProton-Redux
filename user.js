/**  Mandatory	  **/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // default is false
user_pref("svg.context-properties.content.enabled", true); 				// default is false

/**  Recommended  (comment to disable) **/
/* Replicate Chrome behaviour for clipped tabs */
user_pref("browser.tabs.tabClipWidth", 83); 							// default is 140

/* Replicate Chrome's "Not Secure" text on HTTP */
user_pref("security.insecure_connection_text.enabled", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150)
user_pref("mousewheel.min_line_scroll_amount", 25)
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100)
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50)
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 100)
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5)
user_pref("gfx.webrender.all", true)
user_pref("mousewheel.acceleration.factor", 3)
user_pref("mousewheel.acceleration.start", 7)
