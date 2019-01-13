inlets = 1;
outlets = 1;

var HSLuv = require("libHSLuv");

function hsluv_to_rgb(color)
{
	if (arguments.length == 3)
	{
		outlet(0, HSLuv.hsluvToRgb([arguments[0], arguments[1], arguments[2]]));
	}
	else if (arguments.length == 4)
	{
		outlet(0, HSLuv.hsluvToRgb([arguments[0], arguments[1], arguments[2]]), arguments[3]);
	}
}

function rgb_to_hsluv(color)
{
	if (arguments.length == 3)
	{
		outlet(0, HSLuv.rgbToHsluv([arguments[0], arguments[1], arguments[2]]));
	}
	else if (arguments.length == 4)
	{
		outlet(0, HSLuv.rgbToHsluv([arguments[0], arguments[1], arguments[2]]), arguments[3]);
	}
}

function hpluv_to_rgb(color)
{
	if (arguments.length == 3)
	{
		outlet(0, HSLuv.hpluvToRgb([arguments[0], arguments[1], arguments[2]]));
	}
	else if (arguments.length == 4)
	{
		outlet(0, HSLuv.hpluvToRgb([arguments[0], arguments[1], arguments[2]]), arguments[3]);
	}
}

function rgb_to_hpluv(color)
{
	if (arguments.length == 3)
	{
		outlet(0, HSLuv.rgbToHpluv([arguments[0], arguments[1], arguments[2]]));
	}
	else if (arguments.length == 4)
	{
		outlet(0, HSLuv.rgbToHpluv([arguments[0], arguments[1], arguments[2]]), arguments[3]);
	}
}

function lch_to_rgb(color)
{
	if (arguments.length == 3)
	{
		outlet(0, HSLuv.lchToRgb([arguments[0], arguments[1], arguments[2]]));
	}
	else if (arguments.length == 4)
	{
		outlet(0, HSLuv.lchToRgb([arguments[0], arguments[1], arguments[2]]), arguments[3]);
	}
}

function rgb_to_lch(color)
{
	if (arguments.length == 3)
	{
		outlet(0, HSLuv.rgbToLch([arguments[0], arguments[1], arguments[2]]));
	}
	else if (arguments.length == 4)
	{
		outlet(0, HSLuv.rgbToLch([arguments[0], arguments[1], arguments[2]]), arguments[3]);
	}
}